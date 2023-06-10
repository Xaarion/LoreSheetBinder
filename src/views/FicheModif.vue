<template>

<div class="row" style="margin-right: 0 !important; height: 200px;">
  
  <div style="text-align: center; font-size: 120px;">Malenia</div> 

</div>

  <div class="row" style="margin-right: 0 !important">

         
  
            <HelloWorld></HelloWorld>
              
          
          
        </div>
  </template>
            
      <script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import { store } from "../store.js";
  //import axios from "axios";
  
  
  export default {
    name: "BackOfficeCrypto",
    components: {
      HelloWorld,
    },
    data() {
      return {
        dataStore: store,
        cryptos: [],
        acces:0,
      };
    },
  
  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/ConnexionView')}
    // this.verifAdmin();
    // this.getCrypto();
  
  },
  
    methods: {
    //   async getCrypto() {
    //     await axios
    //       .get("https://apitokendustry.alwaysdata.net/crypto")
    //       .then((response) => {
    //         this.cryptos = response.data;
    //       });
  
  
    //   },
  
    //   async verifAdmin() {
  
    //     console.log("bouh")
    //           console.log(this.acces)
    
    //     await axios.get('https://apitokendustry.alwaysdata.net/connectID?identif='+ this.dataStore.data.ident + '&mdp=' + this.dataStore.data.mdp).then(response => {this.acces = response.data[0].acces})
  
    //     console.log(this.acces)
  
    //     if( this.acces < 3){
    //       this.$router.push('/HomeView')
  
    //     }
        
    //   },
    },
  }
  </script>