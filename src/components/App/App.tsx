import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Header from "../Header";

const App = () => {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <HeroWrapper>
          <AppHeader>Launch. Iterate. Enjoy.</AppHeader>
          <Subheading>Create Something Delightful.</Subheading>
        </HeroWrapper>
      </MaxWidthWrapper>
    </>
  );
};

const HeroWrapper = styled.section`
  text-align: center;
  padding: 32px 0px;
`;

const AppHeader = styled.h1`
  font-size: 4.125rem;
  background-image: linear-gradient(
    90deg,
    hsl(270deg 67% 47%),
    hsl(330deg 100% 50%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
`;

export default App;
