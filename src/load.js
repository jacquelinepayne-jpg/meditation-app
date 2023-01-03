import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { sample} from './utils';

// Function that loads each mesh of the uploaded grass object as a separate Instanced Mesh
export function loadGrass(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/grass/scene.gltf', function ( gltf ) {

      const _mesh1 = gltf.scene.getObjectByName('Grass_20__0');

      let grassGeometry1 = _mesh1.geometry.clone().rotateX(-Math.PI/2);
      
      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.07, 0.07, 0.07 ) );
  
      grassGeometry1.applyMatrix4( defaultTransform );

      let grassMaterial1 = _mesh1.material;

      let grassMesh1 = new THREE.InstancedMesh( grassGeometry1, grassMaterial1, count );

      // Instance matrices will be updated every frame.
      grassMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

      let meshes = [grassMesh1];

      sample(surface, meshes, count);

      scene.add( grassMesh1.rotateX(Math.PI/2));

    });

  }

// Function that loads each mesh of the uploaded bush object as a separate Instanced Mesh
export function loadBush(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/bush/scene.gltf', function ( gltf ) {

      const _mesh1 = gltf.scene.getObjectByName('Plane_Plant1_0');


      let bushGeometry1 = _mesh1.geometry.clone().rotateX(Math.PI);
      

      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.2, 0.2, 0.2 ) );
  
      bushGeometry1.applyMatrix4( defaultTransform );

      let bushMaterial1 = _mesh1.material;


      let bushMesh1 = new THREE.InstancedMesh( bushGeometry1, bushMaterial1, count );


      // Instance matrices will be updated every frame.
      bushMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

      let meshes = [bushMesh1];

      sample(surface, meshes, count);

      scene.add( bushMesh1.rotateX(Math.PI/2));
    });

  }

// Function that loads each mesh of the uploaded tree object as a separate Instanced Mesh
export function loadTrees(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/oak_tree/scene.gltf', function ( gltf ) {
  
      const _mesh1 = gltf.scene.getObjectByName("tree_Oak_Bark_0");
      const _mesh2 = gltf.scene.getObjectByName('leaves_Leaf_0');
     

      let treeGeometry1 = _mesh1.geometry.clone();
      let treeGeometry2 = _mesh2.geometry.clone();
      
      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.75, 0.75, 0.75 ) );
  
      treeGeometry1.applyMatrix4( defaultTransform );
      treeGeometry2.applyMatrix4( defaultTransform );

     
      let treeMaterial1 = _mesh1.material;
      let treeMaterial2 = _mesh2.material;
     

      let treeMesh1 = new THREE.InstancedMesh( treeGeometry1, treeMaterial1, count);
      let treeMesh2 = new THREE.InstancedMesh( treeGeometry2, treeMaterial2, count);

      // Instance matrices will be updated every frame.
      treeMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      treeMesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

      let meshes = [treeMesh1, treeMesh2];

      sample(surface, meshes, count);

      scene.add( treeMesh1.rotateX(-Math.PI/2));
      scene.add( treeMesh2.rotateX(-Math.PI/2));
       
      
    });

  }

// Function that loads each mesh of the uploaded tree object as a separate Instanced Mesh
export function loadTrees2(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/birch_trees/scene.gltf', function ( gltf ) {
  
      const _mesh1 = gltf.scene.getObjectByName("birch-1_bark_0");
      const _mesh2 = gltf.scene.getObjectByName('birch-1_leaves_0');
     

      let treeGeometry1 = _mesh1.geometry.clone();
      let treeGeometry2 = _mesh2.geometry.clone();
      
      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 2, 2, 2) );
  
      treeGeometry1.applyMatrix4( defaultTransform );
      treeGeometry2.applyMatrix4( defaultTransform );
     
      let treeMaterial1 = _mesh1.material;
      let treeMaterial2 = _mesh2.material;
     

      let treeMesh1 = new THREE.InstancedMesh( treeGeometry1, treeMaterial1, count);
      let treeMesh2 = new THREE.InstancedMesh( treeGeometry2, treeMaterial2, count);


      // Instance matrices will be updated every frame.
      treeMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      treeMesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      
      let meshes = [treeMesh1, treeMesh2];

      sample(surface, meshes, count);

      scene.add( treeMesh1.rotateX(-Math.PI/2));
      scene.add( treeMesh2.rotateX(-Math.PI/2));
      
    });

  }

// Function that loads each mesh of the uploaded flower object as a separate Instanced Mesh
  export function loadFlowers(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/calendula_flower/scene.gltf', function ( gltf ) {
  
      const _mesh1 = gltf.scene.getObjectByName("calendula-flower_green_0");
      const _mesh2 = gltf.scene.getObjectByName('calendula-flower_orange_0');
      const _mesh3 = gltf.scene.getObjectByName('calendula-flower_yellow_0');

     
      let flowerGeometry1 = _mesh1.geometry.clone();
      let flowerGeometry2 = _mesh2.geometry.clone();
      let flowerGeometry3 = _mesh3.geometry.clone();

      
      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.4, 0.4, 0.4 ) );
  
      flowerGeometry1.applyMatrix4( defaultTransform );
      flowerGeometry2.applyMatrix4( defaultTransform );
      flowerGeometry3.applyMatrix4( defaultTransform );

     
      let flowerMaterial1 = _mesh1.material;
      let flowerMaterial2 = _mesh2.material;
      let flowerMaterial3 = _mesh3.material;
     

      let flowerMesh1 = new THREE.InstancedMesh( flowerGeometry1, flowerMaterial1, count);
      let flowerMesh2 = new THREE.InstancedMesh( flowerGeometry2, flowerMaterial2, count);
      let flowerMesh3 = new THREE.InstancedMesh( flowerGeometry3, flowerMaterial3, count);


      // Instance matrices will be updated every frame.
      flowerMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      flowerMesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      flowerMesh3.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

      let meshes = [flowerMesh1, flowerMesh2, flowerMesh3];

      sample(surface, meshes, count);

      scene.add( flowerMesh1.rotateX(-Math.PI/2));
      scene.add( flowerMesh2.rotateX(-Math.PI/2));
      scene.add( flowerMesh3.rotateX(-Math.PI/2));
       
    });

  }

// Function that loads each mesh of the uploaded flower object as a separate Instanced Mesh
export function loadFlowers2(surface, count, scene){
    const loader = new GLTFLoader();
  
    loader.load( './static/models/margarita_flower/scene.gltf', function ( gltf ) {
  
      const _mesh1 = gltf.scene.getObjectByName("margarita_flower_green_0");
      const _mesh2 = gltf.scene.getObjectByName('margarita_flower_white_0');
      const _mesh3 = gltf.scene.getObjectByName('margarita_flower_yellow_0');

     
      let flowerGeometry1 = _mesh1.geometry.clone();
      let flowerGeometry2 = _mesh2.geometry.clone();
      let flowerGeometry3 = _mesh3.geometry.clone();

      
      const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.4, 0.4, 0.4 ) );
  
      flowerGeometry1.applyMatrix4( defaultTransform );
      flowerGeometry2.applyMatrix4( defaultTransform );
      flowerGeometry3.applyMatrix4( defaultTransform );

     
      let flowerMaterial1 = _mesh1.material;
      let flowerMaterial2 = _mesh2.material;
      let flowerMaterial3 = _mesh3.material;
     

      let flowerMesh1 = new THREE.InstancedMesh( flowerGeometry1, flowerMaterial1, count);
      let flowerMesh2 = new THREE.InstancedMesh( flowerGeometry2, flowerMaterial2, count);
      let flowerMesh3 = new THREE.InstancedMesh( flowerGeometry3, flowerMaterial3, count);


      // Instance matrices will be updated every frame.
      flowerMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      flowerMesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      flowerMesh3.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

      let meshes = [flowerMesh1, flowerMesh2, flowerMesh3];

      sample(surface, meshes, count);

      scene.add( flowerMesh1.rotateX(-Math.PI/2));
      scene.add( flowerMesh2.rotateX(-Math.PI/2));
      scene.add( flowerMesh3.rotateX(-Math.PI/2));
       
    });

  }

// Function that loads each mesh of the uploaded rock object as a separate Instanced Mesh
      export function loadSmallRocks(surface, count, scene){
        const loader = new GLTFLoader();
      
        loader.load( './static/models/small_rocks/scene.gltf', function ( gltf ) {
      
          const _mesh1 = gltf.scene.getObjectByName("smallrock2_smallrocks_0");
          const _mesh2 = gltf.scene.getObjectByName('smallrock3_smallrocks_0');
          const _mesh3 = gltf.scene.getObjectByName('smallrock4_smallrocks_0');
          const _mesh4 = gltf.scene.getObjectByName('smallrock5_smallrocks_0');

    
         
          let rockGeometry1 = _mesh1.geometry.clone();
          let rockGeometry2 = _mesh2.geometry.clone();
          let rockGeometry3 = _mesh3.geometry.clone();
          let rockGeometry4 = _mesh4.geometry.clone();
    
          
          const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.003, 0.003, 0.003 ) );
      
          rockGeometry1.applyMatrix4( defaultTransform );
          rockGeometry2.applyMatrix4( defaultTransform );
          rockGeometry3.applyMatrix4( defaultTransform );
          rockGeometry4.applyMatrix4( defaultTransform );
    
         
          let rockMaterial1 = _mesh1.material;
          let rockMaterial2 = _mesh2.material;
          let rockMaterial3 = _mesh3.material;
          let rockMaterial4 = _mesh4.material;
         
    
          let rockMesh1 = new THREE.InstancedMesh( rockGeometry1, rockMaterial1, count);
          let rockMesh2 = new THREE.InstancedMesh( rockGeometry2, rockMaterial2, count);
          let rockMesh3 = new THREE.InstancedMesh( rockGeometry3, rockMaterial3, count);
          let rockMesh4 = new THREE.InstancedMesh( rockGeometry4, rockMaterial4, count);
    
    
          // Instance matrices will be updated every frame.
          rockMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
          rockMesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
          rockMesh3.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
          rockMesh4.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

    
          let meshes = [rockMesh1, rockMesh2, rockMesh3, rockMesh3];
    
          sample(surface, meshes, count);
    
          scene.add( rockMesh1.rotateX(-Math.PI/2));
          scene.add( rockMesh2.rotateX(-Math.PI/2));
          scene.add( rockMesh3.rotateX(-Math.PI/2));
          scene.add( rockMesh4.rotateX(-Math.PI/2));
           
        });
    
      }

// Function that loads each mesh of the uploaded rock object as a separate Instanced Mesh
export function loadBigRock(surface, count, scene){
    const loader = new GLTFLoader();

    loader.load( './static/models/rocks/scene.gltf', function ( gltf ) {

        const _mesh1 = gltf.scene.getObjectByName("pCube1_lambert2_0");


        let rockGeometry1 = _mesh1.geometry.clone();

        
        const defaultTransform = new THREE.Matrix4().multiply( new THREE.Matrix4().makeScale( 0.75, 0.75, 0.75) );

        rockGeometry1.applyMatrix4( defaultTransform );

        
        let rockMaterial1 = _mesh1.material;

        let rockMesh1 = new THREE.InstancedMesh( rockGeometry1, rockMaterial1, count);


        // Instance matrices will be updated every frame.
        rockMesh1.instanceMatrix.setUsage( THREE.DynamicDrawUsage );


        let meshes = [rockMesh1];

        sample(surface, meshes, count);

        scene.add( rockMesh1.rotateX(-Math.PI/2));
          
  });

}