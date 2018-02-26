import React from "react"

const displayName = "HomePageHeader"

function Header() {
  return <header className="bg-primary text-white">
    <div className="container text-center">
      <img width="80" height="125" src="/img/tim.jpeg" alt="..." className="rounded-circle" />
      <h1>Tim</h1>
      <p className="lead">Frontend Developer
      </p>
      <p className="lead"><i className="fa fa-heart text-danger" />{`{ PHP, JavaScript, MySQL,  }`}</p>
    </div>
  </header>
}
Header.displayName = displayName

export default Header
