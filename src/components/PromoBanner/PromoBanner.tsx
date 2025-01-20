import React from 'react';
import PromoImage from '../../assets/Rectangle 250.png'
import './PromoBanner.scss'


export default function PromoBanner() {
  return (
    <div className='promoBanner'>
      <h1>Venha conhecer nossas <br /> promoções</h1>
      <h2 className='two-colors'>50% Off nos produtos</h2>
      <img src={PromoImage} />
      <div className='gradientLinear'></div>
      <button>Ver Produto</button>
    </div>
  )
}