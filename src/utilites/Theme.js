export const themeSetting = (mode, dir) => {
  return {
    direction: dir,

    palettes: {
      mode,
      vars: {
        main: mode === "dark" ? "#1A2537" : "#FFFFFF",
        secondary: mode === "dark" ? "#1F2A3D" : "#F4F7FB",
      },
      background: {
        main: mode === "dark" ? "#1A2537" : "#FFFFFF",
        secondary: mode === "dark" ? "#1F2A3D" : "#F4F7FB",
      },
      text: {
        main: mode === "dark" ? "#DDDFE1" : "#29343D",
        secondary: mode === "dark" ? "#1F2A3D" : "#87939D", // Fix potential typo
      },
    },
  };
};

export default themeSetting;
