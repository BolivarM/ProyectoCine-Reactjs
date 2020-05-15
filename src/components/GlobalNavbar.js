import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//Versión 1 del navbar
const GlobalNavbar = () => {
  return (
    <React.Fragment>
      <span>
        <nav className='navbar navbar-expand-md navbar-dark  bg-dark mt-5'>
          <Link className='navbar-brand' to='/'>
            Proyecto Cine
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home&nbsp;<i className='fas fa-home'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/estrenos' className='nav-link'>
                  Estrenos&nbsp;<i className='fas fa-ticket-alt'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/criticas' className='nav-link'>
                  Críticas&nbsp;<i className='far fa-comments'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/animes'>
                  Anime&nbsp;<i className='far fa-grin-stars'></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-link'>
                  Perfil&nbsp;<i className='fas fa-user'></i>
                </Link>
              </li>
            </ul>
            <form className='form-inline mt-2 mt-md-0'>
              <input
                className='form-control mr-sm-2'
                type='text'
                placeholder='Buscar'
                aria-label='Buscar'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'>
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </span>
    </React.Fragment>
  );
};

export default GlobalNavbar;
