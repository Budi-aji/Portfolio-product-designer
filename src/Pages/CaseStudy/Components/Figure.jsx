import React from 'react'
import '../projectitem.css'
import { figuresKrista } from '../../../data';
import { figuresNusawallet } from '../../../data';
import { figuresCloudloop } from '../../../data';


function Figure (arr) {
  const ide = arr.idFig
  const ard = arr.arr
  var figured;
  

  if (ard == "kr"){
    figured = figuresKrista;
  }
  else if (ard == "ns"){
    figured = figuresNusawallet;
  }
  else if (ard == "cl"){
    figured = figuresCloudloop;
  }else {
    return <div>No figure was found with the given id</div>;
  }

  console.log(arr)

  const figuret = figured.find(fig => {
    return fig.id === ide;
  });
  console.log(ide)

  return (
    <div className='figure-con'>
      <img src={figuret.image} alt={figuret.tittle} />
      <small>{figuret.tittle}</small>
    </div>
  );
}


export default Figure