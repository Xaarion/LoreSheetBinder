<template>



  
    <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
      <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  
  <div class="col-3" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz1" required >
  </div>
  <div class="col-7" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz2" required >
     </div>
  
  
  <div class="col-2" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
  <button class="btn btn-primary" @click="modifCrypto">MISE A JOUR</button>
  </div>
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  </div>

  



  <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
      <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  
  <div class="col-3" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz3" required >

  </div>
  <div class="col-7" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz4" required >
     </div>
  
  
  <div class="col-2" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
  <button class="btn btn-primary" @click="modifCrypto">MISE A JOUR</button>
  </div>
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  </div>






  <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
      <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  
  <div class="col-3" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz5" required>

  </div>
  <div class="col-7" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;"><input type="text" class="form-control"  v-model="bz6 " required >
     </div>
  
  
  <div class="col-2" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
  <button class="btn btn-primary" @click="modifCrypto">MISE A JOUR</button>
  </div>
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  </div>

  <div class="row" style="height:auto; background-color: rgb(185, 185, 185);;">
      <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  <div class="col-12" style="font-size:30px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">
    <div style="text-align: center;">
  <button class="btn btn-primary" @click="modifCrypto">Ajouter un champ</button>
  </div>
  </div>
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
      bz6:"71518489",

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
  
  
   