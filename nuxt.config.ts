// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    devtools: {enabled: true},
    css: ['~/assets/style.css'],
    tailwindcss: {
        cssPath: '~/assets/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        injectPosition: 'first',
        viewer: true,
    },
    build: {

    },
    plugins: [

    ],

})
