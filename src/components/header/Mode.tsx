import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";
import { Tab } from "./Header";

const ModeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  div:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.iconbgColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.5s, color 0.5s;
    svg {
      color: ${(props) => props.theme.textColor};
    }
  }
  svg {
    font-size: 25px;
    color: ${(props) => props.theme.icontextColor};
    transition: color 0.5s;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 25px;
`;

function Mode() {
  const [darkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!darkAtom));
  };

  return (
    <ModeContainer>
      {!darkAtom ? (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      ) : (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
      )}
      <Tab>
        <Link to={"/login"}>Login</Link>
      </Tab>
    </ModeContainer>
  );
}

export default Mode;
