import React,{useState,useEffect} from 'react';
import Sighnup from './Components/SighnUp';
import Login from './Components/Login';
import style from './App.css';
import { Checkbox } from '@material-ui/core';

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const showSighnUp = () => setDisplayForm(true);
  const showLoghin= () => setDisplayForm(false);
  const sighnUpOrLogin= ()=>setDisplayForm(!displayForm);
  return (
    <div className="App">
      {/* this is top of app */}

        <button onClick={showSighnUp} className={`btn`}>ثبت نام</button>
        <button onClick={showLoghin} className={`btn`}>ورود</button>

        {/* <input type={Checkbox} onClick={sighnUpOrLogin} className={"btn"}/> */}
      {/* this is bottum of app and components */}
       {displayForm ? <Sighnup/> : <Login/>}
    </div>
  );
  return (<Login></Login>);
}

export default App;
