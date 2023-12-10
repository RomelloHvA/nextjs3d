import {Html, useProgress} from '@react-three/drei'

/**
 * Simple loader component to use when 3d objects take longer to load.
 */
export default function ModelLoaderComponent() {
    const {progress} = useProgress();
    return <Html center style={{color: 'white'}}>{progress} % loaded</Html>
}
