/**
 * Models to be used in the gallery.
 * Add a model in this array to display it in the gallery.
 * title, description and path are required.
 * position,scale and rotation should probably be changed to fit the model in the canvas.
 */
import { Euler, Vector3 } from "three";

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
        title: "Book",
        description: "0",
        path: "models/book_f.glb",
        scale: new Vector3(0.5, 0.5, 0.5),
        position: new Vector3(0, 1, 1.5),
        rotation: new Euler(0, 0, 0),
    },
    {
        title: "Chest",
        description: "1",
        path: "models/chest.glb",
        scale: new Vector3(0.5, 0.5, 0.5),
        position: new Vector3(0, 1, 1.5),
        rotation: new Euler(0, 0, 0),
    },
    {
        title: "Armored car",
        description: "2",
        path: "models/armored_car.glb",
        scale: new Vector3(0.5, 0.5, 0.5),
        position: new Vector3(0, 1, 1.5),
        rotation: new Euler(0, 4, 0),
    },
];


