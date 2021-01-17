<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    async asyncData ({env, redirect, route}) {
        let home = env.DEFAULT_HOME
        await redirect(`/${route.params.lang}/${home}`)
    },
}
</script>