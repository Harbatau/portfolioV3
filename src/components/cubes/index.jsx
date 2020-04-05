import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Cube from "./cubes";
export default () => {
    const group = useRef();

    useFrame(() => {
        group.current.rotation.y += 0.005;
    });

    const nodesCubes = map(new Array(25), (el, i) => {
        return <Cube key={i} />;
    });

    return <group ref={group}>{nodesCubes}</group>;
};
