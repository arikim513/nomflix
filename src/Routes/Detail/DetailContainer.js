import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    //생성자 사용!
    //setState(다시 렌더 일어남)없이 바로 state값 가지고 생성하기 위해
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      console.log('ID is NaN: ', id);
      return push('/'); //history 의 다음 주소를 이 주소로 갱신!
    }
    let result = null;
    try {
      if (isMovie) {
        // (  )는 선언 없이 객체 리터럴(object literal) 비구조화 할당을 사용할 때 필요한 구문입니다.
        // {a, b} = {a:1, b:2}는 유효한 독립 구문이 아닙니다. 좌변의 {a, b}이 블록으로 간주되기 때문입니다.
        // 하지만, ({a, b} = {a:1, b:2})는 유효한데, var {a, b} = {a:1, b:2}와 같습니다.
        // (  ) 표현식 앞에는 세미콜론이 있어야 합니다. 그렇지 않을 경우 블록으로 인식되어 이전 줄과 연결되어 함수를 실행하는데 이용될 수 있습니다.
        //니코 write the ( ) because 니코 changing the 'let'
        // If use const {data: result } = await.....
        // Then I won't be able to access the 'result' variable from the finally{} to set the state because I created the 'result' const inside of the try{}
        //위에서 선언한 let result 과 아래에 쓰인 : result 는 다른 거!
        //이름이 같아서 작동 됨..
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
      console.log(result);
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    console.log(this.state);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
