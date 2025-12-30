import { useState } from "react";

export default function Events(){

    const [visible , isVisible]= useState(false);
   
   
    function handleClick(e){
        
       e.preventDefault();
        console.log(visible);
        if(visible)
            isVisible(false);
        else
            isVisible(true);
        }  
        
        return (
            <form onSubmit={handleClick} >
                {visible && <input type="text" placeholder="Enter your name" />}
                <button type="submit">

                    {!visible ? "Show" : "Hide"}
                </button> </form>
        );
    
    
}