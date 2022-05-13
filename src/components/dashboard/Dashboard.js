import { Link } from 'react-router-dom';
import prof from './dashimg/dot.png'
import Data from './Data.json'
const Dashboard = () => {
    return (
        <div>
         <div>
          <div className='block'>

                        <table  className='w-2/3 flex items-center m-auto p-5 '>
                                <tr className='flex'>
                                    <th></th>
                                    <th>Status</th>
                                    <th>Amount</th>

                                </tr>
                        </table>
                {
                        Data.map(Data => {
                    return(

                        <div className='w-2/3 items-center m-auto p-5 flex '>
                            <table className='flex'>
                            
                                <tr className=''>
                                    <td>
                                    <p className='text-2xl w-80 text-green-600'>{Data.name}</p>
                                    <td><p className='text-l'>{Data.date}</p></td>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td> <Link className='border-2 p-2 border-green-600 text-2xl rounded' to="" >{Data.conbtn}</Link></td>
                                </tr>
                                <tr>
                                    <p className='text-2xl'>{Data.amount}</p>
                                </tr>
                            </table>
                        </div>

                    )
                        })
                    }

                </div>

         
          </div>







         

       
        </div>
      );
}
 
export default Dashboard;