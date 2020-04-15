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
      this.addCubic()
      this.addObj(0,40,0)
      this.addObj(40,0,0)
      this.addObj(0,0,40)
    },
    sceneData(scene){
      this.scene = scene
    },
    addCubic(){
      var box=new THREE.BoxGeometry(5,5,5);//创建一个立方体几何对象
      var material=new THREE.MeshLambertMaterial({color:0x0000ff});//材质对象
      this.cubic=new THREE.Mesh(box,material);//网格模型对象
      // mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
      this.scene.add(this.cubic)

    },
    addObj(x,y,z){
      //1.定義一個幾何體
      var geometry = new THREE.Geometry();
      //2.使用THREE.LineBasicMaterial类型来定义線條的材質
      var material = new THREE.LineBasicMaterial( { vertexColors: true } );
      //3.接下来，定义两种颜色，分别表示线条两个端点的颜色
      var color1 = new THREE.Color( 'red' )
     // 定义2个顶点的位置，并放到geometry中
      var p1 = new THREE.Vector3( 0, 0, 0 );
      var p2 = new THREE.Vector3(  x,y,z );
      // var p3 = new THREE.Vector3(  0, 0, -10 );
      geometry.vertices.push(p1);
      geometry.vertices.push(p2);
      // geometry.vertices.push(p3);
      geometry.colors.push( color1 );
      var line = new THREE.Line( geometry, material, THREE.LineSegments  );
      this.scene.add(line);
      
    },
  }
}
</script>>
<style scoped>

</style>