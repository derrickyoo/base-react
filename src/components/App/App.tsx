import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";

const App = () => {
  return (
    <>
      <MaxWidthWrapper>
        <AppHeader>Base React App</AppHeader>
        <Subheading>Gradients, so hot right now.</Subheading>
      </MaxWidthWrapper>
    </>
  );
};

const AppHeader = styled.h1`
  font-size: 4rem;
  background-image: linear-gradient(
    90deg,
    hsl(47deg 95% 57%),
    hsl(0deg 100% 65%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
`;

export default App;
