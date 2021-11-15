import type { NextPage } from "next";
import Link from "next/link";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import colors from "../utils/colors";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

const Home: NextPage<Props> = ({ search, setSearch }) => {
  const list = colors
    .filter(
      (color) =>
        color.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        color.hex.toLowerCase().includes(search.toLowerCase().trim())
    )
    .map((color) => {
      const hex = color.hex.replace(/#/g, "");
      return (
        <Link key={hex} href={`/colors/${hex}`}>
          <a>
            <Card color={color} info />
          </a>
        </Link>
      );
    });

  return (
    <main className="container">
      <div className="content" style={{ marginTop: 80 }}>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <section className="card-grid-container">
          {list.length ? (
            list
          ) : (
            <h2 className="notFoundMessage">No Color Found</h2>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
