/**
 * Models to be used in the gallery.
 * Add a model in this array to display it in the gallery.
 * title, description and path are required.
 * position,scale and rotation should probably be changed to fit the model in the canvas.
 */
import {Vector3} from "three";

export interface ModelData {
    title: string;
    description: string;
    path: string;
    position?: Vector3;
    scale?: number[];
    rotation?: number[];
}

export const models: ModelData[] = [
    {
        title: "Book",
        description: "2",
        path: "models/book_f.glb",
        scale: [0.5, 0.5, 0.5]
    },
    {
        title: "Axe",
        description: "",
        path: "models/chest.glb",
        scale: [0.5, 0.5, 0.5]
    },
    {
        title: "Axe",
        description: "2",
        path: "models/armored_car.glb",
        scale: [0.5, 0.5, 0.5]
    }

]
