import React, { useEffect } from 'react';
import FirstSector2 from './jsx/firstSector2';
import SecondSector from './jsx/second_Sector';
import VCard from './jsx/VCard';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelector(".container-0").style.height = window.innerHeight + "px";
})
  return (

    <div className='container-0'>
      <br />
      <FirstSector2 />
      <br />
      <hr className='hr-0' />
      <VCard
        name="Ali Haydarzade"
        title="Software Engineer"
        email="aliheyderzade165@gmail.com"
        phone="+994552831679"
      />
      <br />
      <hr className='hr-0' />
      <br />
      <SecondSector />
      <br />
      <hr className='hr-0' />
    </div>
  );
}

export default App;
