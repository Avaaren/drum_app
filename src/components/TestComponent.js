import React, { Component } from 'react'

import UIfx from 'uifx'

import Drum from '../sounds/drum.wav'
import Drum2 from '../sounds/drum1.wav'
import Drum3 from '../sounds/drum2.wav'
import Drum4 from '../sounds/drum3.wav'
import Drum5 from '../sounds/drum4.wav'
import Drum6 from '../sounds/drum5.wav'
import Drum7 from '../sounds/drum6.wav'
import Drum8 from '../sounds/drum7.mp3'
import Drum9 from '../sounds/drum8.wav'
import Drum10 from '../sounds/drum9.wav'


import './TestComponent.css'


const sfx = {
    drum: new Audio(Drum),
    drum1: new Audio(Drum2),
    drum2: new Audio(Drum3),
    drum3: new Audio(Drum4),
    drum4: new Audio(Drum5),
    drum5: new Audio(Drum6),
    drum6: new Audio(Drum7),
    drum7: new Audio(Drum8),
    drum8: new Audio(Drum9),
    drum9: new Audio(Drum10),

}

export default class TestComponent extends Component {


    render() {
        return (
            <div className="button-container">

                <DrumButton sound={sfx.drum} />
                <DrumButton sound={sfx.drum1} />
                <DrumButton sound={sfx.drum2} />
                <DrumButton sound={sfx.drum3} />
                <DrumButton sound={sfx.drum4} />
                <DrumButton sound={sfx.drum5} />
                <DrumButton sound={sfx.drum6} />
                <DrumButton sound={sfx.drum7} />
                <DrumButton sound={sfx.drum8} />
                <DrumButton sound={sfx.drum9} />
            </div>
        );
    }
}

class DrumButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
        this.audio = this.props.sound;

    }

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            if(this.state.play) {
                this.props.sound.play();
            }
            else {
                this.props.sound.pause(); 
                this.props.sound.currentTime = 0;
            }
              
        });
    }

    render() {
        return (
            <div className="button-item">
                <button className ={this.state.play ? 'active' : ''} onClick={this.togglePlay}></button>
            </div>
        );
    }
}

