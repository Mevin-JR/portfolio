export default function ContactTemplate({ fullName, email, message }) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#111" }}>
        📨 Contact Form Submission
      </h2>

      <p>
        <strong>{fullName}</strong> just sent you a message via portfolio’s
        contact form.
      </p>

      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p style={{ margin: "0 0 8px 0" }}>
          <strong>From:</strong> {fullName} ({email})
        </p>
        <p style={{ margin: 0 }}>
          <strong>Message:</strong>
        </p>
        <p style={{ whiteSpace: "pre-wrap", marginTop: "5px" }}>{message}</p>
      </div>

      <p style={{ fontSize: "12px", color: "#777" }}>
        This message was sent from the contact form on{" "}
        <a href="https://mevinjr.com#contact" style={{ color: "#0066cc" }}>
          mevinjr.com
        </a>
        .
      </p>
    </div>
  );
}
