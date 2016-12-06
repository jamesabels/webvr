<template>
    <a-scene id="vr-scene" vr-mode-ui="enabled: true">

      <!--Graphic Assets-->
      <a-assets>
          <img src="../assets/bg_combined.png" id="img-photosphere-1">
          <img src="../assets/ui.png" id="img-uisphere-1">
          <img src="../assets/card_1.png" id="img-uicard-1">
          <img src="../assets/name.png" id="img-uiname-1">
          <img src="../assets/instructions.png" id="img-uiins-1">
          <img src="../assets/cubes_L.png" id="img-photosphere-2">
          <video id="vid-videosphere-1" src="https://dl.dropboxusercontent.com/u/1854938/bg.mov"
          autoplay loop crossorigin></video>
      </a-assets>

      <!--Camera and Cursor-->
      <a-entity position="0 1.8 5">
        
        <a-entity
            id="camera" 
            camera="far: 10000; fov: 90; near: 0.5;"
            look-controls="enabled: true">
            <a-entity position="0 0 -3"
                geometry="primitive: ring; radiusOuter: 0.30;
                          radiusInner: 0.20;"
                material="color: cyan; shader: flat"
                cursor="maxDistance: 30; fuse: false">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                  fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="1500"></a-animation>
              <a-animation begin="fusing" easing="ease-in" attribute="scale"
                  fill="forwards" from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
            </a-entity>
        </a-entity>

      </a-entity>

      <!--Background-->
      <a-entity 
          id="photosphere"
          geometry="primitive:sphere; radius:5000; segmentsWidth:64; segmentsHeight:64"
          material="shader:flat; color:#ffffff; fog:false; src:#vid-videosphere-1"
          scale="-2 2 2"
          rotation="0 -90 0">
      </a-entity>

      <!--NAME-->
      <a-entity
        id="ui-name"
        geometry="primitive:plane; width: 200; height: 45;"
        position="0 -80 -160"
        material="shader:flat; transparent: true; color:#ffffff; fog:false; src:#img-uiname-1"
      ></a-entity>


      <!--Instructions-->
      <a-entity
        id="instruct"
        geometry="primitive:plane; width: 100; height: 40;"
        position="0 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uiins-1"
      ></a-entity>

      <!--Card One-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="-160 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
        href="/ocean">
      ></a-entity>

      <!--Card Two-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="90 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>

      <!--Card Three-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="-90 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>
      
      <!--Card Four-->
      <a-entity
        geometry="primitive:plane; width: 50; height: 96;"
        position="160 1 -170"
        material="shader: flat; color: #ffffff; transparent: true; fog: false; src:#img-uicard-1; "
      ></a-entity>

    </a-scene>    

</template>

<script>
require('aframe')
require('aframe-href-component')

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vr-scene {
  position: absolute; height: 100%; width: 100%;
}
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
