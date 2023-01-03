import { useEffect, useState } from 'react'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls.js'
import {loadFlowers, loadFlowers2, loadTrees, loadTrees2, loadGrass, loadBush, loadSmallRocks, loadBigRock} from "./load.js";

function App() {
  let camera, scene, renderer, stats, controls;

  const clock = new THREE.Clock();
  
  const [audio, setAudio] = useState("./static/audio/day.wav");


  const api = {
    grassCount: 1000,
    treeCount: 20,
    flowerCount: 400,
    bushCount: 250,
    smallRockCount: 500,
    bigRockCount: 30,
    surfaceColor: 0x072400,
    backgroundColor: 0x87ceeb 
  };

  // Create Surface Object that is a 100x100 Plane
  const surfaceGeometry = new THREE.PlaneBufferGeometry(100, 100, 8, 8).toNonIndexed();
  const surfaceMaterial = new THREE.MeshLambertMaterial( { color: api.surfaceColor, wireframe: false } );
  const surface = new THREE.Mesh( surfaceGeometry, surfaceMaterial );
  
  useEffect(()=>{
      //Initalizes and animates scene
      init();
      animate();

      // Loads Grass Objects
      loadGrass(surface, api.grassCount, scene);
      
      // Loads Tree Objects
      loadTrees(surface, api.treeCount, scene);
      loadTrees2(surface, api.treeCount, scene);

      // Loads Flower Objects
      loadFlowers(surface, api.flowerCount, scene);
      loadFlowers2(surface, api.flowerCount, scene);

      // Loads Bush Objects
      loadBush(surface, api.bushCount, scene);
    
      // Loads Rock OBjects
      loadSmallRocks(surface, api.smallRockCount, scene);
      loadBigRock(surface, api.bigRockCount, scene);

  }, []);

  // Function that initializes three.js scene with cameras, renderer, lights, fog, controls, gui controls etc.
  function init() {
  
    //Set up Renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //Set up the scene with blue background 
    scene = new THREE.Scene();
    scene.background = new THREE.Color(api.backgroundColor);

    //Set up fog
    let fogEffect = new THREE.Fog( scene.background, 0, 150 );
    scene.fog = fogEffect;
    
    //Set up Camera and camera position
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.set( 0, 5, 0);
    camera.lookAt( -50, 3, -10 );

    //Add hemisphere light to scene 
    const hemisphereLight = new THREE.HemisphereLight();
    scene.add( hemisphereLight );

    //Add directionalLIght
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight.castShadow = true;
    scene.add( directionalLight );

    //Add surface to scene
    scene.add( surface.rotateX(-Math.PI/2) );

    // Add movement controls 
    controls = new FirstPersonControls( camera, renderer.domElement );
    controls.movementSpeed = 5;
    controls.lookSpeed = 0.05;
    controls.constrainVertical = true;

    // Add gui controls
    const gui = new GUI();

    // Holds the functions that toggles between the setting for the time of day
    var obj = {
      dawn: function(){
        scene.background.set(0xeecfc9);
        hemisphereLight.intensity = .78;
        hemisphereLight.color.set(0xff61d7);
        directionalLight.intensity = .9;
        directionalLight.color.set(0xd87aff);
        fogEffect = new THREE.Fog( scene.background, 0, 75 );
        scene.fog = fogEffect;
        setAudio("./static/audio/dawn.mp3");
      },
      day: function(){
        scene.background.set(api.backgroundColor);
        hemisphereLight.intensity = 1;
        hemisphereLight.color.set(0xffffff);
        directionalLight.intensity = 1.5;
        fogEffect = new THREE.Fog( scene.background, 0, 150);
        scene.fog = fogEffect;
        setAudio("./static/audio/day.wav");
      },
      dusk: function()
      {
        scene.background.set(0xffc588);
        hemisphereLight.intensity = .05;
        hemisphereLight.color.set(0xff3a2d);
        directionalLight.intensity = .9;
        directionalLight.color.set(0xffe800);
        fogEffect = new THREE.Fog( scene.background, 0, 100);
        scene.fog = fogEffect;
        setAudio("./static/audio/dusk.wav");
      },
      night: function(){
        scene.background.set(0x1f302d);
        hemisphereLight.intensity = .33;
        hemisphereLight.color.set(0x0041ff);
        directionalLight.intensity = 0;
        fogEffect = new THREE.Fog( scene.background, 0, 100);
        scene.fog = fogEffect;
        setAudio("./static/audio/night.wav");
      }    
    }

    // Adds each function as button to the gui controls
    gui.add(obj, "dawn").name("Dawn Mode");
    gui.add(obj, "day").name("Day Mode");
    gui.add(obj, "dusk").name("Dusk Mode");
    gui.add(obj, "night").name("Night Mode");
      
    //Add Stats (Frames per seconds)
    stats = new Stats();
    document.body.appendChild( stats.dom );

    //Window Resizer
    window.addEventListener( 'resize', onWindowResize );

  }

  //Function that resizes window/controls
  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    controls.handleResize();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  // Animate function
  function animate() {
    //If mouse is clicked than the controls will update the view of the camera
    if (controls.mouseDragOn){
      controls.update( clock.getDelta() );
    }

    requestAnimationFrame( animate );

    render();

    stats.update();

  }

  //Render function
  function render() {
    renderer.render( scene, camera );
  }
  
  return (
    <div>
      <canvas id="webgl"/>
      <audio src={audio} controls autoPlay="true" loop="true"/>
    </div>
  )
}

export default App