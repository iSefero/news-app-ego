export const styles = {
  wrapper: {
    background: "black",
    position: "static"
  },

  content: {
    justifyContent: "space-between"
  },

  leftSide: {
    display: "flex",
    gap: "80px"
  },

  logo: {
    width: "50px"
  },

  pages: {
    display: "flex",
    gap: "30px",
    alignItems: "flex-end"
  },

  rightSide: {
    display: "flex",
    gap: "15px"
  },
};

export const linkPagesStyle = (selectedItem: string, link: string) => ({
  textDecoration: "none",
  color: "inherit",
  borderBottom: selectedItem === link ? "4px solid white" : "none",
  marginBottom: "5px"
});