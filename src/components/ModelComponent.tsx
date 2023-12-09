import React, { useRef, useState } from "react";
import { OrbitControls, TransformControls, useCursor, useGLTF } from "@react-three/drei";
import { Vector3, Euler } from "three";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import ModelLoaderComponent from "@/components/ModelLoaderComponent";

interface ModelProps {
    path: string;
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    isMovable: boolean;
    rotate: boolean;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
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
                            isMovable = defaultMovable,
                            rotate,
                            setRotate,
                        }: ModelProps) {
    const { scene } = useGLTF(path);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

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
