import { Link } from "react-router-dom";
import styled from "styled-components";
import Mode from "./Mode";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  align-items: center;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 35px;
`;
const Tab = styled.div`
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.iconHoverColor};
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Tabs>
        <Tab>
          <Link to={"/"}>Home</Link>
        </Tab>
        <Tab>
          <Link to={"/about"}>About</Link>
        </Tab>
      </Tabs>
      <Mode />
    </HeaderContainer>
  );
}
export default Header;
