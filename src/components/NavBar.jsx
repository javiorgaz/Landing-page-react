const NavBar = () => {

  //AQUI VA EL CODIGO EN JS


  //EL RETURN TE DEVUELVE EL CODIGO JSX
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="d-flex">
        <a href="">
          <img className="ms-3" style={{width:'50px',height:'50px'}} src="https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png" alt="logo de razer" />
        </a>
        <span className="ms-5 fs-2" style={{color:'green'}}>RAZER</span>
      </div>
    </nav>
  );
};

export default NavBar
