const Nav = ({tabs, loggedIn}) => {
  return (
    <nav id='navBar'>
      {tabs.map(tab => (
        <a key={tab}>{tab}</a>
        ))}
      {loggedIn ? <a>Log Out</a> : <a>Log In</a>}
    </nav>
  )
}

export default Nav