import Backward from '../../components/Backward';
// import PostButton from '../../components/Button';
import Container from '../../components/Container';
// import BackwardTitle from '../Mypage/Home/BackwardTitle';
import BackwardTitleBox from '../Mypage/Home/BackwardTitleBox';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CategoryResult from '../Category/List';
import { Input, SearchBox } from './review';

function Review() {
  return (
    <Container>
      <Header />

      <BackwardTitleBox title="후기게시판" />
      <SearchBox>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.25 3C4.90279 3 3 4.90279 3 7.25C3 9.59721 4.90279 11.5 7.25 11.5C9.59721 11.5 11.5 9.59721 11.5 7.25C11.5 4.90279 9.59721 3 7.25 3ZM1 7.25C1 3.79822 3.79822 1 7.25 1C10.7018 1 13.5 3.79822 13.5 7.25C13.5 10.7018 10.7018 13.5 7.25 13.5C3.79822 13.5 1 10.7018 1 7.25Z"
            fill="#5538EE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929Z"
            fill="#5538EE"
          />
        </svg>
        <Input placeholder="검색어를 입력하세요."/>
      </SearchBox>
      <CategoryResult />
      {/* <CategoryResult />
      <CategoryResult /> */}

      <div
        style={{ paddingTop: '30px', paddingRight: '30px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      >
        {/* <PostButton url="./post" description="작성하기" /> */}
      </div>
      <Navigation />
    </Container>
  );
}

export default Review;
