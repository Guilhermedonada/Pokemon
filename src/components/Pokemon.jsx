import React, { useContext, useState } from 'react';
import pokeball from '../assets/images/pokeball.png'

import {PokemonContext} from '../contexts/PokemonContext'
import Button from './Button';

const Pokemon = () => {
 
    const { pokemon_list, modal, bag, pokemon_pokeball } = useContext(PokemonContext)
    const [pokemonsList, setPokemonsList] = pokemon_list
    const [showModal, setShowModal] = modal
    const [bagLimit, setBagLimit] = bag
    const [pokemon, setPokemon] = pokemon_pokeball

    const capturePokemon = () => {
        setPokemonsList([...pokemonsList, pokemon])
        setBagLimit(bagLimit + 1)
        setShowModal(false)
    }

    const freePokemon = () => {
        
        setPokemonsList(pokemonsList.filter((obj, key) => {
            console.log(obj)
            if(obj.index !== key){
                return obj
            }
        }))
        setBagLimit(bagLimit - 1)
        setShowModal(false)
    }

    return (
        <div className="pokemon">
            <main>                
                <section className="profile">
                    <div>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} /> 
                    </div>
                    <h1>{pokemon.name}</h1>
                </section>
                <section className="details">
                    <div>
                        <label>HP</label>
                        <p>{pokemon.weight}</p>                
                    </div>
                    <div>
                        <label>ALTURA</label>
                        <p>{pokemon.height}</p>                
                    </div>
                    <div>
                        <label>PESO</label>
                        <p>{pokemon.weight}</p>                
                    </div>
                </section>
                <section className="types">
                    <h1>TIPO</h1>
                    <div>
                    {pokemon.types.map((value, index) => (
                        <span key={index}>{value.type.name}</span>
                     ))}
                     </div>
                </section>
                <section className="abilities">
                    <h1>HABILIDADES</h1>
                    <div>
                    {pokemon.abilities.map((value, index) => (
                        value.is_hidden == false && (
                        <span key={index}>{index > 0 && ','} {value.ability.name}</span>
                        )                        
                     ))}
                     </div>
                </section>
                <footer>
                    {typeof pokemon.watch !== 'undefined' && pokemon.watch == true ? (
                        <Button text="LIBERAR POKEMON" onClick={freePokemon}/>
                    ) : <img src={pokeball} alt="pokeball" onClick={capturePokemon} />
                    }
                </footer>
            </main>
        </div>
    )
};

export default Pokemon;
