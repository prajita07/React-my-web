import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing  Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../assets/images/img-3.jpg'
              text='Classy leather belt watch'
              label='Watch'
              path='/services'
            />
            <CardItem
              src='../assets/images/img-4.jpg'
              text='Latest apple smart watch'
              label='Smart watch'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../assets/images/img-2.jpg'
              text='Latest Samsung headphones'
              label='Headphones'
              path='/services'
            />
            <CardItem
              src='../assets/images/img-1.jpg'
              text='Headphones of high quality'
              label='Gadget'
              path='/products'
            />
            <CardItem
              src='../assets/images/img-6.jpg'
              text='Wireless apple smart airpods'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;