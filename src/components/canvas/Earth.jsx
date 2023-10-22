import React , {Suspense} from 'react'
import {Canvas}  from "@react-three/fiber";
import {OrbitControls , Preload , useGLTF} from "@react-three/drei";
import Loader from "../Loader.jsx";


const Earth = () => {
  const earth = useGLTF('public/planet/scene.gltf')
  return (
    <primitive object={earth.scene} scale={2.3} position-y={0} rotation-y={0}></primitive>
  )
}
const EarthCanvas =() => {
  return (
      <Canvas shadows frameloop={"demand"} gl={{preserveDrawingBuffer : true}}
      camera={{
        fov :45,
        near : 0.1,
        far : 200,
        position : [-4,3,6]
      }}
      >
        <Suspense fallback={<Loader/>}>
          <OrbitControls autoRotate enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
          />
          <Earth></Earth>
        </Suspense>
      </Canvas>
  )
}

export default EarthCanvas