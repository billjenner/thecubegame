<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-lg" style="width: min(100%, 460px)">
      <div class="text-h5 text-center q-mb-md">Forgot Password</div>

      <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
        <q-input
          v-model="email"
          label="Enter email"
          type="email"
          outlined
          dense
          autocomplete="email"
          :rules="[(val) => !!val || 'Email is required']"
        />

        <q-btn color="negative" label="Send Password" type="submit" class="full-width" />
      </q-form>

      <div v-if="message" class="q-mt-md text-center text-caption" :class="messageClass">
        {{ message }}
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from 'stores/users'
import { Resend } from 'resend'

const router = useRouter()
const store = useUsersStore()

const email = ref('')
const message = ref('')
const messageClass = ref('text-positive')

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

async function handleSubmit() {
  if (!email.value.trim()) {
    message.value = 'Please enter your email.'
    messageClass.value = 'text-negative'
    return
  }

  const result = await store.recoverPassword(email.value)

  if (result) {
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: result.email,
        subject: 'Your Cube Game password',
        html: `<p>Hello,</p><p>Your password for The Cube Game is: <strong>${result.password}</strong></p><p>Please keep this information safe.</p>`,
      })

      message.value = `Your password was sent to ${result.email}`
      messageClass.value = 'text-positive'
      setTimeout(() => router.push('/login'), 1500)
    } catch {
      message.value = 'Unable to send password email right now.'
      messageClass.value = 'text-negative'
    }
  } else {
    message.value = store.error || 'Unable to recover password.'
    messageClass.value = 'text-negative'
  }
}
</script>
