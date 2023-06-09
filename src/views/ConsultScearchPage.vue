<template>
  <body>
  <div class="row">
    <div class="col-2"></div>    
    <div class="col-8">
    <OffreCreationForm/>
    </div>
    <div class="col-2"></div>
  </div>
</body>
       
</template>

<script>
// @ is an alias to /src

import OffreCreationForm from "@/components/OffreCreationForm.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "ConsultScearchPage",
  components: {
    OffreCreationForm,
  },

  data() {
    return {
      dataStore: store,
      cryptos: [],
    };
  },

  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/')}else{this.getCrypto();}
    
    //console.log(this.dataStore.data.credits)

  },

  methods: {
    async getCrypto() {
      await axios
        .get("https://apitokendustry.alwaysdata.net/crypto")
        .then((response) => {
          this.cryptos = response.data;
        });

      console.log(this.cryptos);


    },

  
  },
};
</script>
