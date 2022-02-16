import React, { Suspense, useRef } from "react";
import '../../styles/three3DModelsContainer.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from "../../components/3DModels/Cube/Cube";
import { Button } from "@mui/material";
import TorusKnot from "../../components/3DModels/TorusKnot/TorusKnot";
import { Physics } from '@react-three/cannon'
import Plane from "../../components/3DModels/Plane";

const Three3DModelsContainer = (props) => {
  return (
    <div id="canvas-container" style={{height: '100vh', width: '100vw'}}>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [-1, 5, 5], fov: 45 }}>
      <color attach="background" args={['lightblue']} />
        <Physics>
          <Suspense fallback={null}>
            <OrbitControls/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[10, 10, 10]}/> {/*castShadow shadow-mapSize={[2048, 2048]} />*/}
            <Plane position={[0, -2.5, 0]} />
            <Cube position={[0.1, 5, 0]} />
            <Cube position={[0, 10, -1]} />
            <Cube position={[0, 20, -2]} />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}


export default Three3DModelsContainer;
