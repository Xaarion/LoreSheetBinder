<template>

<div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
<div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
<div class="col-1" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"></div>
<div class="col-2" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="libelle" required ></div>
<div class="col-7" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="valeur" required ></div>
<div class="col-2" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
<button class="btn btn-primary" @click="modifAttribute">MISE A JOUR</button>
</div>
<div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
</div>
</template>

<script>

import { store } from "../store.js";
import axios from "axios";

export default {  
  name: "AttributeModif",

  props: {
    Attribute: Object,
  },

  data() {
    return {
    dataStore: store,
     libelle: "",
     valeur: "",

    };
  },

  mounted() {
this.libelle = this.Attribute.libelle;
this.valeur = this.Attribute.valeur

  },

  methods: {
    
    async modifAttribute() {

axios.put('https://apiloresheetbinder.alwaysdata.net/sheetModif/' + this.Attribute.id, {
  libelle: this.libelle,
  valeur: this.valeur
})
.then(response => {
alert("Mise à jour reussie !")
console.log(response.data);
})
.catch(error => {
alert("Erreur lors de la mise a jour !")
console.log(error);
});
},
   


    },


   


};
</script>


