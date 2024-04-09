import logoTechniq from '../../asset/logo_Technical-and-Vocational-University-TVU.jpg';
import meta from '../../asset/certificates/C67N7RKEJ7DK.jpeg';
import reactCer from '../../asset/certificates/169865.png'
import responsive from '../../asset/certificates/168338.png'
import web from '../../asset/certificates/164825.png'
import coding from '../../asset/certificates/162038.png'
import { Link } from 'react-router-dom';
export default function Resume() {
  return (
    <>
      <div className='resume col justify-content-center'>
        <h1 className='h1-about'>Educations</h1>
        <div className='educations'>
          <div className='sections'>
            <img src={logoTechniq} alt='' className='logoImg' />
            <div className='degrees'>
              <h3>Software Engineering</h3>
              <h6>Technical and Vocational University</h6>
            </div>
          </div>
          <div className='sections'>
            <img src={logoTechniq} alt='' className='logoImg' />
            <div className='degrees'>
              <h3>Software Associate Degree</h3>
              <h6>Technical and Vocational University</h6>
            </div>
          </div>
        </div>
        <h1 className='h1-about'>Certificates</h1>
        <div className='certificates'>
          <div className='certificate-sections'>
            <img src={meta} alt='' className='certificateImg' />
            <div className='meta-detail'>
              <h3>Advanced React</h3>
              <h6>Meta / Coursera</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod, cum omnis incidunt nihil sed recusandae ab sapiente
                doloribus aspernatur.
              </p>
              <Link to='https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74'>
                Download the certificate
              </Link>
            </div>
          </div>
          <div className='certificate-sections'>
            <div className='meta-detail'>
              <h3>React Development</h3>
              <h6>SheCodes</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod, cum omnis incidunt nihil sed recusandae ab sapiente
                doloribus aspernatur.
              </p>
              <Link to='https://s3.amazonaws.com/shecodesio-production/students/certificates/000/169/865/original/169865.png?1691405553'>
                Download the certificate
              </Link>
            </div>
            <img src={reactCer} alt='' className='certificateImg' />
          </div>
          <div className='certificate-sections'>
            <img src={responsive} alt='' className='certificateImg' />
            <div className='meta-detail'>
              <h3>Responsive Web Development</h3>
              <h6>SheCodes</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod, cum omnis incidunt nihil sed recusandae ab sapiente
                doloribus aspernatur.
              </p>
              <Link to='https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74'>
                Download the certificate
              </Link>
            </div>
          </div>
          <div className='certificate-sections'>
            <div className='meta-detail'>
              <h3>Web Development</h3>
              <h6>SheCodes</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod, cum omnis incidunt nihil sed recusandae ab sapiente
                doloribus aspernatur.
              </p>
              <Link to='https://s3.amazonaws.com/shecodesio-production/students/certificates/000/164/825/original/164825.png?1688902262'>
                Download the certificate
              </Link>
            </div>
            <img src={web} alt='' className='certificateImg' />
          </div>
          <div className='certificate-sections'>
            <img src={coding} alt='' className='certificateImg' />
            <div className='meta-detail'>
              <h3>Introduction to Coding</h3>
              <h6>SheCodes</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod, cum omnis incidunt nihil sed recusandae ab sapiente
                doloribus aspernatur.
              </p>
              <Link
                to='https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74'
                className='text-decoration-none'
              >
                Download the certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
