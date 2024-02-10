import React, { useState } from 'react';
import './App.css';
import VerbsArea from './components/verbs-area';
import JSONPretty from 'react-json-pretty';

var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function App() {

  const [data, setData] = useState<any>(null);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center flex-col">
      {/* TITLE */}
      <div className="flex justify-center w-full border-b"  style={{ borderColor: "#5f5f5f" }}>
        <h1 className="text-white my-2">Teste</h1>
      </div>

      {/* VERBS */}
      <VerbsArea setData={setData} />      

      {/* DATA */}
      <div className="flex justify-center w-full h-96">
        <div className="w-5/6 flex flex-col my-2 rounded-md" style={{ backgroundColor: "#1a202a"}}>
          {/* DATA TITLE */}
          <div className="w-full flex justify-between items-center border-b" style={{ height: 'auto', borderColor: "#5f5f5f" }}>
            <h1 className="text-white m-2">Data</h1>
          </div>
          
          {/* DATA API */}
          <div style={{ color: '#ffffff', flexGrow: 1, overflow: 'auto'}}>
            <JSONPretty id="json-pretty" mainStyle="background: #1a202a!important" data={data} theme={JSONPrettyMon}></JSONPretty>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-5 w-full">
        <div className="w-5/6 flex grid gap-8 grid-cols-2">
          {/* HEADERS */}
          <div className="min-h-80 rounded-md" style={{ backgroundColor: "#1a202a", borderColor: "#5f5f5f" }}>
            {/* HEADERS TITLE*/}
            <div className="w-full border-b" style={{ borderColor: "#5f5f5f" }}>
              <h1 className="text-white m-2">Headers</h1>
            </div>

            {/* HEADERS DATA */}
            <div>
            </div>
          </div>
          
          {/* CONFIG */}
          <div className="min-h-80 rounded-md" style={{ backgroundColor: "#1a202a", borderColor: "#5f5f5f" }}>
            {/* CONFIG TITLE*/}
            <div className="w-full border-b" style={{ borderColor: "#5f5f5f" }}>
              <h1 className="text-white m-2">Config</h1>
            </div>

            {/* CONFIG DATA */}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
