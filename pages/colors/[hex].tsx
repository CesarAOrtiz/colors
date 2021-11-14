import { useRouter } from "next/router";
import Card from "../../components/Card";
import Property from "../../components/Property";
import colors from "../../utils/colors";

const ColorPage = () => {
    const router = useRouter();
    const { hex } = router.query;
    const color = colors.find((c) => c.hex === `#${hex}`);
    if (!color) return <h2 className="listMessage">Color not found</h2>;
    const constrast = color.contrastText === "#000000" ? "white" : "black";

    return (
        <section className="cardSection" style={{ backgroundColor: color.hex }}>
            <div
                className="cardBox"
                style={{ backgroundColor: color.contrastText }}
            >
                <Card color={color} />
                <div style={{ color: constrast }} className="colorProperty">
                    <Property name="HEX" value={color.hex} fill={constrast} />
                    <Property name="RGB" value={color.rgb} fill={constrast} />
                    <Property name="HSL" value={color.hsl} fill={constrast} />
                </div>
            </div>
        </section>
    );
};

export default ColorPage;
