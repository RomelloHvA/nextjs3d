/**
 * Models to be used in the gallery.
 * Add a model in this array to display it in the gallery.
 * title, description and path are required.
 * position,scale and rotation should probably be changed to fit the model in the canvas.
 */
interface ModelData {
    title: string;
    description: string;
    path: string;
    position?: number[];
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
        path: "models/book_f.glb",
        scale: [0.5, 0.5, 0.5]
    },
    {
        title: "Axe",
        description: "2",
        path: "models/book_f.glb",
        scale: [0.5, 0.5, 0.5]
    }

]
