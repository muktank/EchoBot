import React, {useState, Fragment} from 'react';

import Form from './components/Form';
import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const [originalMessage, setOriginalMessage] = useState();

  const getData = async(message) => {
    const payload = {
      "message": message
    };

    const response = await fetch("http://localhost:5000/echo", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    setData(data);
  };

  const onSubmit = (message) => {
    if(!message) {
      setData({err: "Please enter a message"});
    } else {
      setOriginalMessage(message);
      getData(message);
    }
  };
 
  return (
    <Fragment>
      <header className="header"><h1>EchoBot</h1></header>
      <main>   
        {originalMessage && !data.err && <div className="message">{originalMessage}</div>}   
        {data.echo && <div className="echo">{data.echo}</div>}
        {data.err && <div className="error">{data.err}</div>}
        <Form onSubmit={onSubmit}></Form>
      </main>
    </Fragment>
  );
}

export default App;