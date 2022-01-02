import React from "react";
import Lottie from 'react-lottie-player'
import '../../styles/home.css';

const Animation = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: '20%', height: '20%',}}
                className='circle'
            />
        </div>
    )
}
export default Animation