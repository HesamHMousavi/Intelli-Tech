import React, { useState, useMemo } from "react";
import "./Transactions.css";
import Dash from "../Dash/Dash";
import { HiDownload } from "react-icons/hi";

const Transactions = () => {
  const transactionsData = Array.from({ length: 100 }, (_, index) => ({
    customerId: `C00${(index % 6) + 1}`,
    transactionId: `T12${index + 1}`,
    date: `2024-01-${(index % 30) + 1}`.padStart(10, "0"),
    products: [
      "Phone Case",
      "Charger",
      "Screen Protector",
      "Earbuds",
      "Wireless Charger",
    ][index % 5],
    paymentId: `P99${index}`,
    amount: (Math.floor(Math.random() * 90) + 10).toFixed(2),
    status: ["success", "pending", "failed"][index % 3],
  }));

  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    product: "",
    minAmount: "",
    maxAmount: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [inputPage, setInputPage] = useState("");

  const handleFilterChange = (e) => {
    setCurrentPage(1);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (e) => {
    setInputPage(e.target.value);
  };

  const goToPage = () => {
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
    setInputPage("");
  };

  const productOptions = useMemo(() => {
    return ["", ...new Set(transactionsData.map((txn) => txn.products))];
  }, [transactionsData]);

  const filteredTransactions = transactionsData.filter((txn) => {
    return (
      (!filters.dateFrom || txn.date >= filters.dateFrom) &&
      (!filters.dateTo || txn.date <= filters.dateTo) &&
      (!filters.product || txn.products === filters.product) &&
      (!filters.minAmount || txn.amount >= parseFloat(filters.minAmount)) &&
      (!filters.maxAmount || txn.amount <= parseFloat(filters.maxAmount))
    );
  });

  const totalPages = Math.ceil(filteredTransactions.length / recordsPerPage);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="flex">
      <Dash />
      <div className="scroll">
        <div className="fixed-pos head">
          <h3 className="h3-mid mgb-2">Transactions</h3>
          <div className="filters mgb-2">
            <div className="date-filter">
              <label className="h5-mid mgr-1">From</label>
              <input
                type="date"
                name="dateFrom"
                value={filters.dateFrom}
                onChange={handleFilterChange}
                className="mgr-2"
              />
              <label className="h5-mid mgr-1">To</label>
              <input
                type="date"
                name="dateTo"
                value={filters.dateTo}
                onChange={handleFilterChange}
                className="mgr-1"
              />
            </div>
            <select
              name="product"
              value={filters.product}
              onChange={handleFilterChange}
              className="mgr-1"
            >
              {productOptions.map((product, index) => (
                <option key={index} value={product}>
                  {product || "All Products"}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="minAmount"
              placeholder="Min Amount"
              value={filters.minAmount}
              onChange={handleFilterChange}
              className="mgr-1"
            />
            <input
              type="number"
              name="maxAmount"
              placeholder="Max Amount"
              value={filters.maxAmount}
              onChange={handleFilterChange}
            />
            <select
              className="mgl-1"
              value={recordsPerPage}
              onChange={handleRecordsPerPageChange}
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>
        </div>
        <div className="transaction-container mgt-1">
          <div className="transaction-grid transaction-header">
            <div>Customer Email</div>
            <div>Transaction ID</div>
            <div>Date</div>
            <div>Product(s)</div>
            <div>Payment ID</div>
            <div>Amount ($)</div>
            <div>Status</div>
            <div>Receipt</div>
          </div>

          {/* Grid Body */}
          {paginatedTransactions.length ? (
            paginatedTransactions.map((txn) => (
              <div
                className="transaction-grid transaction-row"
                key={txn.transactionId}
              >
                <div className="flex-center-row">{txn.customerId}</div>
                <div className="flex-center-row">{txn.transactionId}</div>
                <div className="flex-center-row">{txn.date}</div>
                <div className="flex-center-row">{txn.products}</div>
                <div className="flex-center-row">{txn.paymentId}</div>
                <div className="flex-center-row">${txn.amount}</div>
                <div className="flex-center-row">
                  <p
                    className={`${
                      txn.status === "success"
                        ? "success-txs"
                        : txn.status === "pending"
                        ? "refund-txs"
                        : "fail-txs"
                    }`}
                  >
                    {txn.status}
                  </p>
                </div>
                <div className="flex-center-row">
                  <HiDownload size={18} className="download-btn"/>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">No transactions found.</div>
          )}

          {totalPages > 1 && (
            <div className="pagination mg-1 fixed-pos-bottom flex-row-between">
              <div>
                <button
                  className="btn-outline mgr-1"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="page-no">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn-outline btn-Fill mgl-1"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
              <div>
                <input
                  type="number"
                  value={inputPage}
                  onChange={handlePageChange}
                  placeholder="Go to page"
                  className="page-input mgr-1"
                />
                <button onClick={goToPage} className="btn-outline btn-Fill">
                  Go
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
