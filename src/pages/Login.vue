<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-lg" style="width: min(100%, 420px)">
      <div class="text-h5 text-center q-mb-md">Login</div>

      <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
          dense
          autocomplete="email"
          :rules="[(val) => !!val || 'Email is required']"
        />

        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          autocomplete="current-password"
          :rules="[(val) => !!val || 'Password is required']"
        />

        <q-btn color="negative" label="Log In" type="submit" class="full-width" />
      </q-form>

      <div v-if="message" class="q-mt-md text-center text-caption" :class="messageClass">
        {{ message }}
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from 'stores/users'

const store = useUsersStore()
const email = ref('')
const password = ref('')
const message = ref('')
const messageClass = ref('text-positive')

function handleSubmit() {
  if (!email.value.trim() || !password.value) {
    message.value = 'Please enter both email and password.'
    messageClass.value = 'text-negative'
    return
  }

  store.saveUser(email.value, password.value)
  message.value = `Saved login details for ${store.currentUser?.email}`
  messageClass.value = 'text-positive'
}
</script>
