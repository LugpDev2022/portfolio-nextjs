type ReturnedValue = {
  languagesSectionPosition: number;
  projectsSectionPosition: number;
  skillsetSectionPosition: number;
};

export const getSectionsPosition = (): ReturnedValue => {
  const languagesSection = document.getElementById('languages');
  const languagesSectionCords = languagesSection?.getBoundingClientRect();

  const projectsSection = document.getElementById('projects');
  const projectsSectionCords = projectsSection?.getBoundingClientRect();

  const skillsetSection = document.getElementById('skillset');
  const skillsetSectionCords = skillsetSection?.getBoundingClientRect();

  const languagesSectionPosition = languagesSectionCords
    ? languagesSectionCords.top
    : 0;

  const projectsSectionPosition = projectsSectionCords
    ? projectsSectionCords.top
    : 0;

  const skillsetSectionPosition = skillsetSectionCords
    ? skillsetSectionCords.top
    : 0;

  return {
    languagesSectionPosition,
    projectsSectionPosition,
    skillsetSectionPosition,
  };
};
