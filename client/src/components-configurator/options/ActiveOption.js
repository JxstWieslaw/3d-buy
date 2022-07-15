import { useState, useRef, useEffect } from "react";
import "../../App";
import "../../index";

export const Option = ({options,active, id ,onClick}) => {
  const className = `option ${id === active ? '--is-active' : ''}`;
  return (
    <>
      {/* These toggle the the different parts of the body that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
        <div className={className} data-option={options.data_option} onClick={onClick}>
          <img
            src={options.url}
            alt={options.alt_text}
          />
        </div>
    </>
  );
}