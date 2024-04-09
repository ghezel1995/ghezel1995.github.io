import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home'; 
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Layout from './Components/Pages/Layout';
import { Posts } from './Components/BlogPages/Posts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route
            path='post/:id'
            element={ <Posts />}
          />
        </Route>
      </Routes>
      <div className='App'></div>
    </>
  );
}

export default App;
