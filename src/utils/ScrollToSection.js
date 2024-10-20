export const scrollToSection = (sectionId, offset = 0) => {
  const section = document.getElementById(sectionId);

  if (section) {
    const scrollTo = section.offsetTop - offset;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  }
};
