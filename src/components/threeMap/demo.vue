<template>
  <div>
    <Test  @sceneData="sceneData" />
  </div>
</template>
<script>
import Test from './test'
 import * as THREE from "three";
  import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
const OrbitControls = require('three-orbit-controls')(THREE);
import {addObj} from '../../service/Manager'
export default {
  components:{
    Test
  },
  data(){
    return{
      scene:"",
      cubic:""
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.addCubic();
      this.scene.add(addObj(0,40,0))
      this.scene.add(addObj(40,0,0))
      this.scene.add(addObj(0,0,40))
    },
    sceneData(scene){
      console.log("scene!!!",scene)
      this.scene = scene
    },
    addCubic(){
      var box=new THREE.BoxGeometry(5,5,5);//创建一个立方体几何对象
      var material=new THREE.MeshLambertMaterial({color:0x0000ff});//材质对象
      this.cubic=new THREE.Mesh(box,material);//网格模型对象
      // mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
      this.scene.add(this.cubic)

    },
  }
}
</script>>
<style scoped>

</style>