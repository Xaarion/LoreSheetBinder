<template>
  <body>
  <div class="row">
    <div class="col-2"></div>    
    <div class="col-8">
    <RescearchBar/>
    </div>
    <div class="col-2"></div>
  </div>
</body>
       
</template>

<script>

import RescearchBar from "@/components/RescearchBar.vue";
import { store } from "../store.js";

export default {
  name: "ConsultScearchPage",
  components: {
    RescearchBar,
  },

  data() {
    return {
      dataStore: store,

    };
  },

  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/ConnexionView')}

  },

  methods: {
 
  },
};
</script>
