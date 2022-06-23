import * as THREE from 'three'

export const STATE = {
  IS_MOBILE: false,
  CURRENT_SCENE: {
    NAME: '',
    VISIBLE: false
  },
  ENABLE_MOUSE_INTERACTION: false,
  ENABLE_RENDERING: false,
  UV_ANIMATED_OBJECTS: {
    clouds: {
      mesh: null,
      animate: function() { 
        if(this.mesh.material.map != undefined) this.mesh.material.map.offset.x += 0.0001 
      }
    }
  },
  IS_FOCUSED: false,
  ZONE_FOCUS:{
    reset: {
      position: new THREE.Vector3(0,0,0),
      target: new THREE.Vector3(0,0,0),
    },
    highSpeedOval: {
      position: new THREE.Vector3(5.1,2.9,-0.3),
      target: new THREE.Vector3(0,0,0),
    },
    vehicleDynamicsArea: {
      position: new THREE.Vector3(10.9,2.5,-3.1),
      target: new THREE.Vector3(0,0,0),
    },
    dryHandlingCircuit: {
      position: new THREE.Vector3(6,2.9,4.7),
      target: new THREE.Vector3(0,0,0),
    },
    wetHandlingCircuit: {
      position: new THREE.Vector3(-4.85,5.3,0.2),
      target: new THREE.Vector3(0,0,0),
    },
    rideTracks: {
      position: new THREE.Vector3(-0.9,2.8,-4.7),
      target: new THREE.Vector3(0,0,0),
    },
    braking: {
      position: new THREE.Vector3(3.4,1.4,-0.4),
      target: new THREE.Vector3(0,0,0),
    },
    passByNoise: {
      position: new THREE.Vector3(4.9,0.63,-0.4),
      target: new THREE.Vector3(0,0,0),
    },
    generalRoad: {
      position: new THREE.Vector3(-1.7,4.2,5.6),
      target: new THREE.Vector3(0,0,0),
    },
    offRoad: {
      position: new THREE.Vector3(8.75,3,5.8),
      target: new THREE.Vector3(0,0,0),
    },
    gravelRoad: {
      position: new THREE.Vector3(-8,3,3),
      target: new THREE.Vector3(0,0,0),
    },
    officeControlTower: {
      position: new THREE.Vector3(3.4,0.9,1.8),
      target: new THREE.Vector3(0,0,0),
    },
  }
}

export const ASSETS = {
  MAIN: {
    MODEL_FILES: [
      {
        name: 'scene',
        loaded: false,
        // path : 'glb/scene.glb',
        // path : 'glb/technoring.glb',
        path : 'glb/technoring-editing-2.glb',
        asset: null
      }
    ],
    TEXTURES_FILES: []
  },
}
