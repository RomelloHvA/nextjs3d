'use client'
import css from "../../styles/Home.module.css"
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useGLTF} from "@react-three/drei";
import ModelLoaderComponent from "@/components/ModelLoaderComponent";
import React, {Suspense, useState} from "react";
import * as THREE from "three";
import BackgroundComponent from "@/app/components/BackgroundComponent";
import {models} from "../../public/models/Models";
import ModelComponent from "@/components/ModelComponent";


//Todo add introduction to the application and what it's for. Also add explanation.
//Todo add about page
//Todo add contact page if possible
//Todo code documentation.

export default function Home() {

    const [scrollIndex, setScrollIndex] = useState<number>(0);
    const [scrollDecimal, setScrollDecimal] = useState<number>(scrollIndex)

    const handleScroll = (event: React.WheelEvent) => {
        const delta: number = event.deltaY;
        const scrollIncrement: number = 0.4;
        if (delta > 0) {
            console.log(scrollIndex + " Scroll down index")
            console.log(scrollDecimal + "Scroll down decimal")
            setScrollDecimal((prevIndex) => (prevIndex + scrollIncrement) % models.length)
        } else {
            console.log(scrollIndex + " Scroll up index")
            console.log(scrollDecimal + "Scroll up decimal")
            setScrollDecimal((prevIndex) => (prevIndex - scrollIncrement + models.length) % models.length)
        }
        setScrollIndex(Math.floor(scrollDecimal))
    }
        return (
            <div className={css.scene}>
                <Canvas camera={{position: [0, 1, 2.5], fov: 65}}
                onWheel={handleScroll}>
                    <Suspense fallback={<ModelLoaderComponent/>}>
                        <BackgroundComponent/>
                        <ModelComponent path={models[scrollIndex].path} isMovable={true}
                                        rotation={models[scrollIndex].rotation}
                                        scale={models[scrollIndex].scale}
                                        position={models[scrollIndex].position}/>
                    </Suspense>
                    {/*<OrbitControls/>*/}
                    <Environment preset="dawn"/>
                </Canvas>
            </div>
        )
}
