<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-lg" style="width: min(100%, 560px)">
      <div class="text-h5 text-center q-mb-md">Users</div>

      <div v-if="!store.users.length" class="text-center text-grey-7">
        No users yet. Create one from the login page.
      </div>

      <q-list v-else bordered separator class="rounded-borders">
        <q-item v-for="user in store.users" :key="user.email" clickable>
          <q-item-section>
            <q-item-label>{{ user.fname }} {{ user.lname }}</q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div v-if="store.currentUser" class="q-mt-md text-center text-caption text-positive">
        Current user: {{ store.currentUser.email }}
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { useUsersStore } from 'stores/users'

const store = useUsersStore()
</script>
