import React, { useState } from "react";
import { TransformControls, useCursor, useGLTF } from "@react-three/drei";
import { Vector3, Euler } from "three";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import ModelLoaderComponent from "@/components/ModelLoaderComponent";

/**
 * Defining all the prop types for this component.
 */
interface ModelProps {
    path: string;
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    isMovable: boolean;
    rotate: boolean;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultRotationSpeed = 0.005;

/**
 * Component for loading in all models of the extension GLTF or glb
 * @param path of the model to be used.
 * @param position of the model relative to the camera
 * @param rotation initial rotation of the model
 * @param scale of the model
 * @param isMovable if the model can be moved/rotated with the mouse.
 * @param rotate if the model can be rotated with or without user input.
 * @param setRotate method for changing rotate value.
 */
function ModelComponent({ path, position, rotation, scale, isMovable, rotate, setRotate,}: ModelProps) {

    const { scene } = useGLTF(path);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);
    /**
     * Hook for rotating the model whenever possible.
     */
    useFrame(() => {
        if (isMovable && rotate ) {
            scene.rotation.y += defaultRotationSpeed;
        }
    });

    const handlePointerDown = () => {
        setRotate(false);
    };

    const handlePointerUp = () => {
        setRotate(true);
    };


    return (
        <Suspense fallback={<ModelLoaderComponent />}>
            <primitive
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                object={scene}
                position={position}
                rotation={rotation}
                scale={scale}
            />

            {isMovable && <TransformControls object={scene} mode={"rotate"} enabled={true}/>}
        </Suspense>
    );
}

export default ModelComponent;
