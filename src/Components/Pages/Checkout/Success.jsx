import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState("Checking payment...");
  const [receiptUrl, setReceiptUrl] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setStatus("No session ID found.");
      return;
    }
    axios
      .get(`http://localhost:5001/payment/status?session_id=${sessionId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setStatus("✅ Payment Successful!");
          setReceiptUrl(res.data.receipt_url);
        } else {
          setStatus("❌ Payment not completed.");
        }
      })
      .catch((err) => setStatus("⚠️ Error fetching payment status."));
  }, [sessionId]);

  const sendReceipt = () => {
    axios
      .post("http://localhost:5000/send-receipt", {
        session_id: sessionId,
        email: "user@example.com", // Replace with user's email
      })
      .then((res) => {
        setEmailSent(true);
        alert(res.data.message);
      })
      .catch(() => alert("Error sending receipt."));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{status}</h1>
      {receiptUrl && (
        <>
          <p>
            🎟️{" "}
            <a href={receiptUrl} target="_blank" rel="noopener noreferrer">
              View Receipt
            </a>
          </p>
          {!emailSent ? (
            <button style={styles.button} onClick={sendReceipt}>
              📩 Send Receipt via Email
            </button>
          ) : (
            <p>✅ Receipt sent successfully!</p>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  heading: { fontSize: "24px", marginBottom: "20px" },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default SuccessPage;
