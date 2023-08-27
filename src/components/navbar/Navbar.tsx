import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
      <img src='logo.svg' alt='logo'/>
      <span>Admin</span>
    </div>
    <div className='icons'>
      <img src='/search.svg'/>
      <img src='/app.svg'/>
      <img src='/expand.svg'/>
      <div className='notification'>
        <img src='notifications.svg'/>
        <span>1</span>
      </div>
      <div className='user'>
        <img src='' alt='img-profile'/>
        <span>Fulvio</span>
      </div>
      <img src="/settings.svg" alt="" />

    </div>
    </div>
  )
}

export default Navbar