/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive === "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
`;
