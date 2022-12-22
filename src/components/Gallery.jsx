import React from "react";

function Gallery(props) {
    return (
        <div style={{'width' : '100%'}}>
            <p><strong>{props.title}</strong></p>
            <p>{props.artist}</p>
            <p>{props.medium}</p>
            <img src={props.primaryImage} alt={props.title}></img>
        </div>
    )
}

export default Gallery