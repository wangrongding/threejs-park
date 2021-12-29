function init() {
  console.log(123);
  //定义场景
  let scene = new THREE.Scene();
  //定义摄像机
  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  //定义渲染器
  let renderer = new THREE.WebGLRenderer();
  //设置场景的背景颜色
  renderer.setClearColor(new THREE.Color(0x000000));
  //设置场景大小
  renderer.setSize(window.innerWidth, window.innerHeight);

  //创建坐标系(x,y,z; x红色,y绿色,z蓝色),设置轴线粗细值为20
  let axes = new THREE.AxesHelper(20);
  //将轴线添加到场景中
  scene.add(axes);

  //设置相机位置(x,y,z)
  camera.position.set(50, 50, 50);
  // 通过lookAt将摄像机指向场景中心,(默认指向0,0,0)
  camera.lookAt(scene.position);
  // 将渲染结果添加到dom元素中
  document.getElementById("webgl-output").appendChild(renderer.domElement);
  //使用指定的摄像机来渲染场景
  renderer.render(scene, camera);
}
