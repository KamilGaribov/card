import styled from "styled-components";
import { Link } from "react-router-dom";
import { Transaction } from "../pages/transaction";

const TableContainer = styled.div`
  width: ${(props) =>
    props.columns.map((item) => item.width).reduce((a, b) => a + b) + "px"};
  height: auto;
  position: relative;
  margin: auto;
  background: aqua;
  & > table {
    width: 100%;
  }
  & > tr {
    width: 100%;
    height: 30px;
  }
  & thead {
    width: 100%;
    background: red !important;
  }
  & thead tr {
    justify-items: start;
  }
  & thead tr,
  & tbody tr {
    display: grid;
    grid-template-columns: ${(props) =>
      props.columns.map((item) => item.width).join("px ") + "px"};
  }
  & tbody tr:hover {
    background: aquamarine !important;
  }
  & > button {
    position: absolute;
    top: 0;
    right: -80px;
    width: 80px;
  }
  & input {
    width: 100%;
  }
  & #card-id:hover {
    background: blue;
  }
`;

export const Table = ({
  data,
  query,
  handleChange,
  deleteFilter,
  columns,
  page,
}) => {
  const CardBody = (item) => {
    return (
      <Link to={`${item.id}`}>
        <tr>
          <td>{item.id}</td>
          <td>{item.account}</td>
          <td>{item.masked}</td>
          <td>{item.expire}</td>
          <td>{item.currency}</td>
          <td>{item.status}</td>
          <td>{item.balance}</td>
        </tr>
      </Link>
    );
  };
  const TransactionBody = (item) => {
    return (
      <Link to={`/transaction/${item.id}`}>
        <tr>
          <td>{item.id}</td>
          <td>{item.card.account}</td>
          <td id="card-id">
            <Link to={`/card/${item.card.id}`}>{item.card.id}</Link>
          </td>
          <td>{item.amount}</td>
          <td>{item.card.currency}</td>
          <td>{item.date.slice(0, 10)}</td>
          <td>{item.merchant}</td>
        </tr>
      </Link>
    );
  };
  const setDefaultValue = (name, query) => {
    if (!query) {
      return "";
    }
    let value = "";
    query.split("&").map((item, i) => {
      if (item.split("=")[0] == name) {
        value = item.split("=")[1];
        return value;
      }
    });
    return value;
  };
  return (
    <TableContainer columns={columns}>
      <table>
        <thead>
          <tr>
            {columns.map((item, i) => {
              return (
                <th key={i}>
                  {item.options.length == 0 ? (
                    <input
                      name={item.title}
                      placeholder={item.title}
                      onChange={(e) => handleChange(e)}
                      value={setDefaultValue(item.title, query)}
                      disabled={item.disabled}
                      type={item.type}
                    />
                  ) : (
                    <select
                      name={item.title}
                      onChange={(e) => handleChange(e)}
                      value={setDefaultValue(item.title, query)}
                      disabled={item.disabled}
                    >
                      <option value="null">{item.title}</option>
                      {item.options.map((opt, j) => {
                        return (
                          <option key={j} value={opt}>
                            {opt}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return page == "card" ? (
              <CardBody key={i} {...item} />
            ) : (
              <TransactionBody key={i} {...item} />
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={() => deleteFilter()}>
        del filter
      </button>
    </TableContainer>
  );
};

export default Table;
