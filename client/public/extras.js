function Body2Model({ ...props }) {
    const group = useRef();
    const name = "B2";
    const { nodes, materials } = useGLTF("/body2.glb");
    return (
      <group
        name={name}
        ref={group}
        {...props}
        dispose={null}
        scale={3}
        position={[0, -2, 0]}
      >
        <group position={[0, -0.24, 0]}>
          <group position={[0, 0.24, 0]}>
            <mesh
              geometry={nodes.polySurface8.geometry}
              material={materials.pasted__lambert11}
              material-color={props.color}
            >
              {props.texture !== null && (
                <meshPhongMaterial
                  attachArray="material"
                  map={props.texture.map}
                  shininess={props.texture.shininess}
                />
              )}
              {props.color != null && (
                <meshPhongMaterial
                  attachArray="material"
                  color={props.color.color}
                  shininess={props.color.shininess}
                />
              )}
            </mesh>
          </group>
        </group>
      </group>
    );
  }
