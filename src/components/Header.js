import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <h2 className='header__logo'>Vide📺Streamer</h2>
      </div>

      <div className='header__input'>
        <input placeholder='search...' type='text' />
        <SearchIcon className='header__inputButton' />
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
