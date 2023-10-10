const commonStyles = {
  control: (styles) => ({
    ...styles,
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
    height: "48px",
    border: "none",
    marginBottom: "4px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "14px 18px",
  }),

  indicatorsContainer: (styles, state) => ({
    ...styles,
    transform: state.selectProps.menuIsOpen ? "scaleY(-1)" : "scaleY(1)",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  menu: (styles) => ({
    ...styles,
    width: "100%",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: "14px 18px",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "18px",
    color: "#121417",
    fontWeight: "500",
  }),
  option: (styles, state) => ({
    ...styles,
    color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
    backgroundColor: "transparent",
    fontWeight: "500",
  }),
};

export const stylesForBrand = {
  ...commonStyles,
  control: (styles) => ({
    ...commonStyles.control(styles),
    width: "224px",
  }),
};

export const stylesForPrice = {
  ...commonStyles,
  control: (styles) => ({
    ...commonStyles.control(styles),
    width: "145px",
  }),
};
