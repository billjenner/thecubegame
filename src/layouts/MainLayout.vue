<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated color="primary">
      <q-toolbar>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>The Cube</q-toolbar-title>

        <template v-if="!$q.screen.lt.md">
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
            v-if="!(usersStore.currentUser && usersStore.currentUser.email)"
            flat
            label="LOGIN"
            to="/login"
            class="q-mx-sm"
            style="min-width: 172px"
            :style="buttonStyle('/login')"
            @mouseover="hoveredPath = '/login'"
            @mouseleave="hoveredPath = null"
          />
          <q-btn
            v-else
            flat
            label="LOG OFF"
            class="q-mx-sm"
            style="min-width: 172px"
            :style="buttonStyle('/login')"
            @click="logOff"
            @mouseover="hoveredPath = '/login'"
            @mouseleave="hoveredPath = null"
          />
        </template>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered overlay>
      <q-list padding>
        <q-item clickable v-ripple @click="navigateAndClose('/')">
          <q-item-section>Intro</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateAndClose('/analyze')">
          <q-item-section>Personality Test</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateAndClose('/personality-review')">
          <q-item-section>Personality Review</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateAndClose('/theary')">
          <q-item-section>Concept</q-item-section>
        </q-item>
        <q-item
          v-if="!(usersStore.currentUser && usersStore.currentUser.email)"
          clickable
          v-ripple
          @click="navigateAndClose('/login')"
        >
          <q-item-section>Login</q-item-section>
        </q-item>
        <q-item v-else clickable v-ripple @click="logOffAndClose()">
          <q-item-section>Log Off</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-primary text-white q-pa-sm">
      <div class="row items-center justify-end">
        <div v-if="usersStore.currentUser && usersStore.currentUser.email">
          Current User: {{ usersStore.currentUser.fname }} {{ usersStore.currentUser.lname }} -
          {{ usersStore.currentUser.email }}
        </div>
        <div v-else class="text-caption">Not logged in</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from 'stores/users'

const $q = useQuasar()
const route = useRoute()
const hoveredPath = ref(null)
const usersStore = useUsersStore()
const router = useRouter()
const leftDrawerOpen = ref(false)

function navigate(path) {
  if (!(usersStore.currentUser && usersStore.currentUser.email)) {
    router.push('/login')
    return
  }

  router.push(path)
}

function logOff() {
  usersStore.clearCurrentUser()
  router.push('/login')
}

function navigateAndClose(path) {
  leftDrawerOpen.value = false
  if (path === '/login') {
    router.push(path)
    return
  }

  navigate(path)
}

function logOffAndClose() {
  leftDrawerOpen.value = false
  logOff()
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
