import './Event.css'; 



export default function Events() {

  function handleClick() {
           const name = document.getElementById('name').value.trim();
              const container = document.getElementById('container');

    
    if (name === '') 
    {
      
      
        alert('Identify yourself');
      return;
    }

    container.innerHTML = `<h2 class='welcome-text'>Hey there, ${name}!</h2>`;

    setTimeout(() => {
      container.innerHTML = `
        <input type='text' id='name' placeholder='Enter your name' class='input-box'/>
       
                 <button id='submitBtn' class='btn'>  Confirm   </button>`;
          document.getElementById('submitBtn').addEventListener('click', handleClick);
    },
    50000);
  }

  return (
    <div className="page">
      
            <div id="container" className="main-box">
                 <h1 className="heading"> Nice to have you </h1>
               <input type="text" id="name" placeholder="Enter your name" className="input-box" />
       
          <button onClick={handleClick} className="btn">Confirm</button>
      </div>

</div>



     );
}