import './Menu.css'
import { nanoid } from 'nanoid/non-secure';
import PropTypes from 'prop-types';

function Menu({ links }) {
  const { title, lessons } = links;

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

Menu.propTypes = {
  links: PropTypes.shape({
    module: PropTypes.number,
    title: PropTypes.string,
    lessons: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default Menu;