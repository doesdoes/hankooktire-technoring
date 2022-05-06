import * as THREE from 'three'
import { StageObject } from './class/StageObject.js'
import { STATE, ASSETS } from './global.js'

import * as SCENE_PROPERTIES from './stageObjects/sceneProperties.js'

export function loadStage( sceneName ) {
  switch (sceneName) {
    case 'main':
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 )
      directionalLight.position.set(-5, 6, -3)

      let d = 10
      directionalLight.shadow.camera.left = - d
      directionalLight.shadow.camera.right = d
      directionalLight.shadow.camera.top = d
      directionalLight.shadow.camera.bottom = - d
      directionalLight.shadow.mapSize.width = 4096
      directionalLight.shadow.mapSize.height = 4096
      directionalLight.castShadow = true

      STATE.WEBGL.scene.add( directionalLight )

      // const drHelper = new THREE.DirectionalLightHelper( directionalLight, 1, '#0324fc' )
      // STATE.WEBGL.scene.add( drHelper )

      const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x787878, 0.5 )
      STATE.WEBGL.scene.add( hemisphereLight );

      // const hemiHelper = new THREE.HemisphereLightHelper( hemisphereLight, 0.5, '#0324fc' )
      // STATE.WEBGL.scene.add( hemiHelper )

      const SCENE_MESH = ASSETS.MAIN.MODEL_FILES.find( obj => { return obj.name === "scene" } )
      const SCENE_OBJECT = new StageObject({
        originalObject: SCENE_MESH.asset.scene,
        clonedObject: SCENE_MESH.asset.scene.clone(),
        objectName: 'scene',
        definition: SCENE_PROPERTIES,
      })

      SCENE_OBJECT.clone.traverse(child => {
        if(child.isMesh){
          child.receiveShadow = true
          child.castShadow = true
        }
      })      
      
      STATE.WEBGL.scene.add(SCENE_OBJECT.clone)
      break
  }
}

export function toggleStages( toggle, sceneName ) {
  let stagesObjects = STATE.WEBGL.scene.children.filter(function (obj) {return obj.name === sceneName})

  if (stagesObjects != undefined) {
    for (let stagesObject of stagesObjects) {
      toggle ? stagesObject.visible = true : stagesObject.visible = false
    }
  }
}