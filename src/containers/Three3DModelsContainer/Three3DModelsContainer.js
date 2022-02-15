import React, { Suspense, useRef } from "react";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from "../../components/3DModels/Cube/Cube";


const Three3DModelsContainer = (props) => {
  return (
    <div id="canvas-container" style={{height: '100vh', width: '100vw', background: 'black'}}>
      <Canvas >
        <OrbitControls/>
        <ambientLight intensity={0.1} />
        <directionalLight position={[3, 0, 5]} />
        <Cube/>
      </Canvas>
    </div>
  );
}


export default Three3DModelsContainer;
