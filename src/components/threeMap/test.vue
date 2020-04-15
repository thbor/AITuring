<template>
  <div>
    <div id="three" class="container"></div>
  </div>
</template>
<script>
import * as THREE from "three";
import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
import * as dat from 'dat.gui';
import datUI from './datUI'
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
      x:0.02,
      y:0.02,
      z:0.02,
      orbitControls:"",
      clock:"",
      container:"",
      height:"",
      width:"",
      gui:""

    }
  },
  mounted(){
    this.init();
    // this.addObjDemo()
    // this.addObj(0,40,0)
    // this.addObj(40,0,0)
    // this.addObj(0,0,40)
    // this.addCubic();
    // this.rotate()
    // this.initOrbitControls()
    this.initDatUI()
    this.animate()
  },
  watch:{
    gui:function(val){
      console.log("改變了",val)
      // this.gui = val;
      // this.gui.add(val,'x')
    }
  },
  methods:{
    init(){
        this.width = window.innerWidth;
        this.height = window.innerHeight
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
        this.controls.minDistance = 80;
        this.controls.maxDistance = 400;
        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
        });//会在body里面生成一个canvas标签,
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        // this.renderer.style.top = 100
        this.renderer.setSize(this.width, this.height);
        // this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.container = document.getElementById('three');
        this.container.appendChild(this.renderer.domElement);
        //标注渲染
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(this.width, this.height);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '100px';
        this.container.appendChild(this.labelRenderer.domElement);
        // console.log(999,"init",this.scene)
        this.$emit("sceneData",this.scene)
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
      //参数调试工具初始化
    initDatUI(){
        this.gui = new dat.GUI();
        this.gui.add(datUI,'message').name('消息');
        this.gui.add(datUI,'speed',-20,20);
        this.gui.add(datUI,'displayOutline');
        this.gui.add(datUI,"lightY",0,100);
        this.gui.add(datUI,"sphereX",-30,30);
        this.gui.add(datUI,"sphereZ",-30,30);
        this.gui.add(datUI,"cubeX",0,60);
        this.gui.add(datUI,"cubeZ",-30,30);
        this.gui.remember(datUI);
        this.gui.add(datUI, 'speed'); 
        console.log(1,datUI)
        // datUI.speed = this.gui.speed
        
      },
    initOrbitControls(){
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 1;
      //围绕目标旋转的速度将有多快，默认值为2.0
      this.controls.autoRotateSpeed =  datUI.speed;
      // this.controls.target = new THREE.Vector3(this.x, this.y, this.z);

      this.controls.update();
    },
    animate(){
     //旋轉
      requestAnimationFrame(this.animate)
      //正方體旋轉的方向和速度
      // this.cubic.rotation.x+=this.x
      // this.cubic.rotation.y+=this.y
      // this.cubic.rotation.z+=this.z
      //必須有這句話才能渲染出來
      // delta = this.clock.getDelta();
      // this.orbitControls.update(delta);
      //軌道控制器
      this.initOrbitControls();
      this.renderer.render(this.scene,this.camera)
    },
    render(){

    }


  }
}
</script>
<style scoped>
</style>