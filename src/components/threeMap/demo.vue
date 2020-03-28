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
  import {setScene,setObjDemo } from '../../service/Manager'
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
          scale:'0.4, 0.4, 0.4',
          position:'-350, 0, 0'
        }
        
        },
        
      }
    },
    mounted() {
      this.initScene();
      this.addObj();
    },
    // destroyed(){
    //   console.log("实例已经被销毁");
    // },
    methods: {
      initScene(){
        this.scene = setScene(this.data);
        console.log("scene",this.scene)
        const container = document.getElementById('container');
        container.appendChild(this.data.renderer.domElement);
        container.appendChild(this.data.labelRenderer.domElement);
        window.addEventListener('resize', this.data.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      addObj(){
        //添加一個對象到舞台
        setObjDemo(this.data,this.data.demoObj1)
      }
    //   setOption: function() {
    //   let config = { notMerge: true };
    //   this.chart.setOption(this.option, config);
    // },
    }
  }
</script>

<style scoped>

</style>