<template>
<div class="row" style="margin-right: 0 !important; height: 200px;">

  <div style="text-align: center; font-size: 120px;">Malenia</div> 

</div>

  
  <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
    <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>

<div class="col-3" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Nom
</div>
<div class="col-8" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Malenia
   </div>
<div class="col-1"></div>


<div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
</div>





<div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
    <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>

<div class="col-3" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Histoire

</div>
<div class="col-8" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Malénia est une sorcière puissante et mystérieuse, dont les origines sont enveloppées de secrets. Elle possède un pouvoir ancestral lié à la magie et à la manipulation des éléments. Au fil de l'histoire, les joueurs découvrent que Malénia a été emprisonnée pendant de nombreuses années par une force malveillante connue sous le nom de L'Annonceur.
   </div>
<div class="col-1"></div>


<div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
</div>






<div class="row" style="height:auto; background-color: rgb(185, 185, 185);">
    <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>

<div class="col-3 " style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Point de vie
</div>
<div class="col-8" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">81518488
   </div>
<div class="col-1"></div>


<div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
</div>


  



  
</template>

<script>

//import axios from 'axios'
import { store } from "../store.js";

export default {  
  name: "CrytpoModif",

  props: {
    crypto: Object,
    
  },

  data() {
    return {
      dataStore: store,
     id:0,
    libelle: "",
    valeur: 0,

    bz1:"Nom",
    bz2:"Malenia",
    bz3:"Histoire",
    bz4:"Malénia est une sorcière puissante et mystérieuse, dont les origines sont enveloppées de secrets. Elle possède un pouvoir ancestral lié à la magie et à la manipulation des éléments. Au fil de l'histoire, les joueurs découvrent que Malénia a été emprisonnée pendant de nombreuses années par une force malveillante connue sous le nom de L'Annonceur.",
    bz5:"Point de vie",
    bz6:"81518488",

    }
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


 