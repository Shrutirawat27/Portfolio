import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import cyberstorm from "/src/assets/achievements/Cyberstorm Finalist Certificate.jpg";
import vishwa from "/src/assets/achievements/VishwaCTF.jpg";
import chakravyuha from "/src/assets/achievements/Chakravyuha Certificate.jpg";
import htb from "/src/assets/achievements/Binary Badlands(HTB).jpg";
import xploitathon from "/src/assets/achievements/X-ploit'athon Certificate.jpg";
import classRep from "/src/assets/achievements/CR_Certificate.png";
import creativeHead from "/src/assets/achievements/Creative Head Certificate 2024-25.jpg";

const achievementsData = [
  { title: "Ranked 10th Nationally", subtitle: "Cyberstorm CTF 2025", category: "CTF", image: cyberstorm },
  { title: "Ranked Top 100 Globally", subtitle: "Vishwa CTF 2025", category: "CTF", image: vishwa },
  { title: "Finalist", subtitle: "Chakravyuha CTF 2025", category: "CTF", image: chakravyuha },
  { title: "Ranked 340th Globally", subtitle: "HTB Binary Badlands 2024", category: "CTF", image: htb },
  { title: "Finalist", subtitle: "X-ploit’athon CTF 2024", category: "CTF", image: xploitathon },
  { title: "Class Representative", subtitle: "Leadership Role", category: "Leadership", image: classRep },
  { title: "Creative Head", subtitle: "Event & Design Lead", category: "Leadership", image: creativeHead },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [mobileCount, setMobileCount] = useState(2); // initial mobile cards
  const cardRef = useRef(null);

  // Detect mobile/tablet
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
        setIsMobile(false);
      } else {
        setCardsToShow(3);
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = achievementsData.length - cardsToShow;
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // Auto-slide for desktop
  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(next, 3500);
      return () => clearInterval(timer);
    }
  }, [maxIndex, isMobile]);

  const gap = 24;
  const cardWidth = cardRef.current?.offsetWidth || 0;
  const translateX = index * (cardWidth + gap);

  const toggleMobileView = () => {
    if (mobileCount >= achievementsData.length) {
      setMobileCount(2); // show less
    } else {
      setMobileCount(achievementsData.length); // show all
    }
  };

  return (
    <div
      id="achievements"
      className="pt-24 pb-20 w-full flex flex-col items-center gap-14 px-4 md:px-14"
    >
      <ScrollReveal>
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-white md:text-5xl"
        >
          Achievements
        </motion.h1>
      </ScrollReveal>

      {isMobile ? (
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          {achievementsData.slice(0, mobileCount).map((item, i) => (
            <div
              key={i}
              className="h-full rounded-2xl border border-gray-700 bg-black/50 p-5 backdrop-blur-md text-white"
            >
              <a href={item.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 w-full h-[180px] rounded-xl object-contain bg-black"
                />
              </a>
              <span className="text-xs uppercase tracking-wide text-pink-400">{item.category}</span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}

          <button
            onClick={toggleMobileView}
            className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-2 text-white transition-all hover:scale-105"
          >
            {mobileCount >= achievementsData.length ? "Show Less" : "Load More"}
          </button>
        </div>
      ) : (
        <ScrollReveal>
          <div className="relative w-full max-w-[1100px] overflow-hidden">
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white"
            >
              <BiChevronLeft size={28} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white"
            >
              <BiChevronRight size={28} />
            </button>

            <motion.div
              animate={{ x: -translateX }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex gap-6"
            >
              {achievementsData.map((item, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className={`flex-shrink-0 w-full sm:w-[48%] lg:w-[31%] text-white`}
                >
                  <div className="h-full rounded-2xl border border-gray-700 bg-black/50 p-5 backdrop-blur-md">
                    <a href={item.image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-4 w-full h-[180px] rounded-xl object-contain bg-black transition-transform duration-300 md:hover:scale-105"
                      />
                    </a>
                    <span className="text-xs uppercase tracking-wide text-pink-400">{item.category}</span>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};

export default Achievements;
