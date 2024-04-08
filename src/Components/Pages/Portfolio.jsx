import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImgData from '../../Helper/Imgs';
import TypeFilter from '../../Helper/TypeFilter';

export default function Portfolio() {
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('All');
  useEffect(() => {
    setFiltered(ImgData);
  }, []);
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='portfolio'>
          <h3>Portfolio</h3>
          <TypeFilter
            ImgData={ImgData}
            setFiltered={setFiltered}
            active={active}
            setActive={setActive}
          />
          <div className='container text-center'>
              <div className='row g-3 mb-5'>
              {filtered.map((myImg) => {
                return (
                  <div
                    className='col-12 col-lg-6 mb-5'
                    key={myImg.id}
                    type={myImg.type}
                  >
                    <img className='img-thumbnail h-100' src={myImg.imgUrl} alt='' />
                    <br />
                    <Link className='btn btn-outline-secondary mt-2 mb-2' target='_blank' to={myImg.url}>
                      {myImg.title}
                    </Link>
                  </div>
                );
              })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
