import { useGLTF } from '@react-three/drei';

export default function MetaQuest3(props: any) {
  const { scene } = useGLTF('/meta_quest_3.glb');
  return <primitive object={scene} {...props} />;
}
