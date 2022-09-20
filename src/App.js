import React, { useEffect } from "react";
import "./pages/HomeScreen";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout(userAuth))
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      {!user ?
        (<Route path="/" element={<LoginPage/>}/>)  : 
        (<Route exact path="/" element={<HomeScreen />}/>) 
        
        
      }
      (<Route path="/profile" element={<ProfilePage />}/>)
      </Routes>    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
