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
  ZONE_FOCUS:{
    reset: {
      position: new THREE.Vector3(5,12,17),
      target: new THREE.Vector3(0,0,0),
    },
    zone1: {
      position: new THREE.Vector3(4.8,1,3),
      target: new THREE.Vector3(4.8,0.5,0.25),
    },
    zone2: {
      position: new THREE.Vector3(-6,2,3),
      target: new THREE.Vector3(-6,0.5,0.25),
    }
  }
}

export const ASSETS = {
  MAIN: {
    MODEL_FILES: [
      {
        name: 'scene',
        loaded: false,
        path : 'glb/scene.glb',
        asset: null
      }
    ],
    TEXTURES_FILES: []
  },
}
