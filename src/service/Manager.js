export const setScene = data => {
  // let option = { title: { text: "設備評級總攬" }, series: [] };
  // let serie = { type: "pie", align: "left" };
  // serie.radius = [60, 100];
  // serie.data = forEachPie(data);
  // serie.label = { formatter: pieFormatter };
  // option.legend = { right: 0, top: 50, type: "scroll", orient: "vertical" };
  // option.grid = grid;
  // option.tooltip = {};
  // option.series.push(serie);
  // return option;
    data.scene = new THREE.Scene();
    data.scene.add(new THREE.AmbientLight(0x999999));//环境光
    data.light = new THREE.DirectionalLight(0xdfebff, 0.40);//从正上方（不是位置）照射过来的平行光，0.45的强度
    data.light.position.set(50, 300, 100);
    data.light.position.multiplyScalar(0.3);
    data.scene.add(new THREE.AxesHelper(250));
    data.scene.add(this.light);
    //初始化相机
    data.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.1, 2000);
    data.camera.position.set(800, 300, 800);
    data.camera.lookAt(this.scene.position);
  
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
   
};