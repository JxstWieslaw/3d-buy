import "./Home.css";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import {signout} from "../../helpers/auth"
import { ToastContainer, toast } from 'react-toastify';
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

//import Swatch components
import { RightArmObject } from "../objects/RightArm/RightArm";
import { LeftArmObject } from "../objects/LeftArm/LeftArm";
import { BaseObject } from "../objects/Base/Base";
import { BackObject } from "../objects/Back/Back";
import { HeadObject } from "../objects/Head/Head";
import { SeatObject } from "../objects/Seat/Seat";
import { Option } from "../options/ActiveOption";
import { Color } from "../colors/Color";
import { GLTFExporter } from "../exporter/GLTFExporter";
import { Button } from "@material-ui/core";

function Support({ ...props }) {
  console.log(props.color + " " + props.texture);
  const group = useRef();
  const name = "SP";
  const { nodes, materials } = useGLTF("/support.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.support.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Back({ ...props }) {
  const group = useRef();
  const name = "BK";
  const { nodes, materials } = useGLTF("/back.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Back1({ ...props }) {
  const group = useRef();
  const name = "BK1";
  const { nodes, materials } = useGLTF("/back1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}

function Back2({ ...props }) {
  const group = useRef();
  const name = "BK2";
  const { nodes, materials } = useGLTF("/back2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.back2.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Base({ ...props }) {
  console.log(props);
  const group = useRef();
  const name = "BS";
  const { nodes, materials } = useGLTF("/base.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.base.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Base1({ ...props }) {
  const group = useRef();
  const name = "BS1";
  const { nodes, materials } = useGLTF("/base1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.base1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Base2({ ...props }) {
  const group = useRef();
  const name = "BS2";
  const { nodes, materials } = useGLTF("/base2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.base2.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Head({ ...props }) {
  const group = useRef();
  const name = "H";
  const { nodes, materials } = useGLTF("/head.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.head.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Head1({ ...props }) {
  const group = useRef();
  const name = "H1";
  const { nodes, materials } = useGLTF("/head1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.head1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function LeftArm({ ...props }) {
  const group = useRef();
  const name = "LA";
  const { nodes, materials } = useGLTF("/L_arm.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.L_arm.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function LeftArm1({ ...props }) {
  const group = useRef();
  const name = "LA1";
  const { nodes, materials } = useGLTF("/L_arm1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.L_arm1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}

function LeftArm2({ ...props }) {
  const group = useRef();
  const name = "LA2";
  const { nodes, materials } = useGLTF("/L_arm2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.L_arm2.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function RightArm1({ ...props }) {
  const group = useRef();
  const name = "RA1";
  const { nodes, materials } = useGLTF("/R_arm1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.R_arm1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}

function RightArm2({ ...props }) {
  const group = useRef();
  const name = "RA2";
  const { nodes, materials } = useGLTF("/R_arm2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.R_arm2.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function RightArm3({ ...props }) {
  const group = useRef();
  const name = "RA3";
  const { nodes, materials } = useGLTF("/R_arm3.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.R_arm3.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Seat({ ...props }) {
  const group = useRef();
  const name = "ST";
  const { nodes, materials } = useGLTF("/seat.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.seat.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Seat1({ ...props }) {
  const group = useRef();
  const name = "ST1";
  const { nodes, materials } = useGLTF("/seat1.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.seat1.geometry}
        material={materials.aiStandardSurface1}
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
  );
}
function Seat2({ ...props }) {
  const group = useRef();
  const name = "LA1";
  const { nodes, materials } = useGLTF("/seat2.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={0.5}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.seat2.geometry}
        material={materials.aiStandardSurface1}
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
  );
}

function Foo({ download, updateClick }) {
  const { scene } = useThree();
  const handleClick = (value) => {
    updateClick(value);
  };
  console.log(download);
  if (download) {
    handleClick(false);
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      function (result) {
        saveArrayBuffer(result, scene);
      },
      {
        binary: true, //should be false if you need a GLTF Format file
      }
    );
    console.log(download);
  }
}

function saveArrayBuffer(buffer) {
  const blobURL = URL.createObjectURL(
    new Blob([buffer], { type: "application/octet-stream" })
  );
  const saveFile = () => {
    saveAs(blobURL, "ThreejsScene.glb");
  };
  saveFile();
}

function DownloadBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Download GLB
      </Button>
    </>
  );
}

function SignoutBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Sign Out
      </Button>
    </>
  );
}

function ProfileBtn({ onClick }) {
  return (
    <>
      <Button onClick={onClick} variant="contained" color="primary">
        Profile
      </Button>
    </>
  );
}

function Home({history}) {
  //currently used activeOption
  const [activeOption, setActiveOption] = useState(0);

  //Applied Object
  const [appliedRightArm, setAppliedRightArm] = useState("RA1");
  const [appliedLeftArm, setAppliedLeftArm] = useState("LA");
  const [appliedBase, setAppliedBase] = useState("BS");
  const [appliedBack, setAppliedBack] = useState("BK");
  const [appliedHead, setAppliedHead] = useState("H");
  const [appliedSeat, setAppliedSeat] = useState("ST");
  const [appliedSupport, setAppliedSupport] = useState("SP");

  //Colors and Textures State
  const [colorSP, setColorSP] = useState(null);
  const [textureSP, setTextureSP] = useState(null);
  const [colorBK, setColorBK] = useState(null);
  const [textureBK, setTextureBK] = useState(null);
  const [colorBK1, setColorBK1] = useState(null);
  const [textureBK1, setTextureBK1] = useState(null);
  const [colorBK2, setColorBK2] = useState(null);
  const [textureBK2, setTextureBK2] = useState(null);
  const [colorBS, setColorBS] = useState(null);
  const [textureBS, setTextureBS] = useState(null);
  const [colorBS1, setColorBS1] = useState(null);
  const [textureBS1, setTextureBS1] = useState(null);
  const [colorBS2, setColorBS2] = useState(null);
  const [textureBS2, setTextureBS2] = useState(null);
  const [textureH, setTextureH] = useState(null);
  const [colorH, setColorH] = useState(null);
  const [colorH1, setColorH1] = useState(null);
  const [textureH1, setTextureH1] = useState(null);
  const [colorLA, setColorLA] = useState(null);
  const [textureLA, setTextureLA] = useState(null);
  const [colorLA1, setColorLA1] = useState(null);
  const [textureLA1, setTextureLA1] = useState(null);
  const [colorLA2, setColorLA2] = useState(null);
  const [textureLA2, setTextureLA2] = useState(null);
  const [colorRA3, setColorRA3] = useState(null);
  const [textureRA3, setTextureRA3] = useState(null);
  const [colorRA1, setColorRA1] = useState(null);
  const [textureRA1, setTextureRA1] = useState(null);
  const [colorRA2, setColorRA2] = useState(null);
  const [textureRA2, setTextureRA2] = useState(null);
  const [colorST, setColorST] = useState(null);
  const [textureST, setTextureST] = useState(null);
  const [colorST1, setColorST1] = useState(null);
  const [textureST1, setTextureST1] = useState(null);
  const [colorST2, setColorST2] = useState(null);
  const [textureST2, setTextureST2] = useState(null);

  // For the GLTF Exporter to trigger rendering of full scene
  const [clicked, setClicked] = useState(false);
  const updateClick = (value) => {
    setClicked(value);
  };

  const leftArm_Objects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "L_arm",
      alt_text: "LA",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "L_arm1",
      alt_text: "LA1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "L_arm2",
      alt_text: "LA2",
    },
  ];

  const rightArm_Objects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "R_arm1",
      alt_text: "RA1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "R_arm2",
      alt_text: "RA2",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "R_arm3",
      alt_text: "RA3",
    },
  ];
  const baseObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "base",
      alt_text: "BS",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "base1",
      alt_text: "BS1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "base2",
      alt_text: "BS2",
    },
  ];
  const backObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "back",
      alt_text: "BK",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "back1",
      alt_text: "BK1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "back2",
      alt_text: "BK2",
    },
  ];
  const headObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "head",
      alt_text: "H",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "head1",
      alt_text: "H1",
    },
  ];
  const seatObjects = [
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/1.png?v=1654679786135",
      id: "seat",
      alt_text: "ST",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/2.png?v=1654679768469",
      id: "seat1",
      alt_text: "ST1",
    },
    {
      icon: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/3.png?v=1654679768559",
      id: "seat2",
      alt_text: "ST2",
    },
  ];

  const optionImages = [
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "RA",
      data_option: "rightarm",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/legs.svg?v=1649144515701",
      alt_text: "LA",
      data_option: "leftarm",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/base.svg?v=1649144479039",
      alt_text: "BS",
      data_option: "base",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/back.svg?v=1649144459372",
      alt_text: "BACK",
      data_option: "back",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/back.svg?v=1649144459372",
      alt_text: "H",
      data_option: "head",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/cushions.svg?v=1649144499363",
      alt_text: "ST",
      data_option: "seat",
    },
    {
      url: "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/supports.svg?v=1649144531018",
      alt_text: "SP",
      data_option: "support",
    },
  ];

  const colors = [
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412",
      color: null,
    },
    {
      texture:
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805",
      color: null,
    },
    {
      color: "#131417",
      texture: null,
    },
    {
      color: "#374047",
      texture: null,
    },
    {
      color: "#5f6e78",
      texture: null,
    },
    {
      color: "#7f8a93",
      texture: null,
    },
    {
      color: "#97a1a7",
      texture: null,
    },
    {
      color: "#acb4b9",
      texture: null,
    },
    {
      color: "#DF9998",
      texture: null,
    },
    {
      color: "#7C6862",
      texture: null,
    },
    {
      color: "#A3AB84",
      texture: null,
    },
    {
      color: "#D6CCB1",
      texture: null,
    },
    {
      color: "#F8D5C4",
      texture: null,
    },
    {
      color: "#A3AE99",
      texture: null,
    },
    {
      color: "#EFF2F2",
      texture: null,
    },
    {
      color: "#B0C5C1",
      texture: null,
    },
    {
      color: "#8B8C8C",
      texture: null,
    },
    {
      color: "#565F59",
      texture: null,
    },
    {
      color: "#CB304A",
      texture: null,
    },
    {
      color: "#FED7C8",
      texture: null,
    },
    {
      color: "#C7BDBD",
      texture: null,
    },
    {
      color: "#3DCBBE",
      texture: null,
    },
    {
      color: "#264B4F",
      texture: null,
    },
    {
      color: "#389389",
      texture: null,
    },
    {
      color: "#85BEAE",
      texture: null,
    },
    {
      color: "#F2DABA",
      texture: null,
    },
    {
      color: "#F2A97F",
      texture: null,
    },
    {
      color: "#D85F52",
      texture: null,
    },
    {
      color: "#D92E37",
      texture: null,
    },
    {
      color: "#FC9736",
      texture: null,
    },
    {
      color: "#F7BD69",
      texture: null,
    },
    {
      color: "#A4D09C",
      texture: null,
    },
    {
      color: "#4C8A67",
      texture: null,
    },
    {
      color: "#25608A",
      texture: null,
    },
    {
      color: "#75C8C6",
      texture: null,
    },
    {
      color: "#F5E4B7",
      texture: null,
    },
    {
      color: "#E69041",
      texture: null,
    },
    {
      color: "#E56013",
      texture: null,
    },
    {
      color: "#11101D",
      texture: null,
    },
    {
      color: "#630609",
      texture: null,
    },
    {
      color: "#C9240E",
      texture: null,
    },
    {
      color: "#EC4B17",
      texture: null,
    },
    {
      color: "#281A1C",
      texture: null,
    },
    {
      color: "#4F556F",
      texture: null,
    },
    {
      color: "#64739B",
      texture: null,
    },
    {
      color: "#CDBAC7",
      texture: null,
    },
    {
      color: "#946F43",
      texture: null,
    },
    {
      color: "#66533C",
      texture: null,
    },
    {
      color: "#173A2F",
      texture: null,
    },
    {
      color: "#153944",
      texture: null,
    },
    {
      color: "#27548D",
      texture: null,
    },
    {
      color: "#438AAC",
      texture: null,
    },
  ];

  const colorChange = [
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/wood_.jpg?v=1649144910756"
      ),
      size: [2, 2, 2],
      shininess: 60,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/fabric_.jpg?v=1649144905001"
      ),
      size: [4, 4, 4],
      shininess: 0,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/pattern_.jpg?v=1649144906757"
      ),
      size: [8, 8, 8],
      shininess: 10,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/denim_.jpg?v=1649144904412"
      ),
      size: [3, 3, 3],
      shininess: 0,
      color: null,
    },
    {
      texture: useLoader(
        TextureLoader,
        "https://cdn.glitch.global/277c2806-8417-4701-8cfc-c96cad172230/quilt_.jpg?v=1649144908805"
      ),
      size: [6, 6, 6],
      shininess: 0,
      color: null,
    },
    {
      color: "#131417",
    },
    {
      color: "#374047",
    },
    {
      color: "#5f6e78",
    },
    {
      color: "#7f8a93",
    },
    {
      color: "#97a1a7",
    },
    {
      color: "#acb4b9",
    },
    {
      color: "#DF9998",
    },
    {
      color: "#7C6862",
    },
    {
      color: "#A3AB84",
    },
    {
      color: "#D6CCB1",
    },
    {
      color: "#F8D5C4",
    },
    {
      color: "#A3AE99",
    },
    {
      color: "#EFF2F2",
    },
    {
      color: "#B0C5C1",
    },
    {
      color: "#8B8C8C",
    },
    {
      color: "#565F59",
    },
    {
      color: "#CB304A",
    },
    {
      color: "#FED7C8",
    },
    {
      color: "#C7BDBD",
    },
    {
      color: "#3DCBBE",
    },
    {
      color: "#264B4F",
    },
    {
      color: "#389389",
    },
    {
      color: "#85BEAE",
    },
    {
      color: "#F2DABA",
    },
    {
      color: "#F2A97F",
    },
    {
      color: "#D85F52",
    },
    {
      color: "#D92E37",
    },
    {
      color: "#FC9736",
    },
    {
      color: "#F7BD69",
    },
    {
      color: "#A4D09C",
    },
    {
      color: "#4C8A67",
    },
    {
      color: "#25608A",
    },
    {
      color: "#75C8C6",
    },
    {
      color: "#F5E4B7",
    },
    {
      color: "#E69041",
    },
    {
      color: "#E56013",
    },
    {
      color: "#11101D",
    },
    {
      color: "#630609",
    },
    {
      color: "#C9240E",
    },
    {
      color: "#EC4B17",
    },
    {
      color: "#281A1C",
    },
    {
      color: "#4F556F",
    },
    {
      color: "#64739B",
    },
    {
      color: "#CDBAC7",
    },
    {
      color: "#946F43",
    },
    {
      color: "#66533C",
    },
    {
      color: "#173A2F",
    },
    {
      color: "#153944",
    },
    {
      color: "#27548D",
    },
    {
      color: "#438AAC",
    },
  ];

  function handleColorChange(index) {
    console.log(index);
    let color = colorChange[index];
    let new_mtl;
    console.log(color.texture);

    if (color.texture) {
      let cur = color.texture;
      cur.repeat.set(color.size[0], color.size[1], color.size[2]);
      cur.wrapS = THREE.RepeatWrapping;
      cur.wrapT = THREE.RepeatWrapping;
      new_mtl = {
        map: cur,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        console.log("In the loop");
        if (appliedRightArm === "RA1") {
          setTextureRA1(new_mtl);
          setColorRA1(null);
        } else if (appliedRightArm === "RA2") {
          setTextureRA2(new_mtl);
          setColorRA2(null);
        } else if (appliedRightArm === "RA3") {
          setTextureRA3(new_mtl);
          setColorRA3(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftArm === "LA") {
          setTextureLA(new_mtl);
          setColorLA(null);
        } else if (appliedLeftArm === "LA1") {
          setTextureLA1(new_mtl);
          setColorLA1(null);
        } else if (appliedLeftArm === "LA2") {
          setTextureLA2(new_mtl);
          setColorLA2(null);
        }
      } else if (activeOption === 2) {
        if (appliedBase === "BS") {
          setTextureBS(new_mtl);
          setColorBS(null);
        } else if (appliedBase === "BS1") {
          setTextureBS1(new_mtl);
          setColorBS1(null);
        } else if (appliedBase === "BS2") {
          setTextureBS2(new_mtl);
          setColorBS2(null);
        }
      } else if (activeOption === 3) {
        if (appliedBack === "BK") {
          setTextureBK(new_mtl);
          setColorBK(null);
        } else if (appliedBack === "BK1") {
          setTextureBK1(new_mtl);
          setColorBK1(null);
        } else if (appliedBack === "BK2") {
          setTextureBK2(new_mtl);
          setColorBK2(null);
        }
      } else if (activeOption === 4) {
        if (appliedHead === "H") {
          setTextureH(new_mtl);
          setColorH(null);
        } else if (appliedHead === "H1") {
          setTextureH1(new_mtl);
          setColorH1(null);
        }
      } else if (activeOption === 5) {
        if (appliedSeat === "ST") {
          setTextureST(new_mtl);
          setColorBS(null);
        } else if (appliedSeat === "ST1") {
          setTextureST1(new_mtl);
          setColorST1(null);
        } else if (appliedSeat === "ST2") {
          setTextureST2(new_mtl);
          setColorST2(null);
        }
      } else if (activeOption === 6) {
        console.log("reached safely");
        if (appliedSupport === "SP") {
          setTextureSP(new_mtl);
          setColorSP(null);
        }
      }
    } else {
      new_mtl = {
        color: color.color,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 0) {
        if (appliedRightArm === "RA1") {
          setColorRA1(new_mtl);
          setTextureRA1(null);
        } else if (appliedRightArm === "RA2") {
          setColorRA2(new_mtl);
          setTextureRA2(null);
        } else if (appliedRightArm === "RA3") {
          setColorRA3(new_mtl);
          setTextureRA3(null);
        }
      } else if (activeOption === 1) {
        if (appliedLeftArm === "LA") {
          setColorLA(new_mtl);
          setTextureLA(null);
        } else if (appliedLeftArm === "LA1") {
          setColorLA1(new_mtl);
          setTextureLA1(null);
        } else if (appliedLeftArm === "LA2") {
          setColorLA2(new_mtl);
          setTextureLA2(null);
        }
      } else if (activeOption === 2) {
        if (appliedBase === "BS") {
          setColorBS(new_mtl);
          setTextureBS(null);
        } else if (appliedBase === "BS1") {
          setColorBS1(new_mtl);
          setTextureBS1(null);
        } else if (appliedBase === "BS2") {
          setColorBS2(new_mtl);
          setTextureBS2(null);
        }
      } else if (activeOption === 3) {
        if (appliedBack === "BK") {
          setColorBK(new_mtl);
          setTextureBK(null);
        } else if (appliedBack === "BK1") {
          setColorBK1(new_mtl);
          setTextureBK1(null);
        } else if (appliedBack === "BK2") {
          setColorBK2(new_mtl);
          setTextureBK2(null);
        }
      } else if (activeOption === 4) {
        if (appliedHead === "H") {
          setColorH(new_mtl);
          setTextureH(null);
        } else if (appliedHead === "H1") {
          setColorH1(new_mtl);
          setTextureH1(null);
        }
      } else if (activeOption === 5) {
        if (appliedSeat === "ST") {
          setColorST(new_mtl);
          setTextureST(null);
        } else if (appliedSeat === "ST1") {
          setColorST1(new_mtl);
          setTextureST1(null);
        } else if (appliedSeat === "ST2") {
          setColorST2(new_mtl);
          setTextureST2(null);
        }
      } else if (activeOption === 6) {
        if (appliedSupport === "SP") {
          setColorSP(new_mtl);
          setTextureSP(null);
        }
      }
    }
  }

  const colorMap = function DoSomething() {
    console.log("clicked");
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="change-objects">
        {/* This tray will be filled with the different parts via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        {/* choices  */}
        <div id="js-objects" className="objects">
          <div id="rightArm" className="objects__slide">
            {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
            {activeOption === 0 &&
              rightArm_Objects.map((options, index) => (
                <RightArmObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedRightArm(options.alt_text)}
                />
              ))}
          </div>
          <div id="leftArm" className="objects__slide">
            {activeOption === 1 &&
              leftArm_Objects.map((options, index) => (
                <LeftArmObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedLeftArm(options.alt_text)}
                />
              ))}
          </div>
          <div id="base" className="objects__slide">
            {activeOption === 2 &&
              baseObjects.map((options, index) => (
                <BaseObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBase(options.alt_text)}
                />
              ))}
          </div>
          <div id="back" className="objects__slide">
            {activeOption === 3 &&
              backObjects.map((options, index) => (
                <BackObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedBack(options.alt_text)}
                />
              ))}
          </div>
          <div id="head" className="objects__slide">
            {activeOption === 4 &&
              headObjects.map((options, index) => (
                <HeadObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedHead(options.alt_text)}
                />
              ))}
          </div>
          <div id="seat" className="objects__slide">
            {activeOption === 5 &&
              seatObjects.map((options, index) => (
                <SeatObject
                  key={index}
                  options={options}
                  onClick={() => setAppliedSeat(options.alt_text)}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="options">
        {optionImages.map((options, index) => (
          <Option
            key={index}
            id={index}
            options={options}
            active={activeOption}
            onClick={() => setActiveOption(index)}
          />
        ))}
      </div>

      <div className="download-btn">
        <DownloadBtn onClick={() => setClicked(true)} />
      </div>
      <div className="signout-btn">
        <SignoutBtn  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      history.push('/');
                    });
                  }}/>
      </div>
      <div className="update-profile">
        <ProfileBtn  onClick={()=>{
          history.push('/private')
        }}/>
      </div>

      {/* The Canvas element is used to draw the 3D scene  */}
      <div className="product-canvas">
        <Canvas linear flat>
          <Suspense fallback={null}>
            <Foo updateClick={updateClick} download={clicked} />
            <ambientLight />
            <directionalLight intensity={0.1}/>
            <spotLight
              intensity={0.1}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Support texture={textureSP} color={colorSP} />
            {appliedBack === "BK" && (
              <Back texture={textureBK} color={colorBK} />
            )}
            {appliedBack === "BK1" && (
              <Back1 texture={textureBK1} color={colorBK1} />
            )}
            {appliedBack === "BK2" && (
              <Back2 texture={textureBK2} color={colorBK2} />
            )}

            {appliedBase === "BS" && (
              <Base texture={textureBS} color={colorBS} />
            )}
            {appliedBase === "BS1" && (
              <Base1 texture={textureBS1} color={colorBS1} />
            )}
            {appliedBase === "BS2" && (
              <Base2 texture={textureBS2} color={colorBS2} />
            )}

            {appliedHead === "H" && <Head texture={textureH} color={colorH} />}
            {appliedHead === "H1" && (
              <Head1 texture={textureH1} color={colorH1} />
            )}

            {appliedLeftArm === "LA" && (
              <LeftArm texture={textureLA} color={colorLA} />
            )}
            {appliedLeftArm === "LA1" && (
              <LeftArm1 texture={textureLA1} color={colorLA1} />
            )}
            {appliedLeftArm === "LA2" && (
              <LeftArm2 texture={textureLA2} color={colorLA2} />
            )}

            {appliedRightArm === "RA1" && (
              <RightArm1 texture={textureRA1} color={colorRA1} />
            )}
            {appliedRightArm === "RA2" && (
              <RightArm2 texture={textureRA2} color={colorRA2} />
            )}
            {appliedRightArm === "RA3" && (
              <RightArm3 texture={textureRA3} color={colorRA3} />
            )}
            {appliedSeat === "ST" && (
              <Seat texture={textureST} color={colorST} />
            )}
            {appliedSeat === "ST1" && (
              <Seat1 texture={textureST1} color={colorST1} />
            )}
            {appliedSeat === "ST2" && (
              <Seat2 texture={textureST2} color={colorST2} />
            )}
            {/* 
            {appliedRightArm === "RA" ? (
              <RightHand2Model texture={textureRH2} color={colorRH2} />
            ) : (
              <RightHand1Model texture={textureRH1} color={colorRH1} />
            )}
            {appliedLeftHand === "LH2" ? (
              <LeftHand2Model texture={textureLH2} color={colorLH2} />
            ) : (
              <LeftHand1Model texture={textureLH1} color={colorLH1} />
            )}
            {appliedBody === "B2" ? (
              <Body2Model texture={textureB2} color={colorB2} />
            ) : (
              <Body1Model texture={textureB1} color={colorB1} />
            )} */}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="controls">
        {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide">
            {colors.map((colorOrTexture, index) => (
              <Color
                key={index}
                background={colorOrTexture}
                onClick={() => handleColorChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
