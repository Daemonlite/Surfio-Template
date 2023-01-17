import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {BsCodeSlash} from 'react-icons/bs'
import {ImAndroid} from 'react-icons/im'
import {AiFillCamera} from 'react-icons/ai'
import {TbBrandLoom} from 'react-icons/tb'
import {GoGlobe} from 'react-icons/go'
const Section = () => {
  return (
    <>
      <div>
        <div className="sec-head">
          <h1 className="port-head">Portfolio</h1>
          <p className="nav-text-2">
            An eye for detail makes our work beautiful
          </p>
        </div>

        <div className="portfolio">
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2fc413566a09e01f711c4_work-9-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Graphic Design</div>
            </div>
          </div>

          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009bf69ff41454c6fe63_work-2-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Print Design</div>
            </div>
          </div>
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b617cac9b64365383_work-1-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Mobile Apps</div>
            </div>
          </div>
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b52f6a18001ef67c2_work-3-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">3D Drawing</div>
            </div>
          </div>
        </div>
        <br />
        <div className="portfolio">
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b52f6a18001ef67c3_work-5-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Interior Design</div>
            </div>
          </div>
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b617cac9b64365384_work-4-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Web Design</div>
            </div>
          </div>
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009c739f273554ad015b_work-7-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Graphic Design</div>
            </div>
          </div>
          <div class="container">
            <img
              src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009c617cac9b64365385_work-8-p-500x334.jpeg"
              alt="Avatar"
              class="image"
            />
            <div class="overlay">
              <div class="text">Home Design</div>
            </div>
          </div>
        </div>
        <div className="sec-head">
          <h1 className="nav-text-2">Have a project in mind ?</h1>
          <div className="contact-btn">Contact Now</div>
        </div>
      </div>
<hr />
      <div className="sec-head">
        <h1 className="sec-header">Services</h1>
        <h4  className='sec-para'>Scope of our featured premium services</h4>
 <br />
 <br/>

        <div className="services">
    <div className="tip">
    <div className="serv-icon"><HiOutlineDesktopComputer size={50}/></div>
          <div className="serv-title">GRAPHIC DESIGN</div>
          <br />
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
    </div>


     <div className="tip">
     <div className="serv-icon"><BsCodeSlash size={50}/></div>
     <br />
          <div className="serv-title">WEB DESIGN</div>
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
     </div>

    <div className="tip">
    <div className="serv-icon"><ImAndroid size={50}/></div>
    <br />
          <div className="serv-title">APP DESIGN</div>
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
    </div>

 
        </div>
        <br />

        <div className="services">
      <div className="tip">
      <div className="serv-icon"><AiFillCamera size={50}/></div>
          <div className="serv-title">PHOTOGRAPTHY</div>
          <br />
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
      </div>

     <div className="tip">
     <div className="serv-icon"><TbBrandLoom size={50}/></div>
          <div className="serv-title">BRANDING</div>
          <br />
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
     </div>
          
     <div className="tip">
     <div className="serv-icon"><GoGlobe size={50}/></div>
          <div className="serv-title">HOSTING</div>
          <br />
          <div className="serv-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae
          </div>
     </div>
        </div>
      </div>
    </>
  );
};

export default Section;
