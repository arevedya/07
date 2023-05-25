import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card/card";

function App() {

  const [data, setData] = useState([]); // data =10,data = 20

  useEffect(() => {
    Axios.get('/users').then(res => { setData(res.data) }).catch(e => { console.log(e); })
    console.log(data);
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Nmae" email="name@email.com"></Card>
        {data.map((e) => <Card name={e.name} email={e.email}></Card>)}
      </header>
    </div>
  );
}

export default App;

//main dir
// npm i
// npm start
