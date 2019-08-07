import Head from "next/head";
import styled from "styled-components";
import Map from "../../components/Map";

const TopBannerContainer = styled.div`
  padding-top: 100px;
  width: 100vw;
`;

const TopBanner = styled.div`
  background-image: url("/static/img/etc/computer-1149148_1920.jpg");
  height: 170px;
  width: 100%;
  background-size: cover;
`;

const BannerTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin-left: 10vw;
  margin-bottom: 0.7rem;
`;
const BannerSubTitle = styled.div`
  color: white;
  font-size: 1.1rem;
  margin-left: 10vw;
`;
const TopBannerModal = styled.div`
  height: 110px;
  width: 100%;
  position: absolute;
  top: 100px;
  background-color: rgba(0, 0, 0, 0.5); /*살짝 투명한 검정으로 배경색*/
  padding-top: 60px;
`;

const ContentSection = styled.div`
  text-align: left;
  margin-top: 3rem;
  display: table;
  @media (max-width: 1280px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: inherit;
  }
`;

const LeftMenu = styled.div`
  /* display: inline-block; */
  display: table-cell;
  width: 20%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  @media (max-width: 1280px) {
    display: block;
    width: 100%;
    margin-left: inherit;
    margin-right: inherit;
  }
`;
const RightContentContainer = styled.div`
  /* display: inline-block; */
  display: table-cell;
  width: 60%;
  padding: 2.5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  @media (max-width: 1280px) {
    width: 85%;
    padding: 2.5%;
  }
`;

const MenuContainer = styled.div``;
const MenuMainTitle = styled.div`
  color: white;
  background-color: ${props => props.theme.deepBlue};
  line-height: 3rem;
  padding-left: 2rem;
  font-size: 1.3rem;
  margin-bottom: 1.1rem;
  @media (max-width: 1280px) {
    display: none;
  }
`;
const MenuSubContainer = styled.div`
  @media (max-width: 1280px) {
    text-align: center;
  }
`;

// const JoinImg = styled("div")`
//   display: ${props =>
//     (props.selUsageOption === SIGN_UP && "inherit") || "none"};
//   width: 100%;
//   height: auto;
//   background: url("/static/img/main/ManualJoinImg.gif") no-repeat center / auto
//     100%;
// `;

const MenuItem = styled.div`
  &:hover {
    background-color: ${props => props.theme.lightBlue};
    color: white;
    cursor: pointer;
  }
  line-height: 3rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  background-color: ${props =>
    props.fixNumber === props.getNumber
      ? props.theme.lightBlue
      : props.theme.whiteGray};
  color: ${props =>
    props.fixNumber === props.getNumber ? "white" : props.theme.black};
  border-bottom: 0.1rem solid #dedede;
  @media (max-width: 1280px) {
    display: inline-block;
    padding-left: inherit;
    margin-left: 1.5rem;
    margin-right: 2rem;
    border-bottom: inherit;
    font-size: 0.8rem;
    width: 20%;
    min-width: 13rem;
    margin-bottom: 1rem;
    border: 1px solid black;

    &:hover {
      background-color: inherit;
      color: inherit;
    }
  }
`;

const BzIntroTitile = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MainBzCol = styled.div`
  margin-top: 3rem;
`;
const MainBzTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.3rem;
`;
const MainBzImgContainer = styled.div`
  text-align: center;
  margin-bottom: 1.3rem;
`;
const MainBzImg = styled.img`
  width: 100%;
  max-width: 300px;
`;
const MainBzContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const ContentP = styled.p``;

const MapContainer = styled.div`
  margin-bottom: 3rem;
`;
const ComeMethodCol = styled.div``;
const ComeMethodTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;
const ComeMethodContent = styled.div`
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const BzSmallTitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #dedede;
  padding-bottom: 0.4rem;
`;

const VOUCHER = "VOUCHER";
const INSURANCE = "INSURANCE";
const EXTENDED_PRODUCT = "EXTENDED_PRODUCT";

const ServiceTargetTable = styled.table`
  width: 100%;
`;

const ServiceTargetTh = styled.th`
  width: 6rem;
`;

const ServiceTargetTr = styled.tr`
  height: 1.6rem;
`;

const PriceTableContainer = styled.div`
  overflow: scroll;
  @media (max-width: 1280px) {
    width: 90vw;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  min-width: 650px;
  text-align: right;
  thead {
    background-color: ${props => props.theme.tableHeadBlue};
    color: white;
  }
  tr,
  th {
    height: 2rem;
  }
  tbody {
    tr:nth-child(2n-1) {
      background-color: ${props => props.theme.tableRowBlue1};
    }
    tr:nth-child(2n) {
      background-color: ${props => props.theme.tableRowBlue2};
    }
  }
`;

const PriceTableText = styled.div`
  padding-right: 1rem;
`;

export default ({ nowPage, onPageClick }) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <TopBannerContainer>
      <TopBanner />
      <TopBannerModal>
        <BannerTitle>EZ life</BannerTitle>
        <BannerSubTitle>
          이지라이프는 삶을 보다 편리하게 만듭니다
        </BannerSubTitle>
      </TopBannerModal>
    </TopBannerContainer>
    <ContentSection>
      <LeftMenu>
        <MenuContainer>
          <MenuMainTitle>회사소개</MenuMainTitle>

          <MenuSubContainer>
            <MenuItem
              fixNumber={VOUCHER}
              getNumber={nowPage}
              onClick={() => onPageClick(VOUCHER)}
            >
              장애인 보조기기 렌탈서비스(바우처)
            </MenuItem>
            <MenuItem
              fixNumber={EXTENDED_PRODUCT}
              getNumber={nowPage}
              onClick={() => onPageClick(EXTENDED_PRODUCT)}
            >
              장애인보장구 급여 확대 품목
            </MenuItem>
            <MenuItem
              fixNumber={INSURANCE}
              getNumber={nowPage}
              onClick={() => onPageClick(INSURANCE)}
            >
              장애인 자세보조용구 보험급여 제도
            </MenuItem>
          </MenuSubContainer>
        </MenuContainer>
      </LeftMenu>
      <RightContentContainer>
        {nowPage === VOUCHER && (
          <>
            <BzIntroTitile>장애인 보조기기 렌탈서비스(바우처)</BzIntroTitile>
            <MainBzCol>
              <MainBzTitle>- 바우처 렌탈 사업</MainBzTitle>
              <MainBzContent>
                <ContentP>
                  “장애인 보조기기 렌탈 서비스”란 지체 및 뇌병변, 척수장애 아동
                  등에게 맞춤형 보조기구를 대여하고 이를 지속 관리함으로써 기구
                  구입에 따른 경제적 부담을 덜고 정상적인 신체발달 지원하기 위한
                  바우처 지원 사업입니다.
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <BzSmallTitle>서비스 대상</BzSmallTitle>
                <ServiceTargetTable>
                  <tbody>
                    <ServiceTargetTr>
                      <ServiceTargetTh>- 소 득 : </ServiceTargetTh>
                      <td>소득기준 없음(단, 지자체에서 우선순위 설정 가능)</td>
                    </ServiceTargetTr>
                    <ServiceTargetTr>
                      <ServiceTargetTh>- 연 령 : </ServiceTargetTh>
                      <td>만 24세 이하의 장애아동 º 청소년 </td>
                    </ServiceTargetTr>
                    <ServiceTargetTr>
                      <ServiceTargetTh>- 기 준 : </ServiceTargetTh>
                      <td>
                        장애판정을 받은 지체 및 뇌병변 장애 아동 및 청소년
                        척수장애 또는 근위축증으로 의사진단서 발급이 가능한 아동
                        및 청소년 (단, 6세 미만의 지체 및 뇌병변 장애가 예견되어
                        동 서비스가 필요하다고 인정한 의사 진단서가 있는 경우
                        인정)
                      </td>
                    </ServiceTargetTr>
                    <ServiceTargetTr>
                      <ServiceTargetTh>- 구비서류 : </ServiceTargetTh>
                      <td>신분증, 건강보험증 사본, 진당서(필요시) </td>
                    </ServiceTargetTr>
                  </tbody>
                </ServiceTargetTable>
              </MainBzContent>
              <MainBzContent>
                <ContentP>
                  ＊ [장애인복지법]상 정신적 장애로 장애 등급판정을 받았더라도
                  지체 및 장애등급 판정을 수반하는 중복 장애인의 경우
                  시,군,구에서 발행하는 “장애인등록증”(부장애 : 지체 및
                  뇌병변장애)을 제출할 경우 서비스 대상자로 인정
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <ContentP>
                  ＊ 정신적 장애 : ① 발달장애(지적장애인, 자폐성장애인 ②
                  정신장애(정신장애인)
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <BzSmallTitle>서비스 제공범위</BzSmallTitle>
                <ContentP>- 전 국(일부 시, 도의 경우 미 시행)</ContentP>
              </MainBzContent>
              <MainBzContent>
                <BzSmallTitle>서비스 가격 및 제공기간</BzSmallTitle>
                <ContentP>
                  - 서비스 가격 : 월 12만원(정부부담 70~90% / 본인 부담 10~30%)
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <PriceTableContainer>
                  <PriceTable>
                    <thead>
                      <tr>
                        <th>
                          <PriceTableText>등급</PriceTableText>
                        </th>
                        <th>
                          <PriceTableText>소득기준</PriceTableText>
                        </th>
                        <th>
                          <PriceTableText>정부부담금(월)</PriceTableText>
                        </th>
                        <th>
                          <PriceTableText>자부담금(월)</PriceTableText>
                        </th>
                        <th>
                          <PriceTableText>자부담금(1년)</PriceTableText>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <PriceTableText>1등급</PriceTableText>
                        </th>
                        <td>
                          <PriceTableText>수급자, 차상위</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>108,000원</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>12,000원</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>144,000원</PriceTableText>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <PriceTableText>2등급</PriceTableText>
                        </th>
                        <td>
                          <PriceTableText>
                            중위소득 140% 이하 중 수급자, 차상위가 아닌 자
                          </PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>96,000원</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>24,000원</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>288,000원</PriceTableText>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <PriceTableText>3등급</PriceTableText>
                        </th>
                        <td>
                          <PriceTableText>중위소득140% 초과</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>84,000원</PriceTableText>
                        </td>
                        <td>
                          <PriceTableText>36,000원</PriceTableText>
                        </td>

                        <td>
                          <PriceTableText>432,000원</PriceTableText>
                        </td>
                      </tr>
                    </tbody>
                  </PriceTable>
                </PriceTableContainer>
              </MainBzContent>
              <MainBzContent>
                - 12개월(1년마다 재신청 . 최대 6년). 단, 신구이용자에게는 대기자
                비율에 따라 시군구에서 재판정 결정 - 장애아동이 2명 이상이 있는
                가구의 경우 본인부담금 한등급씩 하향조정(3등급->2등급,
                2등급->1등급)
              </MainBzContent>
              <MainBzContent>서비스 신청 절차 테이블 삽입</MainBzContent>
            </MainBzCol>
            <MainBzCol>
              <MainBzTitle>- 장애인 보장구 사업</MainBzTitle>
              <MainBzImgContainer>
                <MainBzImg src={"/static/img/bzInfo/hwell.JPG"} />
              </MainBzImgContainer>
              <MainBzContent>
                장애인 보장구는 장애인복지법에 의하여 등록된 장애인인 가입자 및
                피부양자가 보장구를 구입할 경우, 구입금액의 일부를
                국민건강보험공간에서 보험급여지로 지급하는 제도이며, 당사는
                장애인 보장구 제공기관 등록업소로서 해당 사업을 통해 장애인의
                재활을 위해 노력하고 있습니다.
              </MainBzContent>
            </MainBzCol>
          </>
        )}
        {nowPage === EXTENDED_PRODUCT && (
          <>
            <BzIntroTitile>주요사업</BzIntroTitile>

            <MainBzCol>
              <MainBzTitle>- 바우처 렌탈 사업</MainBzTitle>
              <MainBzImgContainer>
                <MainBzImg src={"/static/img/bzInfo/happyCard.JPG"} />
              </MainBzImgContainer>
              <MainBzContent>
                보건복지부 주관 지역사회 서비스 투자 사업인 보조기구 렌탈 사업을
                통해 중증의 장애아동 및 청소년(만 24세)에게 보조기구를 렌탈,
                관리하는 통합서비스를 정부지원을 통해 지원하고 있습니다.
              </MainBzContent>
            </MainBzCol>
            <MainBzCol>
              <MainBzTitle>- 장애인 보장구 사업</MainBzTitle>
              <MainBzImgContainer>
                <MainBzImg src={"/static/img/bzInfo/hwell.JPG"} />
              </MainBzImgContainer>
              <MainBzContent>
                장애인 보장구는 장애인복지법에 의하여 등록된 장애인인 가입자 및
                피부양자가 보장구를 구입할 경우, 구입금액의 일부를
                국민건강보험공간에서 보험급여지로 지급하는 제도이며, 당사는
                장애인 보장구 제공기관 등록업소로서 해당 사업을 통해 장애인의
                재활을 위해 노력하고 있습니다.
              </MainBzContent>
            </MainBzCol>
          </>
        )}
        {nowPage === INSURANCE && (
          <>
            <BzIntroTitile>오시는 길</BzIntroTitile>
            <MapContainer>
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWDZtnTPgzPRY8DqpYqVYJ2pGQMec7gM&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={35.174423}
                lng={129.086854}
              />
            </MapContainer>
            <ComeMethodCol>
              <ComeMethodTitle>- 주소 및 연락처</ComeMethodTitle>
              <ComeMethodContent>
                부산광역시 연제구 연수로 148번지 45 (연산동 2층)
                <br /> TEL. 051-867-4987
                <br /> FAX. 051-867-4988
              </ComeMethodContent>
            </ComeMethodCol>
            <ComeMethodCol>
              <ComeMethodTitle>- 오시는 방법</ComeMethodTitle>
              <ComeMethodContent>
                자동차 : 신리삼거리에서 배산역 가능 방향으로 약 100m 지점에서
                우회전, 약 200m 직진
                <br />
                버스 : 신리삼거리 정류장에서 미곡천로를 따라 약 200m 도보로 이동
              </ComeMethodContent>
            </ComeMethodCol>
          </>
        )}
      </RightContentContainer>
    </ContentSection>
  </>
);
