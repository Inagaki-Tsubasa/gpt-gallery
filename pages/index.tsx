import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type Movie = {
  title: string;
  genre: string;
  director: string;
  stars: string;
  plot: string;
  image: string;
};

const movies: Movie[] = [
  {
    title: "インターステラー",
    genre: "SF",
    director: "クリストファー・ノーラン",
    stars: "マシュー・マコノヒー, アン・ハサウェイ",
    plot: "人類が生き残るためには新たな居住地を求めて宇宙に進出する必要がある。そんな未来に、宇宙飛行士のクーパーは救世主として選ばれ、人類の未来を担うべく旅立つ。",
    image: "/inter.jpg",
  },
  {
    title: "ショーシャンクの空に",
    genre: "ドラマ",
    director: "フランク・ダラボン",
    stars: "ティム・ロビンス, モーガン・フリーマン",
    plot: "冤罪で終身刑を宣告されたアンディは、ショーシャンク刑務所に送られる。彼は、友情を結び、囚人たちの心を開き、自分自身を再発見する。",
    image: "/shank.jpg",
  },
  {
    title: "ダークナイト",
    genre: "アクション",
    director: "クリストファー・ノーラン",
    stars: "クリスチャン・ベール, ヒース・レジャー",
    plot: "混沌と犯罪に支配されたゴッサム・シティ。そこに現れたダークナイトことバットマンは、犯罪者たちと戦い、街を救    う。そんな中、強力な敵ジョーカーが現れ、バットマンは彼との壮絶な戦いに挑む。",
    image: "/darknight.jpg",
  },
  {
    title: "ホイップラッシュ",
    genre: "ドラマ",
    director: "ダミアン・チャゼル",
    stars: "マイルズ・テラー, ジ.K.シモンズ",
    plot: "音楽学校に通うドラムの才能ある若者アンドリューは、厳格な教師テレンス・フレッチャーに目をつけられ、徹底的な指導のもと、壮絶な成長を遂げていく。",
    image: "/whiplash.jpg",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Favorite Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>私の好きな海外映画</h1>

        <div className={styles.grid}>
          {movies.map((movie, index) => (
            <a href="#" className={styles.card} key={index}>
              <h2>{movie.title}</h2>
              <div className={styles.imageWrapper}>
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={250}
                  height={350}
                />
              </div>
              <p>{movie.genre}</p>
              <p>{movie.director}</p>
              <p>{movie.stars}</p>
              <p>{movie.plot}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/yourusername/my-movie-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
