<template>
  <div class="hello">
    <button @click="carregarPaises">Carregar paises</button>
    <button @click="testController2">Teste Controller</button>
    <ol>
      <li v-for="pais in paises" :key="pais.code">{{pais.code}} - {{pais.name}}</li>
    </ol>
  </div>
</template>

<script>
const Controller2 = require("../controller");

/*
import gql from "graphql-tag";
import vue from 'vue'

function Controller() {
  this.load = () => {
      return vue.prototype.$api
        .query({
          query: gql`
            {
              countries {
                code name
              }
            }
          `
        })
  };
}
*/

export default {
  name: "HelloWorld",

  data() {
    return {
      paises: []
    };
  },

  methods: {
    carregarPaises() {
      const controler = new Controller2();
      controler
        .load()
        .then(resp => (this.paises = resp.data.countries))
        .catch(e => console.log(e.networkError.result.errors));
    },

    testController2() {
      const controller2 = new Controller2();
      controller2.teste();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 0 10px;
  text-align: start;
}
</style>
