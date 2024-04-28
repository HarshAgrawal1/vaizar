import './App.css'
import './NavBar'
import './Footer'
import Footer from './Footer';
import NavBar from './NavBar';
import companyLogo from '/public/vaizar image.png';

function App() {
  return (
    // <React.StrictMode>
    //   <h1>Hello</h1>
    // </React.StrictMode>
    <div>
      <NavBar />
      <img src={companyLogo} className='companyLogo' alt="Vaizar.png" />
      <h1 class="title">Revolutionizing India's Wholesale Clothing Trade</h1>
      <div class="startfree_sales">
          <button class="startforfree">Start for free</button>
          <button class="talksales">Talk to sales</button>
      </div> <br></br> <br></br>
      <Footer />
    </div>
  )
}

export default App;