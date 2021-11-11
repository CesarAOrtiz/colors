import type { NextPage } from "next";
import Card from "../components/Card";
import colors from "../utils/colors";

const Home: NextPage = () => {
  return (
    <div className="card-grid-container">
      {colors.map((color) => (
        <Card color={color} key={color.hex} />
      ))}
    </div>
  );
};

export default Home;
