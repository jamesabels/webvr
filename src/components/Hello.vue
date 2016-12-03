<template>
    <a-scene>
      <a-sky color="lightblue"></a-sky>

      <a-entity position="0 2.82 -6.91" camera="active:false;userHeight:1.6;near:0.01" wasd-controls="" rotation="0 0 0" look-controls="" aframe-injected="" data-aframe-inspector="default-camera"></a-entity>

      <!--Box-->
      <a-entity 
        data-v-641b6402="" 
        position="0.08 2.78 -10.71" 
        geometry="primitive:box;depth:1" 
        material="color:salmon;opacity:0.8">
      </a-entity>

      <!--Light-->
      <a-entity 
        light="color:#FFF;intensity:0.10" 
        position="0.03 5.21 -10.17" 
        data-aframe-default-light="" 
        aframe-injected="" 
        rotation="8.021409131831525 0 0">
      </a-entity>
    
    </a-scene>    

</template>

<script>
require('aframe')

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
