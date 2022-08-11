import './Header.css';
import PropTypes from 'prop-types';
import withToggler from '../HOCs/withToggler';
import { ThemeContextConsumer } from '../ThemeContext/ThemeContext';

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

function ThemeToggler({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

ThemeToggler.defaultProps = {
  theme: 'light',
};

ThemeToggler.propTypes = {
  theme: PropTypes.string,
};

function Header() {
  return (
    <header className='Header'>
      <LanguageToggler/>
      <ThemeContextConsumer>
        {({ theme, toggleTheme }) => (
            <ThemeToggler
              theme={theme}
              toggleTheme={toggleTheme}
            />
          )
        }
      </ThemeContextConsumer>
    </header>
  );
}

export default Header;