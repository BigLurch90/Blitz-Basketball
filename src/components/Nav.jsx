import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-4 fixed z-[99] w-full bg-gradient-to-t from-transparent to-primary-white '>
        <nav className='flex max-w-full justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Blitz logo" width={130} height={29}/>
            </a>

            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-primary-black font-semibold hover:text-crimson-red transition-colors'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="menu icon" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav