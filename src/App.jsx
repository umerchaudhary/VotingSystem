// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Candidates from './components/Candidates';

const App = () => {
  const [totalVotes, setTotalVotes] = useState(0);

  return (
    <div>
      <Header totalVotes={totalVotes} />
      <Candidates setTotalVotes={setTotalVotes} />
    </div>
  );
};

export default App;
