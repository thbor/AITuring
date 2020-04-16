import * as THREE from "three";
import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
import {CSS2DRenderer, CSS2DObject} from 'three-css2drender';
//封裝Obj對象
export const addObj2=(mesh,scene)=>{
       //包含材质
       new MTLLoader().setPath(mesh.path).load(mesh.mtl, materials => {
        materials.preload();
        new OBJLoader().setMaterials(materials).setPath(mesh.path).load(mesh.loadobj, obj => {
          obj.scale.set(mesh.scale.x, mesh.scale.y, mesh.scale.z);
          obj.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
          for(let item of mesh.spriteInfo){
            addSprite(item.x,item.y,item.z,item.image,item.loc,item.text,obj,()=>{})
          }
          scene.add(obj);
        });
      });
}

export const addSprite=(x, y, z, image, loc, text, Mash, callback)=> {
        //添加div标签
        var biaozhudiv = document.createElement('div');
        //添加图标标签
        var img = document.createElement('img');
        img.src = image;
        img.style.marginLeft = loc + 'px';
        biaozhudiv.className = 'lable';
        //两者的执行顺序
        biaozhudiv.textContent = text;
        biaozhudiv.appendChild(img);
        //标注的样式
        biaozhudiv.id = 'biaozhu';
        biaozhudiv.style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        biaozhudiv.style.fontSize = 15 + 'px';
        biaozhudiv.style.fontFamily = 'Georgia,serif';
        biaozhudiv.style.cursor = 'pointer';
        biaozhudiv.onclick = function () {
          callback(Mash);
        };
        var biaozhuLabel = new CSS2DObject(biaozhudiv);
        biaozhuLabel.position.set(x, y, z);
        Mash.add(biaozhuLabel);
        return Mash
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