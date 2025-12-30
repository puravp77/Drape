import React, {useState} from 'react';

export default function Application(){
    const [Fullname , setFullName] = useState('');
    const [State , setState] = useState('');
    const [message , setMessage] =useState('');

    const handlebutton =(e) => {setMessage({Fullname , State})};

    return(
        <>
            <h1>Demo Page</h1>
            <input type="text" placeholder="Enter Detail" value={Fullname}   onChange={(e) => setFullName(e.target.value)}/><br />
            <input type="text" placeholder="Enter Detail" value={State}   onChange={(e) => setState(e.target.value)}/><br />
            <button onClick={handlebutton}>Click</button>
            <div>
                  {message && (
                    <>
                    <h3>Full Name: {message.Fullname}</h3>
                    <h3>State: {message.State}</h3>
                    </>
                    )}
            </div>
        </>
    );
}