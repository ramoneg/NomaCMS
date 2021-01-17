<template>
    <div>
        <div v-if="!page">Page not found!</div>
        <page-renderer :page="page" v-else />
    </div>
</template>

<script>
import PageRenderer from '~/components/NomaCMS/PageRenderer.vue'
export default {
    components: {
        PageRenderer,
    },
    head() {
        return {
            title: this.page.fields.title,
            meta: [
                {
                    name: this.page.fields.seoTitle,
                    content: this.page.fields.seoMeta,
                },
            ],
        }
    },
    async asyncData({ store, env, route }) {
        const config = { env: env, route: route }
        await store.dispatch('pages/fetchPages', config)

        const page = store.state.pages.pages.filter((page) => {
            return (
                page.fields.slug.toLowerCase() ==route.params.slug.toLowerCase()
            )
        })[0]

        return { page }
    },
}
</script>