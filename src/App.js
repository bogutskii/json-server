import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Database Testing Page</h1>
          <p>
            This page is created for testing a database using the <strong>JSON Server</strong> technology.
          </p>
          <p>
            You can access the user data through the following endpoint:
          </p>
          <a
              className="App-link"
              href="http://localhost:3001/users"
              target="_blank"
              rel="noopener noreferrer"
          >
            http://localhost:3001/users
          </a>
          <p>
            The purpose of this page is to allow testing and interaction with the JSON-based database. You can perform GET, POST, PUT, and DELETE requests to this endpoint.
          </p>
        </header>
      </div>
  );
}

export default App;
