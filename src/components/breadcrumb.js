import styled from "styled-components";
import { Transaction } from "../pages/transaction";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { updateBreadcrumbs } from "../redux/actions";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BCContainer = styled.div`
  width: 100%;
  height: 50px;
  background: blue;
`;

export const Breadcrumb = () => {
  let location = useLocation();
  return <BCContainer>{location.pathname}</BCContainer>;
};
export default Breadcrumb;
