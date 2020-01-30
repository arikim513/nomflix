import React from "react";
import HomePresenter from "./HomePresenter";

//컨테이너는 데이터에만 집중(보여줄 건 모두 프레젠터에서 처리하게 데이터만 보내줌!!)
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
