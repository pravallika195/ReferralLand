import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

function ReferralTable({referrals=[],search,setSearch,sort,setSort}){
    const navigate=useNavigate();
    const [page, setPage] = useState(1);
    useEffect(()=>{
        setPage(1);
    },[search,sort]);
    const rowsPerPage = 10;
    const start = (page - 1) * rowsPerPage;
    const currentRows = referrals.slice(
    start,
    start + rowsPerPage
    );
    console.log(referrals);
    const totalPages=Math.ceil(referrals.length/rowsPerPage);
    return (
  <div className="card referral-table">
    <div className="table-top">
      <h2 className="section-title">
        All Referrals
      </h2>

      <div className="table-controls">
        <input
          className="form-input"
          placeholder="Name or service…"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="form-select"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="desc">
            Newest First
          </option>

          <option value="asc">
            Older First
          </option>
        </select>
      </div>
    </div>

    <table className="referrals-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Service</th>
          <th>Date</th>
          <th>Profit</th>
        </tr>
      </thead>

      <tbody>
        {currentRows.length === 0 ? (
          <tr>
            <td
              className="empty-state"
              colSpan="4"
            >
              No Matching Entries Available
            </td>
          </tr>
        ) : (
          currentRows.map((item) => (
            <tr
              className="table-row"
              key={item.id}
              onClick={() =>
                navigate(`/referral/${item.id}`)
              }
            >
              <td>{item.name}</td>

              <td>{item.serviceName}</td>

              <td>
                {item.date.replaceAll("-", "/")||"N/A"}
              </td>

              <td>
                {new Intl.NumberFormat(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }
                ).format(item.profit)}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>

    <div className="table-footer">
      <p className="table-info">
        Showing {start + 1}–
        {Math.min(
          start + rowsPerPage,
          referrals.length
        )}{" "}
        of {referrals.length} entries
      </p>

      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              className="page-btn"
              key={index + 1}
              onClick={() =>
                setPage(index + 1)
              }
              disabled={page === index + 1}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          className="page-btn"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  </div>
);
}
export default ReferralTable;