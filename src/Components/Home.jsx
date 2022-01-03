import React from 'react'
import '../styles/home.css';
import flower from '../assets/Images/A-logo.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Home = () => {

    return (
        <div className="home">   
 {/* <h1 className='links'> 
    <AiFillGithub />
    <AiFillLinkedin />
    <AiFillTwitterCircle />
</h1>     */}
<h1 className='intro' > Hi there, my name is Aisha. </h1>
<h1 className='intro2' >- <i>Software Engineer</i> </h1>

<img className='homelogo' src={flower} alt="Aisha logo" />

        </div>
    )
}

export default Home