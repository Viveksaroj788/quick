import React from 'react'

function Dis2({user,tickets}) {
    const p1 = []
    const p2 = []
    const p3 = []
    const p4 = []
    const p5 = []
    tickets.map((tic)=>{if(tic.priority === 0){p1.push(tic)} else if(tic.priority === 1){p2.push(tic)} else if(tic.priority === 2){p3.push(tic)} else if(tic.priority === 3){p4.push(tic)} else if(tic.priority === 4){p5.push(tic)} })
  return (
    <div>
      <h1>P1</h1>
      {p1.map((tic)=> ( <>{tic.id}  {tic.title}<br/></>))}
      <h1>P2</h1>
      {p2.map((tic)=> ( <>{tic.id}  {tic.title}<br/></>))}
      <h1>P3</h1>
      {p3.map((tic)=> ( <>{tic.id}  {tic.title}<br/></>))}
      <h1>P4</h1>
      {p4.map((tic)=> ( <>{tic.id}  {tic.title}<br/></>))}
      <h1>P5</h1>
      {p5.map((tic)=> ( <>{tic.id}  {tic.title}<br/></>))}
    </div>
  )
}

export default Dis2
