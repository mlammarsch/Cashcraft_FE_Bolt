<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <Sidebar :collapsed="false" />

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>
