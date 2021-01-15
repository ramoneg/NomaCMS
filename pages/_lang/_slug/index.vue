<template>
    <div>
        <div v-if="page && page.length > 0">
            {{page}}
        </div>
        <div v-else>
            Page not found!
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ store, env, route }) {
        const config = { env: env, route: route }
        await store.dispatch('pages/fetchPages', config)

        const page = store.state.pages.pages.filter(page => {
            return page.fields.slug.toLowerCase() == route.params.slug.toLowerCase()
        })

        return { page }
    },
}
</script>