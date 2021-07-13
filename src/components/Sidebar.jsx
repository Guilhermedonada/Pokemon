import React, { useContext, useState } from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

import {PokemonContext} from '../contexts/PokemonContext'

const Sidebar = () => {

    const { pokemon_list, bag, modal, pokemon_pokeball } = useContext(PokemonContext)
    const [pokemonsList, setPokemonsList] = pokemon_list
    const [showModal, setShowModal] = modal
    const [bagLimit, setBagLimit] = bag    
    const [pokemon, setPokemon] = pokemon_pokeball

    const checkPokemon = (pokemon, index) => {
        setShowModal(true)

        pokemon.index = index
        pokemon.watch = true
        console.log(pokemon)
        setPokemon(pokemon)
    }

    const addPokemon = () => {
        alert("Adicionar pokemon. não implementado ainda.")
    }

    return (
        <div className="sidebar">
            {bagLimit < 7 && (
                <div className="sidebar__item">
                    ?
                </div>
            )}
            {pokemonsList.map((pokemon,index) => (
                <div key={pokemon.name} className="sidebar__item item_catched" onClick={() => checkPokemon(pokemon, index)}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ))}
           {bagLimit < 7 && ( 
            <Button
                icon={<img src={plusIcon} alt="+" onClick={addPokemon}/>}
            />
            )}
        </div>
    );
};

export default Sidebar;
