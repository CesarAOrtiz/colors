import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import SearchInput from "../components/SearchInput";
import colors from "../utils/colors";

const Home: NextPage = () => {
    const [search, setSearch] = useState("");

    const list = colors
        .filter(
            (color) =>
                color.name.toLowerCase().includes(search) ||
                color.hex.toLowerCase().includes(search)
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
                        <h2 className="listMessage">No Color Found</h2>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Home;
