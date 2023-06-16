<template>
    <div class="bg-opacity-60">
        <iframe class="min-h-screen px-10" data-tally-src="https://tally.so/embed/mVjDpg?alignLeft=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%"
            height="700" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"
            title="Welcome to the ValidebağMUN'23 Universal Application Form"></iframe>
    </div>
</template>

<script setup>
useHead({
    script: [
        {
            src: "https://tally.so/widgets/embed.js",
            body: true,
        }
    ]
})
onMounted(() => {
    Tally.loadEmbeds()
})
</script>