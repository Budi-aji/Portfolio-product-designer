import React from 'react'
import '../projectitem.css'
import { figuresKrista } from '../../../data';
import { figuresNusawallet } from '../../../data';
import { figuresCloudloop } from '../../../data';


function Figure (arr) {
  var figured;
  
  if (arr.arr === "kr"){
    figured = figuresKrista;
  }
  else if (arr.arr === "ns"){
    figured = figuresNusawallet;
  }
  else if (arr.arr === "cl"){
    figured = figuresCloudloop;
  }else {
    return <div>No figure was found with the given id</div>;
  }

  const figuret = figured.find(fig => {
    return fig.id === arr.idFig;
  });

  return (
    <div className='figure-con'>
      <img src={figuret.image} alt={figuret.tittle} />
      <small>{figuret.tittle}</small>
    </div>
  );
}


export default Figure