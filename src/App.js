import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Playground from './components/Playground/Playground';
import lessons from './lessons.json';

function App() {
  const [lesson, setLesson] = useState(lessons[0]);

  return (
    <div className='App'>
      <Header />
      <main>
        <Menu links={lesson} />
        <Playground />
      </main>
    </div>
  );
}

export default App;
