import React from 'react';
import '../styles/Header.css'



const Header = ({ totalVotes }) => {
  return (
    <div className='header'>
      <h1>Voting System</h1>
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
};

export default Header;