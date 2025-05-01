import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, mygithub, linkedin, darkbg } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <header>
    <nav
    className={`${styles.paddingX} w-full font-jersey flex items-center py-2 absolute 
      top-0 z-20 sm:opacity-[0.97] xxs:h-[12vh] transition-all duration-300`}>
      <div className="w-full mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[45px] object-contain"
          />
        </Link>

        {/* Liens de navigation */}
        <ul className="list-none hidden md:flex flex-row gap-4 xl:gap-14 mt-2">
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`${
        active === nav.title ? 'text-french' : 'text-eerieBlack'
      } hover:text-taupe text-[18px] sm:text-[20px] lg:text-[30px] font-medium font-jersey
      uppercase tracking-[3px] cursor-pointer nav-links`}
      onClick={() => setActive(nav.title)}>
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>

        {/* Icônes réseaux */}
        <div className="hidden md:flex gap-5 items-center">
          <a
            href="https://github.com/BadBadBean"
            target="_blank"
            rel="noopener noreferrer">
            <img src={mygithub} alt="GitHub" className="w-8 h-8 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/delphine-mallet-54b630363/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-1 w-screen justify-end items-center">
  {toggle ? (
    <div
    style={{
      backgroundImage: `url(${darkbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="p-6 absolute top-0 left-0 w-screen h-[100vh] z-10"
  >
      <div className="flex justify-end">
        <img
          src={close}
          alt="close"
          className="w-[22px] h-[22px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <ul
        className="list-none flex flex-col gap-4 
        items-start justify-end mt-[10rem] ml-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? 'text-french' : 'text-eerieBlack'
            } text-[32px] sm:text-[40px] font-bold font-arenq 
            uppercase tracking-[1px] cursor-pointer`}
            onClick={() => {
              setToggle(false);
              setActive(nav.title);
            }}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Icônes mobile */}
      <div className="flex gap-6 mt-10 ml-6">
        <a href="https://github.com/BadBadBean" target="_blank" rel="noopener noreferrer">
          <img src={mygithub} alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
        </a>
      </div>
    </div>
  ) : (
    <img
      src={menu}
      alt="menu"
      className="w-[34px] h-[34px] object-contain cursor-pointer"
      onClick={() => setToggle(true)}
    />
  )}
</div>

      </div>
    </nav>
    </header>
  );
};

export default Navbar;
