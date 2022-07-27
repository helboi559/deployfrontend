import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import PostUser from "./Pages/PostUser";
import {useState} from "react"
import {useState, useEffect} from "react"


const urlEndpoint=process.env.REACT_APP_URL_ENDPOINT
function App() {
  const [clientMessage,setClientMessage] = useState('')
  const [serverMessage,setServerMessage] = useState('')
  const [userUpdateResponse, setUserUpdateResponse] = useState(null);
  const [userList,setUserList] = useState([])
  useEffect(() => {
    const fetchUserList = async () => {
      const url = `${urlEndpoint}/get-users`
      const res = await fetch(url)
      const responseJSON = await res.json()
      // console.log(responseJSON)
      
      setUserList(responseJSON)
      return responseJSON
    }
    fetchUserList()
  },[])
  
  const sendReceiveMessage = async () => {
    const url = `${urlEndpoint}/post-message`
    const response = await fetch (url , {
     method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({clientMessage}) 
    }) 
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage)
  }

  const postUserData = async (userData) => {
    const url = `${urlEndpoint}/create-user`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const responseJSON = await response.json();
    setUserUpdateResponse(responseJSON);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
         <Route index element={<HomePage clientMessage={clientMessage} setClientMessage={setClientMessage} serverMessage={serverMessage} sendReceiveMessage={sendReceiveMessage} />} />
         <Route
            path="/post-user"
            element={<PostUser postUserData={postUserData} />}
          />
         <Route index element={<HomePage clientMessage={clientMessage} setClientMessage={setClientMessage} serverMessage={serverMessage} sendReceiveMessage={sendReceiveMessage} userList={userList} setUserList={setUserList} />} />
        </Routes>
      </header>
    </div>
  );
  
}

export default App;
