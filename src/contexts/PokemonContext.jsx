import React from 'react';
import { createContext, useState } from "react"

export const PokemonContext = createContext()

export const PokemonProvider = (props) => {
    
    const [showModal, setShowModal]       = useState(false) 
    const [pokemonsList, setPokemonsList] = useState([])
    const [bagLimit, setBagLimit] = useState(1)
    const [pokemon, setPokemon] = useState({})

    return(
        <PokemonContext.Provider value={{ 
                modal: [showModal, setShowModal],
                pokemon_list: [pokemonsList, setPokemonsList],
                bag: [bagLimit, setBagLimit],
                pokemon_pokeball: [pokemon, setPokemon]
            }}>
            {props.children}
        </PokemonContext.Provider>
    )
}  

