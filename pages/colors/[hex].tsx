import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import Property from "../../components/Property";
import colors, { Color } from "../../utils/colors";

interface ColorProps {
    color: Color | undefined;
}

const ColorPage = ({ color }: ColorProps) => {
    if (!color) {
        return (
            <main className="cardSection">
                <h2 className="listMessage">Color not found</h2>
            </main>
        );
    }
    const constrast = color.contrastText === "#000000" ? "white" : "black";

    return (
        <>
            <Head>
                <title>{color.name}</title>
                <meta
                    name="description"
                    content={`${color.name} color values`}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className="cardSection"
                style={{ backgroundColor: color.hex }}
            >
                <section
                    className="cardBox"
                    style={{ backgroundColor: color.contrastText }}
                >
                    <Card color={color} />
                    <div style={{ color: constrast }} className="colorProperty">
                        <Property
                            name="HEX"
                            value={color.hex}
                            fill={constrast}
                        />
                        <Property
                            name="RGB"
                            value={color.rgb}
                            fill={constrast}
                        />
                        <Property
                            name="HSL"
                            value={color.hsl}
                            fill={constrast}
                        />
                        <div className="backContainer">
                            <Link href="/">
                                <a
                                    style={{
                                        backgroundColor: color.hex,
                                        color: color.contrastText,
                                    }}
                                    className="backLink"
                                >
                                    Back to List
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export async function getStaticPaths() {
    const paths = colors.map((color) => ({
        params: { hex: color.hex.replace("#", "") },
    }));

    return { paths, fallback: false };
}

interface ColorStaticProps {
    params: {
        hex: string;
    };
}

export async function getStaticProps({ params }: ColorStaticProps) {
    const color = colors.find((c) => c.hex === `#${params.hex}`);

    return { props: { color } };
}

export default ColorPage;
