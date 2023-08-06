import News from "@/components/News";
import Popular from "@/components/Popular";
import Prev from "@/components/Prev";
import Recent from "@/components/Recent";
import TopFeed from "@/components/TopFeed";
import styles from "../styles/main.module.scss";
import useAnime from "@/hooks/useAnime";
import useNews from "@/hooks/useNews";
import { IAnime, IRecentAnime } from "@/@types/EnimeType";
import { TNewsFeed } from "@/@types/NewsType";

export default async function Home() {
  const { getRecent, getPopular } = useAnime();
  const { getRecentNews } = useNews();
  const recentAnimes: { data: IRecentAnime[] } = await getRecent();
  const popularAnimes: { data: IAnime[] } = await getPopular();
  const recentNews: TNewsFeed[] = await getRecentNews();

  console.log("rec", recentAnimes);

  return (
    <>
      <div className={styles.top_feed}>
        <TopFeed />
      </div>
      <div className={styles.mid}>
        <div>
          <Recent />
          <Prev />
          <Popular />
        </div>
        <div>
          <News />
        </div>
      </div>
    </>
  );
}
