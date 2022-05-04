import * as THREE from 'three'

export const PROPERTIES = {
  scale: new THREE.Vector3(0.1, 0.1, 0.1),
  position: new THREE.Vector3(0, 0, 0),
  rotation: new THREE.Euler(0, 0, 0),
  texturesQuality: "medium"
}

export const MATERIALS = {
  "asphalt.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Asphalt_s.jpg",
    "mapTiling": { 
      "repeatX": 10,
      "repeatY": 10,
    },
  },
  "asphaltDark.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Asphalt_dark_s.jpg",
    "mapTiling": { 
      "repeatX": 10,
      "repeatY": 10,
    },
  },
  "asphaltLight.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "TexturesCom_Asphalt.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
  "concrete.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Concrete_s.jpg",
    "mapTiling": { 
      "repeatX": 10,
      "repeatY": 10,
    },
  },
  "buildingGrass.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "UnderG_grass_light__s.jpg",
    "mapTiling": { 
      "repeatX": 10,
      "repeatY": 10,
    },
  },
  "bustStopBase.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
  },
  "busStopRoof.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Buildings_grid_s.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
  "gate.Material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(51,51,51)"),
  },
  "concreteOutside.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Concrete_s.jpg",
    "mapTiling": { 
      "repeatX": 5,
      "repeatY": 5,
    },
  },
  "outsideGrass.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Concrete_s.jpg",
    "mapTiling": { 
      "repeatX": 5,
      "repeatY": 5,
    },
  },
  "white.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
  },
  "technoringText.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(15,15,15)"),
  },
  "treeOutside.material": { //TO FIX
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "tree_s.png",
    "alphaMap": "tree_s_Opacity.png",
    "transparent": true
  },
  "bumper2.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "TexturesCom_SoilMud0011_1_seamless_S.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
  "bumper.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "TexturesCom_Asphalt.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
  "dirt.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "TexturesCom_Ground_MudCracked.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
  "grass.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Grass.jpg",
    "aoMap": "occ_grass_map.jpg",
    "mapTiling": { 
      "repeatX": 25,
      "repeatY": 25,
    },
    "flipY": false
  },
  "grassInner.material": { //could be merged with grass.material
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "Grass.jpg",
    "aoMap": "occ_grass_map.jpg",
    "mapTiling": { 
      "repeatX": 25,
      "repeatY": 25,
    },
    "flipY": false
  },
  "rock.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "TexturesCom_SoilMud0006_1_seamless_S.jpg",
    "mapTiling": { 
      "repeatX": 30,
      "repeatY": 30,
    },
  },
  "Inside_line_s": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
  },
  "insideLine2.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "road01.png",
  },
  "line3.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(32,32,32)"),
  },
  "grassBorder.material": {
    "type": new THREE.MeshPhongMaterial(),
    "color": new THREE.Color("rgb(255,255,255)"),
    "map": "OffRoad_Grass2.jpg",
    "mapTiling": { 
      "repeatX": 1,
      "repeatY": 1,
    },
  },
} 