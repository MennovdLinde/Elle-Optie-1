"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useMemo, useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import CustomSlider from "./customSlider";
import "./globals.css";

export default function Home() {
  const mainImageRef = useRef(null);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [openDivIndex, setOpenDivIndex] = useState<number | null>(0);
  const [currentSection, setCurrentSection] = useState("home");
  const [isHomeRefreshed, setIsHomeRefreshed] = useState(true);

  const handleNavClick = (sectionId: string) => {
    setIsHomeRefreshed(false);
    setCurrentSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen) {
      gsap.fromTo(
        mainImageRef.current,
        { scale: 0.5, y: -200 },
        {
          scale: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          delay: 1,
        }
      );
    } else {
      gsap.fromTo(
        mainImageRef.current,
        { scale: 1.1, x: -50, y: 50 },
        {
          scale: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "expo.out",
          delay: 1,
        }
      );
    }
    controls.start("visible");
  }, [controls]);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 1,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  const toggleDiv = (index: number) => {
    setOpenDivIndex(openDivIndex === index ? null : index); // Toggle div state
  };

  return (
    <motion.div
      ref={scrollRef}
      className="bg-[var(--background-color)] p-3 md:p-5"
      initial="hidden"
      animate={controls}
      variants={isHomeRefreshed ? containerVariants : undefined}
    >
      <motion.header
        variants={isHomeRefreshed ? itemVariants : undefined}
        className="flex flex-col bg-[var(--background-color-div)] rounded-2xl shadow-xl sm:flex-row justify-between items-center mb-4"
      >
        <Image
          src="/Logo.png"
          alt="Logo"
          width={70}
          height={40}
          className="pl-4"
        />
        <nav className="flex space-x-4 justify-between sm:items-center pr-0 md:pr-4">
          <button
            onClick={() => handleNavClick("home")}
            className={`text-[var(--text-color)] px-1 md:px-5   ${
              currentSection === "home"
                ? "border-b-2 border-[var(--border-color)]"
                : ""
            }`}
          >
            <h3>OVER MIJ</h3>
          </button>
          <button
            onClick={() => handleNavClick("behandelingen")}
            className={`text-[var(--text-color)] px-1 md:px-5 ${
              currentSection === "behandelingen"
                ? "border-b-2 border-[var(--border-color)]"
                : ""
            }`}
          >
            <h3>BEHANDELINGEN</h3>
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={`text-[var(--text-color)] px-1 md:px-5 ${
              currentSection === "contact"
                ? "border-b-2 border-[var(--border-color)]]"
                : ""
            }`}
          >
            <h3>CONTACT</h3>
          </button>
        </nav>
      </motion.header>

      <div>
        {currentSection === "home" && (
          <div id="home" className="grid grid-cols-12 gap-4 h-auto md:h-[84vh]">
            <motion.div
              variants={isHomeRefreshed ? itemVariants : undefined}
              className="bg-[var(--background-color)] border border-[var(--border-color-secondary)] border-1 rounded-2xl shadow-xl col-span-12 md:col-span-5 flex flex-col row-span-2"
            >
              <div className="flex flex-col">
                <div className="bg-[var(--background-color-div)] rounded-2xl flex flex-row p-4 items-center">
                  <Image
                    src="/Home-3.jpg"
                    alt="Elle"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-xl main_image object-cover h-40 hidden md:flex"
                  />
                  <p className="text-[var(--text-color)] p-3">
                    Hallo, mijn naam is Elle. Samen met mijn vriend Kay en lieve
                    rottweiler Murphy woon ik in Geleen. Ik heb HBO sportkunde
                    afgelopen jaar afgerond, maar mijn liefde voor honden was te
                    groot om hier niks mee te doen. Zo ben ik terecht gekomen
                    bij het mooi beroep van hondentrimster.
                  </p>
                </div>
                <div className="bg-[var(--background-color)] hidden md:flex flex-col mt-5">
                  <p className="text-[var(--text-color-secondary)] p-4">
                    Ik ben mijn opleiding voor trimster vorig jaar begonnen.
                    Tijdens de stage in de opleiding heb ik het beroep in de
                    praktijk geleerd. Zo heb ik kennis gemaakt met verschillende
                    rassen, en dus ook verschillende vachten van honden.
                    <br />
                    <br />
                    Door deze ervaringen ben ik erachter gekomen dat ik het leuk
                    vind om een variatie in rassen te trimmen of te verzorgen.
                    Hierdoor zijn alle honden bij mij welkom. Ook honden die
                    geplukt moeten worden.
                  </p>
                </div>
              </div>
            </motion.div>

            <Image
              ref={mainImageRef}
              src="/Elle.jpg"
              alt="Elle"
              width={350}
              height={300}
              className="rounded-2xl shadow-xl flex main_image col-span-12 md:col-span-3 row-span-1 object-cover mx-auto mt-auto"
            />

            <motion.div
              variants={isHomeRefreshed ? itemVariants : undefined}
              className="bg-[var(--background-color-div)] p-4 rounded-2xl shadow-xl flex flex-col justify-evenly col-span-12 md:col-span-4 h-[80vh] md:h-auto row-span-2 overflow-y-auto hide-scrollbar"
            >
              <div className="flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleNavClick("behandelingen")}
                >
                  <ArrowUpRight
                    className="mb-2 text-[var(--text-color)] cursor-pointer"
                    size={30}
                  />
                </motion.div>
              </div>
              <h1
                className="text-[var(--text-color)] ms-1 w-10"
                style={{ marginTop: -30 }}
              >
                Behandelingen
              </h1>
              <div className="interactive-div group p-1 rounded-xl shadow-xl border border-[var(--border-color)] border-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleDiv(0)}
                  className="div-header"
                >
                  <h2 className="text-left text-[var(--text-color)]">
                    Trimmen en knippen
                  </h2>
                </motion.div>
                <AnimatePresence>
                  {openDivIndex === 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "fit-content", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="div-content"
                    >
                      <CustomSlider
                        images={[
                          "/Behandeling-1a.jpg",
                          "/Behandeling-1d.jpg",
                          "/Behandeling-1d.jpg",
                          "/Behandeling-1c.jpg",
                        ]}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="interactive-div group p-1 rounded-xl shadow-xl border border-[var(--border-color)] border-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleDiv(1)}
                  className="div-header"
                >
                  <h2 className="text-left text-[var(--text-color)]">
                    Plukken
                  </h2>
                </motion.div>
                <AnimatePresence>
                  {openDivIndex === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "fit-content", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="div-content"
                    >
                      <CustomSlider
                        images={[
                          "/Behandeling-2b.jpg",
                          "/Behandeling-2a.jpg",
                          "/Behandeling-2d.jpg",
                          "/Behandeling-2c.jpg",
                        ]}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="interactive-div group p-1 rounded-xl shadow-xl border border-[var(--border-color)] border-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleDiv(2)}
                  className="div-header"
                >
                  <h2 className="text-left text-[var(--text-color)]">
                    Wassen en drogen
                  </h2>
                </motion.div>
                <AnimatePresence>
                  {openDivIndex === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "fit-content", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="div-content"
                    >
                      <CustomSlider
                        images={[
                          "/Behandeling-3a.jpg",
                          "/Behandeling-3b.jpg",
                          "/Behandeling-3c.jpg",
                          "/Behandeling-3d.jpg",
                        ]}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="interactive-div group p-1 rounded-xl shadow-xl border border-[var(--border-color)] border-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleDiv(3)}
                  className="div-header"
                >
                  <h2 className="text-left text-[var(--text-color)]">Kammen</h2>
                </motion.div>
                <AnimatePresence>
                  {openDivIndex === 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "fit-content", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="div-content"
                    >
                      <CustomSlider
                        images={[
                          "/Behandeling-4a.jpg",
                          "/Behandeling-4b.jpg",
                          "/Behandeling-4c.jpg",
                          "/Behandeling-4d.jpg",
                        ]}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              variants={isHomeRefreshed ? itemVariants : undefined}
              className="bg-[var(--background-color-div)] p-4 rounded-2xl shadow-xl col-span-12 md:col-span-3 flex flex-col row-span-1"
            >
              <div className="flex justify-end items-center my-auto col-span-12">
                {[
                  {
                    Icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/lot-van-egdom?originalSubdomain=nl",
                    alt: "LinkedIn",
                  },
                  {
                    Icon: FaInstagram,
                    link: "https://www.instagram.com/ellelamers/",
                    alt: "Instagram",
                  },
                  {
                    Icon: SiGmail,
                    link: "mailto:example@gmail.com?subject=Hello&body=Hi, kan ik een afspraak maken?",
                    alt: "Email",
                  },
                ].map(({ Icon, link, alt }) => (
                  <Link
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="text-[var(--text-color)] px-2"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={35} className="object-cover" title={alt} />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
        {currentSection === "behandelingen" && (
          <div
            id="behandelingen"
            className="grid grid-cols-1 md:grid-cols-4 gap-10 p-3"
          >
            <motion.div
              className="bg-[var(--background-color)] border-[var(--border-color-secondary)] border-2 rounded-lg shadow-xl flex items-center justify-center h-auto md:h-[78vh] overflow-y-auto hide-scrollbar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col h-full">
                <h2 className="text-[var(--text-color-secondary)] text-center p-2">
                  Trimmen en knippen
                </h2>

                <div className="flex flex-col items-center mb-5">
                  <p className="text-[var(--text-color-secondary)] p-2">
                    Introductie tekst voor trimmen Introductie tekst voor
                    trimmen
                  </p>
                  <div className="flex flex-row items-center">
                    <Image
                      src="/Behandeling-1d.jpg"
                      alt="1d"
                      width={120}
                      height={120}
                      className="object-cover rounded-lg shadow-xl mx-2"
                    />
                    <p className="text-[var(--text-color-secondary)] p-4">
                      Prijs €
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-[var(--text-color-secondary)] p-2">
                    Introductie tekst voor knippen Introductie tekst voor
                    knippen
                  </p>
                  <div className="flex flex-row items-center">
                    <Image
                      src="/Behandeling-1a.jpg"
                      alt="1a"
                      width={120}
                      height={120}
                      className="object-cover rounded-lg shadow-xl mx-2"
                    />
                    <p className="text-[var(--text-color-secondary)] p-4">
                      Prijs €
                    </p>
                  </div>
                </div>

                <div className="mt-auto h-20 bg-[var(--background-color-div)]">
                  <p className="text-[var(--text-color)] text-center mt-5">
                    Trimmen & knippen - Prijs €
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[var(--background-color)] border-[var(--border-color-secondary)] border-2 rounded-lg shadow-xl flex items-center justify-center h-auto md:h-[78vh] overflow-y-auto hide-scrollbar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col h-full items-center">
                <h2 className="text-[var(--text-color-secondary)] text-center p-2">
                  Plukken
                </h2>
                <p className="text-[var(--text-color-secondary)] text-center p-2">
                  Introductie tekst voor plukken Introductie tekst voor plukken
                </p>
                <Image
                  src="/Behandeling-2a.jpg"
                  alt="2a"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg shadow-xl mb-2"
                />
                <Image
                  src="/Behandeling-2b.jpg"
                  alt="2b"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg shadow-xl mb-2"
                />

                <div className="h-20 w-full mt-auto bg-[var(--background-color-div)]">
                  <p className="text-[var(--text-color)] text-center mt-5">
                    Plukken - Prijs €
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bbg-[var(--background-color)] border-[var(--border-color-secondary)] border-2 rounded-lg shadow-xl flex items-center justify-center h-auto md:h-[78vh] overflow-y-auto hide-scrollbar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col h-full">
                <h2 className="text-[var(--text-color-secondary)] text-center p-2">
                  Wassen en drogen
                </h2>
                <p className="text-[var(--text-color-secondary)] text-center p-2">
                  Introductie tekst voor wassen Introductie tekst voor wassen
                </p>
                <div className="flex flex-row items-center justify-around">
                  <Image
                    src="/Behandeling-3a.jpg"
                    alt="3a"
                    width={120}
                    height={120}
                    className="object-cover rounded-lg shadow-xl mb-2"
                  />
                  <Image
                    src="/Behandeling-3d.jpg"
                    alt="3d"
                    width={120}
                    height={120}
                    className="object-cover rounded-lg shadow-xl mb-2"
                  />
                </div>

                <p className="text-[var(--text-color-secondary)] text-center p-2 mt-5">
                  Introductie tekst voor drogen Introductie tekst voor drogen
                </p>

                <Image
                  src="/Behandeling-3b.jpg"
                  alt="3b"
                  width={120}
                  height={120}
                  className="object-cover rounded-lg shadow-xl mb-2 mx-auto"
                />

                <div className="mt-auto h-20 bg-[var(--background-color-div)]">
                  <p className="text-[var(--text-color)] text-center mt-5">
                    Wassen en drogen - Prijs €
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-[var(--background-color)] border-[var(--border-color-secondary)] border-2 rounded-lg shadow-xl flex items-center justify-center h-auto md:h-[78vh] overflow-y-auto hide-scrollbar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col h-full items-center">
                <h2 className="text-[var(--text-color-secondary)] text-center p-2">
                  Kammen
                </h2>

                <p className="text-[var(--text-color-secondary)] text-center p-2">
                  Introductie tekst voor kammen Introductie tekst voor kammen
                </p>

                <Image
                  src="/Behandeling-4c.jpg"
                  alt="4c"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg shadow-xl mb-2"
                />
                <Image
                  src="/Behandeling-4d.jpg"
                  alt="4d"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg shadow-xl mb-2"
                />
                <div className="mt-auto h-20 w-full bg-[var(--background-color-div)]">
                  <p className="text-[var(--text-color)] text-center mt-5">
                    Kammen - Prijs €
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        {currentSection === "contact" && (
          <div
            id="contact"
            className="p-5 bg-[var(--background-color-div)] rounded-2xl shadow-xl w-[90%] md:w-[50%] mx-auto"
          >
            <h2 className="text-[var(--text-color)] text-center text-2xl mb-4">
              Contact
            </h2>
            <form className="flex flex-col space-y-4 mx-auto">
              <input
                type="text"
                placeholder="Naam"
                className="p-3 rounded-lg shadow-md"
                required
              />
              <input
                type="email"
                placeholder="E-mailadres"
                className="p-3 rounded-lg shadow-md"
                required
              />
              <textarea
                placeholder="Uw bericht"
                className="p-3 rounded-lg shadow-md h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[var(--border-color-secondary)] border border-[var(--border-color)] border-1 text-white p-3 rounded-lg shadow-md hover:bg-opacity-90"
              >
                Verstuur
              </button>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
}
