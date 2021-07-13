import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import Pokemon from '../../components/Pokemon';
import ashFront from '../../assets/images/ashFront.png'

import {PokemonContext} from '../../contexts/PokemonContext'

const MapPage = () => {

    const {modal , pokemon_pokeball, bag} = useContext(PokemonContext)
    const [showModal, setShowModal] = modal
    const [pokemon, setPokemon] = pokemon_pokeball
    const [bagLimit, setBagLimit] = bag

    const getPokemon = async () => {   
        
        if(bagLimit < 7) {        
            let id = Math.floor(Math.random() * (807 - 1 + 1)) + 1
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()        
            setPokemon(data)
            setShowModal(true)
        } else {
            alert("Bag cheia! Libere espaço para capturar mais Pokemons.")
        }
    }

    return (
        <>
            <div className="map">
                <Sidebar />
                <Modal>
                    {(Object.keys(pokemon).length) > 0 && (<Pokemon  />)}                    
                </Modal>
                <img src={ashFront} alt="Ash" onClick={getPokemon} />
            </div>
        </>
    );
};

export default MapPage;
