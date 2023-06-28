import React, { Component } from "react";

export default function like(props) {
  return (
    <div>
      <i
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
        className={!props.liked ? "fa-heart fa-regular" : "fa-heart fa-solid"}
      ></i>
      {/* <i className="fa-heart fa-regular"></i> */}
    </div>
  );
}
