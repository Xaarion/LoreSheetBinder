<template>

  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
  <div class="col-3" style="font-size:50px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">{{ Attribute.libelle }}</div>
  <div class="col-8" style="font-size:24px; font-weight: bold; margin-top: 20px; margin-bottom: 20px;">{{ Attribute.valeur }}</div>
  <div class="col-1"></div>
  <div class="row" style="height: 2px; background-color: rgb(0, 0, 0); margin-left: 0 !important;"></div>
</template>

<script>

import { store } from "../store.js";
//import axios from "axios";

export default {  
  name: "AttributeView",

  props: {
    Attribute: Object,
  },

  data() {
    return {
    dataStore: store,
     montant: 0,
     createur: "",
    };
  },

  mounted() {

  },

  methods: {
    

   


    },


   


};
</script>


