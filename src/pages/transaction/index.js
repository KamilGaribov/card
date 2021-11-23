import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import TransactionID from "./id";
import { apiUrl, perPage } from "../../constants";
import { getTransactions } from "../../api";
import { Pagination } from "../../components/pagination";
import Table from "../../components/table";

export const columns = [
  { title: "id", width: 30, options: [], disabled: true, type: "type" },
  {
    title: "card.account",
    width: 140,
    options: [],
    disabled: true,
    type: "type",
  },
  { title: "card.id", width: 50, options: [], disabled: false, type: "type" },
  {
    title: "amount",
    width: 100,
    options: [],
    disabled: false,
    type: "checkbox",
  },
  {
    title: "currency",
    width: 80,
    options: ["AZN", "USD", "EUR"],
    disabled: false,
    type: "type",
  },
  {
    title: "date",
    width: 100,
    options: ["active", "blocked"],
    disabled: true,
    type: "type",
  },
  { title: "merchant", width: 150, options: [], disabled: false, type: "type" },
];

export function TransactionIndex(params) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getTransactions().then((data) => setData(data));
  }, []);
  const handleSetPage = (p) => {
    setPage(p);
    getTransactions(p, query).then((data) => setData(data));
  };
  const paginationProps = {
    page,
    setPage: handleSetPage,
    pageCount: Math.ceil(data?.count / perPage),
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newQuery = query + "&" + name + "=" + value;
    setQuery(newQuery);
    setPage(1);
    getTransactions(1, newQuery).then((data) => setData(data));
  };
  const deleteFilter = () => {
    setQuery("");
    setPage(1);
    getTransactions().then((data) => setData(data));
  };
  return (
    <div>
      <h1>Transaction home</h1>
      {data?.results ? (
        <Table
          data={data.results}
          columns={columns}
          query={query}
          handleChange={handleChange}
          deleteFilter={deleteFilter}
          page={"transaction"}
        />
      ) : null}
      <Pagination {...paginationProps} />
    </div>
  );
}

export function Transaction(props) {
  return (
    <Routes>
      <Route path="/" element={<TransactionIndex />} />
      <Route path=":id" element={<TransactionID />} />
    </Routes>
  );
}
