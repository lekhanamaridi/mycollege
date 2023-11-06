import clg1 from './images/college1.jpg';
import clg2 from './images/college2.jpg';
import swami from './images/swami.jpg';
import clg3 from './images/college3.jpg';
import clg4 from './images/college4.jpg';
import clg5 from './images/college5.jpg';
import './Footer.css';
function Footer()
{
    return(
        <div>
            <div className="styling">
                <h1><i><b>WELCOME TO OUR COLLEGE</b></i></h1>
            </div>
            <div className='a1'>
                <div>
                    <img src={clg1} className='image1'></img>
                    <br></br>
                    <img src={clg2} className='image2'></img>
                </div>
                <div>
                    <img src={swami} className='image3'></img>
                    <h5>Dr. Shivamurthy Shivacharya Mahaswamiji<br></br> President, <br></br>STJ Education Society</h5>
                </div>
                <div>
                    <img src={clg3} className='image4'></img>
                    <br></br>
                    <img src={clg4} className='image5'></img>
                </div>
            </div>
            <div>
                <h1 className='styling1'>A Commitment to Technical Education</h1>
                <div className='a2'>
                    <p className='text'>The real catalyst, which plays important role in shaping the career of a student, is the place of study and its surroundings. Infrastructure of STJ Institute of Technology is at a serene environment on the outskirts of Ranebennur attracts one and all. The campus of the institute extends over an area of 52 acres of land, specially selected to keep the students away from the vitiated atmosphere of city life. Campus is extensively landscaped with green environment. Established in the year 1980. The college is affiliated to Visveswaraiah Technological University, Approved by All India Council for Technical Education and by the Government of Karnataka. Ranebennur is situated in Haveri District of Karnataka, on Poona Bangalore National Highway (NH-4). 295km from Bangalore and 100km from Dharwad. It can be easily reached either by Road or by Rail. Bus frequency from Bangalore to Ranebennur is very high. The Institute is situated at 3km from the Ranebennur Bus Station. The climate throughout the year is mild and salubrious.</p>
                </div>
                <div  className='image6'>
                    <img src={clg5}></img>
                    <h2 className='text2'> A Dream Place to Build Your <br></br>Career.....</h2>
                </div>
            </div>
            <div>
                <h1 className='styling2'>Vision</h1>
                <p className='text1'>Aims at developing STJIT as a premier technical institution by excelling in every aspect of technical education</p>
            </div>
            <div>
                <h1 className='styling2'>Mission</h1>
                <p className='text1'>Imparting technical education and training in response to the changing needs of industry and society, believing in quality, innovation, ethical and moral standards.</p>
            </div>
            <br></br>
            <div>
                <h2 className='styling1'>Our Strength</h2>
                <div className='text3'>
                    <h1 className='text4'>6<br></br>UG Programmes</h1>
                    <h1 className='text5'>2000<br></br>Students</h1>
                    <h1 className='text6'>135<br></br>Teachers</h1>
                    <h1 className='text7'>186+<br></br>Placements</h1>
                </div>
            </div>
        </div>
    );
}
export default Footer;