<template>
  <div>
      <component v-for="(block) in page.fields.blocks" :key="block.sys.id" :is="block.sys.contentType.sys.id" />
  </div>
</template>

<script>
export default {
    props: ['page'],
    name: 'PageRenderer',
    components: {
      Hero: () => import('~/components/NomaCMS/Elements/Hero'),
      TextLeft: () => import('~/components/NomaCMS/Elements/TextLeft'),
    }
}
</script>