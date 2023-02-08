import React from 'react'
import { relatedInfo } from '../../../data'

function Relatedinfo (infoKey) {

    const relInfo = relatedInfo.find(inf => {
        return inf.id === infoKey.infoKey;
      });

    console.log(relInfo.roles)
    
    return (
        <div className='relInfo-con'>
            <div className="info-wrapper">
                <h6>Client</h6>
                <h6 className='ins'><b>{relInfo.client}</b></h6>
            </div>

            <div className="info-wrapper">
                <h6>Project Year</h6>
                <h6 className='ins'><b>{relInfo.year}</b></h6>             
            </div>

            <div className="info-wrapper">
                <h6>Roles & Responsibility</h6>
                <div className="chip-wrapper">
                    {
                        relInfo.roles.map(({res}) =>  
                            <div className="chip-wrapper chip">{res}</div>
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Relatedinfo