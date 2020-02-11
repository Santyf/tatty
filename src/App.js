import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Headline from './components/Headline/Headline';
import heros from './Heros.json';
import Score from './components/Score/Score';
import './App.css';

class App extends Component {

  state = {
    heros,
    score: 0,
    topScore: 12,
    herosChosen: [],
    message: "Click image to begin"


  };

  herosClicked = id => {
    let herosChosen = this.state.herosChosen
    if (herosChosen.includes(id)) {
    this.setState({
      herosChosen: [],
      score: 0,
      message: "You lost! Click again to play"

    });
    return;
  }
     else {
  herosChosen.push(id);

  if (herosChosen.length === 12) {
    this.setState({
      score: 12,
      message: "Winner! Click to play again!",
      herosChosen: []
    });
    return;

  }
  this.setState({
    score: herosChosen.length,
    message: "You Guessed correct!",
  });

  for (let i = heros.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [heros[i], heros[j]] = [heros[j], heros[i]];
  }

}
     
}



render() {
  return (
    <>

      <Score 
      score={this.state.score}
      topScore={this.state.topScore}
      message={this.state.message}
      
      />
      <Headline />

      <div className="row">
        {this.state.heros.map(heros => (
          <Wrapper
          
            herosClicked={this.herosClicked}
            id={heros.id}
            image={heros.image}
          />


        ))}
      </div>
    </>
  );

}
};




export default App;
