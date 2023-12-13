import React from "react";
import {TransformControls, useGLTF} from "@react-three/drei";
import {Vector3, Euler} from "three";
import {useFrame} from "@react-three/fiber";
import {Suspense} from "react";
import ModelLoaderComponent from "@/app/app_components/ModelLoaderComponent";
/**
 * Defining all the prop types for this component.
 */
interface ModelProps {
    path: string;
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    rotationSpeed?: number;
}

/**
 * Component for loading in all models of the extension GLTF or glb
 * @param path of the model to be used.
 * @param position of the model relative to the camera
 * @param rotation initial rotation of the model
 * @param scale of the model
 * @param rotationSpeed of the model. Parent component can change this.
 */
function ModelComponent({path, position, rotation, scale, rotationSpeed }: ModelProps) {
    const {scene} = useGLTF(path);

        useFrame( () => {
            if (rotationSpeed){
                scene.rotation.x += rotationSpeed
            }
        })

    return (<group>
            <Suspense fallback={<ModelLoaderComponent/>}>
                <TransformControls mode={"rotate"} size={2.5}>
                    <primitive
                        object={scene}
                        position={position}
                        rotation={rotation}
                        scale={scale}/>
                </TransformControls>
            </Suspense>
        </group>
    );
}
export default ModelComponent;
