<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated color="primary">
      <q-toolbar>
        <q-toolbar-title>The Cube</q-toolbar-title>

        <q-btn
          flat
          label="Intro"
          to="/"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/')"
          @mouseover="hoveredPath = '/'"
          @mouseleave="hoveredPath = null"
        />
        <q-btn
          flat
          label="Personality Test"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/analyze')"
          @click="navigate('/analyze')"
          @mouseover="hoveredPath = '/analyze'"
          @mouseleave="hoveredPath = null"
        />
        <q-btn
          flat
          label="PERSONALITY REVIEW"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/personality-review')"
          @click="navigate('/personality-review')"
          @mouseover="hoveredPath = '/personality-review'"
          @mouseleave="hoveredPath = null"
        />
        <q-btn
          flat
          label="Concept"
          to="/theary"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/theary')"
          @mouseover="hoveredPath = '/theary'"
          @mouseleave="hoveredPath = null"
        />
        <q-btn
          flat
          label="Login"
          to="/login"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/login')"
          @mouseover="hoveredPath = '/login'"
          @mouseleave="hoveredPath = null"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from 'stores/users'

const route = useRoute()
const hoveredPath = ref(null)
const usersStore = useUsersStore()
const router = useRouter()

function navigate(path) {
  if (!(usersStore.currentUser && usersStore.currentUser.email)) {
    router.push('/login')
    return
  }

  router.push(path)
}

function buttonStyle(path) {
  if (route.path === path) {
    return { backgroundColor: 'var(--q-secondary)' }
  }

  if (hoveredPath.value === path) {
    return { backgroundColor: 'var(--q-accent)' }
  }

  return { backgroundColor: '#D9433F' }
}
</script>
