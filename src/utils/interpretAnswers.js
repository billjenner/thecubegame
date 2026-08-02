import personalityMappings from '../components/PersonalityMappings.json'

const fieldMap = {
  room: 'Room',
  cube: 'Cube',
  ladder: 'Ladder',
  horse: 'Horse',
  window: 'Window',
  storm: 'Storm',
  flowers: 'Flowers',
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
}

function findMatches(text, matchList) {
  const normalizedText = normalizeText(text)
  return matchList.filter((term) => normalizedText.includes(term))
}

function buildFallbackExplanation(field, answerText, mapping) {
  const text = normalizeText(answerText)

  if (!text || !mapping) {
    return ''
  }

  const interpretations = []

  Object.entries(mapping.features || {}).forEach(([featureName, featureValues]) => {
    Object.entries(featureValues).forEach(([valueName, valueData]) => {
      const aliases = [valueName.toLowerCase()]

      if (featureName === 'size' && ['small', 'large', 'vast'].includes(valueName)) {
        aliases.push(...['tiny', 'big', 'immense', 'spacious', 'expansive'])
      }

      if (featureName === 'windows' && ['many', 'few', 'none'].includes(valueName)) {
        aliases.push(...['window', 'windows', 'no windows', 'several'])
      }

      if (featureName === 'doors' && ['multiple', 'one', 'none'].includes(valueName)) {
        aliases.push(...['door', 'doors', 'entry', 'entrance'])
      }

      if (featureName === 'comfort' && ['comfortable', 'uncomfortable'].includes(valueName)) {
        aliases.push(...['cozy', 'safe', 'warm', 'cold', 'unsettling'])
      }

      if (featureName === 'safety' && ['safe', 'unsafe'].includes(valueName)) {
        aliases.push(...['secure', 'protected', 'threatened', 'vulnerable'])
      }

      if (featureName === 'position' && ['ground', 'floating'].includes(valueName)) {
        aliases.push(...['on the ground', 'hovering', 'air'])
      }

      if (featureName === 'location' && ['prominent', 'hidden', 'distant'].includes(valueName)) {
        aliases.push(...['front', 'center', 'back', 'far', 'near'])
      }

      if (featureName === 'transparency' && ['transparent', 'opaque'].includes(valueName)) {
        aliases.push(...['clear', 'see through', 'cloudy', 'hidden'])
      }

      if (featureName === 'texture' && ['smooth', 'rough'].includes(valueName)) {
        aliases.push(...['soft', 'hard', 'uneven'])
      }

      if (featureName === 'condition' && ['perfect', 'damaged'].includes(valueName)) {
        aliases.push(...['whole', 'broken', 'injured'])
      }

      if (featureName === 'support' && ['leaning', 'freeStanding'].includes(valueName)) {
        aliases.push(...['supported', 'standing', 'independent'])
      }

      if (featureName === 'height' && ['tall', 'short'].includes(valueName)) {
        aliases.push(...['high', 'low'])
      }

      if (featureName === 'climbDifficulty' && ['easy', 'difficult'].includes(valueName)) {
        aliases.push(...['simple', 'hard'])
      }

      if (featureName === 'material' && ['strong', 'fragile'].includes(valueName)) {
        aliases.push(...['solid', 'delicate'])
      }

      if (
        featureName === 'appearance' &&
        ['beautifulHealthy', 'injuredNeglected'].includes(valueName)
      ) {
        aliases.push(...['beautiful', 'healthy', 'injured', 'neglected'])
      }

      if (
        featureName === 'behavior' &&
        ['calm', 'energetic', 'wild', 'tamed'].includes(valueName)
      ) {
        aliases.push(...['peaceful', 'restless', 'unruly', 'gentle'])
      }

      if (featureName === 'distance' && ['close', 'far'].includes(valueName)) {
        aliases.push(...['near', 'distant'])
      }

      if (featureName === 'relationshipToCube' && ['touching', 'near', 'far'].includes(valueName)) {
        aliases.push(...['close', 'beside', 'separate'])
      }

      if (
        featureName === 'relationshipToRoom' &&
        ['insideRoom', 'outsideRoom'].includes(valueName)
      ) {
        aliases.push(...['inside', 'outside'])
      }

      if (featureName === 'relationshipToWindow' && ['open', 'closed'].includes(valueName)) {
        aliases.push(...['open', 'closed'])
      }

      if (featureName === 'intensity' && ['calm', 'stormy'].includes(valueName)) {
        aliases.push(...['quiet', 'chaotic'])
      }

      if (featureName === 'flowerCondition' && ['healthy', 'wilted'].includes(valueName)) {
        aliases.push(...['alive', 'dead', 'fresh'])
      }

      if (featureName === 'flowerPlacement' && ['inside', 'outside'].includes(valueName)) {
        aliases.push(...['indoors', 'outdoors'])
      }

      if (findMatches(text, aliases).length) {
        interpretations.push(valueData.interpretation)
      }
    })
  })

  if (interpretations.length) {
    const joined = interpretations.slice(0, 2).join(' ')
    return `${field.charAt(0).toUpperCase() + field.slice(1)} appears to reflect ${joined}`
  }

  return `${field.charAt(0).toUpperCase() + field.slice(1)} seems to carry a thoughtful symbolic meaning that may relate to identity, growth, relationships, or emotional awareness.`
}

export async function generateAnswerExplanation(answers) {
  const explanations = {}
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  for (const [field, mappingName] of Object.entries(fieldMap)) {
    const answerText = answers[field] || ''
    const mapping = personalityMappings[mappingName]

    if (!answerText.trim()) {
      explanations[field] = ''
      continue
    }

    if (apiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content:
                  'You are a careful interpretation assistant. Explain this single answer in a short, supportive sentence using the symbolic mapping themes.',
              },
              {
                role: 'user',
                content: `Answer: ${answerText}\n\nMapping theme: ${mapping.symbol}`,
              },
            ],
            temperature: 0.6,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const content = data?.choices?.[0]?.message?.content?.trim()
          if (content) {
            explanations[field] = content
            continue
          }
        }
      } catch (error) {
        console.warn(
          `OpenAI explanation request failed for ${field}, using fallback mapping.`,
          error,
        )
      }
    }

    explanations[field] = buildFallbackExplanation(field, answerText, mapping)
  }

  return explanations
}
