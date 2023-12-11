'use client'
import css from "../../styles/Home.module.css"
import {Canvas} from "@react-three/fiber";
import {Environment, Html, OrbitControls} from "@react-three/drei";
import React, {useState} from "react";
import BackgroundComponent from "@/app/app_components/BackgroundComponent";
import {models} from "../../public/models/Models";
import ModelComponent from "@/shared_components/ModelComponent";
import CardComponent from "@/app/app_components/CardComponent";
import {Vector3, Euler} from "three";


export default function Home() {

    /**
     * scrollIndex to Determine which model to load of the array based on the scrollIndex
     */
    const [scrollIndex, setScrollIndex] = useState<number>(0);

    /**
     * ScrollDecimal to help, so it doesn't immediately jump to a new model when scrolling.
     */
    const [scrollDecimal, setScrollDecimal] = useState<number>(scrollIndex);

    /**
     * rotate determines if a model can be rotated or not.
     */
    const [rotate, setRotate] = useState<boolean>(true);

    /**
     * Calculates the percentage until the next model based on the scrollDecimal.
     */
    const percentageUntilNextModel = (scrollDecimal * 100) % 100;
    /**
     * Method for changing the value of the scrollDecimal based on the direction of the scrolling.
     * @param event
     */
    const handleScroll = (event: React.WheelEvent) => {

        const delta: number = event.deltaY;
        const scrollIncrement: number = 0.1;

        setScrollDecimal((prevIndex) => {
            let newScrollDecimal;

            if (delta > 0) {
                newScrollDecimal = (prevIndex + scrollIncrement) % models.length;
            } else {
                newScrollDecimal = (prevIndex - scrollIncrement + models.length) % models.length;
            }
            setScrollIndex(Math.floor(newScrollDecimal));
            return newScrollDecimal;
        });
    }
    /**
     * Checks the path against a valid file extension.
     */
    const isValidFileExtension = /\.(glb|gltf)$/.test(models[scrollIndex].path);


    return (
        <div className={css.scene}>
            <Canvas camera={{position: [0, scrollIndex, 2.5], fov: 65}}
                    onWheel={handleScroll}
                    onPointerUp={() => setRotate(true)}>
                {models.map((model, index) => (
                    <ModelComponent
                        key={index}
                        path={isValidFileExtension ? model.path : models[0].path}
                        isMovable={true}
                        rotation={model.rotation}
                        scale={model.scale}
                        position={new Vector3(model.position.x, index - scrollDecimal, model.position.z)}
                        rotate={rotate}
                        setRotate={setRotate}
                    />
                ))}
                {/*<OrbitControls/>*/}
                <Html>
                    <CardComponent title={models[scrollIndex].title}
                                   description={isValidFileExtension ? models[scrollIndex].description : "Invalid file extension!"}
                                   progress={percentageUntilNextModel}/>
                </Html>
                <Environment preset="dawn"/>
            </Canvas>
        </div>
    )
}
