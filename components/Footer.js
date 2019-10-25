import styled from "styled-components";
const Footer = styled.footer`
  clear: both;
  padding: 30px 0;
  text-align: center;
  font-size: 13px;
  margin-top: 200px;
`;

const BranchInfoContainer = styled.div``;

const BranchInfoItem = styled.div``;

export default () => (
  <Footer>
    <BranchInfoContainer>
      <BranchInfoItem>
        사업자등록번호 607-20-38358 | 의료기기판매업(임대)신고증 : 15-3
      </BranchInfoItem>
      <BranchInfoItem>
        시력서비스 제공자 등록증 : 2467000000159 | 장애인보장구 업소 등록증:
        D2600034600000
      </BranchInfoItem>
      <BranchInfoItem>
        주소 : 부산광역시 연제구 연수로 148번길 45(연산동 2층)
      </BranchInfoItem>
      <BranchInfoItem>
        TEL : 051-867-4987 | FAX : 051-867-4988 | E-mail : juoh3325@hanmail.net
      </BranchInfoItem>
      <BranchInfoItem>Copyright EZ life</BranchInfoItem>
    </BranchInfoContainer>
  </Footer>
);
