<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue'
import { initModals } from 'flowbite'
onMounted(() => {
  initModals();
})
</script>

<template>
  <Header />
  <div class="pt-[71px]">

  </div>
  <Footer />
</template>