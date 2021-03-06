import Head from "next/head";
import styled from "styled-components";
import Map from "../../components/Map";
import { FaArrowCircleRight } from "react-icons/fa";

const TopBannerContainer = styled.div`
  padding-top: 130px;
  width: 100vw;
`;

const TopBanner = styled.div`
  background-image: url("/static/img/etc/computer-1149148_1920.jpg");
  height: 170px;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
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
  max-width: 1280px;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5); /*살짝 투명한 검정으로 배경색*/
  padding-top: 60px;
`;

const ContentSection = styled.div`
  text-align: left;
  margin-top: 3rem;
  display: table;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
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
const ContentP = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

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
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1280px) {
    width: 90vw;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  min-width: 700px;
  text-align: center;
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

const ServiceStepContainer = styled.div`
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  @media (max-width: 1280px) {
    width: 90vw;
  }
`;
const ServiceStepContainTable = styled.table`
  width: 100%;
  min-width: 700px;
  overflow: scroll;
  td {
    text-align: center;
  }
`;

const ServiceStepTable = styled.table`
  text-align: center;
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
  thead {
    background-color: #5b7dbe;
    color: white;
    tr {
      height: 2rem;
      vertical-align: middle;
    }
  }
  tbody {
    margin-top: 10rem;
    tr {
      height: 2rem;
      &:nth-child(2n-1) {
        background-color: ${props => props.theme.tableRowBlue1};
      }
      &:nth-child(2n) {
        background-color: ${props => props.theme.tableRowBlue2};
      }
    }
  }
`;

const ExtendedPdTable = styled.table`
  width: 100%;
  min-width: 900px;
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

const UsageContentContainer = styled.div`
  display: inline-block;
  text-align: left;
  padding-left: 2rem;
  width: 90%;
`;

const ExtPdTableText = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`;

const ExtPdTableContainer = styled.div`
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1280px) {
    width: 90vw;
  }
`;

const ExtPdTd = styled.td`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const InsuraceTypeTableContainer = styled.div`
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1280px) {
    width: 90vw;
  }
`;

const InsuraceTypeTable = styled.table`
  width: 100%;
  min-width: 700px;
  text-align: right;
  thead {
    background-color: ${props => props.theme.tableHeadBlue};
    color: white;
  }
  tr,
  th {
    height: 2rem;
    text-align: center;
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

const StandardContent = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: inline-block;
  text-align: left;
  padding-left: 2rem;
  width: 90%;
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
              장애인 보조기기 렌탈서비스
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
                <ContentP>
                  - 12개월(1년마다 재신청 . 최대 6년). 단, 신구이용자에게는
                  대기자 비율에 따라 시군구에서 재판정 결정
                </ContentP>
                <ContentP>
                  - 장애아동이 2명 이상이 있는 가구의 경우 본인부담금 한등급씩
                  하향조정(3등급->2등급, 2등급->1등급)
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <BzSmallTitle>서비스 신청절차</BzSmallTitle>

                <ServiceStepContainer>
                  <ServiceStepContainTable>
                    <tbody>
                      <tr>
                        <td>
                          <ServiceStepTable>
                            <thead>
                              <tr>
                                <td>신청 및 접수</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>대상자 주민센터</td>
                              </tr>
                              <tr>
                                <td>읍, 면, 동 주민센터</td>
                              </tr>
                            </tbody>
                          </ServiceStepTable>
                        </td>
                        <td>
                          <FaArrowCircleRight color={"#5b7dbe"} />
                        </td>
                        <td>
                          <ServiceStepTable>
                            <thead>
                              <tr>
                                <td>상담 및 소득조사</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>대상자 주민센터</td>
                              </tr>
                              <tr>
                                <td>읍, 면, 동 주민센터</td>
                              </tr>
                            </tbody>
                          </ServiceStepTable>
                        </td>
                        <td>
                          <FaArrowCircleRight color={"#5b7dbe"} />
                        </td>
                        <td>
                          <ServiceStepTable>
                            <thead>
                              <tr>
                                <td>선정 및 통지</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>대상자 시, 군, 구</td>
                              </tr>
                              <tr>
                                <td>시, 군, 구 해당 소재지</td>
                              </tr>
                            </tbody>
                          </ServiceStepTable>
                        </td>
                        <td>
                          <FaArrowCircleRight color={"#5b7dbe"} />
                        </td>
                        <td>
                          <ServiceStepTable>
                            <thead>
                              <tr>
                                <td>바우처 카드 수령</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>대상자 보건 복지 개발원</td>
                              </tr>
                              <tr>
                                <td>시, 군, 구 해당 소재지</td>
                              </tr>
                            </tbody>
                          </ServiceStepTable>
                        </td>
                        <td>
                          <FaArrowCircleRight color={"#5b7dbe"} />
                        </td>
                        <td>
                          <ServiceStepTable>
                            <thead>
                              <tr>
                                <td>계약 체결</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>대상자 제공기관</td>
                              </tr>
                              <tr>
                                <td>제공기관 등록업소</td>
                              </tr>
                            </tbody>
                          </ServiceStepTable>
                        </td>
                      </tr>
                    </tbody>
                  </ServiceStepContainTable>
                </ServiceStepContainer>
              </MainBzContent>
            </MainBzCol>
          </>
        )}
        {nowPage === EXTENDED_PRODUCT && (
          <>
            <BzIntroTitile>장애인 보장구 급여 확대 품목 </BzIntroTitile>

            <MainBzCol>
              <MainBzContent>
                <ContentP>
                  장애인복지법에 따라 등록된 장애인 가입자 및 피부양자가 보장구
                  구입 당시의 기준액, 고시금액, 실구입금액 중 최저 금액의
                  90%(수급자 기준액의 100%) 금액을 지원해주는 제도
                </ContentP>
              </MainBzContent>
            </MainBzCol>
            <MainBzCol>
              <ExtPdTableContainer>
                <ExtendedPdTable>
                  <thead>
                    <tr>
                      <ExtPdTd width={130}>
                        <ExtPdTableText>품목</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd width={100}>
                        <ExtPdTableText>장애유형</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd width={390}>
                        <ExtPdTableText>
                          용도 및 대상자 세부 안정 기준
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>기준액(원)</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd width={100}>
                        <ExtPdTableText>내구현한</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>사진</ExtPdTableText>
                      </ExtPdTd>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          욕창 예방
                          <br />
                          매트리스
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          지체장애
                          <br />
                          뇌병변장애
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            1. 장애의 정도가 심한 지체‧뇌병변 장애인
                            <br />
                            2. 신경손상, 근 약화 등으로 스스로 체위 변환을 할 수
                            없어 욕창 발생 가능성이 있을 것<br /> 3.
                            수정바델지수(MBI) 점수가 53점 이하 또는 두 다리에
                            대한 맨손근력검사 결과가 각각 0~2등급일 것, 단 종전
                            지체‧뇌병변 1‧2급 장애인으로 확인되는 경우 동 기준
                            적용 제외
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>400,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>3년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={
                            "/static/img/extendedProduct/수동휠체어(일반형).png"
                          }
                        />
                      </ExtPdTd>
                    </tr>
                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          욕창 예방
                          <br />
                          방석
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          지체장애
                          <br />
                          뇌병변장애
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            1.전동‧수동휠체어 급여대상자
                            <br />
                            2.신경손상, 근 약화 등으로 스스로 체위 변환을 할 수
                            없거나, 하반신 기능상실 등으로 욕창발생 가능성이
                            있을 것
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>250,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>3년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={"/static/img/extendedProduct/욕창예방방석.png"}
                        />
                      </ExtPdTd>
                    </tr>
                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          이동식
                          <br />
                          전동리프트
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          지체장애
                          <br />
                          뇌병변장애
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            1. 장애의 정도가 심한 지체‧뇌병변 장애인
                            <br />
                            2. 수정바델지수(MBI) 점수 중 의자/침대 이동 항목의
                            점수가 3점이하일 것<br />
                            3. 수정바델지수(MBI) 점수가 32점 이하 또는 두 다리에
                            대한 맨손근력검사 결과가 각각 0~1등급일 것, 단 종전
                            지체‧뇌병변 1급 장애인으로 확인되는 경우 동 기준
                            적용 제외
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>2,500,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>5년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={
                            "/static/img/extendedProduct/이동식전동리프트.png"
                          }
                        />
                      </ExtPdTd>
                    </tr>
                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          후방
                          <br />
                          지지 워커
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>뇌병변장애</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            1. 뇌성마비로 인한 뇌병변장애인
                            <br />
                            2. 상지의 보조로 보행이 가능
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>300,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>3년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={"/static/img/extendedProduct/후방지지워커.png"}
                        />
                      </ExtPdTd>
                    </tr>

                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          수동휠체어
                          <br />
                          (일반형)
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          지체장애
                          <br />
                          뇌병변장애
                          <br />
                          심장장애
                          <br />
                          호흡기장애
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            의자, 보조기, 지팡이 등 다른 보장구를 사용해서도
                            실외보행이 곤란한 경우
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>480,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>5년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={
                            "/static/img/extendedProduct/수동휠체어(일반형).png"
                          }
                        />
                      </ExtPdTd>
                    </tr>

                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          수동휠체어
                          <br />
                          (틸팅형
                          <br />
                          /리클라이닝형)
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          지체장애
                          <br />
                          뇌병변장애
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            다음 각 호의 요건을 모두 충족하는 사람
                            <br />
                            1. 일반휠체어 급여 대상에 해당하는 자 중 장애의
                            정도가 심한 지체 또는 뇌병변장애인
                            <br />
                            2. 스스로 앉기가 어렵고, 기대지 않고는 독립적으로
                            앉는 자세를 유지하지 못하여 압박과 자세관리가 필요할
                            것
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>800,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>5년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={
                            "/static/img/extendedProduct/수동휠체어(틸팅형, 리클라이닝형).png"
                          }
                        />
                      </ExtPdTd>
                    </tr>

                    <tr>
                      <ExtPdTd>
                        <ExtPdTableText>
                          수동휠체어
                          <br />
                          (활동형)
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>지체장애</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>
                          <UsageContentContainer>
                            양팔 및 자세균형 제어 기능이 양호하여 다른 사람의
                            도움 없이 휠체어를 안전하게 작동할 수 있는 경우
                          </UsageContentContainer>
                        </ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>1,000,000</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd>
                        <ExtPdTableText>5년</ExtPdTableText>
                      </ExtPdTd>
                      <ExtPdTd style={{ textAlign: "center" }}>
                        <img
                          src={
                            "/static/img/extendedProduct/수동휠체어(활동형).png"
                          }
                        />
                      </ExtPdTd>
                    </tr>
                  </tbody>
                </ExtendedPdTable>
              </ExtPdTableContainer>
            </MainBzCol>
          </>
        )}
        {nowPage === INSURANCE && (
          <>
            <BzIntroTitile>장애인 자세보조용구 보험급여 제도</BzIntroTitile>

            <MainBzCol>
              <MainBzContent>
                <ContentP>
                  “장애인 자세보조용구 보험급여 제도”란 장애인복지법에 따라
                  등록된 장애인인 가입자 및 피부양자가 자세보조용구를 구입할
                  경우, 구입금액 일부를 국민건강보험공단에서 보험급여비로
                  지급하는 제도를 말합니다.
                </ContentP>
              </MainBzContent>
              <MainBzContent>
                <BzSmallTitle>1. 서비스 대상</BzSmallTitle>
              </MainBzContent>
              <MainBzContent>
                <ContentP>
                  장애의 정도가 심한 뇌병변장애 또는 지체장애로 스스로 앉기가
                  어렵고, 기대지 않고는 독립적으로 앉은 자세를 유지하지 못하는
                  사람으로서 아래의 기준을 충족하는 사람에 대하여 실시
                </ContentP>
              </MainBzContent>
              <InsuraceTypeTableContainer>
                <InsuraceTypeTable>
                  <thead>
                    <tr>
                      <th width={100} rowSpan="2">
                        장애유형
                      </th>
                      <th>세부인정기준</th>
                    </tr>
                    <tr>
                      <th width={500}>
                        해당검사 및 결과 (검사비용은 건강보험 적용)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        뇌병변장애
                        <br />
                        심한 장애
                      </th>
                      <td rowSpan="2">
                        <StandardContent>
                          다음 각 호의 어느 하나의 요건을 충족하는 사람
                          <br />
                          1. 큰 동작 기능분류 체계(GMFCS) : 4~5등급
                          <br />
                          - 신경학적 검사(일반)
                          <br />
                          - 검사 분류번호 [나 610가]
                          <br />
                          - 앉은 자세의 일반적인 사진 촬영(휴대폰 카메라 수준)
                          <br />
                          <br />
                          2. 도수근력 검사 : 하지 0-2등급
                          <br />
                          - 도수근력 평가(전신 MMT)
                          <br />
                          - 검사 분류번호 [나 661나]
                          <br />
                          - 양하지 중 낮은 등급 적용
                          <br />- 목 근력 검사 포함
                          <br />
                          <br />
                          3. 영상의학적 검사 : 하나 이상
                          <br />① 코브(Cobb’s) 각도 : 20도 이상(척추측만 검사)
                          <br />
                          ② 척추전후만 각도 : 50도 이상(척추전만 또는 후만 검사)
                          ③ 엉덩이관절이동지수(Hip Migration Index) : 30%
                          이상(고관절 탈구 검사)
                          <br />
                          - 척추 방사선 검사
                          <br />
                          - 검사분류번호 [다149가] [다151나]
                          <br />
                          - Whole spine AP, lateral
                          <br />
                          (우선 supine에서, 필요 시 sitting에게 다시)
                          <br />- 필요 시 hip AP & lateral, C-spine AP & lateral
                          추가
                        </StandardContent>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        지체장애
                        <br />
                        심한 장애
                      </th>
                    </tr>
                  </tbody>
                </InsuraceTypeTable>
              </InsuraceTypeTableContainer>
              <MainBzContent>
                <BzSmallTitle>2. 보험급여 품목 및 기준액 내구현한</BzSmallTitle>
              </MainBzContent>
              <MainBzContent>
                <ContentP>
                  - 지급기준은 구성품별로 기준액이 별도 적용 구입 당시 기준액,
                  고시금액, 실구입금액 중 최저금액의
                  <span style={{ color: "red" }}>
                    90%금액을 지원 (소득 수준에 따라 90~100% 까지 지원가능)
                  </span>
                </ContentP>
              </MainBzContent>

              <PriceTableContainer>
                <PriceTable>
                  <thead>
                    <tr>
                      <th>
                        <PriceTableText>구분</PriceTableText>
                      </th>
                      <th>
                        <PriceTableText>기준액(원)</PriceTableText>
                      </th>
                      <th>
                        <PriceTableText>이지라이프 고시액(원)</PriceTableText>
                      </th>
                      <th>
                        <PriceTableText>내구연한</PriceTableText>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <PriceTableText>목통 및 골반지지대</PriceTableText>
                      </th>
                      <td>
                        <PriceTableText>880,000</PriceTableText>
                      </td>
                      <td>
                        <PriceTableText>883,000</PriceTableText>
                      </td>
                      <td rowSpan="4" style={{ textAlign: "center" }}>
                        3년
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <PriceTableText>머리 및 목지지대</PriceTableText>
                      </th>
                      <td>
                        <PriceTableText>210,000</PriceTableText>
                      </td>
                      <td>
                        <PriceTableText>233,000</PriceTableText>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <PriceTableText>팔지지대 및 랩트레이</PriceTableText>
                      </th>
                      <td>
                        <PriceTableText>170,000</PriceTableText>
                      </td>
                      <td>
                        <PriceTableText>240,000</PriceTableText>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <PriceTableText>다리 및 발지지대</PriceTableText>
                      </th>
                      <td>
                        <PriceTableText>240,000</PriceTableText>
                      </td>
                      <td>
                        <PriceTableText>243,000</PriceTableText>
                      </td>
                    </tr>
                  </tbody>
                </PriceTable>
              </PriceTableContainer>

              <MainBzContent>
                <BzSmallTitle>3. 자세보조용구 급여절차</BzSmallTitle>
              </MainBzContent>

              <ServiceStepContainer>
                <ServiceStepContainTable>
                  <tbody>
                    <tr>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>진료</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>수급자</td>
                            </tr>
                            <tr>
                              <td>적합여부 검사</td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>처방</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>의사</td>
                            </tr>
                            <tr>
                              <td>
                                적합시 보장구
                                <br />
                                처방전 발행
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>급여결정 신청</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>수급자</td>
                            </tr>
                            <tr>
                              <td>
                                보장구처방전
                                <br />
                                첨부하여 신청
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>급여결정 통보</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>공단</td>
                            </tr>
                            <tr>
                              <td>
                                적합시 급여
                                <br />
                                승인 통보
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                    </tr>
                  </tbody>
                </ServiceStepContainTable>
                <div style={{ marginTop: "1rem", marginBottom: "1rem" }} />

                <ServiceStepContainTable>
                  <tbody>
                    <tr>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>구입</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>수급자</td>
                            </tr>
                            <tr>
                              <td>
                                등록된 업소
                                <br />
                                등록품목
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>검수 확인</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>업체 → 의사</td>
                            </tr>
                            <tr>
                              <td>
                                처방내용 등
                                <br />
                                적합여부판정
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>급여비 청구</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>수급자</td>
                            </tr>
                            <tr>
                              <td>
                                세금계산서 첨부하여
                                <br />
                                공단or주민센터 청구
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                      <td>
                        <FaArrowCircleRight color={"#5b7dbe"} />
                      </td>
                      <td>
                        <ServiceStepTable>
                          <thead>
                            <tr>
                              <td>급여비 지급</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>공단</td>
                            </tr>
                            <tr>
                              <td>
                                지금기준에 <br />
                                맞게 지급
                              </td>
                            </tr>
                          </tbody>
                        </ServiceStepTable>
                      </td>
                    </tr>
                  </tbody>
                </ServiceStepContainTable>
              </ServiceStepContainer>
            </MainBzCol>
          </>
        )}
      </RightContentContainer>
    </ContentSection>
  </>
);
