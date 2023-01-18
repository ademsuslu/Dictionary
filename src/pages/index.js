import Search from "@/Components/Search";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>#OpenDictionary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Search />
    </>
  );
}
