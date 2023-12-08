import {BackgroundModelComponent} from "@/app/components/BackGroundModelComponent";
import ModelComponent from "@/components/ModelComponent";
import * as THREE from "three";


const StoneMaterial = () => {
    const stoneTexture = new THREE.TextureLoader().load("/textures/stone_texture.jpg");
    stoneTexture.wrapS = stoneTexture.wrapT = THREE.RepeatWrapping;
    stoneTexture.repeat.set(8,8);

    return (
        <meshStandardMaterial map={stoneTexture}/>
    );
};

export default function BackgroundComponent() {
    return <>
        <BackgroundModelComponent/>
        {/*Background house 1*/}
        <ModelComponent path={"/models/house.glb"}
                        position={[5, -0.8, -2.5]}
                        rotation={[0, -1.1, 0]}
                        isMovable={false}/>
        {/*Background house 2*/}
        <ModelComponent path={"/models/wood_house.glb"}
                        position={[-5, 0, -2.5]}
                        rotation={[0, -0.5, 0]}
                        isMovable={false}/>
        {/*    Floor */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[10, 0, 10]}/>
            <StoneMaterial/>
        </mesh>
    </>;
}
