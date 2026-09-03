export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  ceremonyDate: "JULY 4 – 5, 2026",
  location: "SRIRANGAM",
  navItems: [
    { label: "THE WEEKEND", href: "#weekend" },
    { label: "RITHANYAA", href: "#rithanyaa" },
    { label: "RITHVIK", href: "#rithvik" },
    { label: "TOGETHER", href: "#together" },
    { label: "THE FILMS", href: "#films" },
    { label: "GRATITUDE", href: "#gratitude" },
  ] as NavItem[],
};
