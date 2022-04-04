export const goToSection = (section: string, callback?: () => void) => {
  callback && callback();

  const selectedSection = document.getElementById(section);
  selectedSection && selectedSection.scrollIntoView({ behavior: 'smooth', inline: 'center' });
};
