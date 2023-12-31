export let DOMAIN_URL = `${
  process.env.NODE_ENV === "production" ? "https" : "http"
}://${process.env.VERCEL_URL}`;

export let BASE_URI = DOMAIN_URL + "/api";
export let ANIME_URI = "https://api.enime.moe";
export let NEWS_URI = DOMAIN_URL + "/api/news/ann";
export let KITSU_URI = "https://kitsu.io/api/edge";
export let TMDB_URI = "https://api.themoviedb.org/3";
