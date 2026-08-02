<template>
  <q-page class="q-pa-md">
    <div class="q-mx-auto" style="max-width: 1100px; width: 100%">
      <div class="text-h5 text-center q-mb-md">Personality Review</div>

      <q-card>
        <q-card-section>
          <div class="row items-center justify-between q-mb-sm">
            <div class="text-subtitle1">Saved responses</div>
            <q-btn color="negative" label="Refresh" @click="loadAnswers" />
          </div>

          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            bordered
            :rows-per-page-options="[10, 20, 50]"
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
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                  {{ col.value }}
                </q-td>
              </q-tr>
              <q-tr v-if="isExpanded(props.row)" :props="props">
                <q-td colspan="100%">
                  <q-card flat bordered class="bg-grey-1">
                    <q-card-section>
                      <div class="text-subtitle2 q-mb-sm">Answer details</div>
                      <div class="row q-col-gutter-sm">
                        <div v-for="field in detailFields" :key="field.key" class="col-12 col-sm-6">
                          <div class="text-caption text-grey-7">{{ field.label }}</div>
                          <div class="text-body2">{{ props.row[field.key] || '—' }}</div>
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

const store = useUsersStore()
const rows = ref([])

const columns = [
  { name: 'expand', label: '', field: 'expand', sortable: false, align: 'left' },
  { name: 'fname', label: 'First name', field: 'fname', sortable: true },
  { name: 'lname', label: 'Last name', field: 'lname', sortable: true },
  { name: 'date_time', label: 'Date / time', field: 'date_time', sortable: true },
]

const detailFields = [
  { key: 'room', label: 'Room' },
  { key: 'cube', label: 'Cube' },
  { key: 'ladder', label: 'Ladder' },
  { key: 'horse', label: 'Horse' },
  { key: 'window', label: 'Window' },
  { key: 'storm', label: 'Storm' },
  { key: 'flowers', label: 'Flowers' },
  { key: 'interpretation', label: 'Interpretation' },
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
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString()
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

  rows.value = (data || []).map((answer) => {
    const user = userMap.get(answer.email?.toLowerCase()) || {}
    return {
      id: `${answer.email}-${answer.date_time}`,
      email: answer.email,
      fname: user.fname || '',
      lname: user.lname || '',
      date_time: formatDate(answer.date_time),
      expand: false,
      ...answer,
    }
  })
}

onMounted(async () => {
  await store.loadUsers()
  await loadAnswers()
})
</script>
