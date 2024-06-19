import dhol from '../assets/dhol.png'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"

const Dhol = () => {
  return (
    <div className='container h-screen flex'>
        <div className='basis-[55%]'>
            <img src={dhol}  alt="" className='img-animation'/>
        </div>
        <div className='basis-[60%] flex flex-col justify-center items-center'>
            <div>
                <h1 className="text-[4rem] mb-4 tracking-tighter font-semibold text-[#094470] font-['Volkhov'] leading-tight">Mauj Punjab di ab Jaipur vich</h1>
                <p className='text-[1.6rem]'>Experience all things fun revolving around the culture and heritage of Punjab- Baisakhi, Lohri, Food and more!</p>
            </div>
            <div className='w-full h-[60%] py-4 flex justify-between items-center gap-4'>
                <div className='w-[33.33%] h-full border-2'>
                    <video src={video1} className='h-full' autoplay loop muted ></video>
                </div>
                <div className='w-[33.33%] h-full border-2'>
                    <video src={video2} className='h-full' autoplay loop muted ></video>
                </div>
                <div className='w-[33.33%] h-full border-2'>
                    <video src={video3} className='h-full' autoplay loop muted ></video> 
                </div>
               
            </div>
        </div>
    
    </div>
  )
}

export default Dhol