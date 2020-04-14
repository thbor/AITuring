<template>
  <div>
    <div id="three"></div>
  </div>
</template>
<script>
 import * as THREE from "three";
  import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
const OrbitControls = require('three-orbit-controls')(THREE);
export default {
  data(){
    return{
      scene:"",
      camera:"",
      renderer:"",
      labelRenderer:"",
      controls:"",
      width:"",
      height:"",
      cubic:"",

    }
  },
  mounted(){
    this.init();
    this.addObj(0,40,0)
    this.addObj(40,0,0)
    this.addObj(0,0,40)
    this.addCubic();
    // this.rotate()
    this.animate()
  },
  methods:{
    init(){
        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AmbientLight(0x999999));//环境光
        this.light = new THREE.DirectionalLight(0xdfebff, 0.45);//从正上方（不是位置）照射过来的平行光，0.45的强度
        this.light.position.set(50, 200, 100);
        this.light.position.multiplyScalar(0.3);
        this.scene.add(this.light);
        //初始化相机
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(10, 90, 65);
        this.camera.lookAt(this.scene.position);
        //初始化控制器
        this.controls = new OrbitControls(this.camera);
        this.controls.target.set(0, 0, 0);
        this.controls.minDistance = 80;
        this.controls.maxDistance = 400;
        this.controls.maxPolarAngle = Math.PI / 3;
        this.controls.update();
        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
        });//会在body里面生成一个canvas标签,
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        const container = document.getElementById('three');
        container.appendChild(this.renderer.domElement);
        //标注渲染
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = 0;
        container.appendChild(this.labelRenderer.domElement);
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
    addCubic(){
      
      var box=new THREE.BoxGeometry(5,5,5);//创建一个立方体几何对象
      var material=new THREE.MeshLambertMaterial({color:0x0000ff});//材质对象
      this.cubic=new THREE.Mesh(box,material);//网格模型对象
      
      // mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
      this.scene.add(this.cubic)
    },
    animate(){
     console.log("rotate")
     //旋轉
      requestAnimationFrame(this.animate)
      //旋轉的方向和速度
      this.cubic.rotation.x+=0.02;
      this.cubic.rotation.y+=0.02;
      this.cubic.rotation.z+=0.02;

    
      //必須有這句話才能渲染出來
      this.renderer.render(this.scene,this.camera)
    },
    render(){

    }


  }
}
</script>
<style scoped>

</style>