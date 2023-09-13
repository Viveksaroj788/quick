import React from 'react'

function Dis1({user,tickets}) {
    const temp = []
    tickets.map((tic)=> tic.userId===user.id?temp.push(tic):false)
  return (
    <>
    <span>
       <h1>{user.name}</h1>
       {temp.map((tic)=>( <>{tic.id}  {tic.title} Priority :  {tic.priority}<br/></>))}
    </span>
    </>
  )
}

export default Dis1
