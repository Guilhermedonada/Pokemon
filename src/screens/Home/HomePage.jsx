import React from 'react';
import { useHistory } from 'react-router-dom' 
import pokemonLogo from '../../assets/images/pokemonLogo.png'
import Button from '../../components/Button';

const HomePage = () => {

    const history = useHistory()

    const startGame = () => {
        history.push('/map')
    }

    return(
        <div className="home">
            <img src={pokemonLogo} alt="Logo" />
            <Button text="START" onClick={startGame}/>
        </div>
    )
};

export default HomePage;
