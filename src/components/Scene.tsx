import {
  useRef,
  forwardRef,
  FunctionComponent,
  ComponentType,
  ForwardedRef,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, Resize, Environment } from "@react-three/drei";
import { Object3D } from "three";

interface model {
  id: number;
  url: FunctionComponent;
  title: string;
  thumbnail: string;
}

function createForwardRefModel<T>(
  Component: ComponentType<T & { ref?: ForwardedRef<unknown> }>
) {
  return forwardRef<unknown, T>((props, ref) => (
    <Component {...(props as T)} ref={ref} />
  ));
}

function Box({ model }: { model: FunctionComponent }) {
  const meshRef = useRef<Object3D>(null);
  // const {loaded} = useProgress()

  useFrame(
    (_, delta) => meshRef.current && (meshRef.current.rotation.y += delta / 2)
  );

  const ModelWithRef = createForwardRefModel(model);

  return (
    <>
      {/* {!loaded && <Html center>loaded</Html>} */}
      <Center>
        <Resize scale={6}>
          <ModelWithRef ref={meshRef} />
          {/* <Suspense fallback={<Loader/  >}>
          </Suspense> */}
        </Resize>
      </Center>
    </>
  );
}

const Scene = ({ selectedModel }: { selectedModel: model }) => {
  return (
    <div className="w-full h-full rounded-md overflow-hidden z-10 bg-[#000000b3]">
      <Canvas className="z-20">
        <Environment preset="sunset" />
        <ambientLight intensity={Math.PI / 2} />
        <Box key={selectedModel.title} model={selectedModel.url} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Scene;
