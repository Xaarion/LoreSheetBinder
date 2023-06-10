<template>
  <div class="row" style="margin-right: 0 !important">
      <div class="col-2" style="height: 800px; background-color: grey"></div>
  
      <div class="col-10" style="padding-right: 0 !important">
  
        <div v-for="currentSheet in sheets" :key="currentSheet.id">
  
          <div class="row" style="margin-right: 0 !important">
  
            <SheetInfo :sheet=currentSheet></SheetInfo>
              
          </div>
          
        </div>
  
      </div>
    </div>
  </template>
            
      <script>
  // @ is an alias to /src
  import SheetInfo from "@/components/SheetInfo.vue";
  import { store } from "../store.js";
  import axios from "axios";
  
  
  export default {
    name: "InventareDeFiche",
    components: {
      SheetInfo,
    },
    data() {
      return {
        dataStore: store,
        sheets: [],
        acces:0,
      };
    },
  
  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/ConnexionView')}
    // this.verifCo();
    this.getSheet();
  
  },
  
    methods: {
      async getSheet() {
        await axios
          .get("https://apiloresheetbinder.alwaysdata.net/userSheet?id="+this.dataStore.data.id)
          .then((response) => {
            this.sheets = response.data;
            console.log(response.data)
          });
  
  
      },
  
    //   async verifCo() {
  

    //     await axios.get('https://apitokendustry.alwaysdata.net/connectID?identif='+ this.dataStore.data.ident + '&mdp=' + this.dataStore.data.mdp).then(response => {this.acces = response.data[0].acces})
  
    //     console.log(this.acces)
  
    //     if( this.acces < 3){
    //       this.$router.push('/HomeView')
  
    //     }
        
    //   },
    },
  }
  </script>