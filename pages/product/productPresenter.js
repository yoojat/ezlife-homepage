import Head from "next/head";
import styled from "styled-components";

const MainInfoSection = styled.section`
  padding-top: 7rem;
  text-align: center;
`;
const MainInfoContainer = styled.div`
  & > * {
    vertical-align: bottom;
  }
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const MainImgContainer = styled.div`
  display: inline-block;
  text-align: center;
  @media (max-width: 513px) {
    margin-bottom: 2rem;
  }
`;
const MainImg = styled.img``;
const MainShortInfoContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 2rem;
`;
const MainInfo = styled.div``;
const MainInfoTable = styled.div``;
const InfoItem = styled.div``;
const InfoTitle = styled.div`
  display: inline-block;
  margin-right: 2rem;
  width: 5rem;
`;
const InfoContent = styled.div`
  display: inline-block;
`;

const ProductInfoSection = styled.section`
  margin-top: 5rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const ProductInfoTitle = styled.div`
  font-size: 1.3rem;
`;
const ProductInfoImgContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const ProductInfoImg = styled.img``;
const ProductInfoContentContainer = styled.div``;
const ProductInfoContent = styled.div``;

export default ({}) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <MainInfoSection>
      <MainInfoContainer>
        <MainImgContainer>
          <MainImg src={"/static/img/brand/logo-icon.png"} />
        </MainImgContainer>
        <MainShortInfoContainer>
          <MainInfo>
            <MainInfoTable>
              <InfoItem>
                <InfoTitle>제품명(한글)</InfoTitle>
                <InfoContent>틸트2</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>제품명(영문)</InfoTitle>
                <InfoContent>TILT-2</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>제조국</InfoTitle>
                <InfoContent>대한민국/미키코리아</InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoTitle>모델명</InfoTitle>
                <InfoContent>틸트2(TILT-2)</InfoContent>
              </InfoItem>
            </MainInfoTable>
          </MainInfo>
        </MainShortInfoContainer>
      </MainInfoContainer>
    </MainInfoSection>

    <ProductInfoSection>
      <ProductInfoTitle>PRODUCT INFO</ProductInfoTitle>
      <ProductInfoImgContainer>
        <ProductInfoImg src={"/static/img/brand/logo-icon.png"} />
      </ProductInfoImgContainer>
      <ProductInfoContentContainer>
        <ProductInfoContent>
          Anim aliqua pariatur mollit eiusmod cupidatat Lorem nulla minim
          officia nulla officia incididunt ex. Fugiat laboris non occaecat est
          non irure aliqua pariatur. Irure eu ea ut aute labore esse enim dolore
          officia non duis cillum ea aute. Mollit consectetur officia aliquip
          aute sint voluptate esse minim aliquip amet ex id tempor non. Commodo
          dolor cillum sunt quis. Laboris aute velit pariatur non non consequat
          sit reprehenderit enim aliqua commodo magna laborum. Esse consequat
          duis incididunt dolor in labore. Quis consequat ea labore nulla nulla
          aute ad dolor nostrud enim. Anim irure ex ad quis laborum ea officia
          laboris sint eiusmod tempor proident tempor consequat. Aute non ad
          eiusmod non. Dolore anim culpa consectetur magna consectetur dolor ad
          ullamco. Laboris non qui minim laborum eiusmod magna. Dolor
          consectetur officia laborum voluptate dolor do consequat laborum
          incididunt. Occaecat elit nulla in qui amet qui velit Lorem. Nisi
          occaecat sunt laborum nisi officia Lorem. Ea enim ad officia ea
          proident aliqua laborum in culpa anim ullamco. Consequat tempor velit
          incididunt laborum elit mollit id qui ex. Eiusmod magna commodo
          exercitation mollit anim pariatur magna ullamco cillum mollit
          excepteur. Magna deserunt dolore commodo do excepteur nisi tempor
          esse. Mollit dolor eu quis mollit adipisicing. Cillum aliqua culpa
          eiusmod in veniam irure exercitation ad adipisicing laboris amet
          cillum esse. Elit occaecat nostrud nisi in quis voluptate nostrud
          velit cillum velit. Culpa qui officia nulla sint mollit ad magna ex
          anim est sit exercitation cupidatat. Anim pariatur cillum non et culpa
          ex dolore mollit nisi officia cillum fugiat exercitation. Laboris
          tempor nulla aliqua consectetur. Dolore fugiat nisi commodo aute.
          Consequat consectetur nisi laboris aliquip laborum Lorem est ut
          nostrud aliquip laborum nostrud aute consectetur. Lorem adipisicing
          labore qui cillum. Anim deserunt ad esse veniam Lorem tempor occaecat
          laborum. Fugiat laborum ipsum exercitation velit nostrud anim pariatur
          est aliqua sint pariatur. Occaecat eu sit id laboris. Ea non eu do
          Lorem consequat qui dolor. Aliquip minim officia pariatur deserunt
          consequat reprehenderit voluptate aliquip commodo sunt qui cillum anim
          velit. Consequat anim pariatur cupidatat eu est non mollit. Sint
          adipisicing quis amet pariatur. Labore est consequat commodo aliquip
          eu veniam. Pariatur mollit cupidatat culpa tempor esse dolor elit elit
          id aute est esse cillum eu. Officia magna ullamco irure adipisicing
          aliqua velit officia eu nostrud laboris sunt irure. Pariatur excepteur
          eu enim tempor aliqua qui anim ea aute nulla eiusmod labore consequat.
          In elit laborum ea pariatur in est do reprehenderit aute ipsum. Id
          cillum consequat incididunt exercitation do qui quis non esse magna
          elit exercitation consequat. Nulla sit ullamco in laborum est magna
          laboris ut ullamco. Fugiat voluptate laborum consequat Lorem sint
          ipsum cupidatat ex aliqua Lorem do enim. Quis aliqua id enim dolore
          commodo qui esse est veniam adipisicing ea qui ex laboris. Velit anim
          fugiat ipsum consequat occaecat. Fugiat magna eiusmod incididunt et.
          Enim occaecat in ea sunt veniam nulla veniam labore eiusmod dolore
          cupidatat culpa. Ut eu eu ex ipsum esse esse. Culpa elit consequat
          nisi nostrud veniam incididunt occaecat incididunt ad voluptate
          aliquip in nulla. Ea minim fugiat quis deserunt mollit consequat
          tempor magna. Proident cupidatat in est ipsum qui duis sint dolore.
          Duis aliqua exercitation consectetur elit aliqua ex excepteur labore.
          Ullamco in qui labore est sint tempor ex. Ipsum aliquip labore magna
          ea incididunt minim. Nisi fugiat id consequat mollit adipisicing enim
          enim aute. Eiusmod proident et ut velit reprehenderit Lorem quis sunt
          Lorem do quis.
        </ProductInfoContent>
      </ProductInfoContentContainer>
    </ProductInfoSection>
  </>
);
