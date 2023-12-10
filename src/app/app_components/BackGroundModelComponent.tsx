import * as THREE from "three";
import React from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

type GLTFResult = GLTF & {
    nodes: {
        Cube181: THREE.Mesh;
        Cube181_1: THREE.Mesh;
        Cube181_2: THREE.Mesh;
        Cube181_3: THREE.Mesh;
        Cube181_4: THREE.Mesh;
        Cube181_5: THREE.Mesh;
        Cube181_6: THREE.Mesh;
        Cube181_7: THREE.Mesh;
    };
    materials: {
        stone: THREE.MeshStandardMaterial;
        wood: THREE.MeshStandardMaterial;
        dark: THREE.MeshStandardMaterial;
        gold: THREE.MeshStandardMaterial;
        red: THREE.MeshStandardMaterial;
        white: THREE.MeshStandardMaterial;
        blue: THREE.MeshStandardMaterial;
        red2: THREE.MeshStandardMaterial;
    };
};

export function BackgroundModelComponent(props: IntrinsicElements["group"]) {
    const {nodes, materials} = useGLTF("models/butcher_shop.glb") as GLTFResult;
    const rotation: [number, number, number] = [0, -7.8, 0]
    return (
        <group rotation={rotation} {...props} dispose={null}>
            <group scale={[2.032, 0.161, 2.032]}>
                <mesh
                    geometry={nodes.Cube181.geometry}
                    material={materials.stone}
                />
                <mesh
                    geometry={nodes.Cube181_1.geometry}
                    material={materials.wood}
                />
                <mesh
                    geometry={nodes.Cube181_2.geometry}
                    material={materials.dark}
                />
                <mesh
                    geometry={nodes.Cube181_3.geometry}
                    material={materials.gold}
                />
                <mesh
                    geometry={nodes.Cube181_4.geometry}
                    material={materials.red}
                />
                <mesh
                    geometry={nodes.Cube181_5.geometry}
                    material={materials.white}
                />
                <mesh
                    geometry={nodes.Cube181_6.geometry}
                    material={materials.blue}
                />
                <mesh
                    geometry={nodes.Cube181_7.geometry}
                    material={materials.red2}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/butcher_shop.glb");
