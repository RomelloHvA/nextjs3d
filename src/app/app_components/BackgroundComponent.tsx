import {BackgroundModelComponent} from "@/app/app_components/BackGroundModelComponent";
import ModelComponent from "@/shared_components/ModelComponent";
import * as THREE from "three";
import {Euler, Vector3} from "three";
import ModelLoaderComponent from "@/shared_components/ModelLoaderComponent";
import React, {Suspense, useState} from "react";

/**
 * Component for the floor of the background.
 *
 */
const StoneMaterial = () => {
    const stoneTexture = new THREE.TextureLoader().load("/textures/stone_texture.jpg");
    stoneTexture.wrapS = stoneTexture.wrapT = THREE.RepeatWrapping;
    stoneTexture.repeat.set(8,8);
    return (
        <meshStandardMaterial map={stoneTexture}/>
    );
};
/**
 * Component for all the background models and floor put together in a single component.
 */
export default function BackgroundComponent() {
    const [rotate, setRotate] = useState(false);

    return <Suspense fallback={<ModelLoaderComponent/>}>
        <BackgroundModelComponent/>
        {/*Background house 1*/}
        <ModelComponent path={"/models/house.glb"}
                        scale={new Vector3(1,1,1)}
                        position={new Vector3(5, -0.8, -2.5)}
                        rotation={new Euler(0, -1.1, 0)}
                        isMovable={false}
                        rotate={rotate}
                        setRotate={setRotate}/>
        {/*Background house 2*/}
        <ModelComponent path={"/models/wood_house.glb"}
                        scale={new Vector3(1,1,1)}
                        position={new Vector3(-5, 0, -2.5)}
                        rotation={new Euler(0, -0.5, 0)}
                        isMovable={false}
                        rotate={rotate}
                        setRotate={setRotate}/>
        {/*    Floor */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[10, 0, 10]}/>
            <StoneMaterial/>
        </mesh>
    </Suspense>;
}
