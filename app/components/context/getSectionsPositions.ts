export const getSectionsPosition = () => {
  const languagesSection = document.getElementById('languages');
  const languagesSectionCords = languagesSection?.getBoundingClientRect();

  const projectsSection = document.getElementById('projects');
  const projectsSectionCords = projectsSection?.getBoundingClientRect();

  const skillsetSection = document.getElementById('skillset');
  const skillsetSectionCords = skillsetSection?.getBoundingClientRect();

  return {
    languagesSectionPosition: languagesSectionCords?.top,
    projectsSectionPosition: projectsSectionCords?.top,
    skillsetSectionPosition: skillsetSectionCords?.top,
  };
};
