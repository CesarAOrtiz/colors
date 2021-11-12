import type { NextPage } from "next";
import Card from "../components/Card";
import ColorPicker from "../components/ColorPicker";
import colors from "../utils/colors";

const Home: NextPage = () => {
  return (
    <>
      {/* <ColorPicker /> */}
      <div className="card-grid-container">
        {colors.map((color) => (
          <Card color={color} key={color.hex} />
        ))}
      </div>
    </>
  );
};

export default Home;
