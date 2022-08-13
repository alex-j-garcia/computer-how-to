import { createContext, useState } from "react";

const { Provider, Consumer } = createContext();

function LanguageContextProvider(props) {
  const [language, setLanguage] = useState('english');

  return (
    <Provider value={{language, setLanguage}}>
      {props.children}
    </Provider>
  )
}

export { LanguageContextProvider, Consumer as LanguageContextConsumer };