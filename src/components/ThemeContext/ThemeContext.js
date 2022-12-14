import { createContext, useState } from "react"

const { Provider, Consumer } = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prevState => prevState === 'light' ? 'dark' : 'light');

  return (
    <Provider value={{theme, toggleTheme}}>
      {props.children}
    </Provider>
  );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };