import React, { Component } from "react";
// font awesome incons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// font awesome incons

const Like = ({ liked, onliked }) => {
  return (
    <div>
      <FontAwesomeIcon
        onClick={onliked}
        style={{ cursor: "pointer" }}
        icon={liked ? faHeart : farHeart}
      />
    </div>
  );
};

export default Like;
