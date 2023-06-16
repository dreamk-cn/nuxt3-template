<template>
  <div>
    <Head>
      <Link rel="icon" type="image/svg+xml" :href="favicon">
      </Link>
    </Head>
    <AntiAI />
    <SeoKit />
    <OgImageScreenshot />
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer :is-dark="isDark" />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')

useSchemaOrg([
  defineOrganization({
    name: 'ValidebagMUN',
    logo: '/vmun-light.png',
    sameAs: [
      'https://www.instagram.com/validebagmun/'
    ]
  })
])
</script>