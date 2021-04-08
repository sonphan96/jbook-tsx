import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import * as esbuild from 'esbuild-wasm';
import './styles.css';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    })

    console.log(service);
  }

  useEffect(() => {
    startService();
  }, [])

  const onClick = () => {
    console.log(input);
  }

  return (
    <div> 
      <textarea value={input} onChange={(e) => setInput(e.target.value)}>

      </textarea>
      <div >
        <button className="btn" onClick={onClick}>Submit</button>
      </div>

      <pre>{code}</pre>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
