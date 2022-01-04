<template>
 <article>
     <h4>{{characterProps.name}}</h4>
     <p>Je mesure {{characterProps.height}} et j'ai les cheveux {{characterProps.hair_color}}</p>
 </article>
</template>

<script>


export default {
  name: 'Character',
  components: {
    
  },
  props: {
      characterProps: Object
  }
}
</script>

<style lang="scss">

</style>
