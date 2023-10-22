import React ,{Suspense }from 'react'
import {Canvas}  from "@react-three/fiber";
import {Decal, Float , OrbitControls , Preload , useTexture , } from "@react-three/drei";
import Loader from "../loader"
import CanvasLoader from "../Loader.jsx";
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
      <>
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow recieveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color={'#fff8eb'}
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal map={decal}
        position={[0,0,1]}
               rotation={[2*Math.PI , 0 ,6.25]}
               flatShading
        ></Decal>

      </mesh>
    </Float></>
  )
}
const ballCanvas = ({icon}) => {
  return (
      <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
              enableZoom={false}

          />
          <Ball imgUrl={icon}></Ball>
        </Suspense>

        <Preload all />
      </Canvas>
  )
}
export default ballCanvas