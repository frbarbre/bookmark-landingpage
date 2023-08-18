import { navLinks } from "@constants/index";
import { useState } from "react";

export default function NavMobile() {
  const [active, setActive] = useState(false);

  return (
    <article className="md:hidden">
      <img src={"/icon-hamburger.svg"} alt="" onClick={() => setActive(true)} />
      {active && (
        <>
          <nav className="fixed inset-0 z-10 flex flex-col justify-between bg-neutral-blue/90 px-[26px] py-[32px]">
            <section className="flex flex-col items-center justify-between gap-[40px]">
              <div className="flex w-full items-center justify-between">
                <img src="/logo-white.svg" alt="logo" />
                <img
                  src={"/icon-close.svg"}
                  alt=""
                  onClick={() => setActive(false)}
                />
              </div>
              <ul className="w-full">
                {navLinks.map((link, index) => (
                  <li
                    key={link}
                    className={`flex h-[65px] items-center justify-center border-t-[2px] border-white/20 text-[20px] uppercase tracking-[2.3px] text-white ${
                      index === navLinks.length - 1 && "border-b-[2px]"
                    }`}
                  >
                    {link}
                  </li>
                ))}
                <button className="mt-[24px] h-[48px] w-full rounded-[4px] border-[3px] text-[20px] font-medium uppercase tracking-[2.3px] text-white">
                  Login
                </button>
              </ul>
            </section>

            <div className="flex justify-center gap-[40px]">
              <img src="/icon-facebook.svg" alt="facebook-logo" />
              <img src="/icon-twitter.svg" alt="twitter-logo" />
            </div>
          </nav>
          <div className="absolute left-0 right-0 top-0 h-[103px] bg-white" />
        </>
      )}
    </article>
  );
}
