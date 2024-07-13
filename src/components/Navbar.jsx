

function Navbar() {
  return (

    <nav>
      <div className="nav__header">
        <div className="logo nav__logo">
          <a href="#"><span>PANTAS</span></a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <span><i className="ri-menu-line"></i></span>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#definisi">Definisi</a></li>
        <li><a href="#team">Team Kami</a></li>
        <li><a href="#tutorial">Laporkan</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
