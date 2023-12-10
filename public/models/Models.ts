/**
 * Models to be used in the gallery.
 * Add a model in this array to display it in the gallery.
 * title, description and path are required.
 * position,scale and rotation should be changed to fit the model in the canvas.
 */
import {Euler, Vector3} from "three";

/**
 * Helper constants for initial rotation and positioning.
 */
const INITIAL_POSITION: Vector3 = new Vector3(-0.3, 0.9, 1.5);
const INITIAL_ROTATION: Euler = new Euler(0, 0, 0);

interface ModelData {
    title: string;
    description: string;
    path: string;
    position: Vector3;
    scale: Vector3;
    rotation: Euler;
}

export const models: ModelData[] = [
    {
        title: "Question-block",
        description: "Welcome to a simple gallery of 3D Models. To interact with each model, use the mouse " +
            "to rotate them. Additionally, you can rotate the models by interacting with the axis lines. " +
            "Use the scrollwheel to scroll through all available models in this gallery to discover their details and descriptions.",
        path: "models/block.glb",
        scale: new Vector3(1, 1, 1),
        position: INITIAL_POSITION,
        rotation: INITIAL_ROTATION
    },
    {
        title: "Book",
        description: "Standard magic book where nothing has been written into yet.",
        path: "models/book_f.glb",
        scale: new Vector3(0.5, 0.5, 0.5),
        position: INITIAL_POSITION,
        rotation: INITIAL_ROTATION
    },
    {
        title: "Chest",
        description: "Embark on a journey with the charm of a classic chest, where secrets lie beneath the polished exterior. T" +
            "his timeless piece beckons with the anticipation of hidden treasures and stories untold.",
        path: "models/chest.glb",
        scale: new Vector3(0.2, 0.2, 0.2),
        position: INITIAL_POSITION,
        rotation: INITIAL_ROTATION
    },
    {
        title: "Armored car",
        description: "Unleash the power of an armored car, a mechanical marvel built for both strength and style. " +
            "With its robust exterior and cutting-edge design, this formidable vehicle commands attention on any terrain.",
        path: "models/armored_car.glb",
        scale: new Vector3(0.1, 0.1, 0.1),
        position: INITIAL_POSITION,
        rotation: INITIAL_ROTATION
    },
];


