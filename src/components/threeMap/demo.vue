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
import {addObj,addObj2,addObj3} from '../../service/Manager'
export default {
  components:{
    Test
  },
  data(){
    return{
      scene:"",
      cubic:"",
      mesh1:{
        path:'/static/model/street/',
        mtl:"Street environment_V01.mtl",
        loadobj:"Street environment_V01.obj",
        scale:{x:0.8, y:0.8, z:0.8},
        position:{x:-40, y:-50, z:10},
        spriteInfo:[{x:-95,y:-55,z:-110,image:'/static/image/shoop.png',loc:-70,text:'SKECH'},
        {x:-80,y:-65,z:-90,image:'/static/image/cloth.png',loc:-52,text:'FILA'},
        {x:-100,y:-45,z:-80,image:'/static/image/apple.png',loc:-63,text:'APPLE'},]

      }
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
      // this.scene.add(addObj3(this.scene))
      this.scene.add(addObj2(this.mesh1,this.scene))
      // this.scene.add(addObj2())
    },
    sceneData(scene){
      console.log("scene!1!!",scene)
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