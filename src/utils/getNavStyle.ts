export const getNavStyle = (isActive: boolean) => {
  return `cursor-pointer font-normal rounded px-4 py-1  ${
    isActive ? "bg-primary text-white" : "bg-white text-black "
  } no-underline shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg`;
};
