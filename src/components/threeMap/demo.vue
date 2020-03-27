<!--suppress ALL -->
<template>
  <div id="container">
    <Demo2 :setData="data" />
  </div>
</template>
<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
  // import MTLLoader from  'three-mtl-loader';
  // import OBJLoader from  'three-obj-loader';
  import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
  import Demo2 from './demo2';
  import {setScene} from '../../service/Manager'
  //three js状态插件
  import Stats from 'stats-js';
  import * as dat from 'dat.gui';
  import datUI from './datUI'

  const OrbitControls = require('three-orbit-controls')(THREE);
  export default {
    components:{
      Demo2
    },
    name: "demo",
    data() {
      return {
        scene:'',
        data:{
          scene:'',
          light:'',
          camera:'',
          renderer:'',
          labelRenderer:''
        }
      }
    },
    mounted() {
      this.initScene()
    },
    // destroyed(){
    //   console.log("实例已经被销毁");
    // },
    methods: {
      initScene(){
        this.scene = setScene(this.data)
        const container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);
        container.appendChild(data.labelRenderer.domElement);
        window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      setOption: function() {
      let config = { notMerge: true };
      this.chart.setOption(this.option, config);
    },
    }
  }
</script>

<style scoped>

</style>