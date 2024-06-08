const soup = "sopa";
const broth = "caldo";

const PantrySoupBroth = {
  Sopa: new RegExp(soup, "gi"),
  Caldo: new RegExp(broth, "gi"),
};

export default PantrySoupBroth;