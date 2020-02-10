import Wrapper from './components/Wrapper/Wrapper';
import Headline from './components/Headline/Headline';
import heros from './Heros.json';
import React, { Component } from 'react';
import Score from './components/Score/Score';
import './App.css';

class App extends Component {

  state = {
    heros,
    score: 0,
    topScore: 0,
    herosChosen: []

  };

  herosClicked = id => {
     let herosChosen = this.state.herosChosen
     this.setState({herosChosen})
     console.log(id)




    for (let i = heros.length - 1 ; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [heros[i], heros[j]] = [heros[j], heros[i]];
    }

  }



  render() {
    return (
      <>

        <Score />
        <Headline />

        <div className="row">
          {this.state.heros.map(heros => (
            <Wrapper
            
              herosClicked={this.herosClicked}
              id = {heros.id}
              image={heros.image}
            />


          ))}
        </div>
      </>
    );

  }
};




export default App;
