import { Html, useProgress } from '@react-three/drei'

export default function ModelLoaderComponent() {
    const { progress } = useProgress()
    return <Html center style={{ color: 'white'}}>{progress} % loaded</Html>
}
