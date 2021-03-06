import Head from "next/head";
import Feed from "../components/feed/Feed";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title> Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  );
}
