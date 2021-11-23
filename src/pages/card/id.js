import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getCard } from "../../api";
import Table from "../../components/table";
import { columns } from "../transaction";
import { perPage } from "../../constants";
import { getTransactions } from "../../api";
import { Pagination } from "../../components/pagination";

export function CardID() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getCard(id).then((data) => setData(data));
  }, []);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(`&card=${id}`);
  const handleSetPage = (p) => {
    setPage(p);
    getTransactions(p, query).then((data) => setData(data));
  };
  const paginationProps = {
    page,
    setPage: handleSetPage,
    pageCount: Math.ceil(data?.transaction.count / perPage),
  };
  const handleChange = (e) => {
    setTab(false)
    let name = e.target.name;
    let value = e.target.value;
    let newQuery = query + "&" + name + "=" + value;
    setQuery(newQuery);
    setPage(1);
    getTransactions(1, newQuery).then((res) => {
      data.transaction = res;
      setData(data);
      setTab(true)
    });
  };
  const deleteFilter = () => {
    setTab(false)
    setQuery(`&card=${id}`);
    setPage(1);
    getTransactions(1, query).then((res) => {
      console.log("data.tr: ", data);
      data.transaction = res;
      setData(data);
      setTab(true)
    });
  };
  columns.map((item) =>
    item.title == "card.id" ? (item.disabled = true) : null
  );
  const [tab, setTab] = useState(true);
  return (
    <div>
      {data ? (
        <>
          <div>
            <div>ID: {id}</div>
            <div>Account: {data.account}</div>
            <div>Masked: {data.masked}</div>
            <div>Expire: {data.expire}</div>
            <div>Currency: {data.currency}</div>
            <div>Status: {data.status}</div>
            <div>Balance: {data.balance}</div>
          </div>
          {tab ? (
            <Table
              data={data.transaction.results}
              columns={columns}
              query={query}
              handleChange={handleChange}
              deleteFilter={deleteFilter}
              page={"transaction"}
            />
          ) : null}
          <Pagination {...paginationProps} />
        </>
      ) : null}
    </div>
  );
}

export default CardID;
