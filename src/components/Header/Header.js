import './Header.css';
import PropTypes from 'prop-types';
import withToggler from '../HOCs/withToggler';

function Language({ on, toggle }) {
  return (
    <button onClick={toggle}>
      {on ? '🇪🇸 Spanish' : '🇺🇸 English'}
    </button>
  );
}

Language.defaultProps = {
  on: true,
};

Language.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

const LanguageToggler = withToggler(Language, {defaultOnValue: true});

function Theme({ on, toggle }) {
  return (
    <button onClick={toggle}>
      {on ? '☀️' : '🌙'}
    </button>
  );
}

Theme.defaultProps = {
  on: false,
};

Theme.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

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