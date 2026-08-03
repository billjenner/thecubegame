<template>
  <q-page class="q-pa-md">
    <div class="q-mx-auto" style="max-width: 900px; width: 100%">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step :name="1" title="Before you begin" icon="psychology" :done="step > 1">
          <div class="text-body1 q-mb-sm">
            As you answer each question, focus less on what you think the "right" answer should be
            and more on what naturally comes to mind. Allow yourself to explore the images,
            emotions, and sensations that arise, including how each new element interacts with the
            objects you have already imagined.
          </div>
          <div class="text-body1 q-mb-sm">
            Pay attention not only to how each object looks, but also to how it feels, sounds, and
            influences the overall atmosphere of the scene.
          </div>
          <div class="text-body1 q-mb-sm">
            When considering each question, close your eyes and allow your imagination to guide you.
            Avoid analyzing or overthinking your responses—simply notice what appears in your mind
            and how you naturally respond to it.
          </div>
          <div class="text-body1 q-mb-sm">
            When you are ready to begin this visualization exercise, continue to the next step.
          </div>
          <q-stepper-navigation>
            <q-btn @click="startTest" color="secondary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="2" title="1. Room" :done="step > 2">
          <div class="text-body1 q-mb-sm">
            Open your eyes, answer the following questions along with any other details you notice.
            How large it is (small, large, vast)? what color it is? Does it have windows, multiple
            doors, sealed? Is it comfortable? Is it a safe place you want to be?
          </div>
          <q-input v-model="answers.room" type="textarea" outlined autogrow label="Your response" />
          <q-stepper-navigation>
            <q-btn @click="step = 3" color="secondary" label="Continue" />
            <q-btn flat @click="step = 1" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="3" title="2. Cube" :done="step > 3">
          <div class="text-body1 q-mb-sm">
            Place in the room a cube. Where is the cube in the room - how far away from you is it?
            Is the cube on the ground or floating in the air? When you look at the cube are you
            facing a corner, side? Do you see the top or bottom of the cube? How big is the cube in
            relation to the room? What color is the cube - Is the cube transparent, opaque? What is
            the texture like?
          </div>
          <q-input v-model="answers.cube" type="textarea" outlined autogrow label="Your response" />
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="secondary" label="Continue" />
            <q-btn flat @click="step = 2" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="4" title="3. Ladder" :done="step > 4">
          <div class="text-body1 q-mb-sm">
            Place in the room a ladder. Continue to visualize it until you notice the details. Where
            is the ladder in relation to the room and the cube? Is the ladder leaning against
            anything? What is the relationship between the cube and ladder? How tall is it? Would
            you be able to climb it easily? What is it made of? What impression does it give you?
          </div>
          <q-input
            v-model="answers.ladder"
            type="textarea"
            outlined
            autogrow
            label="Your response"
          />
          <q-stepper-navigation>
            <q-btn @click="step = 5" color="secondary" label="Continue" />
            <q-btn flat @click="step = 3" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="5" title="4. Horse" :done="step > 5">
          <div class="text-body1 q-mb-sm">
            Now place in the room a horse. Continue to visualize it until you notice the details.
            Where is the horse - What is the distance between the cube and the horse? Where is the
            horse? How far is it from the cube? What color is it and how does it look? What is it
            doing? Is it roaming free or tied to anything? Does it have a saddle? How do you feel
            about it?
          </div>
          <q-input
            v-model="answers.horse"
            type="textarea"
            outlined
            autogrow
            label="Your response"
          />
          <q-stepper-navigation>
            <q-btn @click="step = 6" color="secondary" label="Continue" />
            <q-btn flat @click="step = 4" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="6" title="5. Window" :done="step > 6">
          <div class="text-body1 q-mb-sm">
            Now imagine a window in the room. Describe the overall window condition of the window
            (clear, dirty, broken, covered), presents of window? Size of the window? Can you see
            outside? What does outside look like? Objects visible outside? Distance of the view? Is
            the window open or closed? Can you go through the window? Your feelings looking through
            the window?
          </div>
          <q-input
            v-model="answers.window"
            type="textarea"
            outlined
            autogrow
            label="Your response"
          />
          <q-stepper-navigation>
            <q-btn @click="step = 7" color="secondary" label="Continue" />
            <q-btn flat @click="step = 5" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="7" title="6. Storm" :done="step > 7">
          <div class="text-body1 q-mb-sm">
            Now imagine a strom. Describe the storm. Where is the storm, is it outside, when you
            look out the window how far away is it or is it perhaps in the room. Is it small or huge
            and all encompassing? What about the intensity, is there lightning, thunder, rain, wind
            - is it noisy or quiet? Is it passing by or staying? WHow do you feel towards the storm?
          </div>
          <q-input
            v-model="answers.storm"
            type="textarea"
            outlined
            autogrow
            label="Your response"
          />
          <q-stepper-navigation>
            <q-btn @click="step = 8" color="secondary" label="Continue" />
            <q-btn flat @click="step = 6" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="8" title="7. Flowers" :done="step > 8">
          <div class="text-body1 q-mb-sm">
            Now imaginge flowers. Where are the flowers, are they inside, outside, close or far away
            from other objects? What do they look like, what color are they, how many are there?
            What kind are they? What color are they? Are they in a vase or in the ground? How hardy
            or fragile do they seem to you? Are they alive or dead? How do you feel about the
            flowers? How do they feel about you? Are you protecting, caring for, or ignoring the
            flowers?
          </div>
          <q-input
            v-model="answers.flowers"
            type="textarea"
            outlined
            autogrow
            label="Your response"
          />
          <q-stepper-navigation>
            <q-btn color="secondary" label="Finish" @click="finishTest" />
            <q-btn flat @click="step = 7" color="secondary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>

      <div v-if="finished" class="q-mt-md q-pa-md bg-positive text-white rounded-borders">
        Thanks! You have completed the cube questionnaire.
      </div>

      <div v-if="errorMessage" class="q-mt-md text-negative">
        {{ errorMessage }}
      </div>

      <q-btn class="q-mt-md" color="accent" label="Analyze" @click="analyzeResults" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from 'stores/users'

const router = useRouter()
const store = useUsersStore()

const step = ref(1)
const finished = ref(false)
const errorMessage = ref('')
const answers = ref({
  room: '',
  cube: '',
  ladder: '',
  horse: '',
  window: '',
  storm: '',
  flowers: '',
})

async function startTest() {
  step.value = 2
  await store.saveAnswers(answers.value)
  if (store.error) {
    errorMessage.value = store.error
  }
}

async function finishTest() {
  finished.value = true
  await store.finishAnswers(answers.value)
  if (store.error) {
    errorMessage.value = store.error
  }
}

async function analyzeResults() {
  const requiredKeys = ['room', 'cube', 'ladder', 'horse', 'window', 'storm', 'flowers']
  const missingAnswers = requiredKeys.filter((key) => !String(answers.value[key] ?? '').trim())

  if (missingAnswers.length) {
    const labels = missingAnswers.map((key) => key.charAt(0).toUpperCase() + key.slice(1))
    errorMessage.value = `Answers incomplete. Please complete: ${labels.join(', ')}.`
    return
  }

  errorMessage.value = ''
  await store.finishAnswers(answers.value)
  if (store.error) {
    errorMessage.value = store.error
    return
  }

  router.push('/personality-review')
}
</script>
