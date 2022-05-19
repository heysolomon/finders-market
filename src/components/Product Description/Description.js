import classes from './description.module.css'
import carrot from '../../Assets/Images/carrots.png'

export default function Description() {
  return (
    <div className={`w-full max-w-[1040px] mx-auto mt-6 h-screen grid ${classes.container}`}>
        <div className=''>
            <img src={carrot} className='w-full' alt="" />
        </div>
        <div className='pl-6'>
            <h1 className='text-3xl'>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem culpa dignissimos laudantium at! Quo recusandae natus ea laborum, amet est unde? Incidunt, aperiam? Nobis ipsa eaque fuga ipsam tenetur?</p>
        
        </div>
    </div>
  )
}
