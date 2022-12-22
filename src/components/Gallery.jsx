import React from "react";

function Gallery(props) {
    return (
        <div>
            <div className="container" style={{}}>
            <p><strong>{props.title}</strong></p>
            <p><strong>{props.artist}</strong></p>
            <p>{props.medium}</p>
            </div>
            {props.primaryImage ? <img src={props.primaryImage} alt={props.title}></img> : 'No Image!!'}
        </div>
    )
}

export default Gallery