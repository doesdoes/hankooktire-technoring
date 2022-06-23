import * as THREE from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { StageObject } from './class/StageObject.js'
import { STATE, ASSETS } from './global.js'

import * as SCENE_PROPERTIES from './stageObjects/sceneProperties.js'

import { sendGLCustomEvent } from './class/GLCustomEvent.js'

export function loadStage( sceneName ) {
  switch (sceneName) {
    case 'main':
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 )
      directionalLight.position.set(-5, 6, -3)

      let d = 10
      directionalLight.shadow.camera.left = - d
      directionalLight.shadow.camera.right = d
      directionalLight.shadow.camera.top = d
      directionalLight.shadow.camera.bottom = - d
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      directionalLight.castShadow = true      

      STATE.WEBGL.scene.add( directionalLight )

      // const drHelper = new THREE.DirectionalLightHelper( directionalLight, 1, '#0324fc' )
      // STATE.WEBGL.scene.add( drHelper )

      const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x787878, 0.3 )
      STATE.WEBGL.scene.add( hemisphereLight )

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

        if (child.userData.type == 'POI') {
          // POI buttons
          const POI = new CSS2DObject( document.getElementById(child.name) )
          POI.position.copy(child.position)
          SCENE_OBJECT.clone.add( POI )

          child.getWorldPosition(STATE.ZONE_FOCUS[child.name].target)          

          POI.element.addEventListener('click', function(){
            focusOnRegion(child.name)
            STATE.IS_FOCUSED = true 
          })
        }

        if(child.name == 'Plane018') STATE.UV_ANIMATED_OBJECTS.clouds.mesh = child
      })      
      
      STATE.WEBGL.scene.add(SCENE_OBJECT.clone)

      // map button
      document.getElementById('map-button').addEventListener('click', function(){
        
        console.log('== close popup ==')
        sendGLCustomEvent({msg: 'reset'});
        focusOnRegion('reset')
        STATE.IS_FOCUSED = false 
      })

      window.addEventListener('UICustomEvent', function(e) {
        if(e.detail.msg === 'reset') {
          console.log('== close popup ==')
          focusOnRegion('reset')
          STATE.IS_FOCUSED = false 
        } else {
          focusOnRegion(e.detail.msg)
          STATE.IS_FOCUSED = true
        }
      })

      STATE.WEBGL.cameraControls.addEventListener('control', function() {
        const d = STATE.WEBGL.camera.position.distanceTo(new THREE.Vector3(0, 0, 0))
        sendGLCustomEvent({distance: d});
      })

      break
  }
}

export function focusOnRegion( _region ){

  switch (_region) {
    case 'officeControlTower':
      STATE.WEBGL.cameraControls.minDistance = 2
      break;
    case 'reset': 
      STATE.WEBGL.cameraControls.minDistance = 10
      break;
  
    default:
      STATE.WEBGL.cameraControls.minDistance = 5
      break;
  }

  STATE.WEBGL.cameraControls.setLookAt( 
    STATE.ZONE_FOCUS[_region].position.x,
    STATE.ZONE_FOCUS[_region].position.y,
    STATE.ZONE_FOCUS[_region].position.z,
    STATE.ZONE_FOCUS[_region].target.x,
    STATE.ZONE_FOCUS[_region].target.y,
    STATE.ZONE_FOCUS[_region].target.z,
    true 
  ).then(() => {
    if(STATE.IS_FOCUSED){
      console.log('== open popup ==')
      sendGLCustomEvent({msg: _region});
    }
  })
}

export function toggleStages( toggle, sceneName ) {
  let stagesObjects = STATE.WEBGL.scene.children.filter(function (obj) {return obj.name === sceneName})

  if (stagesObjects != undefined) {
    for (let stagesObject of stagesObjects) {
      toggle ? stagesObject.visible = true : stagesObject.visible = false
    }
  }
}