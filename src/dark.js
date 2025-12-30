import  { useState } from 'react';

export default function Dark() {
const [dark, isDark] = useState(true);

  return (
    <>
      <div className={`min-vh-100 d-flex-coumn g-20 p-40 justify-content-center align-items-center
       ${dark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>

  <div>
    <h1 className="mb-4">{dark ? 'Dark Theme' : 'Light Theme'} </h1>
    <button className="btn btn-success" onClick={() => isDark(!dark)}>
      Change Theme
    </button>

  </div>

       </div>

    
    
    </>
  );
}







