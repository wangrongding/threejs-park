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

  //创建坐标系,设置轴线粗细值为20
  let axes = new THREE.AxesHelper(20);
  //将轴线添加到场景中
  scene.add(axes);
  //======================== main ==========================
  //创建平面
  //定义平面的大小
  let planeGeometry = new THREE.PlaneGeometry(40, 40);
  // 通过创建材质对象来设置平面的外观,这里使用的是基本材质
  let planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaaaaa,
  });
  //将大小和外观组合进Mesh对象,赋值给平面对象
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //平面绕x轴旋转九十度
  plane.rotation.x = -0.5 * Math.PI;
  // 定义其在场景中的位置
  plane.position.set(0, 0, 0);
  //添加平面到场景中
  scene.add(plane);

  //======================== main ==========================
  //设置相机位置(x,y,z)
  camera.position.set(-50, 50, 50);
  // 通过lookAt将摄像机指向场景中心,(默认指向0,0,0)
  camera.lookAt(scene.position);
  // 将渲染结果添加到dom元素中
  document.getElementById("webgl-output").appendChild(renderer.domElement);
  //使用指定的摄像机来渲染场景
  renderer.render(scene, camera);
}
