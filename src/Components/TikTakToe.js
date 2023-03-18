import React, { useEffect, useState } from 'react';
import './Toe.css';
import Pattern from './Pattern';
export function TikTakToe (){
const ini=['','','','','','','','',''];
const[Items,SetItems]=useState([...ini]);
const[Player,SetPlayer]=useState("x");
const[Idx,SetIdx]=useState(-1);


const changeplayer=(index)=>
{
    SetIdx(index);
    if(Items[index] =='')
    {
    SetItems((Items)=>
    {
      return  Items.map((value,i)=>
        {
         if(i===index)  return Player;
         else return value;
        })
    })

    SetPlayer(Player === 'x'?'o':'x');
    };

}

const checkWin=()=>
{
    if(Idx<0)return;
    const checkArr=Pattern[Idx];

    checkArr.forEach(element => {

        console.log(element);

        if(Items[element[0]]==Items[element[1]] && Items[element[0]]===Items[element[2]])
        {
               alert("player has won");
                AfterWin();
        }
    });

}

useEffect(()=>
{
    console.log(Items);
    checkWin();
},[Items]);

const AfterWin=()=>
{
    SetItems([...ini]);
    SetPlayer('x');
    SetIdx(-1);
}

    return(
        <div className='board'>
            {Items.map((item,index)=>
                {
                  return(  <div key={index} className="tiles" onClick={()=>changeplayer(index)}>
                        <p>{item}</p>
                    </div>)
                })}

        </div>
    )

}
