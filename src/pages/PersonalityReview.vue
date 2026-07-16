<template>
  <q-page class="flex flex-center column q-gutter-md">
    <questions-list />
    <q-btn color="primary" label="Open Personality Review" to="/personality-review" />
  </q-page>
</template>

<script setup>
import questionsList from 'components/questionsList.vue'
</script>
