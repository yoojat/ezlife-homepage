import styled from "styled-components";
const Footer = styled.footer`
  background-color: #1b1c20;
  padding: 30px 0;
  color: #b0b0b0;
  text-align: center;
  font-size: 13px;
`;
const FooterLogo = styled.p`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 125px;
  height: 24px;
  text-indent: -9999px;
  background-image: url("/static/img/main/LogoWhite.png");
  background-repeat: no-repeat;
  background-size: 125px auto;
  margin-bottom: 22px;
`;
const FooterInfo = styled.p`
  margin-bottom: 4px;
`;
const FooterSpan = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const BranchInfoContainer = styled.div``;

const BranchInfoItem = styled.div``;

export default () => (
  <Footer>
    <FooterLogo>블루닷라운지</FooterLogo>
    <BranchInfoContainer>
      <BranchInfoItem>
        화명본점 : 부산광역시 북구 양달로4번길 11 세흥빌딩 4층
      </BranchInfoItem>
      <BranchInfoItem>
        화명역점 : 부산광역시 북구 화명대로 15 하이페리온타워 501호
      </BranchInfoItem>
      <BranchInfoItem>
        동래안락점 : 부산광역시 동래구 연안로 41 6층 블루닷라운지
      </BranchInfoItem>
      <BranchInfoItem>
        반여점 : 부산광역시 해운대구 선수촌로 65-25
      </BranchInfoItem>
      <BranchInfoItem>
        명륜역점 : 부산 동래구 동래로 27-15 2층, 3층
      </BranchInfoItem>
      <BranchInfoItem>
        양산중부점 : 경상남도 양산시 양산역5길 10-1 2층 202호
      </BranchInfoItem>
      <BranchInfoItem>
        구서점 : 부산광역시 금정구 금샘로 369 3층 블루닷라운지 구서점
      </BranchInfoItem>
      <BranchInfoItem>
        울산수암점 : 울산광역시 남구 중앙로44번길 1-4 2층 블루닷라운지
      </BranchInfoItem>
    </BranchInfoContainer>
    <FooterInfo>
      상호명 : (주) 크리플레이 617-86-24973<FooterSpan>|</FooterSpan> 대표 :
      송병근
    </FooterInfo>
    <p>©2019 CRE-PLAY All rights reserved.</p>
  </Footer>
);
