import React from 'react'
import '../styles/home.css';
import flower from '../assets/Images/flowerr.png'

const Home = () => {

    return (
        <div className="home">
            <h1 className='intro' > Hi there, my name is Aisha. </h1>
<img className='homelogo' src={flower} alt="Aisha logo" />
        </div>
    )
}

export default Home