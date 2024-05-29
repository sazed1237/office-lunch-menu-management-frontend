import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import logo from '../assets/site_logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import axios from 'axios';

const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // console.log("header", user._id)

    const navItems = [
        {
            label: "Home",
            href: '/',
        },
        {
            label: "Blog",
            href: 'tv',
        },
        {
            label: "Dashboard",
            href: 'admin',
        },

    ]

    const handleLogout = async () => {
        const response = await axios.get("/logout", { withCredentials: true })
        console.log(response)
        dispatch(logout(response?.data?.data))
        localStorage.clear()
    }

    return (
        <section className=' fixed top-0 w-full h-16  opacity-80 bg-black items-center justify-center flex z-50'>
            <div className="navbar container mx-auto">
                <div className="flex-1 h-16">
                    <Link to={'/'} className='h-full w-1/3'>
                        <img className='h-full' src={logo} alt="" />
                    </Link>

                    <nav className='hidden md:flex gap-3 ml-8'>
                        {
                            navItems.map((menu, index) => (
                                <div key={index}>

                                    <NavLink to={menu.href} className={({ isActive }) => `px-2 text-slate-300 hover:text-orange-500 transition-all ${isActive && 'text-orange-500'}`}>
                                        {menu.label}
                                    </NavLink>

                                </div>
                            ))
                        }
                    </nav>
                </div>

                <div className="flex-none gap-2">
                    <form className="items-center justify-center hidden md:flex">
                        <input
                            type="text"
                            name='search'
                            placeholder="Search here"
                            className="input bg-transparent input-sm "
                        />

                        <button className='text-2xl text-neutral-100 '>
                            <IoSearch />
                        </button>
                    </form>

                    <div className="dropdown dropdown-end">
                        {
                            user._id ? (
                                <button onClick={handleLogout} className='bg-orange-500 px-3 py-0.5 rounded text-slate-100 font-semibold' >Logout</button>
                            )
                                :
                                (
                                    <Link to={'/login'} className='bg-orange-500 px-3 py-0.5 rounded text-slate-100 font-semibold' >Login</Link>
                                )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;