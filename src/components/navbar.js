function Navbar(){

    return(
        <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
        <input
          placeholder="Search for anything here. Tech, business, art, etc"
        />
      </div>
      <div className="navbar__s3">
        <p  className="navbar__s3__courses">Courses</p>
        <div className="mylearning">
          <p>My learnings</p>
          <div className="mylearning__popup">
            <p>You haven't purchased anything</p>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
        <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
        <i className="fa-solid fa-user" style={{color: "#000000"}}></i>
      </div>
    </div>
    )
}

export default Navbar