<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    async asyncData ({env, redirect}) {
        let language = env.DEFAULT_LANGUAGE
        await redirect(`/${language}`)
    },
}
</script>