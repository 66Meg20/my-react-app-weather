import React from "react";
import ReactLoading from "react-loading";

export default function ReactLoader(props) {
  return (
    <ReactLoading
      type={props.type}
      color={props.color}
      height={567}
      width={275}
    />
  );
}
