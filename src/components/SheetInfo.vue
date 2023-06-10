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
<button class="btn btn-primary" @click="modifCrypto">MODIFIER</button>
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
// this.id = this.crypto.id
// this.libelle = this.crypto .libelle
// this.valeur = this.crypto.valeur
},

methods: {
    async modifCrypto() {

  //       axios.put('https://apitokendustry.alwaysdata.net/cryptoModif/' + this.crypto.id, {
  //         libelle: this.libelle,
  //         valeur: this.valeur
  // })
  // .then(response => {
  //   alert("Mise à jour reussie !")
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   alert("Erreur lors de la mise a jour !")
  //   console.log(error);
  // });

  this.$router.push('/BackOfficeCrypto')
    },
  },

};
</script>


