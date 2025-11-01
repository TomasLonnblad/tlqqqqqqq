import { useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei'
import React from 'react'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model() {
    const { viewport } = useThree()
    const { nodes } = useGLTF('/medias2/shards.glb')
    
    return (
            <group scale={viewport.width / 2.5} >
                {
                    nodes.Scene.children.map( (mesh, i) => {
                        return <Mesh data={mesh} key={i}/>
                    })
                }
                <Font />
            </group>
    )
}

function Font() {
    const src = '/fonts/PPNeueMontreal-Bold.otf'
    const textOption = {
        color: "white",
        anchorX: "center",
        anchorY: "middle"
    }
    return (
        <group>
            <Text font={src} position={[0, 0, -.1]} fontSize={0.4} {...textOption}>
            Modular Model System
            </Text>
            <Text font={src} position={[0, -.15, -.1]} fontSize={0.03} {...textOption}>
            Tomas Lönnblad
            </Text>
        </group>
    )
}

function Mesh({data}) {
    const materialProps = useControls({


    })

    return (
        <Float>
            <mesh {...data}>
               
            </mesh>
        </Float>
    )
}
