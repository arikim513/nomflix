import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f0954305ef6c6c01a0afd662ffdec57c',
    language: 'en-US',
  },
});

//주의!
//  /tv/popular (X) 루트/가 붙으면 부터 절대경로라 baseURL을 덮어써버림
//  tv/popular (O) 상대경로!!!
// api.get("tv/popular");

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  tvDetail: id => api.get(`tv/${id}`, { params: { append_to_response: 'videos' } }),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id => api.get(`movie/${id}`, { params: { append_to_response: 'videos' } }),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
