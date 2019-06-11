import React, { Component }from 'react';


class Player extends Component {
    handleForm(e){
        e.preventDefault();
    }
    render() { 
        return (
        <form onSubmit = {(e) => this.handleForm(e)}>
            <label>
                Player X
                <input type = "radio" name="player" value="X"></input>
            </label>
            <label>
                Player 0
                <input type = "radio" name="player" value="0"></input>
            </label>
            <input type = "submit" value = "start"></input>
        </form>
         )
    }
}
export default Player;