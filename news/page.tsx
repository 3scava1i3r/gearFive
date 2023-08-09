// import React from "react";
// import { TNewsFeed } from "@/@types/NewsType";
// import useNews from "@/hooks/useNews";
// import NewsCard from "@/components/NewsCard";
// // import styles from "../../styles/news_page.module.scss";

// export default async function page() {
//   const { getRecentNews } = useNews();

//   const recentNews: TNewsFeed[] = await getRecentNews();
//   return (
//     <>
//       <h2 className="text-xl mb-10 uppercase font-bold text-pink-200 tracking-widest">
//         Recent News
//       </h2>
//       <div className="flex flex-col space-y-5 m-3 lg:m-0">
//         {recentNews.splice(0, 5).map((news: TNewsFeed, index: number) => (
//           <NewsCard news={news} key={index} />
//         ))}
//       </div>
//     </>
//   );
// }
