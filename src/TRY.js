import i from './image/1-1.jpg'
 
export default function Try(){
    return(
        <>
           <Design name='Product1' price='500' status='Available' image={i} btnName='Save'/>
           <Design name='Product2' price='1500' status='Few Available' image={i} btnName='Save'/>
           <Design name='Product3' price='1000' status='Not Available' image={i} btnName='Cancel'/>
        </>
    );
}
 
export function Design(pr){//{name, price,status,image}
    const products = {
        theme:{
            backgroundColor: '#446888ff',
            color:'#eee',
            padding: '10px',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap:'10px',
            justifyContent:'space-between'
        }
    }
    return(
        <>
            <div className="container-md-5 p-10 ">
                <div style={products.theme}>
                    <h3>Product Name - {pr.name}</h3>
                    <h4>Product Price - {pr.price}</h4>
                    <h5 className="text-light">Product availability - {pr.status}</h5>
                    <img src={pr.image} alt={pr.name} height={70} width={70}  />
                </div>
                <Btns >
                   {pr.btnName}
                </Btns>
               
            </div>
        </>
    );
}
 
export function Btns({children}){
    return(
        <button className='btn btn-dark' >
            {children}
        </button>
    );
}