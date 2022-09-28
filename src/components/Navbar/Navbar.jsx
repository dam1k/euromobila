import {useState, useEffect, useRef} from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"
import logo from '../../assets/images/euromobila-logo.png' 
import {Link} from "react-router-dom"
import './Navbar.scss'
import '../../App.css'
import { searchQuery } from "../../utils/data"
import { client } from "../../client"
import {useParams} from "react-router-dom"
 

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const menuRef = useRef()
  const params = useParams()

  useEffect(()=> {
    if(toggleNav) {
      menuRef.current.className = 'menu active'
    } else {
      menuRef.current.className = 'menu'
    }
    
  }, [toggleNav])

  useEffect(() => {
    const query = searchQuery(searchTerm)

    if(searchTerm) {
      client.fetch(query)
    .then(data => setSearchResults(data))
    .catch(err => console.log(err))
    } 
  }, [searchTerm])

  return (
    <nav id="main-nav">
  <div className="logo" onClick={() => setToggleNav(false)}>
    <Link to="/"><img src={logo} alt="logo"/></Link>
  </div>
  <div className="navigation">
  <ul className="menu" ref={menuRef}>
    <li className="link" onClick={() => setToggleNav(false)}><Link to="categorie/canapele">Canapele</Link></li>
    <li className="link" onClick={() => setToggleNav(false)}><Link to="categorie/coltare">Coltare</Link></li>
    <li className="link" onClick={() => setToggleNav(false)}><Link to="/">Office</Link></li>
    <li className="link" onClick={() => setToggleNav(false)}><Link to="/">Accesorii</Link></li>
    <li className="link" onClick={() => setToggleNav(false)}><Link to="/">Despre Noi</Link></li>
  </ul>
  <div className="burger" onClick={()=>{setToggleNav(prevState => !prevState)}}>
    <GiHamburgerMenu/>
  </div>
  <form className="search">
    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" value={searchTerm} onBlur={() => setSearchTerm('') }/>
    <FiSearch size={20} className="search-icon"/>
  </form>
    </div>
</nav>
)
}



export default Navbar