<template>
    <a-scene>

      <a-assets>
          <img src="../assets/bg_combined.png" id="img-photosphere-1">
          <img src="../assets/ui.png" id="img-uisphere-1">
      </a-assets>

      <!--Camera and Cursor-->
      <a-entity position="0 1.8 5">
        <a-entity
            id="camera" 
            camera="far: 10000; fov: 80; near: 0.5;"
            look-controls="enabled: true">
            <a-entity
                cursor="fuse: false; maxDistance: 500; timeout: 3000;"
                id="cursor"
                position="0 0 -3.4"
                geometry="primitive: ring; radiusOuter: 0.10; radiusInner: 0.05;"
                material="color: darkorchid; shader: flat;"
                visible="false">
            </a-entity>
        </a-entity>
      </a-entity>

      <!--Background-->
      <a-entity 
          geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
          material="shader:flat; color:#ffffff; fog:false; src:#img-photosphere-1 "
          scale="-1.5 1.5 1.5"
          rotation="0 -60 0" id="photosphere">
      </a-entity>

      <a-entity 
        geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
        material="shader:flat; transparent: true; color:#ffffff; fog:false; src:#img-uisphere-1 "
        scale="-0.9 0.5 1"
        rotation="0 -90 0" id="ui">
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
