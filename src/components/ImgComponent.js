import dogImg from '../dog.jpeg';
import React, { Component } from "react";

class ImgComponent extends Component {
    render() {
        return (
            <img src={dogImg} alt="강아지" />
        )
    }
}

// function ImgComponent() {
//     return (
//         <img src={dogImg} alt="강아지" />
//     )
// }

export default ImgComponent;