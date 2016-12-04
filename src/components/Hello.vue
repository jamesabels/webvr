<template>
    <a-scene>

      <!--Graphic Assets-->
      <a-assets>
          <img src="../assets/bg_combined.png" id="img-photosphere-1">
          <img src="../assets/ui.png" id="img-uisphere-1">
          <img src="../assets/card_1.png" id="img-uicard-1">
          <video id="vid-videosphere-1" src="https://dl.dropboxusercontent.com/u/1854938/bg.mp4"
          autoplay loop crossorigin></video>
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
                position="0 0 -4.4"
                geometry="primitive: ring; radiusOuter: 0.10; radiusInner: 0.05;"
                material="color: indianred; shader: flat;"
                visible="false">
            </a-entity>

          <!--UI-->
          <a-entity 
            geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
            material="shader:flat; transparent: true; color:#ffffff; fog:false; src:#img-uisphere-1 "
            scale="-1 0.5 0.7"    
            rotation="0 -90 0" id="ui">
          </a-entity>

        </a-entity>
      </a-entity>

      <!--Background-->
      <a-entity 
          geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
          material="shader:flat; color:#ffffff; fog:false; src:#img-photosphere-1 "
          scale="-2 2 2"
          rotation="0 90 90" id="photosphere">
      </a-entity>

       <!--UI-->
      <!--<a-entity 
        geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
        material="shader:flat; transparent: true; color:#ffffff; fog:false; src:#img-uisphere-1 "
        scale="-0.7 0.5 0.8"
        rotation="0 -90 0" id="ui">
      </a-entity>-->

      <!--Card One-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="0 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>

      <!--Card Two-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="70 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>

      <!--Card Three-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="-70 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>

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
