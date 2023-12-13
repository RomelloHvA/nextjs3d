"use client"
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, View, Preload } from "@react-three/drei";
import ModelComponent from "@/app/app_components/ModelComponent";
import { Vector3 } from "three";
import css from "../../styles/Home.module.css";
import { models } from "../../public/models/Models";

const DEFAULT_ROTATION_SPEED = 0.01;
const DEFAULT_SCALE_INCREMENT = 0.1;
const DEFAULT_ROTATION_DECREMENT = 0.0005;

const Home: React.FC = () => {
    const ref = useRef<any>();
    const viewRef1 = useRef<any>();
    const viewRef2 = useRef<any>();
    const viewRef3 = useRef<any>();

    /**
     * Setting up the state for the rotation speed and scale of the models.
     */
    const [rotationSpeed0, setRotationSpeed0] = useState(DEFAULT_ROTATION_SPEED);
    const [scale0, setScale0] = useState<Vector3>(models[0].scale);

    const [rotationSpeed1, setRotationSpeed1] = useState(DEFAULT_ROTATION_SPEED);
    const [scale1, setScale1] = useState<Vector3>(models[1].scale);

    const [rotationSpeed2, setRotationSpeed2] = useState(DEFAULT_ROTATION_SPEED);
    const [scale2, setScale2] = useState<Vector3>(models[2].scale);
    /**
     * Function to handle the add wallet button click.
     * @param rotationSpeedUpdate function to update the rotation speed of the model.
     * @param scaleUpdate function to update the scale of the model.
     */
    const handleAddWalletClick = (
        rotationSpeedUpdate: Dispatch<SetStateAction<number>>,
        scaleUpdate: Dispatch<SetStateAction<Vector3>>
    ) => () => {
        rotationSpeedUpdate((prevRotationSpeed) => prevRotationSpeed - DEFAULT_ROTATION_DECREMENT);

        scaleUpdate((prevScale) => new Vector3(
            prevScale.x + DEFAULT_SCALE_INCREMENT,
            prevScale.y + DEFAULT_SCALE_INCREMENT,
            prevScale.z + DEFAULT_SCALE_INCREMENT
        ));
    };

    return (
        <div ref={ref} className={css.container}>
            <div className={css.centered}>
                <div className={css.centered}>
                    <div ref={viewRef1} className={css.view} />
                    <p className={css.title}>OBJECT 1 - {models[0].title}</p>
                    <button className={css.button} type="button" onClick={handleAddWalletClick(setRotationSpeed0, setScale0)}>
                        + Add to wallet
                    </button>
                </div>
                <div className={css.centered}>
                    <div ref={viewRef2} className={css.view} />
                    <p className={css.title}>OBJECT 2 - {models[1].title}</p>
                    <button className={css.button} type="button" onClick={handleAddWalletClick(setRotationSpeed1, setScale1)}>
                        + add to wallet
                    </button>
                </div>
                <div className={css.centered}>
                    <div ref={viewRef3} className={css.view} />
                    <p className={css.title}>OBJECT 3 - {models[2].title}</p>
                    <button className={css.button} type="button" onClick={handleAddWalletClick(setRotationSpeed2, setScale2)}>
                        + Add to wallet
                    </button>
                </div>
                <button className={css.button} type="button"> BUY </button>
            </div>
            <Canvas eventSource={ref} className={css.canvas}>
                <View track={viewRef1}>
                    <Environment preset="dawn" />
                    <ModelComponent
                        path={models[0].path}
                        position={models[0].position}
                        rotation={models[0].rotation}
                        scale={scale0}
                        rotationSpeed={rotationSpeed0}
                    />
                </View>
                <View track={viewRef2}>
                    <Environment preset="dawn" />
                    <ModelComponent
                        path={models[1].path}
                        position={models[1].position}
                        rotation={models[1].rotation}
                        scale={scale1}
                        rotationSpeed={rotationSpeed1}
                    />
                </View>
                <View track={viewRef3}>
                    <Environment preset="dawn" />
                    <ModelComponent
                        path={models[2].path}
                        position={models[2].position}
                        rotation={models[2].rotation}
                        scale={scale2}
                        rotationSpeed={rotationSpeed2}
                    />
                </View>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Home;
