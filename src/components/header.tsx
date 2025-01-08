"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { scrollToSection } from "@/utils/ScrollToSection";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { id: 1, text: "Home", path: "/#home", name: "home" },
  { id: 2, text: "Quem Somos", path: "/#us", name: "us" },
  // { id: 3, text: "Depoimentos", path: "/#testimonials", name: "testimonials" },
  { id: 4, text: "Galeria", path: "/#gallery", name: "gallery" },
  { id: 5, text: "Grupo", path: "/#group", name: "group" },
  // { id: 6, text: "Blog", path: "/#blog", name: "blog" },
  { id: 7, text: "Contato", path: "/#contact", name: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [highlightedPath, setHighlightedPath] = useState<string>("");

  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.split("#")[0];
    console.log(path);
    console.log(highlightedPath);
    setHighlightedPath(path);
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpen2 = (sectionId: string, offset = 0) => {
    scrollToSection(sectionId, offset);
    setOpen(false);
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
        setOpen(false);
      }
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0, zIndex: 250 },
          hidden: { y: "-100%", zIndex: 1 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed inset-0 top-0 z-50 flex h-[93px] w-full items-center justify-between bg-[#101010] transition-colors lg:bg-[#181818] px-[31px] lg:px-[86px]"
      >
        <div onClick={() => handleOpen2("home")} className="cursor-pointer">
          <Image
            src={"/logo.svg"}
            width={85}
            height={25.5}
            className="w-auto h-auto"
            alt="logo"
          />
        </div>

        <nav className="hidden lg:flex  gap-2 xl:gap-9 items-center justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => {
                handleOpen2(`${item.name}`);
                setHighlightedPath(item.name);
              }}
            >
              <span className="relative inline-block cursor-pointer px-3 py-2.5 hover:scale-105 group">
                {highlightedPath === item.name && (
                  <div className="absolute bottom-[14px] left-0 right-0 h-2 bg-revelo z-0 rounded-[2px]"></div>
                )}
                <div className="absolute bottom-[14px] left-0 right-0 h-2 bg-revelo z-0 rounded-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></div>
                <span
                  className={`relative z-10 ${
                    highlightedPath === item.name ? "text-white" : ""
                  }`}
                >
                  {item.text}
                </span>
              </span>
            </Link>
          ))}
          <Link
            href={"/#contact"}
            onClick={() => {
              handleOpen2("contact");
              setHighlightedPath("contact");
            }}
          >
            <div className="flex items-center justify-center cursor-pointer group">
              <motion.div className="flex items-center justify-center px-3 py-2.5 bg-revelo rounded-lg relative w-[95px] h-7 group-hover:scale-x-[129%] group-hover:scale-y-125  duration-300">
                <span className="  group-hover:scale-x-[85%]  group-hover:scale-y-[85%]  duration-300 group-hover:font-bold">
                  Contrate
                </span>
              </motion.div>
            </div>
          </Link>
        </nav>

        {/* Menu Mobile */}
        <div className="lg:hidden relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-6 h-[15px]"
          >
            <span
              className={` block transition-all duration-300 ease-out bg-white 
                    h-0.5 w-6 rounded-sm ${
                      open
                        ? "rotate-45 translate-y-1 bg-white "
                        : "-translate-y-0.5 bg-white "
                    }`}
            ></span>
            <span
              className={` block transition-all duration-300 ease-out  bg-white 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      open ? "opacity-0 bg-white " : "opacity-100 bg-white "
                    }`}
            ></span>
            <span
              className={` block transition-all duration-300 ease-out bg-white 
                    h-0.5 w-6 rounded-sm ${
                      open
                        ? "-rotate-45 -translate-y-1 bg-white "
                        : "translate-y-0.5 bg-white "
                    }`}
            ></span>
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: open ? 0 : "-100%", opacity: open ? 1 : 0 }}
            transition={{
              stiffness: 200,
              damping: 1000,
              duration: 0.5,
              ease: "easeInOut",
            }}
            exit={{ y: "-100%", opacity: 0 }}
            className="fixed left-0 top-0 z-40  flex h-full w-full flex-col items-center justify-center bg-[#101010]"
          >
            <ul className="mb-8 flex flex-col items-center justify-center space-y-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => handleOpen2(`${item.name}`)}
                >
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`cursor-pointer ${
                      highlightedPath === item.path
                        ? "font-bold border border-yellow-200 p-2"
                        : ""
                    }`}
                  >
                    {item.text}
                  </motion.li>
                </Link>
              ))}
            </ul>

            <div className="absolute bottom-10 flex w-full items-end justify-center 3sm:gap-[30px] gap-4">
              <Instagram />
              <Phone />
              <Linkedin />
              <Mail />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
