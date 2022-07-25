import React from 'react'

const HomePage = (props) => {
  return (
    <div>
        <p>{props.clientMessage}</p>
        <p>{props.serverMessage}</p>
        <input type="text" onChange={(e)=> {
            const dateTime = new Date()

            props.setClientMessage(`Message: ${e.target.value} at time ${dateTime.toString()}`)
        }}/>
        <button onClick={()=> {
            props.sendReceiveMessage()
        }}>Send</button>
    </div>
  )
}

export default HomePage