import location from '../../images/location.svg';
import arror from '../../images/arror.svg';
import carlocation from '../../images/carlocation.svg';

import car from '../../images/bus.svg';
import car2 from '../../images/image-2.svg';

import mail from '../../images/mail.svg';
import './Logistic.css'
import Header from '../../components/Header/Header';
const Logisic = () => {
    const firstcontainer = [
      {
        id:1,
        img:car,
        name:"HIRE A TRUCK"
      },
      {
        id:2,
        img:car2,
        name:"HIRE A VAN"
      }
    ]
    const contain = [
        {
            id:1,
            name:"Sign up now",
            img: arror
        },
        {
            id:2,
            name:"Track delivery",
            img: carlocation
        },
      
     
    ]
    const contain2 = [
        {
            id:3,
            name:"Find the nearest vehicle to you",
            img: location
        },
        {
            id:4,
            name:"Make a complaint",
            img: mail
        },
    ]
    return ( 
        
       <div>
            <Header />
           <div className='track-container'>

                {firstcontainer.map((firstcontainer) =>(

                    <div className='firstcontainer' key={firstcontainer.id}>

                            <img src={firstcontainer.img} alt="" style={{width: "100px"}} />
                            <h1 className='logistic-h1'>{firstcontainer.name}</h1>

                    </div>
                ))}

           </div>
           {/* the sec conponents*/}
           
            <div className="sec-container">

                <div className='box'>

                        <div className='set-boxes'>

                                {contain.map((contain) => (
                                    
                                        <div className="contain" key={contain.id}>

                                            <img src={contain.img} alt="" style={{width: "100px"}} />
                                            <h2 className='logistic-h2'>{contain.name}</h2>

                                        </div>

                                ))}
                        </div>

                    <div className='set-boxes'>

                        {contain2.map((contain2) => (

                            <div className="contain" key={contain2.id}>

                                    <img src={contain2.img} alt="" style={{width: "100px"}} />
                                    <h2 className='logistic-h2'>{contain2.name}</h2>


                            </div>
                        

                        ))}
                    </div>
    
                </div>

            </div>
       </div>
     );
}
 
export default Logisic;