<!--suppress ALL -->
<template>
  <div id="container">
  </div>
</template>
<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
  // import MTLLoader from  'three-mtl-loader';
  // import OBJLoader from  'three-obj-loader';
  import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
  import {setScene,setObjDemo } from '../../service/Manager'
  //three js状态插件
  import Stats from 'stats-js';
  import * as dat from 'dat.gui';
  import datUI from './datUI'

  const OrbitControls = require('three-orbit-controls')(THREE);
  export default {
 
    name: "demo",
    data() {
      return {
        data:{
          scene:'',
          labelRenderer: '',
          light: '',
          camera: '',
          controls: '',
          renderer: '',
          geometry: '',
          material: '',
          cube: '',
          fov: 60,
          biaozhudiv: '',
          img: '',
          biaozhuLabel: '',
          axesHelper:'',
          stats:'',
          gui:'',
        //一個舞台上的對象
        demoObj1:{
          path:'/static/model/facilitys/',
          load:'scene.mtl',
          dataLoadObj:'scene.obj',
          scale:{x:0.4, y:0.4, z:0.4},
          position:{x:-350, y:0, z:0}
        }
        },
        
      }
    },
    mounted() {
      this.initScene();
      this.addObj();
      this.animate();
    },
    // destroyed(){
    //   console.log("实例已经被销毁");
    // },
    methods: {
      initScene(){
        this.data = setScene(this.data);
        const container = document.getElementById('container');
        container.appendChild(this.data.renderer.domElement);
        container.appendChild(this.data.labelRenderer.domElement);
        window.addEventListener('resize', this.data.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      addObj(){
        //添加一個對象到舞台
        setObjDemo(this.data,this.data.demoObj1)
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.render();
      },
      render() {
        this.data.renderer.render(this.data.scene, this.data.camera);
        this.data.labelRenderer.render(this.data.scene, this.data.camera);
      },
   
    }
  }
</script>

<style scoped>

</style>