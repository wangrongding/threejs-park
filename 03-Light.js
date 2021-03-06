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

  //创建平面
  //定义平面的大小
  let planeGeometry = new THREE.PlaneGeometry(60, 60);
  // 通过创建材质对象来设置平面的外观,这里使用的是基本材质
  let planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
  });
  //将大小和外观组合进Mesh对象,赋值给平面对象
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //平面绕x轴旋转九十度
  plane.rotation.x = -0.5 * Math.PI;
  // 定义其在场景中的位置
  plane.position.set(0, 0, 0);
  //添加平面到场景中
  scene.add(plane);

  // 定义方块大小
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  //定义方块外观
  let cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  });
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  //设置方块位置
  cube.position.set(5, 5, 5);
  // 添加到场景中
  scene.add(cube);

  //定义球体大小
  let sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
  //定义球体外观
  let sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
  });
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(-15, 4, 4);
  scene.add(sphere);

  //======================== main ==========================
  /* 需要注意的是：MeshBasicMaterial材质不会对光源有任何反应，基本材质只会使用指定的颜色来渲染物体 */

  //定义光源
  let spotLight = new THREE.SpotLight(0xffffff);
  //设置光源位置
  spotLight.position.set(10, 40, 40);
  // 启用阴影功能
  spotLight.castShadow = true;
  //将光源添加进场景
  scene.add(spotLight);

  renderer.shadowMapEnabled = true;
  plane.receiveShadow = true;
  cube.castShadow = true;
  sphere.castShadow = true;

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
