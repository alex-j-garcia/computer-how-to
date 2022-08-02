import './Menu.css'
import { nanoid } from 'nanoid/non-secure';

function Menu({ links }) {
  const { module, title, lessons } = links;

  const lessonLIs = lessons.map(lesson => <li key={nanoid()}>{lesson}</li>);

  return (
    <nav className='Menu'>
      <ol className='Menu-links'>
        <li>{title}
          <ul>{lessonLIs}</ul>
        </li>
      </ol>
    </nav>
  )
}

export default Menu;