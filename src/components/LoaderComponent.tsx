import { Html, useProgress } from '@react-three/drei'

export default function LoaderComponent() {
    const { progress } = useProgress()
    return <Html center style={{ color: 'white'}}>{progress} % loaded</Html>
}
