import logoTechniq from '../../asset/logo_Technical-and-Vocational-University-TVU.jpg';
import meta from '../../asset/certificates/C67N7RKEJ7DK.jpeg';
import reactCer from '../../asset/certificates/169865.png';
import responsive from '../../asset/certificates/168338.png';
import web from '../../asset/certificates/164825.png';
import coding from '../../asset/certificates/162038.png';
import reactRedux from '../../asset/certificates/ff18b861-57ac-4681-85d8-6f56da5b9668.jpg';
import { Link } from 'react-router-dom';
export default function Resume() {
  return (
    <>
      <div className='resume col justify-content-center'>
        <h1 className='h1-about'>Educations</h1>
        <div className='educations row'>
          <div className='sections col-md'>
            <img src={logoTechniq} alt='' className='logoImg' />
            <div className='degrees'>
              <h5>Computer Software Technology Engineering</h5>
              <h6>Bachelor of Science (B.Sc.)</h6>
              <small>Technical and Vocational University - [ 2021 ]</small>
            </div>
          </div>
          <div className='sections col-md'>
            <img src={logoTechniq} alt='' className='logoImg' />
            <div className='degrees'>
              <h5>Computer Software</h5>
              <h6>Associate Degree</h6>
              <small>Technical and Vocational University - [ 2016 ]</small>
            </div>
          </div>
        </div>
        <h1 className='h1-about'>Certificates</h1>
        <div className='certificates'>
          <div className='certificate-sections row'>
            <img
              src={meta}
              alt=''
              className='certificateImg col-md m-md-3 img-fluid'
            />
            <div className='meta-detail col-md'>
              <h3 className=' mt-3'>Advanced React</h3>
              <h6>Meta / Coursera</h6>
              <p>
                <span className='cer-skills'>Skills:</span> Proficient in React
                testing with Jest and React Testing Library. Skilled in React
                Hooks for efficient state management. Experienced in frontend
                API development, leveraging tools like Axios and Fetch for
                seamless data exchange between frontend and backend systems.
              </p>
              <Link
                to='https://coursera.org/verify/C67N7RKEJ7DK'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
          </div>
          <div className='certificate-sections row'>
            <div className='meta-detail col-md m-md-3'>
              <h3>React Development</h3>
              <h6>SheCodes</h6>
              <p>
                <span className='cer-skills'>Skills:</span> I earned a React.js
                certificate from SheCodes, where I learned React.js and
                completed an online weather app project. This experience
                equipped me with skills in React development, including React
                Hooks, API integration.
              </p>
              <Link
                to='https://www.shecodes.io/certificates/fc0842c80f30b7c343404f4beaef57af'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
            <img
              src={reactCer}
              alt=''
              className='certificateImg col-md mt-3 img-fluid'
            />
          </div>
          <div className='certificate-sections row'>
            <img
              src={responsive}
              alt=''
              className='certificateImg mb-3 col-md img-fluid'
            />
            <div className='meta-detail col-md'>
              <h3>Responsive Web Development</h3>
              <h6>SheCodes</h6>
              <p>
                <span className='cer-skills'>Skills:</span> I hold a Responsive
                Web Development certificate from SheCodes, where I mastered
                Responsive Web Design, Search Engine Optimization (SEO),
                Flexbox, Bootstrap, CSS3, and Web Hosting. Proficient in version
                control with GitHub, I leverage these skills to create modern,
                user-friendly websites optimized for performance and
                accessibility.
              </p>
              <Link
                to='https://www.shecodes.io/certificates/0d1e7ff4f206deaffce7a1b252f130ea'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
          </div>
          <div className='certificate-sections row'>
            <div className='meta-detail col-md'>
              <h3>Web Development</h3>
              <h6>SheCodes</h6>
              <p>
                <span className='cer-skills'>Skills:</span> I earned a web
                development certificate from SheCodes, specializing in
                JavaScript and API development. Through this program, I gained
                hands-on experience in building dynamic and interactive web
                applications, proficiently integrating APIs to enhance
                functionality and user experience.
              </p>
              <Link
                to='https://www.shecodes.io/certificates/54b2034307c9723e1e776123c74733be'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
            <img
              src={web}
              alt=''
              className='certificateImg img-fluid col-md mt-3'
            />
          </div>
          <div className='certificate-sections row'>
            <img
              src={coding}
              alt=''
              className='certificateImg img-fluid col-md mb-3'
            />
            <div className='meta-detail col-md'>
              <h3>Introduction to Coding</h3>
              <h6>SheCodes</h6>
              <p>
                Certified by SheCodes, I excel in HTML5, CSS3, ES6 JavaScript,
                and utilize Microsoft Visual Studio Code for efficient coding. I
                am equipped to create modern and responsive web applications,
                leveraging these skills to build engaging user interfaces
              </p>
              <Link
                to='https://www.shecodes.io/certificates/da28304860aecb8a1e434aa2a8db9924'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
          </div>
          <div className='certificate-sections row'>
            <div className='meta-detail col-md'>
              <h3>React and Redux</h3>
              <h6>SoloLearn</h6>
              <p>
                <span className='cer-skills'>Skills:</span>I am proud to hold a
                React and Redux certificate from SoloLearn, demonstrating
                proficiency in building dynamic and scalable web applications.
                This certification signifies my expertise in React.js and Redux,
                empowering me to develop robust frontend solutions with state
                management capabilities.
              </p>
              <Link
                to='https://www.sololearn.com/de/certificates/CC-LGAUCKTD'
                target='_blank'
              >
                Download the certificate
              </Link>
            </div>
            <img
              src={reactRedux}
              alt=''
              className='certificateImg img-fluid col-md mt-3'
            />
          </div>
        </div>
      </div>
    </>
  );
}
