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
  //three js状态插件
  import Stats from 'stats-js';
  import * as dat from 'dat.gui';
  import datUI from './datUI'

  // const OrbitControls = require('three-orbit-controls')(THREE);
  export default {
    name: "fac",
    data() {
      return {
        scene: '',
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
        gui:''
      }
    },
    mounted() {
      this.init();
      // this.initStats();
      // this.initDatUI();
      // this.initOrbitControls();
      // this.addObj();
      // this.animate();
    },
    // destroyed(){
    //   console.log("实例已经被销毁");
    // },
    methods: {
      init() {
        // this.scene = new THREE.Scene();
        // this.scene.add(new THREE.AmbientLight(0x999999));//环境光
        // this.light = new THREE.DirectionalLight(0xdfebff, 0.40);//从正上方（不是位置）照射过来的平行光，0.45的强度
        // this.light.position.set(50, 300, 100);
        // this.light.position.multiplyScalar(0.3);
        // this.scene.add(new THREE.AxesHelper(250));
        // this.scene.add(this.light);
        // //初始化相机
        // this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.1, 2000);
        // this.camera.position.set(800, 300, 800);
        // this.camera.lookAt(this.scene.position);
       
        // //渲染
        // this.renderer = new THREE.WebGLRenderer({
        //   alpha: true,
        // });
        // //会在body里面生成一个canvas标签,
        // this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        // this.renderer.setSize(window.innerWidth, window.innerHeight);

        // const container = document.getElementById('container');
        // container.appendChild(this.renderer.domElement);
        // //标注渲染
        // this.labelRenderer = new CSS2DRenderer();
        // this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        // this.labelRenderer.domElement.style.position = 'absolute';
        // this.labelRenderer.domElement.style.top = 0;
        // container.appendChild(this.labelRenderer.domElement);
        // window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      //three.js 状态插件
      initStats(){
        this.stats = new Stats();
        this.stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
      },
      //参数调试工具初始化
      initDatUI(){
        this.gui = new dat.GUI();
        this.gui.add(datUI,'message').name('消息');
        this.gui.add(datUI,'speed',-20,20);
        this.gui.add(datUI,'displayOutline');
      },
      //轨道控制器
      // initOrbitControls(){
      //   //初始化控制器-轨道控制器
      //   this.controls = new OrbitControls(this.camera);
      //   this.controls.target.set(0, 0, 0);
      //   //视角距离
      //   this.controls.minDistance = 80;
      //   this.controls.maxDistance = 500;
      //   this.controls.maxPolarAngle = Math.PI / 3;
      //   //旋转速度
      //   this.controls.rotateSpeed = 5;
      //   //变焦速度
      //   this.controls.zoomSpeed = 3;
      //   //平移速度
      //   this.controls.panSpeed = 0.8;
      //   //是否不变焦
      //   this.controls.noZoom = false;
      //   //是否不平移
      //   this.controls.noPan = false;
      //   //是否开启自动旋转
      //   this.controls.autoRotate = true;
      //   //围绕目标旋转的速度将有多快，默认值为2.0
      //   this.controls.autoRotateSpeed =  datUI.speed;
      //   //是否开启移动惯性
      //   this.controls.staticMoving = false;
      //   //动态阻尼系数 就是灵敏度
      //   this.controls.dynamicDampingFactor = 0.3;

      //   this.controls.update();
      // },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
      },
      // animate() {
      //   this.stats.begin();
      //   this.controls.autoRotateSpeed = datUI.speed;
      //   this.controls.update();
      //   this.render(this.scene,this.camera);
      //   this.stats.end();
      //   requestAnimationFrame(this.animate);
      // },
      render() {
        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render(this.scene, this.camera);
      },
      addObj() {
        //舞台
        new MTLLoader().setPath('/static/model/facilitys/').load('scene.mtl', materials => {
          console.log("materials", materials);
          materials.preload();
          new OBJLoader().setMaterials(materials).setPath('/static/model/facilitys/').load('scene.obj', obj => {
            obj.scale.set(0.4, 0.4, 0.4);
            obj.position.set(-350, 0, 0);
            this.scene.add(obj);
          });
        });
        //加工中心
        new MTLLoader().setPath('/static/model/facilitys/').load('fac.mtl', materials => {
          console.log("materials", materials);
          materials.preload();
          new OBJLoader().setMaterials(materials).setPath('/static/model/facilitys/').load('fac.obj', obj => {
            obj.scale.set(0.4, 0.4, 0.4);
            obj.position.set(0, 0, 10);
            this.scene.add(obj);
          });
        });
        //卷圆机
        new MTLLoader().setPath('/static/model/facilitys/').load('fac-02.mtl', materials => {
          console.log("materials", materials);
          materials.preload();
          new OBJLoader().setMaterials(materials).setPath('/static/model/facilitys/').load('fac-02.obj', obj => {
            obj.scale.set(0.4, 0.4, 0.4);
            obj.position.set(100, 0, 10);
            this.scene.add(obj);
          });
        });
      },
      addSprite(x, y, z, image, loc, text, Mash, callback) {
        //添加div标签
        this.biaozhudiv = document.createElement('div');
        //添加图标标签
        this.img = document.createElement('img');
        this.img.src = image;
        this.img.style.marginLeft = loc + 'px';
        this.biaozhudiv.className = 'lable';
        //两者的执行顺序
        this.biaozhudiv.textContent = text;
        this.biaozhudiv.appendChild(this.img);
        //标注的样式
        this.biaozhudiv.id = 'biaozhu';
        this.biaozhudiv.style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        this.biaozhudiv.style.fontSize = 15 + 'px';
        this.biaozhudiv.style.fontFamily = 'Georgia,serif';
        this.biaozhudiv.style.cursor = 'pointer';
        this.biaozhudiv.onclick = function () {
          callback(Mash);
        };
        this.biaozhuLabel = new CSS2DObject(this.biaozhudiv);
        this.biaozhuLabel.position.set(x, y, z);
        Mash.add(this.biaozhuLabel);
      },
      //传感器详情界面
      alarmDetail() {
        this.$router.push('alarmPage');
        console.log("跳转到传感器详情界面");
      },
      //点击模块查看信息的3D界面
      viewDetailModel() {
        // this.fov = 80;
        // //改变相机
        // this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
        // this.camera.position.set(-20, 20, 35);
        // this.camera.lookAt(this.scene.position);
        // //控制器
        // this.controls = new OrbitControls(this.camera);
        // this.controls.target.set(0, 0, 0);
        // this.controls.minDistance = 80;
        // this.controls.maxDistance = 400;
        // this.controls.maxPolarAngle = Math.PI / 3;
        // this.controls.update();
        console.log("清除场景");
      }
    }
  }
</script>

<style scoped>

</style>