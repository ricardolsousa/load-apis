import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center flex-col">
      {/* TITLE */}
      <div className="flex justify-center w-full border-b"  style={{ borderColor: "#5f5f5f" }}>
        <h1 className="text-white my-2">Teste</h1>
      </div>

      {/* VERBS */}
      <div className="flex justify-center w-full border-b" style={{ borderColor: "#5f5f5f" }}>
        <div className="w-5/6 flex justify-between my-3">
          <div className="flex">
            {/* GET */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#ece7ff" }}>
              <button style={{ color: "#5628ac" }}>GET</button>
            </div>

            {/* POST */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#c1ffe5" }}>
              <button style={{ color: "#196445" }}>POST</button>
            </div>

            {/* PUT */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#d1efff" }}>
              <button style={{ color: "#2537a8" }}>PUT</button>
            </div>

            {/* PATCH */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#fdf5c7" }}>
              <button style={{ color: "#a44614" }}>PATCH</button>
            </div>

            {/* DELETE */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#ffe0e0" }}>
              <button style={{ color: "#851d29" }}>DELETE</button>
            </div>
          </div>
          <div>
            {/* Limpar */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#191f27" }}>
              <button style={{ color: "#51575e" }}>Limpar</button>
            </div>
          </div>
        </div>
      </div>

      {/* DATA */}
      <div className="flex justify-center w-full min-h-80">
        <div className="w-5/6 my-2 rounded-md" style={{ backgroundColor: "#1a202a"}}>
          {/* DATA TITLE */}
          <div className="w-full border-b" style={{ borderColor: "#5f5f5f" }}>
            <h1 className="text-white m-2">Data</h1>          
          </div>
          
          {/* DATA API */}
          <div>

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
