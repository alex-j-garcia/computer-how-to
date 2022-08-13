import './Menu.css'
import { nanoid } from 'nanoid/non-secure';
import PropTypes from 'prop-types';
import { LanguageContextConsumer } from '../LanguageContext/LanguageContext';

function Menu({ links }) {
  return (
    <nav className='Menu'>
      <LanguageContextConsumer>
        {({ language }) => (
          <ol className='Menu-links'>
            <li>{links[language].title}
              <ul>
                {links[language].lessons.map(lesson =>
                  <li key={nanoid()}>{lesson}</li>)
                }
              </ul>
            </li>
          </ol>
        )}
      </LanguageContextConsumer>
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