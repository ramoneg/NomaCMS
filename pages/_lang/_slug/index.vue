<template>
    <div>
        <page-navigation />
        <div v-if="!page">Page not found!</div>
        <page-renderer :page="page" v-else />
        <page-footer />
    </div>
</template>

<script>
import PageRenderer from '~/components/NomaCMS/PageRenderer'
import PageNavigation from '~/components/NomaCMS/Elements/Navigation'
import PageFooter from '~/components/NomaCMS/Elements/Footer'
export default {
    components: {
        PageRenderer,
        PageNavigation,
        PageFooter
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