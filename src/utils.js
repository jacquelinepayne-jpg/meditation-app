import * as THREE from 'three';
import {MeshSurfaceSampler} from 'three/examples/jsm/math/MeshSurfaceSampler.js';


//Variables used to distribute the position of the objects in the InstancedMesh 
let sampler;
const dummy = new THREE.Object3D();
const _position = new THREE.Vector3();
const _normal = new THREE.Vector3();

//Distributes the positions of the objects in the mesh to a random positon (weighted sampling)
export function sample(surface, meshes, count) {

    const vertexCount = surface.geometry.getAttribute( 'position' ).count;

    console.info( 'Sampling ' + count + ' points from a surface with ' + vertexCount + ' vertices...' );

    console.time( '.build()' );

    sampler = new MeshSurfaceSampler( surface )
      .setWeightAttribute('weighted')
      .build();

    console.timeEnd( '.build()' );


    console.time( '.sample()' );

    const scales = new Float32Array(count);

    for ( let i = 0; i < count; i ++ ) {
      scales[ i ] = getRandomFloat( .67, 1.67, 2);
      sampleParticle(i, meshes, scales);
    }

    for ( let j = 0; j<meshes.length; j++){
      let mesh = meshes[j];
      mesh.instanceMatrix.needsUpdate = true;
    }
    
    console.timeEnd( '.sample()' );

  }

//Function that sets each instance's position and scale of the object
function sampleParticle(i, meshes, scales) {

    sampler.sample( _position, _normal );
    _normal.add( _position );
    dummy.scale.set( scales[ i ], scales[ i ], scales[ i ] );
    dummy.position.copy( _position );
    dummy.lookAt( _normal );
    dummy.updateMatrix();

    for ( let j = 0; j<meshes.length; j++){
      let mesh = meshes[j];
      mesh.setMatrixAt( i, dummy.matrix );
    }

  }

function getRandomFloat(min, max, decimals) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
}