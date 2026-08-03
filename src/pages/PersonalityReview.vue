<template>
  <q-page class="q-pa-md">
    <div class="q-mx-auto" style="max-width: 96vw; width: 96%">
      <div class="text-h5 text-center q-mb-md">Personality Review</div>

      <q-card>
        <q-card-section>
          <div class="row items-center justify-between q-mb-sm">
            <div class="text-subtitle1">Saved responses</div>
            <q-btn color="primary" label="Refresh" @click="loadAnswers" />
          </div>

          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            bordered
            :rows-per-page-options="[10, 50]"
          >
            <template #body="props">
              <q-tr :props="props">
                <q-td auto-width>
                  <q-btn
                    size="sm"
                    flat
                    dense
                    round
                    :icon="isExpanded(props.row) ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                    @click="toggleExpanded(props.row)"
                  />
                </q-td>
                <q-td
                  v-for="col in props.cols.filter((col) => col.name !== 'expand')"
                  :key="col.name"
                  :props="props"
                  class="wrap-content"
                  style="white-space: normal; word-break: break-word; max-width: 280px"
                >
                  {{ col.value }}
                </q-td>
              </q-tr>
              <q-tr v-if="isExpanded(props.row)" :props="props">
                <q-td colspan="100%">
                  <q-card flat bordered class="bg-grey-1">
                    <q-card-section>
                      <div class="text-subtitle2 q-mb-sm">Answer details</div>
                      <div class="column q-gutter-sm">
                        <div
                          v-for="field in detailFields"
                          :key="field.key"
                          class="q-pa-sm rounded-borders"
                          :class="
                            field.key.includes('explanation')
                              ? 'bg-secondary text-white'
                              : 'bg-white'
                          "
                          :style="
                            field.key.includes('explanation')
                              ? 'margin-top: 8px; padding: 14px;'
                              : ''
                          "
                        >
                          <div
                            v-if="!field.key.includes('explanation')"
                            class="text-subtitle2 text-grey-7"
                          >
                            {{ field.label }}
                          </div>
                          <div
                            class="text-body2 q-mt-xs mt-10"
                            :class="field.key.includes('explanation') ? 'text-white' : ''"
                            style="white-space: normal; word-break: break-word"
                          >
                            {{ props.row[field.key] || '—' }}
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabase'
import { useUsersStore } from 'stores/users'
import { generateAnswerExplanation } from '../utils/interpretAnswers'
import { useRouter } from 'vue-router'

const store = useUsersStore()
const rows = ref([])
const router = useRouter()

const columns = [
  { name: 'expand', label: '', field: 'expand', sortable: false, align: 'left' },
  { name: 'fname', label: 'First name', field: 'fname', sortable: true },
  { name: 'lname', label: 'Last name', field: 'lname', sortable: true },
  { name: 'date_time', label: 'Date / time', field: 'date_time', sortable: true },
]

const detailFields = [
  { key: 'room', label: 'Room' },
  { key: 'room_explanation', label: 'Explanation' },
  { key: 'cube', label: 'Cube' },
  { key: 'cube_explanation', label: 'Explanation' },
  { key: 'ladder', label: 'Ladder' },
  { key: 'ladder_explanation', label: 'Ladder Explanation' },
  { key: 'horse', label: 'Horse' },
  { key: 'horse_explanation', label: 'Horse Explanation' },
  { key: 'window', label: 'Window' },
  { key: 'window_explanation', label: 'Window Explanation' },
  { key: 'storm', label: 'Storm' },
  { key: 'storm_explanation', label: 'Storm Explanation' },
  { key: 'flowers', label: 'Flowers' },
  { key: 'flowers_explanation', label: 'Flowers Explanation' },
]

const expandedRows = ref([])

function isExpanded(row) {
  return expandedRows.value.includes(row.id)
}

function toggleExpanded(row) {
  if (isExpanded(row)) {
    expandedRows.value = expandedRows.value.filter((id) => id !== row.id)
  } else {
    expandedRows.value.push(row.id)
  }
}

function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${month}-${day}-${year} ${hours}:${minutes}`
}

async function ensureExplanations(answer) {
  const explanations = {}
  const fields = [
    ['room', 'room_explanation'],
    ['cube', 'cube_explanation'],
    ['ladder', 'ladder_explanation'],
    ['horse', 'horse_explanation'],
    ['window', 'window_explanation'],
    ['storm', 'storm_explanation'],
    ['flowers', 'flowers_explanation'],
  ]

  for (const [field, explanationField] of fields) {
    if (answer[explanationField]) {
      explanations[explanationField] = answer[explanationField]
      continue
    }

    const generatedExplanation = await generateAnswerExplanation({
      [field]: answer[field] || '',
    })

    explanations[explanationField] = generatedExplanation[field] || ''

    try {
      await supabase
        .from('answers')
        .update({ [explanationField]: explanations[explanationField] })
        .eq('email', answer.email)
    } catch (error) {
      console.warn(`Unable to persist generated explanation for ${field}.`, error)
    }
  }

  return explanations
}

async function loadAnswers() {
  const { data, error } = await supabase.from('answers').select('*').order('date_time', {
    ascending: false,
  })

  if (error) {
    store.error = error.message
    rows.value = []
    return
  }

  const userMap = new Map((store.users || []).map((user) => [user.email?.toLowerCase(), user]))
  const currentEmail = store.currentUser?.email?.toLowerCase()
  const enrichedRows = []

  for (const answer of data || []) {
    const user = userMap.get(answer.email?.toLowerCase()) || {}
    const isCurrentUserRow = answer.email?.toLowerCase() === currentEmail
    const explanations = await ensureExplanations(answer)

    enrichedRows.push({
      id: `${answer.email}-${answer.date_time}`,
      email: answer.email,
      fname: isCurrentUserRow ? user.fname || '' : '---',
      lname: isCurrentUserRow ? user.lname || '' : '---',
      expand: false,
      ...answer,
      ...explanations,
      date_time: formatDate(answer.date_time),
    })
  }

  const currentUserRows = enrichedRows.filter((row) => row.email?.toLowerCase() === currentEmail)
  const otherRows = enrichedRows.filter((row) => row.email?.toLowerCase() !== currentEmail)

  rows.value = [...currentUserRows, ...otherRows]
}

onMounted(async () => {
  await store.loadUsers()
  if (!store.currentUser || !store.currentUser.email) {
    router.push('/login')
    return
  }

  await loadAnswers()
})
</script>
