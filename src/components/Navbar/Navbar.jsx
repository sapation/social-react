import { HiSearch } from 'react-icons/hi'

import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <h2 className="logo">webSocial</h2>
            <div className="search-bar">
                <HiSearch/>
                <input type="search" placeholder='Search for creators, inspiration and projects'/>
            </div>
            <div className="create">
                <label className='btn btn-primary' htmlFor="create post">Create</label>
                <div className="profile-photo">
                    <img src="../images/profile-1.jpg" alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar