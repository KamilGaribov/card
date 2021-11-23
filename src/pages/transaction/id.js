import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getTransaction } from "../../api";
import Table from "../../components/table";

export function TransactionID() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getTransaction(id).then((data) => setData(data));
    console.log(data);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <div>ID: {id}</div>
          <div>Card account: {data.card.account}</div>
          <div>
            Card ID:
            <Link to={`/card/${data.card.id}`}>{data.card.id}</Link>
          </div>
          <div>Amount: {data.amount}</div>
          <div>Currency: {data.card.currency}</div>
          <div>Date: {data.date}</div>
          <div>Merchant: {data.merchant}</div>
        </div>
      ) : null}
    </div>
  );
}

export default TransactionID;
