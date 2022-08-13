import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Playground from './components/Playground/Playground';
import lessons from './lessons.json';
import { ThemeContextConsumer, ThemeContextProvider } from './components/ThemeContext/ThemeContext';
import { LanguageContextProvider } from './components/LanguageContext/LanguageContext'

function App() {
  const [lesson] = useState(lessons[0]);

  return (
      <ThemeContextProvider>
        <ThemeContextConsumer>
          {({ theme }) => (
            <div className={`App ${theme}`}>
              <LanguageContextProvider>
                <Header/>
                <main>
                  <Menu links={lesson} />
                  <Playground />
                </main>
              </LanguageContextProvider>
            </div>
          )}
        </ThemeContextConsumer>
      </ThemeContextProvider>
  );
}

export default App;
