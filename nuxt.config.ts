// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['nuxt-seo-kit'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    runtimeConfig: {
        public: {
            VERCEL_ENV: process.env.VERCEL_ENV || 'development',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.validebagmun.org',
            siteName: 'ValidebagMUN',
            siteDescription: 'The Official Website of Validebag Model United Nations Club',
            language: 'en-GB',
            titleSeperator: '|',
            trailingSlash: true
        },
    },
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName'
        }
    },
    schemaOrg: {
        host: 'https://www.validebagmun.org',
    },
    colorMode: {
        classSuffix: ''
    },
    routeRules: {
        '/**': { isr: true }
    }
})
