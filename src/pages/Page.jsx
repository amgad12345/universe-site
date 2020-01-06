import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
//import Moment from 'react-moment'
const SingleCharacter = props => {
  const [character, GetCharacter] = useState([])
  const [universe, GetUniverse] = useState([])
  const [individual, DeleteIndividual] = useState([])
  const [uni, DeleteUniverse] = useState([])
  const [id, SetId] = useState(1)
  const [hero, SetHero]  = useState('')
  const [saying, SetSaying] = useState('')
  const [ability, SetAbility] = useState('')
  const [name, SetName] = useState('')
  const [cape, SetCape] = useState('')
  const [number, SetNumber] = useState(0)



  const getSingleCharacter = async () => {
    console.log('Character id ' +  id)
    console.log(character)
    const resp = await axios.get(
      `https://localhost:5001/api/Character/getchar/${id}`
    )

    GetCharacter(resp.data)

  }
  const getSingleUniverse = async () => {
    console.log('Character id ' +  id)
    console.log(universe)
    const resp = await axios.get(
      `https://localhost:5001/api/Universe/${id}`
    )

    GetUniverse(resp.data)

  }

  const postSingleCharacter = async () => {
    console.log('Character id ' +  id)
    console.log(hero)
    const resp = await axios.post(
     'https://localhost:5001/api/Character',
    {
    
       characterName: name,
       quote: saying,
       superPower: ability,
       wearsCape: cape,
      // id:number
      // id: parseInt(props.match.params.id),
     } 
    )

    SetHero(resp.data)

  }


  const deleteSingleCharacter = async () => {
    console.log('Character id ' +  id)
    console.log(character)
    const resp = await axios.delete(
      `https://localhost:5001/api/Character/${id}`
    )

    DeleteIndividual(resp.data)
    console.log(resp)

  }


  const deleteSingleUniverse = async () => {
    console.log('Character id ' +  id)
    console.log(character)
    const resp = await axios.delete(
      `https://localhost:5001/api/Universe/${id}`
    )

    DeleteIndividual(resp.data)
    console.log(resp)

  }

  useEffect(() => {
    getSingleUniverse()
  }, [])

  useEffect(() => {
    deleteSingleUniverse()
  }, [])

  useEffect(() => {
    deleteSingleCharacter()
  }, [])

  useEffect(() => {
    postSingleCharacter()
  }, [])

 
  useEffect(() => {
    getSingleCharacter()
  }, [])

  if (character.wearsCape = true) {
       
    character.wearsCape = "true"
 } else {
  character.wearsCape = "false"
 }

  return (
    <div >
      <section>
        <h1>Search Characters</h1>
      <input
          type="number"
          placeholder="id"
          value={id}
          onChange={e => SetId(e.target.value)}
        />
        <button
          onClick={getSingleCharacter}
        >
          search character by id
        </button>
      <h1 >{character.id}</h1>
      <h4 >character name: {character.characterName}</h4>
      <h4>character quote: {character.quote}</h4>
      <h4>character super power: {character.superPower}</h4>
      <h4>character cape: {character.wearsCape}</h4>
      <button
          onClick={deleteSingleCharacter}
        >
          Delete Character
        </button>
      </section>
      <section>
        <h1>Search Universes</h1>
      <input
          type="number"
          placeholder="id"
          value={id}
          onChange={e => SetId(e.target.value)}
        />
        <button
          onClick={getSingleUniverse}
        >
          search Universe by id
        </button>
      <h1 >{universe.id}</h1>
      <h4 >universe name: {universe.universeName}</h4>
      <h4>universe enemeis: {universe.universeEnemies}</h4>
      <h4>universe location: {universe.universeLocation}</h4>
      
      <button
          onClick={deleteSingleUniverse}
        >
          Delete Universe
        </button>
      </section>
      <section>
      <h1>Creat Character</h1>
     
        <input
          type="string"
          placeholder="name"
          value={name}
          onChange={e => SetName(e.target.value)}
        />
        <input
          type="string"
          placeholder="quote"
          value={saying}
          onChange={e => SetSaying(e.target.value)}
        />
        <input
          type="string"
          placeholder="ability"
          value={ability}
          onChange={e => SetAbility(e.target.value)}
        />
        wheres cape ?
       
        <button

          onClick={postSingleCharacter}
        >
          creat character
        </button>
      </section>
    </div>

  )
}

export default SingleCharacter