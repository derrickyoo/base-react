import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";

const Header = () => {
  return (
    <Wrapper>
      <Row>
        <Logo />
        <nav aria-label="Main menu">
          <NavList>
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="/">About</Link>
            </NavItem>
            <NavItem>
              <Link href="/">Contact</Link>
            </NavItem>
          </NavList>
        </nav>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--color-gray-100);
  box-shadow: var(--shadow-elevation-low);
  padding: 16px 0;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
`;

const NavItem = styled.li``;

const Link = styled.a`
  text-decoration: none;
`;

export default Header;
