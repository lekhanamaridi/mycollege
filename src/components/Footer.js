import clg1 from './images/college1.jpg';
import clg2 from './images/college2.jpg';
import swami from './images/swami.jpg';
import clg3 from './images/college3.jpg';
import clg4 from './images/college4.jpg';
import clg5 from './images/college5.jpg';
import clg6 from './images/event1.jpg';
import clg7 from './images/event3.jpeg';
import clg8 from './images/event2.jpeg';
import clg9 from './images/event4.jpg';
import './Footer.css';
function Footer()
{
    return(
        <div>
            <div className="styling">
                <h1><i><b>WELCOME TO OUR COLLEGE</b></i></h1>
            </div>
            <hr></hr>
            <div className='a1'>
                <div>
                    <img src={clg1} alt='' className='image1'></img>
                    <br></br>
                    <img src={clg2} alt='' className='image2'></img>
                </div>
                <div>
                    <img src={swami} alt='' className='image3'></img>
                    <h5>Dr. Shivamurthy Shivacharya Mahaswamiji<br></br> President, <br></br>STJ Education Society</h5>
                </div>
                <div>
                    <img src={clg3} alt='change' className='image4'></img>
                    <br></br>
                    <img src={clg4} alt='' className='image5'></img>
                </div>
            </div>
            <div>
                <h1 className='styling1'>A Commitment to Technical Education</h1>
                <div className='align'>
                        <p className='text'>The real catalyst, which plays important role in shaping the career of a student, is the place of study and its surroundings. Infrastructure of STJ Institute of Technology is at a serene environment on the outskirts of Ranebennur attracts one and all. The campus of the institute extends over an area of 52 acres of land, specially selected to keep the students away from the vitiated atmosphere of city life. Campus is extensively landscaped with green environment. Established in the year 1980. The college is affiliated to Visveswaraiah Technological University, Approved by All India Council for Technical Education and by the Government of Karnataka. Ranebennur is situated in Haveri District of Karnataka, on Poona Bangalore National Highway (NH-4). 295km from Bangalore and 100km from Dharwad. It can be easily reached either by Road or by Rail. Bus frequency from Bangalore to Ranebennur is very high. The Institute is situated at 3km from the Ranebennur Bus Station. The climate throughout the year is mild and salubrious.</p>
                        <img src={clg5} alt='' className='image6'></img>
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
                <div className='place'>
                    <div className='text3'>
                        <h1>6<br></br>UG Programmes</h1>
                    </div>
                    <div className='text3'>
                        <h1>2000<br></br>Students</h1>
                    </div>
                    <div className='text3'>
                        <h1>135<br></br>Teachers</h1>
                    </div>
                    <div className='text3'>
                        <h1>186+<br></br>Placements</h1>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='styling1'>Latest Events and News</h1>
                </div>
                <div>
                    <p className='l1'><b><i>Three days Workshop from 14thto 16th June</i></b></p>
                    <div className='l2'>
                        <p>Department of Computer Science & Engineering conducted three days workshop on Android application Development  <br></br>and Python Programming from 14th to 16th June 2023.</p>
                        <img src={clg6} alt='' className='l3'></img>
                    </div>
                </div>
                <hr></hr>
                <hr></hr>
                <div>
                    <p className='l1'><b><i>World Environment Day Celebration</i></b></p>
                    <div className='l2'>
                        <p>NSS Unit of our Institute celebrated World Environment Day on 5thJune 2023 in our campus.</p>
                        <img src={clg7} alt='' className='l3'></img>
                    </div>
                </div>
                <hr></hr>
                <hr></hr>
                <div>
                    <p className='l1'><b><i>Kannada Rajyotsava Celebration</i></b></p>
                    <div className='l2'>
                        <p>Kannada Rajyotsava was celebrated on 26th Nov 2022 at STJ Institute of Technology.</p>
                        <img src={clg8} alt='' className='l3'></img>
                    </div>
                </div>
                <hr></hr>
                <hr></hr>
                <div>
                    <p className='l1'><b><i>Secura 2k23 : Sports & Extra Curricular Activities</i></b></p>
                    <div className='l2'>
                        <p>Annual day celebrated on 31-05-2023 at STJ Institute of Technology.</p>
                        <img src={clg9} alt='' className='l3'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;