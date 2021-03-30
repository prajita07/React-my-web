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
              src='https://jooinn.com/images/sunset-532.png'
              text='Classy leather belt watch'
              label='Watch'
              path='/services'
            />
            <CardItem
              src='http://media.architecturaldigest.com/photos/57912afe46eb3e65136a5224/master/pass/GettyImages-541049266.jpg'
              text='Latest apple smart watch'
              label='Smart watch'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images3.alphacoders.com/120/120727.jpg'
              text='Latest Samsung headphones'
              label='Headphones'
              path='/services'
            />
            <CardItem
              src='https://www.honeymoonsinc.com/portals/0/Images/Hawaii/RAINBOW-HAWAII-Honeymoon.jpg'
              text='Headphones of high quality'
              label='Gadget'
              path='/products'
            />
            <CardItem
              src='https://images2.alphacoders.com/822/thumb-1920-82262.jpg'
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