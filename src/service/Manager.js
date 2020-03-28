import * as THREE from "three";
import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
import Stats from 'stats-js';
import * as dat from 'dat.gui';
export const setScene = data => {
    data.scene = new THREE.Scene();
    data.scene.add(new THREE.AmbientLight(0x999999));//环境光
    data.light = new THREE.DirectionalLight(0xdfebff, 0.40);//从正上方（不是位置）照射过来的平行光，0.45的强度
    data.light.position.set(50, 300, 100);
    data.light.position.multiplyScalar(0.3);
    data.scene.add(new THREE.AxesHelper(250));
    data.scene.add(data.light);
    //初始化相机
    data.camera = new THREE.PerspectiveCamera(data.fov, window.innerWidth / window.innerHeight, 0.1, 2000);
    data.camera.position.set(800, 300, 800);
    data.camera.lookAt(data.scene.position);
        //渲染
    data.renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
        //会在body里面生成一个canvas标签,
    data.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
    data.renderer.setSize(window.innerWidth, window.innerHeight);
        //标注渲染
    data.labelRenderer = new CSS2DRenderer();
    data.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    data.labelRenderer.domElement.style.position = 'absolute';
    data.labelRenderer.domElement.style.top = 0;
    return data
};
export const setObjDemo=(data,demoObj1)=>{
  console.log("添加舞台元素",data,demoObj1)
  let t = new MTLLoader().setPath(demoObj1.path).load(demoObj1.load, materials => {
    console.log("materials", materials);
    materials.preload();
    new OBJLoader().setMaterials(materials).setPath(demoObj1.path).load(demoObj1.dataLoadObj, obj => {
      obj.scale.set(demoObj1.scale);
      obj.position.set(demoObj1.position);
      console.log("元素",obj)
      data.scene.add(obj);
    });
  });
  return t;
}