import React from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import * as THREE from "three";
import {Euler, Quaternion, Vector3} from "three";


type GLTFResult = GLTF & {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.MeshStandardMaterial>;
};

/** Properties that are/can be passed to the Model component.
 * @param path Path to the GLTF model file. Model must be GLTF
 * @param position Position of the model. Default: [0, 1, 1.5] To the left of the center of the camera
 * @param scale Scale of the model. Should be adjusted per model to fit it nicely in the screen.
 * @param rotation Rotation of the model. Can be adjusted for some flavour.
 */

//Todo make models movable through mouse interaction.

interface ModelProps {
    path: string;           // Path to the GLTF model file
    isMovable: boolean;     // If the object can be moved through user interaction (default: false).
    position?: Vector3;    // Initial position of the model (default: [0, 1, 1.5])
    scale?: Vector3;       // Initial scale of the model (default: [1, 1, 1])
    rotation?: Euler;    // Initial rotation of the model (default: [0, 0, 0])
    material?: THREE.Material | THREE.Material[];
}

const ModelTemplate: React.FC<ModelProps> = ({
                                                 path,
                                                 isMovable = false,
                                                 position = new Vector3(0, 1, 1.5),
                                                 scale = new Vector3(1,1,1),
                                                 rotation = new Euler(0,0,0),
                                                 material
                                             }) => {
    // Use the useGLTF hook to load and retrieve the nodes and materials of the GLTF model
    const materialName = Array.isArray(material) ? undefined : material?.name;
    const {nodes, materials} = useGLTF(path) as GLTFResult;


    // Return a group containing meshes based on the nodes and materials of the GLTF model
    return (
        <group position={position} scale={scale} rotation={rotation}>
            {/* Map over the nodes and create a mesh for each node */}
            {Object.keys(nodes).map((nodeName) => (
                <mesh
                    key={nodeName}
                    geometry={nodes[nodeName].geometry}
                    material={
                        materials &&
                        nodes[nodeName] &&
                        materialName
                            ? materials[materialName] as THREE.MeshStandardMaterial
                            : undefined
                    }
                />
            ))}
        </group>
    );
};
export default ModelTemplate;
