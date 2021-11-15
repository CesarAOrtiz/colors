import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Property from "../components/Property";
import { defaultColor } from "../components/ColorPicker";

const ChromePicker = dynamic(
  () => import("../components/ColorPicker/ColorPicker"),
  {
    ssr: false,
    loading: () => <div className="pickerPlaceHolder">Loading...</div>,
  }
);

const parseRgb = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return `rgb(${r}, ${g}, ${b})`;
};

const parseHsl = ({ h, s, l }: { h: number; s: number; l: number }) => {
  return `hsl(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(
    0
  )}%)`;
};

const textColor = "#FFFFFF";

interface Props {
  setNavBg: (navBg: string) => void;
}

const PickerPage: NextPage<Props> = ({ setNavBg }) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    setNavBg(color.hex);
  }, [color, setNavBg]);

  return (
    <>
      <Head>
        <title>Color Picker</title>
        <meta name="description" content={`Web Color Picker`} />
      </Head>

      <main className="cardSection" style={{ backgroundColor: color.hex }}>
        <section className="cardBox blur">
          <ChromePicker color={color.hex} onChange={setColor} />
          <div className="colorProperty" style={{ color: textColor }}>
            <Property name="HEX" value={color.hex} fill={textColor} />
            <Property name="RGB" value={parseRgb(color.rgb)} fill={textColor} />
            <Property name="HSL" value={parseHsl(color.hsl)} fill={textColor} />
            <div className="backContainer">
              <Link href="/">
                <a className="backLink">Back to List</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PickerPage;
