import React from 'react';

function App() {
  return (
      <div>
        <h1 className="display-4 text-center my-3">Employee Tracker</h1>
        <div className="container">
            <div className="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search for employee"/>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;