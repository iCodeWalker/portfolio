export const handleSectionScroll = (section) => {
  const element = document.getElementById(section);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
