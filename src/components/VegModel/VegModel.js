import React, { useRef } from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { selectLocation } from "../../containers/Home/selectors";
import { incrementCurrentValue } from "../../containers/Home/actions";
import { connect } from "react-redux";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
// import {  } from '../../models/funko_test_model/scene.gltf' '../../models/red_onion/scene.gltf'
// import { useGLTF } from '@react-three/drei';

useGLTF.preload('/sample.gltf')

const VegModel = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/sample.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="camera" position={[10, 0, 50]} rotation={[Math.PI / 2, 0, 0]}>
        <PerspectiveCamera fov={40} near={10} far={1000} />
      </group>
      <group name="sun" position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <pointLight intensity={10} />
      </group>
      <mesh geometry={nodes.Scene.geometry} material={materials.Metal_lustra} />
      <mesh geometry={nodes.Metal.geometry} material={materials.Metal_lustra} />
    </group>
  );
    
};

VegModel.propTypes = {
  message: PropTypes.string,
  currentLocation: PropTypes.object,
};




export default VegModel;
