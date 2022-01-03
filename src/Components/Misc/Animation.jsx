import React from "react";
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: '80vh', height: '80vh',}}
                className='flowerr'
            />
        </div>
    )
}
export default Animation