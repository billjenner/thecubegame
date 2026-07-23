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
          to="/analyze"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/analyze')"
          @mouseover="hoveredPath = '/analyze'"
          @mouseleave="hoveredPath = null"
        />
        <q-btn
          flat
          label="PERSONALITY REVIEW"
          to="/personality-review"
          class="q-mx-sm"
          style="min-width: 172px"
          :style="buttonStyle('/personality-review')"
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
import { useRoute } from 'vue-router'

const route = useRoute()
const hoveredPath = ref(null)

function buttonStyle(path) {
  if (route.path === path) {
    return { backgroundColor: '#4caf50' }
  }

  if (hoveredPath.value === path) {
    return { backgroundColor: '#42a5f5' }
  }

  return { backgroundColor: '#D9433F' }
}
</script>
