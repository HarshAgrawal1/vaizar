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
      <h1 className="title">Empowering Trade to Connect Millions</h1>
      <div className="AboutPartnerDiv">
          <button className="AboutUs">About Us</button>
          <button className="Partner">Partner</button>
      </div> <br></br> <br></br>
      <Footer />
    </div>
  )
}

export default App;