import SimpleAnalytics from "simple-analytics-vue"

const config = useRuntimeConfig();

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp();
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: config.public.VERCEL_ENV !== "production"
  });
});