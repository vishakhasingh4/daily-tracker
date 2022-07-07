import React from "react";
import * as S from "./Header.style";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.StyledHeader>Daily tracker</S.StyledHeader>
      <S.AccountDetails>
        <p>Account Name</p>
        <span>
          <ExpandMoreOutlinedIcon />
        </span>
      </S.AccountDetails>
    </S.Container>
  );
};

export default Header;
