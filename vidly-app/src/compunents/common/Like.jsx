import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    return (
      <div>
        <i
          style={{ cursor: "pointer" }}
          onClick={this.props.onClick}
          className={
            !this.props.liked ? "fa-heart fa-regular" : "fa-heart fa-solid"
          }
        ></i>
        {/* <i className="fa-heart fa-regular"></i> */}
      </div>
    );
  }
}

export default Like;
