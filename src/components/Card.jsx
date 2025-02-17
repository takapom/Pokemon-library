import React from 'react'

const Card = ({pokemon}) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className='cardName'>{pokemon.name}</h3>
      <div className='cardType'>
        <div>タイプ</div>
        {pokemon.types.map((type) => {
            return( 
            <div>
                <span >{type.type.name}</span>
            </div>
            );    
         })}
      </div>
      <div className='cardInfo'>
         <div className='cardDate'>
          <p className='title'>重さ：{pokemon.weight}</p>
         </div>
      </div>
    </div>
  );
};

export default Card;