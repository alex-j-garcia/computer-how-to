import './Header.css'
import { useState } from 'react';
import withToggler from '../HOCs/withToggler';

function Language(props) {
  return (
    <button onClick={() => props.handleClick(prev => !prev)}>
      {props.on ? '🇪🇸 Spanish' : '🇺🇸 English'}
    </button>
  );
}

const LanguageToggler = withToggler(Language, {defaultOnValue: true});

function Theme(props) {  
  return (
    <button onClick={() => props.handleClick(prev => !prev)}>
      {props.on ? '☀️' : '🌙'}
    </button>
  );
}

const ThemeToggler = withToggler(Theme, {defaultOnValue: false});

function Header() {
  return (
    <header className='Header'>
      <LanguageToggler />
      <ThemeToggler />
    </header>
  );
}

export default Header;