import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='absolute w-full flex items-center justify-between z-50 p-4'> 
        <Link to="/">
            <h1 className='uppercase text-red-700 font-nsans-bold cursor-pointer text-5xl'>
                Netflix
            </h1>
        </Link>
       <div>
       <Link to="/login">
            <span className='pr-4'>Iniciar Sesión</span>
        </Link>
        <Link to="/signup">
            <span className='bg-red-600 px-6 py-1 rounded'> Registrarse</span>
        </Link>
       </div>

   </nav>
  )
}

export default Navbar