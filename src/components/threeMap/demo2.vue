<!--suppress ALL -->
<template>
  <div >
    <Demo1 />
  </div>
</template>
<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
  // import MTLLoader from  'three-mtl-loader';
  // import OBJLoader from  'three-obj-loader';
  import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
  //three js状态插件
  import Stats from 'stats-js';
  import * as dat from 'dat.gui';
  import datUI from './datUI'
  import Demo1 from './demo'

  // const OrbitControls = require('three-orbit-controls')(THREE);
  export default {
    components:{
      Demo1
    },
    name: "demo2",
    data() {
      return {
     
      }
    },
    mounted() {
      this.init();
    
    },
   
    methods: {
      init() {
    }
  }
  }
</script>

<style scoped>

</style>