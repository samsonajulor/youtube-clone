import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
        <h2 className='header__logo'>Vide📺Streamer</h2>
        </Link>
      </div>

      <div className='header__input'>
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='search...' type='text' />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header__inputButton' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar alt='Samson Ajulor' src='' />
      </div>
    </div>
  )
}

export default Header;
