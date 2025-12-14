import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const menuOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = document.getElementById("home")?.offsetHeight || 0;
      setShowResume(window.scrollY > homeHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 ">Shruti</a>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

        <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Skills</li>
        </a>

        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>

        <a href="#achievements" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Achievements</li>
        </a>

        <a href="#certifications" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Certifications</li>
        </a>

        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>  

        {showResume && (
          <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Resume</li>
          </a>
        )}      
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://www.linkedin.com/in/shruti-rawat-6b7969314" target="_blank" rel="noopener noreferrer">
          <BsLinkedin/>
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a href="https://github.com/Shrutirawat27" target="_blank" rel="noopener noreferrer">
          <BsGithub/>
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500 hover:opacity-100">
          <a href="https://www.instagram.com/shrutirawat0208" target="_blank" rel="noopener noreferrer">
          <BsInstagram/>
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl absolute right-6" onClick={menuOpen}/>
      ) : (
        <BiMenu className="block md:hidden text-4xl absolute right-6" onClick={menuOpen}/>
      )}

{isOpen && (
  <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-8 border border-gray-800 bg-black/90 px-8 py-8 overflow-y-auto">
    <ul className="flex flex-col gap-6 w-full">
      <a href="#home" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Home</li>
      </a>
      <a href="#skills" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Skills</li>
      </a>
      <a href="#projects" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Projects</li>
      </a>
      <a href="#achievements" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Achievements</li>
      </a>
      <a href="#certifications" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Certifications</li>
      </a>
      <a href="#contact" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
      </a>
      {showResume && (
        <a href="#home" onClick={() => setIsOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Resume</li>
        </a>
      )}
    </ul>

    <ul className="flex gap-5 mt-6">
      <li>
        <a href="https://www.linkedin.com/in/shruti-rawat-6b7969314" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={24} />
        </a>
      </li>
      <li>
        <a href="https://github.com/Shrutirawat27" target="_blank" rel="noopener noreferrer">
          <BsGithub size={24} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/shrutirawat0208" target="_blank" rel="noopener noreferrer">
          <BsInstagram size={24} />
        </a>
      </li>
    </ul>
  </div>
)}
</nav>
  )
}

export default Navbar;