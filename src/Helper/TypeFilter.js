import { useEffect } from 'react';
import './TypeFilter.css'
function TypeFilter({ setActive, active, setFiltered, ImgData }) {
  useEffect(() => {
    if (active === 'All') {
      setFiltered(ImgData);
      return;
    }
    const filtered = ImgData.filter((data) => data.type.includes(active));
    setFiltered(filtered);
  }, [active]);
  return (
    <>
      <div className='filter-container mb-4'>
        <button
          id='filter-btn'
          className={active === 'All' ? 'active' : ''}
          onClick={() => setActive('All')}
        >
          All
        </button>
        <button
          id='filter-btn'
          className={active === 'Bootstrap' ? 'active' : ''}
          onClick={() => setActive('Bootstrap')}
        >
          Bootstrap
        </button>
        <button
          id='filter-btn'
          className={active === 'JavaScript' ? 'active' : ''}
          onClick={() => setActive('JavaScript')}
        >
          JavaScript
        </button>
      </div>
    </>
  );
}
export default TypeFilter;
