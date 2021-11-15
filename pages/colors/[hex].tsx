import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import Property from "../../components/Property";
import colors, { Color } from "../../utils/colors";

interface ColorProps {
  color: Color | undefined;
  search: string;
  setSearch: (search: string) => void;
}

const textColor = "#FFFFFF";

const ColorPage: NextPage<ColorProps> = ({ color }) => {
  if (!color) {
    return (
      <main className="cardSection">
        <h2 className="notFoundMessage">Color not found</h2>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{color.name}</title>
        <meta name="description" content={`${color.name} color`} />
        <meta name="theme-color" content={color.hex} />
        <meta
          name="keywords"
          content={`${color.name}, ${color.hex}, ${color.rgb}, ${color.hsl}`}
        />
      </Head>

      <main className="cardSection" style={{ backgroundColor: color.hex }}>
        <section className="cardBox">
          <Card color={color} />
          <div style={{ color: textColor }} className="colorProperty">
            <Property name="HEX" value={color.hex} fill={textColor} />
            <Property name="RGB" value={color.rgb} fill={textColor} />
            <Property name="HSL" value={color.hsl} fill={textColor} />
            <div className="backContainer">
              <Link href="/" scroll={false}>
                <a className="backLink">Go to List</a>
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
