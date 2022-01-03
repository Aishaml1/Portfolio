import React from 'react'
import '../styles/home.css';
import flower from '../assets/Images/A-logo.png'
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { GiVineFlower} from "react-icons/gi";

const Home = () => {

    return (
        <div className="home">   

<h1 className='intro' > Hi there, my name is Aisha. </h1>
<h1 className='intro2' > <GiVineFlower />  <i>Software Engineer</i> <GiVineFlower />  </h1>
<h1 className='contact'> 
    <a  className='contact1' href='https://github.com/Aishaml1'> <AiFillGithub /> </a>
    <a  className='contact2' href='https://www.linkedin.com/in/aisha-lugg/'><AiFillLinkedin /> </a>
    <a className='Resume' href='https://docs.google.com/document/d/e/2PACX-1vRux-6TrkUL_yP0EIwkAB_TX4vbLcQkT79rTVkVksIkFQQLFDX3jozu1gMhpYi1N7VVpEzxQAgZCSMT/pub'> Resume  </a>
</h1>
<img className='homelogo' src={flower} alt="Aisha logo" />

        </div>
    )
}

export default Home