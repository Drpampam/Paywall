import { Span } from "app/components/atoms/typography";
import styled, { css } from "styled-components";

const subColor = "#fe9900";

const activeStyle = css`
  background: ${subColor};
`;

export const ProfileDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 2rem;
  border-radius: 3px;
  cursor: pointer;

  img {
    display: inline-block;
    background: #d9d9d9;
    height: 2.5rem;
    vertical-align: middle;
    margin-right: 1rem;
    margin: 0.5rem 0.75rem 0.5rem 0.5rem;
    border-radius: 50%;

    ${({ active }) => active && activeStyle};
  }

  span {
    display: inline-block;
    vertical-align: sub;
    width: 125px;
    margin-right: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 4rem auto 2rem;
`;

export const UserName = styled(Span)`
  margin-right: 1rem;
`;

export const BarStyle = styled.div`
  font-size: 1.3rem;
  vertical-align: middle;
  margin: 0 0.75rem 0 -0.25rem;
  cursor: pointer;
`;
