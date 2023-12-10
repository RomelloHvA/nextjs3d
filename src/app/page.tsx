'use client'
import css from "../../styles/Home.module.css"
import {Canvas} from "@react-three/fiber";
import {Environment, Html} from "@react-three/drei";
import React, { useState } from "react";
import BackgroundComponent from "@/app/components/BackgroundComponent";
import {models} from "../../public/models/Models";
import ModelComponent from "@/components/ModelComponent";
import CardComponent from "@/app/components/CardComponent";

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
        const scrollIncrement: number = 0.2;

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
    const isValidPath = /\.(glb|gltf)$/.test(models[scrollIndex].path);

    return (
        <div className={css.scene}>
            <Canvas camera={{position: [0, 1, 2.5], fov: 65}}
                    onWheel={handleScroll}
            onPointerUp={() => setRotate(true)}>
                <BackgroundComponent/>
                <ModelComponent
                    path={isValidPath ? models[scrollIndex].path : models[0].path}
                    isMovable={true}
                    rotation={models[scrollIndex].rotation}
                    scale={models[scrollIndex].scale}
                    position={models[scrollIndex].position}
                    rotate={rotate}
                    setRotate={setRotate}/>
                <Html>
                    <CardComponent title={models[scrollIndex].title}
                                   description={isValidPath ? models[scrollIndex].description : "Invalid object file!"}
                                   progress={percentageUntilNextModel}/>
                </Html>
                <Environment preset="dawn"/>
            </Canvas>
        </div>
    )
}
