<template>
    <div style="margin-top: 100px;">
             <h1 style="text-align: center; font-size: 80px; font-weight: 550; margin-bottom: 40px;">Recherche de Fiche</h1>
             <form>
               <fieldset>
                 
                 <div class="form-group" style="text-align: center;">
                   <label for="password" style="margin-bottom: 20px; font-size:30px" >Entrez le code de la fiche que vous shouaitez voir !</label>
                   <input type="text" class="form-control" placeholder="CODE" v-model="sheetCode" style="background-color: grey; font-size: 20px;">
                 </div>
 
                 
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <div style="text-align: center;">
              <button type="button" class="btn btn-primary" style="margin: 0 auto; font-size: 30px;" @click="rechercher">Consulter ! </button>
            </div>
            </form>
         </div>
</template>

<script>

import { store } from "../store.js";
import axios from 'axios';

export default {
  name: "RescearchBar",

  data() {
    return {
      dataStore: store,
      sheetCode:"",
      
    };
  },

  methods: {

   async rechercher(){

 
    await axios.get('https://apiloresheetbinder.alwaysdata.net/sheetForCode?code='+ this.sheetCode).then(
        response => {

          if (response.data.length > 0){
          console.log(response.data),
          this.dataStore.data.ficheConsulte = response.data[0], 
          console.log(response.data[0]),
          console.log("Sheet trouvé !")
          this.$router.push('/PageView')
        } 

        else{alert("Ce code ne correspond a aucune fiche !")
      console.log(this.sheetCode)}
        }
        )
},

},
}
</script>
