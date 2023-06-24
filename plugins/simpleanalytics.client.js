import SimpleAnalytics from "simple-analytics-vue"


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: nuxtApp.$config.public.VERCEL_ENV !== "production",
    domain: "sa.validebagmun.org"
  });
});