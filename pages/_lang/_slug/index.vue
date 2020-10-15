<template>
    <div>
        
    </div>
</template>

<script>
export default {
    async asyncData({ store, env, route }) {
        const config = { env: env, route: route }
        const allPages = await store.dispatch('pages/fetchPages', config)
        return allPages
    },
}
</script>