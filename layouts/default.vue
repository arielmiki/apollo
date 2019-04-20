<template lang='pug'>
  v-app(:dark="$store.state.theme.isDark")
    navbar()
    nuxt
</template>

<script>
import navbar from '@/components/Navbar'

export default {
  components: {
    navbar
  },
}
</script>
<style>
body {
  font-family: 'Open Sans', sans-serif;
}
</style>

