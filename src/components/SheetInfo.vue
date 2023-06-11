<template>

<div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>


  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:25px; font-weight: bold;">Fiche : {{ sheet.nom }}

</div>
<div class="col-5" style="font-size:22px; font-weight: bold;">Code : {{sheet.code}}
   </div>



<div class="col-2" style="font-size:20px; font-weight: bold;">Création : {{sheet.dateCreation}}
   </div>

<div class="col-2" style="font-size:30px; font-weight: bold;">
<button class="btn btn-primary" @click="goModifSheet">MODIFIER</button>
</div>
</div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>


</template>

<script>

//import axios from 'axios'
import { store } from "../store.js";

export default {  
  name: "SheetInfo",

  props: {
    sheet: Object,
  },

  data() {
    return {
      dataStore: store,
     id:0,
    libelle: "",
    valeur: 0,
    };
  },

mounted() {

},

methods: {
    async goModifSheet() {

  this.$router.push('/FicheModif')

  this.dataStore.data.ficheConsulte = this.sheet

  console.log("CETTE FICHE ??? "+ this.dataStore.data.ficheConsulte.nom)
    },
  },

};
</script>


