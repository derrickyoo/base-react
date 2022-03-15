import styled from "styled-components/macro";
import { FaRocket } from "react-icons/fa";

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Branding>
          <BrandIcon />
          <BrandName>Base React App</BrandName>
        </Branding>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-size: 1.75rem;
  text-decoration: none;
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
`;

const BrandIcon = styled(FaRocket)`
  margin: 0 8px;
`;

const BrandName = styled.p`
  font-size: inherit;
`;

export default Logo;
