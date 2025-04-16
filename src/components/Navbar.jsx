import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, mygithub, linkedin } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full font-jersey flex items-center py-2 fixed 
      top-0 z-20 sm:opacity-[0.97] xxs:h-[12vh] transition-all duration-300 ${
        scrolled ? 'h-14 bg-gradient-to-t from-sky-500 to-indigo-500 shadow-md' : 'bg-transparent'
      }`}>
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Logo à gauche */}
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
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>

        {/* Liens de navigation au centre */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[30px] font-medium font-jersey
              uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Icônes réseaux à droite */}
        <div className="hidden sm:flex gap-5 items-center">
          <a
            href="https://github.com/BadBadBean"
            target="_blank"
            rel="noopener noreferrer">
            <img src={mygithub} alt="GitHub" className="w-8 h-8 object-contain" />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </a>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
              top-0 left-0 w-screen h-[100vh] z-10`}>
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
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                    uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              {/* Icônes réseaux dans le menu mobile */}
              <div className="flex gap-6 mt-10 ml-6">
                <a
                  href="https://github.com/BadBadBean"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={mygithub} alt="GitHub" className="w-8 h-8" />
                </a>
                <a
                  href="https://linkedin.com/in/tonprofil"
                  target="_blank"
                  rel="noopener noreferrer">
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
  );
};

export default Navbar;
