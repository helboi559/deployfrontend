import React from 'react'

const HomePage = (props) => {
  
    return (
    <>
        <p>{props.clientMessage}</p>
        <p>{props.serverMessage}</p>
        <input type="text" onChange={(e)=> {
            const dateTime = new Date()

            props.setClientMessage(`Message: ${e.target.value} at time ${dateTime.toString()}`)
        }}/>
        <button onClick={()=> {
            props.sendReceiveMessage()
        }}>Send</button>
        <>
            {props.userList.map((user) => {
                return (
                    <> 
                        <p>{user.id}</p>
                    </>
                )
            })}
        </>
    </>
  )
}

export default HomePage