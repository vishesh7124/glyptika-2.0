/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 -t public\demon.glb 
Author: sxnneh (https://sketchfab.com/Sxnneh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/demon-3b1575c85be84f66a3fe1de0a7f44e60
Title: Demon
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh1_Mesh1007_Material001_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
    //@ts-ignore

  animations: GLTFAction[]
}
  //@ts-ignore

export function Demon(props: JSX.IntrinsicElements['group']) {
    //@ts-ignore

  const { nodes, materials } = useGLTF('/demon.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Mesh1_Mesh1007_Material001_0.geometry} material={materials['Material.001']} position={[0, 94.766, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/demon.glb')
