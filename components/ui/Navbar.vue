<template lang='pug'>
  fragment
    v-toolbar.elevation-0(color='transparent' fixed)
      v-toolbar-side-icon.hidden-md-and-up(@click='drawer = !drawer')
      v-spacer
      v-toolbar-items
          v-hover
              v-btn(flat icon slot-scope='{ hover}'  @click='toggleTheme')
                  v-icon(:color='hover?"accent":""') {{isDark?'brightness_2':'wb_sunny'}}
          v-btn.hidden-sm-and-down(v-for='item in menu' :key='item.name' :to='item.to' flat active-class='active') {{item.name}}
          v-btn.font-weight-bold(flat color='accent' :href='blogLink' target='_blank') Blog 
                v-icon chevron_right
    v-navigation-drawer.hidden-md-and-up(v-model='drawer' app)
      v-list
        v-list-tile(v-for='item in menu' :key='item.name' :to='item.to' active-class='accent--text') 
          v-list-tile-action
            v-icon {{item.icon}}
          v-list-tile-content
            v-list-tile-title {{item.name}}
</template>

<script>
import { BLOG_LINK } from '@/constant'
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      blogLink: BLOG_LINK,
      menu: [
        {
          name: 'Home',
          to: '/',
          icon: 'home'
        },
        {
          name: 'Experience',
          to: 'experience',
          icon: 'domain'
        },
        {
          name: 'Projects',
          to: 'projects',
          icon: 'business_center'
        },
        {
          name: 'Skills',
          to: 'skills',
          icon: 'check_circle'
        }
      ]
    }
  },
  computed: {
    isDark: function() {
      return this.$store.state.theme.isDark
    }
  },
  methods: {
    toggleTheme: function() {
      this.$store.commit('theme/toggle')
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
