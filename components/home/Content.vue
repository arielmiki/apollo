<template lang="pug">
    v-container(fill-height fluid justify-center)
        v-layout(column shrink justify-center)
          v-flex(shrink)
            h1.display-4.font-weight-medium Welcome
          v-flex(shrink :style='{ width: "60vw" }')
            p.subheading.font-weight-thin
              | My name is 
              strong.font-weight-bold.accent--text Ariel Miki Abraham
              .
                . Currently, I am a final-year computer science student at <a class="info--text" href="https://cs.ui.ac.id"><strong class='font-weight-bold'>University of Indonesia</strong></a>.
                My interest varies from  <strong>software development</strong>, <strong>data science</strong>,
                <strong>embedded systems</strong>, <strong>particle physics</strong>, and <strong>bioinformatics</strong>.
                I spent my leasure time for playing game, <strong><u>trying</u></strong> to play music, and reading books.
            
         
</template>
<script>
export default {
  name: 'Content'
}
</script>
<style scoped>
.display-4 {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
</style>
