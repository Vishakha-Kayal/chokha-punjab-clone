import logo from '../assets/logo.png'
import Button from '../components/Button'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = () => {
  return (
    <div id="navbar" className='container flex justify-between items-center py-[2rem] absolute top-12 left-1/2 transform -translate-x-1/2'> 
   
    <div className='w-[20%]'>
        <img src={logo} alt="" className='h-[11vh]'/>
    </div>
    <ul className="w-[80%] text-[1.7rem] font-['Actor'] px-2 flex items-center gap-[4rem]">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Activities</li>
        <li>Blogs</li>
        <li>
            <Button name="Offers"/>
        </li>
        <li>Events</li>
        <li>Memes</li>
        <li>Contact Us</li>
        <li>
        <Button name="Reservations"/>
        </li>
    </ul>
    </div>
  )
}

export default Navbar;