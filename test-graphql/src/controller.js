
import vue from 'vue'
import gql from "graphql-tag";

function Controller2() {
    this.teste = () => {
        console.log('testando....')
    }

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

module.exports = Controller2

//export default Controller2