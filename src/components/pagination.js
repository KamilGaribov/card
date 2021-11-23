import styled from "styled-components";
import { perPage } from "../constants";

const PaginationContainer = styled.div`
  background: red;
  width: 670px;
  margin: 10px auto;
`;

const PaginationItem = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.active ? "aqua" : "wheat")};
  color: black;
  margin: 0 10px 10px 0;
  float: left;
  display: grid;
  align-content: center;
  justify-content: center;
  cursor: pointer;
`;

export const Pagination = ({ page, setPage, pageCount, perPage }) => {
  return (
    <PaginationContainer>
      {Array.from({ length: pageCount }).map((item, i) => {
        return (
          <PaginationItem
            onClick={() => setPage(i + 1)}
            key={i}
            active={i + 1 == page ? true : false}
          >
            {i + 1}
          </PaginationItem>
        );
      })}
    </PaginationContainer>
  );
};
