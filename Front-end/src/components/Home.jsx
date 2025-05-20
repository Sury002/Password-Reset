import { Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';

function Home() {
  // Check auth status (replace with your actual auth logic)
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Container className="mt-5">
      <Card className="text-center p-4 shadow">
        <h1>Welcome to Password Reset System</h1>
        
        {isAuthenticated ? (
          <>
            <p className="lead mt-3">You are logged in!</p>
            <Button 
              variant="danger" 
              onClick={() => {
                localStorage.removeItem('isAuthenticated');
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <p className="lead mt-3">Manage your account securely</p>
            <div className="d-flex gap-3 justify-content-center mt-4">
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-primary">Register</Button>
              </Link>
            </div>
          </>
        )}

        {/* Demo link for password reset */}
        <div className="mt-4">
          <Link to="/forgot-password">Try password reset flow →</Link>
        </div>
      </Card>
    </Container>
  );
}

export default Home;