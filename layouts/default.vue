<template lang='pug'>
  v-app(:dark="$store.state.theme.isDark")
    Navbar
    nuxt
</template>

<script>
import Navbar from '@/components/ui/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
