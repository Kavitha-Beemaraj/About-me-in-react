import photo from './photo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img className='image' src={ photo } alt="my icon" /> 
        <div>
            <h2> Kavitha Beemaraj</h2>
            <h3> Web Developer</h3>
        </div>
        </div>
    )
  }
  
  export default Header