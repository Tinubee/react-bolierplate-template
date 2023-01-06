import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";

const ModeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  align-items: center;
  div:hover,
  a:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.iconHoverColor};
  }
  a {
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.5s;
  }
  svg {
    font-size: 25px;
    color: ${(props) => props.theme.textColor};
    transition: color 0.5s;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Mode() {
  const modeDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!modeDark));
  };
  return (
    <ModeContainer>
      {!modeDark ? (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      ) : (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
      )}
      <Link to={"/login"}>Login</Link>
    </ModeContainer>
  );
}

export default Mode;
