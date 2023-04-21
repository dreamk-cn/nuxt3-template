<template>
    <Head>
        <Link rel="icon" type="image/svg+xml" :href="favicon"></Link>
    </Head>
    <Navbar />
    <div>
        <NuxtPage />
    </div>
    <Footer :is-dark="isDark"/>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')
</script>