import './App.css';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Playground from './components/Playground/Playground';
import lessons from './lessons.json'

function App() {
  const [lesson, setLesson] = useState(lessons[0]);

  return (
    <div className='App'>
      <Menu links={lesson} />
      <Playground />
    </div>
  );
}

export default App;
