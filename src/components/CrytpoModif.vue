<template>

<div class="row" style="margin-right: 0 !important">

  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:30px; font-weight: bold;">Fiche : Malenia

</div>
<div class="col-5" style="font-size:22px; font-weight: bold;">Code : 9063b76f51a016a933443204930826bf
   </div>



<div class="col-2" style="font-size:20px; font-weight: bold;">Création : 07/06/2023
   </div>

<div class="col-2" style="font-size:30px; font-weight: bold;">
<button class="btn btn-primary" @click="modifCrypto">MODIFIER</button>
</div>
</div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>

  </div>

  <div class="row" style="margin-right: 0 !important">

  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:30px; font-weight: bold;">Fiche : Drax

</div>
<div class="col-5" style="font-size:22px; font-weight: bold;">Code : 43c8a3600269083aa6cb599f755bd2bf
   </div>



<div class="col-2" style="font-size:20px; font-weight: bold;">Création : 06/06/2023
   </div>

<div class="col-2" style="font-size:30px; font-weight: bold;">
<button class="btn btn-primary" @click="modifCrypto">MODIFIER</button>
</div>
</div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>
</div>
<div class="row" style="margin-right: 0 !important">


  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:30px; font-weight: bold;">Fiche : Sephiroth

</div>
<div class="col-5" style="font-size:22px; font-weight: bold;">Code : ccc1e21542d2b8374d2e41feb214fbe2
   </div>



<div class="col-2" style="font-size:20px; font-weight: bold;">Création : 05/06/2023
   </div>

<div class="col-2" style="font-size:30px; font-weight: bold;">
<button class="btn btn-primary" @click="modifCrypto">MODIFIER</button>
</div>
</div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>
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


