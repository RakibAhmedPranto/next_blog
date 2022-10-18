import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";
import Trending from "../components/Trending";
import Format from "../layout/Format";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Format>
      <Trending />
      <LatestPosts />
    </Format>
  );
}
