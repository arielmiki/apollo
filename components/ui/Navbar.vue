<template lang='pug'>
    v-toolbar.elevation-0(color='transparent')
        v-spacer
        v-toolbar-items
            v-hover
                v-btn(flat icon slot-scope='{ hover}'  @click="$store.commit('theme/toggle')")
                    v-icon(:color='hover?"secondary":""') {{isDark?'brightness_2':'wb_sunny'}}
            v-btn(flat to='/' active-class='active') Home
            v-btn(flat to='experience' active-class='active') Experience
            v-btn(flat to='projects' active-class='active') Projects
            v-btn(flat to='skills' active-class='active') Skills
            v-btn.font-weight-bold(flat color='secondary' href='https://blog.arielmiki.xyz' target='_blank') Blog 
                v-icon chevron_right
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isDark: {
      set: function(value) {
        this.$store.commit('theme/toggle')
      },
      get: function() {
        return this.$store.state.theme.isDark
      }
    }
  }
}
</script>

<style scoped>
.active {
  background-color: transparent;
  /* font-weight: bold; */
  text-decoration: underline;
}
</style>
