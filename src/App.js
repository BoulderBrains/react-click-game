import React, { Component } from 'react';
import Header from './Components/Nav/header'
import Footer from './Components/Nav/footer'
import Intro from './Components/Instruction/intro'
import Wrapper from './Components/Wrapper/wrapper'
import ImageCards from './Components/ImageCards/imageCard'
import imageData from './Assests/js/imageData'


class App extends Component {
    state = {
        imageData,
        clicked: [],
        score: 0,
        highest: 0,
        navMessage: "Click an image to begin"
    }

    scoreChecker = id => {
        let icon = this.state.clicked
        if(icon.length !== 0 && icon.includes(id)) {
            this.setState({
                clicked: [],
                score: 0,
                navMessage: "Incorrect guess!"
            })
        } else {
            icon.push(id)
            this.setState({
                score: this.state.score += 1,
                navMessage: "Correct!",
                clicked: icon
            })
            if (this.state.score > this.state.highest) {
                this.setState({
                    highest: this.state.score
                })
            }
        }
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempStore = array[i];
            array[i] = array[j];
            array[j] = tempStore;
        }
        return array;
    }

    render() {
        const shuffledIcons = this.shuffleArray(this.state.imageData)
        return (
            <Wrapper>
                <Header
                    navMessage={this.state.navMessage}
                    score={this.state.score}
                    highest={this.state.highest}
                />
                <Intro />
                <div className="card-container"> 
                    {shuffledIcons.map(icon => (
                        <ImageCards
                            score={this.state.score}
                            highest={this.state.highest}
                            id={icon.id}
                            key={icon.key}
                            image={icon.image}
                            scoreChecker={this.scoreChecker}
                        />
                    ))}
                </div>
                <Footer />
            </Wrapper>
        )
    }
}

export default App
