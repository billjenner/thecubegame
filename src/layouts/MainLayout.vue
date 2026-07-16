<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn flat label="IndexPage" to="/" />
        <q-btn flat label="Analyze" to="/analyze" />
        <q-btn flat label="PersonalityReview" to="/personality-review" />
        <q-btn flat label="Theary" to="/theary" />
        <q-btn flat label="Reference" to="/reference" />

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
