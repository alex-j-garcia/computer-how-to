import './Header.css';
import { ThemeContextConsumer } from '../ThemeContext/ThemeContext';
import { LanguageContextConsumer } from '../LanguageContext/LanguageContext';

function LanguageToggler() {
  return (
    <LanguageContextConsumer>
      {({ language, setLanguage }) => (
        <button onClick={() =>
          (setLanguage(prev => prev === 'english' ? 'spanish' : 'english'))
        }>
          {language === 'english' ? '🇪🇸 Español' : '🇺🇸 English'}
        </button>
      )}
    </LanguageContextConsumer>
  );
}

function ThemeToggler() {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      )}
    </ThemeContextConsumer>
  );
}

function Header() {
  return (
    <header className='Header'>
      <LanguageToggler />
      <ThemeToggler />
    </header>
  );
}

export default Header;