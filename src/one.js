import i1 from './image/C5-5.jpg';
import i2 from './image/JJ1-1.jpg';
import i3 from './image/7-7.jpg';
import i4 from './image/4-4.jpg';
import i5 from './image/1.jpg';
import i6 from './image/C1-1.jpg';
import i7 from './image/T1.jpg';
import i8 from './image/T2.jpg';
import i9 from './image/14-14.jpg';
import i10 from './image/13-13.jpg';



import './one.css'

export default function Drapefit(){
    
return(

<>
<div className="product-grid">
    <Design name='Linen Shirt' price='₹1000' status='Available'  image={i1} btnName='Save'/>
    <Design name='Jeans' price='₹1500' status='notavailable'  image={i2} btnName='Cancle'/>
    <Design name='Cargo' price='₹2000' status='Available'  image={i3} btnName='Save'/>
    <Design name='Shirt' price='₹3000' status='Available'  image={i4} btnName='Save'/>
    <Design name='Shirt' price='₹2500' status='notavailable' image={i5} btnName='Cancle'/>
    <Design name='Shirt' price='₹2500' status='Available'  image={i6} btnName='Save'/>
    <Design name='T-shirt' price='₹2500' status='Available'  image={i7} btnName='Save'/>
    <Design name='T-shirt' price='₹2500' status='Available'  image={i8} btnName='Save'/>
    <Design name='T-shirt' price='₹2500' status='Available'  image={i9} btnName='Save'/>
    <Design name='T-shirt' price='₹2500' status='Available'  image={i10} btnName='Save'/>

 </div>   
</>
     
  );
}
export function Design({ name, price, status, image, btnName }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">{price}</p>
                <p className={`product-status ${status.replace(' ', '-').toLowerCase()}`}>
                    {status}
                </p>
                <Btns>{btnName}</Btns>
            </div>
        </div>
    );
}

export function Btns({ children }) {
    return <button className="btn btn-dark product-button">{children}</button>;
}