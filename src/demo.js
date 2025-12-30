import { useState } from "react";
import "./demo.css";

export default function Demo() {
  const [message,  setMessage] = useState("");
  const [Name, setName] = useState("");
const [Surname, setSurname] = useState("");

  const handleSubmit = () => {setMessage({Name, Surname});};

  return (
    <>
            <div className="demo-container">
                <h1>DEMO PAGE</h1> <br /> <br />
                <input type="text" placeholder="Enter Your Name" value={(Name)} onChange={(e) => setName(e.target.value)}/><br /> 
                <input type="text" placeholder="Enter Your Surname" value={(Surname)} onChange={(e) =>setSurname(e.target.value)}/><br /> 
                <button onClick={handleSubmit}>Submit</button> <br /><br />

                {message && (
                    <>
                    <h3>Name:- {message.Name}</h3>
                    <h3>Surname:- {message.Surname}</h3>
                    </>
                )}
            </div>
            </>
  );
}
        