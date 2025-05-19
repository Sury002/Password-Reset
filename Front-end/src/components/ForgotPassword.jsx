import { useState } from "react";
import { Form, Button, Alert, Spinner, Card } from "react-bootstrap";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://password-reset-4ul1.onrender.com/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error sending email");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 shadow" style={{ maxWidth: "450px", margin: "2rem auto" }}>
      <h2 className="text-center mb-4">Forgot Password</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          className="w-100"
        >
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            "Send Reset Link"
          )}
        </Button>
      </Form>
    </Card>
  );
}


export default ForgotPassword;