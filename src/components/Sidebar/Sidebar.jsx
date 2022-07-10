import { 
    FaChartLine,
    FaHome, 
    FaCompass,
    FaBell,
    FaEnvelope,
    FaBookmark,
    FaPallet,
    FaCog
} from 'react-icons/fa'

import './sidebar.css'

export const Sidebar = () => {
  return (
    <aside>
        {/* Profile section */}
        <a href="#" className='profile'>
            <div className="profile-photo">
                <img src="../images/profile-1.jpg" alt="" />
            </div>
            <div className="handle">
                <h4>Diana Ayi</h4>
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </a>

        {/* Sidebar search  */}
        <div className="sidebar">
            <a href="#" className="menu-item active">
                <span><FaHome className='sidebar-icon'/></span>
                <h4>Home</h4>
            </a>
            <a href="#" className="menu-item">
                <span><FaCompass className='sidebar-icon'/></span>
                <h4>Explore</h4>
            </a>
            <a href="#" className="menu-item" id='notifications'>
                <span className='notification-count'><FaBell className='sidebar-icon'/><small>9+</small></span>
                <h4>Notification</h4>
                {/* Notification popup */}
                <div className="notifications-popup">
                    <div className='notification'>
                        <div className="profile-photo">
                            <img src="../images/profile-2.jpg" alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className='text-muted'>2 DAYS AGO</small>
                        </div>
                    </div>
                    <div className='notification'>
                        <div className="profile-photo">
                            <img src="../images/profile-3.jpg" alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Ado Issah</b> commented on your post
                            <small className='text-muted'>2 Days Ago</small>
                        </div>
                    </div>
                    <div className='notification'>
                        <div className="profile-photo">
                            <img src="../images/profile-4.jpg" alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className='text-muted'>2 Days Ago</small>
                        </div>
                    </div>
                    <div className='notification'>
                        <div className="profile-photo">
                            <img src="../images/profile-5.jpg" alt="" />
                        </div>
                        <div className="notification-body">
                            <b>Osman Kojo</b> sent you friend request
                            <small className='text-muted'>2 Days Ago</small>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="menu-item" id='message-notifications'>
                <span className='notification-count'><FaEnvelope className='sidebar-icon'/><small>6</small></span>
                <h4>Messages</h4>
            </a>
            <a href="#" className="menu-item">
                <span><FaBookmark className='sidebar-icon'/></span>
                <h4>Bookmarks</h4>
            </a>
            <a href="#" className="menu-item">
                <span><FaChartLine className='sidebar-icon'/></span>
                <h4>Analytics</h4>
            </a>
            <a href="#" className="menu-item">
                <span><FaPallet className='sidebar-icon'/></span>
                <h4>Theme</h4>
            </a>
            <a href="#" className="menu-item">
                <span><FaCog className='sidebar-icon'/></span>
                <h4>Settings</h4>
            </a>
        </div>
        <label htmlFor="create-post" className='btn btn-primary'>Create Post</label>
    </aside>
  )
}
