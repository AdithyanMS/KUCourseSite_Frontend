import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Poster.css';

function Poster() {
    return (
        <div className='poster-container'>
            <video src="/videos/poster-video.mp4" autoPlay loop muted />
            <h1>KNOWLEDGE IS POWER</h1>
            <p>Lets start learning</p>
            <div className="poster-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
            
        </div>
    )
}

export default Poster
