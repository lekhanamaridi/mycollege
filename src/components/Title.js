import logo from './images/logo.png';
import image from './images/college1.jpg';
import './Title.css';
function Title()
{
    return(
  <div>
    <div className='name'>
        <img src={logo} alt='' className='size'></img>
        <h2 className='position'>Sri Taralabalu Jagadguru Institute of Technology</h2>
    </div>
    <div className='position1'>
        <p className='move6'>Home</p>
        <select className='move7'>
            <option>About</option>
            <option>STJ Education Society</option>
            <option>Governing Council</option>
            <option>GC Meeting Proceedings</option>
            <option>Organization Structure</option>
            <option>Mandatory Disclosures</option>
            <option>President Message</option>
            <option>GC Chairman Message</option>
            <option>principal Message</option>
        </select>
        <p className='move8'>Admission</p>
        <p className='move9'>Departments</p>
        <p className='move10'>Placement</p>
        <p className='move11'>Facilities</p>
        <p className='move12'>Contact</p>
    </div>
    <div>
        <img src={image} alt='' className='photosize'></img>
    </div>
  </div>
    );
}
export default Title;