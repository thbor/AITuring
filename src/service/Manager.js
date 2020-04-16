import * as THREE from "three";
export const setObjDemo=(data,demoObj1)=>{
  new MTLLoader().setPath(demoObj1.path).load(demoObj1.load, materials => {
    console.log("materials", materials);
    materials.preload();
    new OBJLoader().setMaterials(materials).setPath(demoObj1.path).load(demoObj1.dataLoadObj, obj => {
      obj.scale.set(demoObj1.scale.x,demoObj1.scale.y,demoObj1.scale.z);
      obj.position.set(demoObj1.position.x,demoObj1.position.y,demoObj1.position.z);
      console.log("元素",obj)
      data.scene.add(obj);
    });
  });
  
}
export const addObj=(x,y,z)=>{
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
  return line
  
}