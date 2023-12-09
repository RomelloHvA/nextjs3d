import React, {useRef, useState} from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3, Euler } from "three";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {is} from "@react-spring/shared";


interface ModelProps {
    path: string;
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    isMovable: boolean
}

const defaultPosition: Vector3 = new Vector3(0, 0, 0);
const defaultRotation: Euler = new Euler(0, 0, 0);
const defaultScale: Vector3 = new Vector3(1, 1, 1);
const defaultMovable: boolean = false;
const defaultRotationSpeed = 0.005;

function ModelComponent({
                   path,
                   position = defaultPosition,
                   rotation = defaultRotation,
                   scale = defaultScale,
    isMovable = defaultMovable
               }: ModelProps) {
    const { scene } = useGLTF(path);

    useFrame(() => {
        if (isMovable) {
            scene.rotation.y += defaultRotationSpeed
        }
    })


    return (

            <primitive object={scene} position={position}
                       rotation={rotation}
                       scale={scale}/>

    );
}

export default ModelComponent;
