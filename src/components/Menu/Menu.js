import './Menu.css'

function Menu({ links }) {
  console.log(links)
  const { module, title, lessons } = links;

  const lessonLIs = lessons.map(lesson => <li>{lesson}</li>);
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