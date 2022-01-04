<template>
  <div id="list">
      <h1>Charger la liste perso Star Wars</h1>
      <button
      v-on:click="handleCLick"
      >
          HERE
    </button>

      <Character
      v-for ="character in characters"
      :key="character.id"
      :characterProps='character'
      />
  
  </div>
</template>

<script>

import Character from './Character.vue';
import characterService from '../services/characterService.js'

export default {
  name: 'CharactersList',
  components: {
      Character    
  },
  data(){
      return {
          characters: []
      };
  },
  methods: {
     async handleClick(evt) {
          evt.preventDefault;
          this.characters = await characterService.loadCharacters();    
        
        
      }
  }
}
</script>

<style lang="scss">

</style>
