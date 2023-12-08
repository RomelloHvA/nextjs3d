'use client'
import css from "../../styles/Home.module.css"
import {Canvas} from "@react-three/fiber";
import {BackgroundModelComponent} from "@/components/BackGroundModelComponent";
import {Environment, OrbitControls} from "@react-three/drei";
import LoaderComponent from "@/components/LoaderComponent";
import {Suspense} from "react";
import * as THREE from "three";
import ModelComponent from "@/components/ModelComponent";

const StoneMaterial = () => {
    const stoneTexture = new THREE.TextureLoader().load("/textures/stone_texture.jpg");
    stoneTexture.wrapS = stoneTexture.wrapT = THREE.RepeatWrapping;
    stoneTexture.repeat.set(8,8);

    return (
        <meshStandardMaterial map={stoneTexture}/>
    );
};
//Todo add introduction to the application and what it's for. Also add explanation.
//Todo add about page
//Todo add contact page if possible
//Todo code documentation.

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas camera={{position: [0, 1, 2.5], fov: 65}}>
          <Suspense fallback={<LoaderComponent/>}>
              <BackgroundModelComponent />
              {/*Background house 1*/}
              <ModelComponent path={"/models/house.glb"}
                              position={[5,-0.8,-2.5]}
                              rotation={[0,-1.1,0]}
                              isMovable={false}/>
              {/*Background house 2*/}
              <ModelComponent path={"/models/wood_house.glb"}
                              position={[-5,0,-2.5]}
                              rotation={[0,-0.5,0]}
                              isMovable={false}/>
              {/*    Floor */}
              <mesh position={[0,0,0]}>
                  <boxGeometry args={[10,0,10]}/>
                  <StoneMaterial/>
              </mesh>
          </Suspense>
          <OrbitControls/>
              <Environment preset="dawn"/>
      </Canvas>
    </div>
  )
}
