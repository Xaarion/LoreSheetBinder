<template>

  <div class="row" style="margin-right: 0 !important; height: 200px;">
    <div style="text-align: center; font-size: 120px;">{{ dataStore.data.ficheConsulte.nom }}</div> 
  </div>
    
  
  <div v-for="currentAttribute in Attributes" :key="currentAttribute.id">
  
    <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
    <AttributeModif :Attribute=currentAttribute></AttributeModif>
    </div>
  
  </div>

  <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  <div class="col-12" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
  <div style="text-align: center;">
  <button class="btn btn-primary" @click="newAttributes">Ajouter un champ</button>
  </div>
  </div>
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  </div>
  
  
  
  </template>
  
  <script>
  
  import axios from 'axios'
  import { store } from "../store.js";
  import AttributeModif from "@/components/AttributeModif.vue";   
  export default {  
    name: "PageView",
  
    
    components: {
      AttributeModif,
    },
  
    data() {
      return {
        dataStore: store,
        Attributes: []
  
      }
    },
  
  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/ConnexionView')}
    this.getAttributes();
  },
  
  methods: {
      async getAttributes() {
      
        await axios.get('https://apiloresheetbinder.alwaysdata.net/attributeForSheet?id='+ this.dataStore.data.ficheConsulte.id).then(
          response => {
            this.Attributes = response.data
          },
          )
  
      },

      async newAttributes() {
      
        const response = await axios.post('https://apiloresheetbinder.alwaysdata.net/newAttribute', {
          libelle: "Nom du champ",
          valeur: "Contenu du champ",
          id_Fiches: this.dataStore.data.ficheConsulte.id,
})

  console.log(response.data);
  this.getAttributes();

    },
    },
  
  };
  </script>
  
  
   