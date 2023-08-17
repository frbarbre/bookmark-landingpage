import { navLinks } from '@constants/index';
import { useState } from 'react';

export default function NavMobile() {
  const [active, setActive] = useState(false);

  return (
    <article className="md:hidden">
      <img src={'/icon-hamburger.svg'} alt="" onClick={() => setActive(true)} />
      {active && (
        <>
          <nav className="bg-neutral-blue/90 fixed inset-0 py-[32px] px-[26px] flex flex-col justify-between z-10">
            <section className="flex items-center justify-between flex-col gap-[40px]">
              <div className="flex items-center justify-between w-full">
                <img src="/logo-white.svg" alt="logo" />
                <img
                  src={'/icon-close.svg'}
                  alt=""
                  onClick={() => setActive(false)}
                />
              </div>
              <ul className="w-full">
                {navLinks.map((link, index) => (
                  <li
                    className={`h-[65px] border-white/20 border-t-[2px] flex justify-center items-center uppercase text-white text-[20px] tracking-[2.3px] ${
                      index === navLinks.length - 1 && 'border-b-[2px]'
                    }`}
                  >
                    {link}
                  </li>
                ))}
                <button className='mt-[24px] w-full border-[3px] rounded-[4px] text-white font-medium h-[48px] text-[20px] tracking-[2.3px] uppercase'>Login</button>
              </ul>
            </section>

            <div className="flex gap-[40px] justify-center">
              <img src="/icon-facebook.svg" alt="facebook-logo" />
              <img src="/icon-twitter.svg" alt="twitter-logo" />
            </div>
          </nav>
          <div className="absolute top-0 left-0 right-0 h-[103px] bg-white" />
        </>
      )}
    </article>
  );
}
