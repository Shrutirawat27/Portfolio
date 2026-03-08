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
    transition={{ duration: 0.8 }}>
    {children}
  </motion.div>
);

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // Added dragging state to pause autoscroll
  const cardRef = useRef(null);

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

  useEffect(() => {
    // Only autoscroll if user is NOT currently swiping
    if (isMobile && !isDragging) {
      const timer = setInterval(() => {
        setIndex((i) => (i >= achievementsData.length - 1 ? 0 : i + 1));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isMobile, isDragging]);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setIndex((i) => (i >= maxIndex ? 0 : i + 1));
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [isMobile, maxIndex]);

  const gap = 24;
  const cardWidth = cardRef.current?.offsetWidth || 0;
  const translateX = index * (cardWidth + gap);

  return (
    <div
      id="achievements"
      className="pt-24 pb-20 w-full flex flex-col items-center gap-14 px-4 md:px-14">
      <ScrollReveal>
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-white md:text-5xl text-center">
          Achievements
        </motion.h1>
      </ScrollReveal>

      {isMobile ? (
        <div className="w-full max-w-[400px] overflow-hidden relative">
          <motion.div
            // Switched to Pan gestures for reliable mobile swiping
            onPanStart={() => setIsDragging(true)}
            onPanEnd={(event, info) => {
              setIsDragging(false);
              // Swipe threshold of 40px
              if (info.offset.x < -40) {
                // Swiped Left
                setIndex((i) => (i >= achievementsData.length - 1 ? 0 : i + 1));
              } else if (info.offset.x > 40) {
                // Swiped Right
                setIndex((i) => (i <= 0 ? achievementsData.length - 1 : i - 1));
              }
            }}
            animate={{ x: -translateX }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // Added touch-pan-y to allow vertical scroll while grabbing horizontal swipes
            className="flex gap-6 touch-pan-y cursor-grab active:cursor-grabbing">
            {achievementsData.map((item, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="flex-shrink-0 w-full text-white">
                <div className="h-full rounded-2xl border border-gray-700 bg-black/50 p-5 backdrop-blur-md">
                  {/* Added draggable="false" to anchor so it doesn't interrupt the swipe */}
                  <a href={item.image} target="_blank" rel="noopener noreferrer" draggable="false">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable="false" // Prevents the browser from trying to "save/drag" the image
                      className="mb-4 w-full h-[180px] rounded-xl object-contain bg-black"/>
                  </a>
                  <span className="text-xs uppercase tracking-wide text-pink-400">{item.category}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <ScrollReveal>
          <div className="relative w-full max-w-[1100px] overflow-hidden">
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white">
              <BiChevronLeft size={28} />
            </button>

            <button
              onClick={next}
              className="absolute right-8 top-1/2 z-10 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white">
              <BiChevronRight size={28} />
            </button>

            <motion.div
              animate={{ x: -translateX }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex gap-6">
              {achievementsData.map((item, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className={`flex-shrink-0 w-full sm:w-[48%] lg:w-[31%] text-white`}>
                  <div className="h-full rounded-2xl border border-gray-700 bg-black/50 p-5 backdrop-blur-md">
                    <a href={item.image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-4 w-full h-[180px] rounded-xl object-contain bg-black transition-transform duration-300 md:hover:scale-105"/>
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