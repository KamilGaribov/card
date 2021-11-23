import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import CardID from "./id";
import { apiUrl, perPage } from "../../constants";
import { getCards } from "../../api";
import { Pagination } from "../../components/pagination";
import { Table } from "../../components/table";
import { useSelector, useDispatch } from "react-redux";
import { updateBreadcrumbs } from "../../redux/actions";

export function CardIndex(params) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCards().then((data) => setData(data));
  }, []);
  const handleSetPage = (p) => {
    setPage(p);
    getCards(p, query).then((data) => setData(data));
  };
  const paginationProps = {
    page,
    setPage: handleSetPage,
    pageCount: Math.ceil(data.count / perPage),
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newQuery = query + "&" + name + "=" + value;
    setQuery(newQuery);
    setPage(1);
    getCards(1, newQuery).then((data) => setData(data));
  };
  const deleteFilter = () => {
    setQuery("");
    setPage(1);
    getCards().then((data) => setData(data));
  };
  const columns = [
    { title: "id", width: 30, options: [], disabled: true },
    { title: "account", width: 140, options: [], disabled: false },
    { title: "masked", width: 100, options: [], disabled: true },
    { title: "expire", width: 100, options: [], disabled: true },
    {
      title: "currency",
      width: 100,
      options: ["AZN", "USD", "EUR"],
      disabled: false,
    },
    {
      title: "status",
      width: 100,
      options: ["active", "blocked"],
      disabled: false,
    },
    { title: "balance", width: 100, options: [], disabled: true },
  ];
  return (
    <div>
      <h1>Card home</h1>
      {data.results ? (
        <Table
          data={data.results}
          query={query}
          handleChange={handleChange}
          deleteFilter={deleteFilter}
          columns={columns}
          page={"card"}
        />
      ) : null}
      <Pagination {...paginationProps} />
    </div>
  );
}

export function Card(props) {
  return (
    <Routes>
      <Route path="/" element={<CardIndex />} />
      <Route path=":id" element={<CardID />} />
    </Routes>
  );
}

const cards = [
  {
    id: 1,
    account: "123456789",
    masked: 123,
    expire: "11/22",
    currency: "AZN",
    status: "active",
    balance: 712,
  },
  {
    id: 2,
    account: "544888756",
    masked: 123,
    expire: "11/22",
    currency: "AZN",
    status: "active",
    balance: 712,
  },
  {
    id: 3,
    account: "999123755",
    masked: 123,
    expire: "11/22",
    currency: "AZN",
    status: "active",
    balance: 712,
  },
];
