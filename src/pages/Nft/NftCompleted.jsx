import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompletedCheck from "../../components/Svg/Icons/CompletedCheck";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ReloadIcon from "../../components/Svg/Icons/Reload";
import styled from "@emotion/styled";

const ReloadIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewTransctionText = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;

const NftCompleted = () => {
  return (
    <>
      <Header page="homepage" />

      <Box
        sx={{
          padding: "16px",
          height: "372px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "52px",
          }}
        >
          <CompletedCheck width="126px" height="88.54" />
        </Box>

        <ReloadIconText>
          <ReloadIcon
            style={{ paddingRight: "4px" }}
            height="17.5px"
            width="17.43px"
          />
          <NewTransctionText>New Transaction</NewTransctionText>
        </ReloadIconText>

        <Button
          size="fullWidth"
          variant="primary"
          label="View Transaction"
          style={{
            marginBottom: "9px",
          }}
          onClick={() => navigate("/")}
        />
      </Box>
    </>
  );
};

export default NftCompleted;
