<template lang='pug'>
  v-fragment
    v-navigation-drawer.hidden-md-and-up(v-model='drawer' app clipped)
      v-list
        v-list-tile(v-for='item in menu' :key='item.name' :to='item.to')
          v-list-tile-content
            v-list-title {{item.name}}
    v-toolbar.elevation-0(color='transparent' fixed)
      v-toolbar-side-icon.hidden-md-and-up(@click='drawer = !drawer')
      v-spacer
      v-toolbar-items
          v-hover
              v-btn(flat icon slot-scope='{ hover}'  @click='toggleTheme')
                  v-icon(:color='hover?"accent":""') {{isDark?'brightness_2':'wb_sunny'}}
          v-btn.hidden-sm-and-down(v-for='item in menu' :key='item.name' :to='item.to' flat active-class='active') {{item.name}}
          v-btn.font-weight-bold(flat color='accent' href='https://blog.arielmiki.xyz' target='_blank') Blog 
                v-icon chevron_right
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleTheme: function() {
      this.$store.commit('theme/toggle');
    }
  },
  computed: {
    isDark: function() {
      return this.$store.state.theme.isDark;
    }
  },
  data() {
    return {
      drawer: false,
      menu: [
        { name: 'Home',
          to: '/'
        },
        {
          name: 'Experience',
          to:'experience'
        },
        {
          name: 'Projects',
          to:'projects'
        },
        {
          name: 'Skills',
          to:'skills'
        },
        
      ]
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
