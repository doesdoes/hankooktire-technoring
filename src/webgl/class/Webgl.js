import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import CameraControls from 'camera-controls'

CameraControls.install( { THREE: THREE } )

export class Webgl{
  constructor(_options){
    this.parentContainerClass = _options.parentContainerClass
    this.container = _options.container
    this.sceneOptions = _options.sceneOptions
    this.cameraOptions = _options.cameraOptions
    this.isDebug = _options.isDebug
    this.mouse = new THREE.Vector2(0,0)
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    this.canvasWidth = document.querySelector(this.parentContainerClass).offsetWidth
    this.canvasHeight = document.querySelector(this.parentContainerClass).offsetHeight

    this.init()
  }

  init(){
    //scene
    this.scene = new THREE.Scene()
    if (this.sceneOptions.backgroundColor != undefined)
      this.scene.background = new THREE.Color(this.sceneOptions.backgroundColor)
    
    //camera
    this.camera = new THREE.PerspectiveCamera(
      this.cameraOptions.fov,
      this.canvasWidth / this.canvasHeight,
      this.cameraOptions.near,
      this.cameraOptions.far
    )
    this.camera.position.set(this.cameraOptions.x, this.cameraOptions.y, this.cameraOptions.z)
    this.camera.name = 'mainCamera'
    this.scene.add(this.camera)

    //renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  	this.renderer.setPixelRatio(this.pixelRatio)
  	this.renderer.setSize(this.canvasWidth, this.canvasHeight)
  	this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputEncoding = THREE.LinearEncoding
    this.container.appendChild(this.renderer.domElement)

    //css renderer
    this.labelRenderer = new CSS2DRenderer()
    this.labelRenderer.setSize( this.canvasWidth, this.canvasHeight )
    this.labelRenderer.domElement.style.position = 'absolute'
    this.labelRenderer.domElement.style.top = '0px'
    this.labelRenderer.domElement.style.pointerEvents = 'none'
    document.body.appendChild( this.labelRenderer.domElement )


    //controls
    this.cameraControls = new CameraControls( this.camera, this.renderer.domElement )
    this.cameraControls.minDistance = 100
    this.cameraControls.maxDistance = 100
    this.cameraControls.truckSpeed = 0
    this.cameraControls.mouseButtons.wheel = CameraControls.ACTION.NONE

    this.userDragging = false
    this.disableAutoRotate = false

    const onRest = () => {
      this.cameraControls.removeEventListener('rest', onRest )
      this.userDragging = false
      this.disableAutoRotate = false
    }
    this.cameraControls.addEventListener('controlstart', () => {
      this.cameraControls.removeEventListener( 'rest', onRest )
      this.userDragging = true
      this.disableAutoRotate = true
    })
    this.cameraControls.addEventListener('controlend', () => {
      if ( this.cameraControls.active ) {
        this.cameraControls.addEventListener( 'rest', onRest )
      } else { onRest() }
    })
    this.cameraControls.addEventListener('transitionstart', () => {
      if ( this.userDragging ) return
      this.disableAutoRotate = true
      this.cameraControls.addEventListener( 'rest', onRest )
    })

    //listeners
	  window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize(){
    let newWidth = document.querySelector(this.parentContainerClass).offsetWidth
    let newHeight = document.querySelector(this.parentContainerClass).offsetHeight

    this.camera.aspect = newWidth / newHeight
  	this.camera.updateProjectionMatrix()

    this.renderer.setSize(newWidth, newHeight)
    this.labelRenderer.setSize(newWidth, newHeight)
  }
}
