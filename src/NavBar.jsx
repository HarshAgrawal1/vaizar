import './NavBar.css'

function NavBar(){
  return(
    <div>
      <nav>
          <div className="left-links">
              <a className="leftlinkitems" href="#">Customers</a>
              <a className="leftlinkitems" href="#">Founders</a>
              <a className="leftlinkitems" href="#">Help</a>
              <a className="leftlinkitems" href="#">Careers</a>
              <a className="leftlinkitems"href="#">Pricing</a>
          </div>
          <div className="right-links">
              <a href="#" className="signin">Sign in</a>
              <a href="#" className="start-free">Start for Free</a>
          </div>
      </nav>
    </div>
  )
}

export default NavBar;