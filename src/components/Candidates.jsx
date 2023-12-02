// Candidates.js
import React, { useState } from 'react';
import '../styles/Candidates.css'


const candidatesData = [
  { id: 1, name: 'Imran Khan', votes: 0 },
  { id: 2, name: 'Naeem ul Haq', votes: 0 },
  { id: 3, name: 'Siraj ul Haq', votes: 0 },
  { id: 4, name: 'Khadim Hussain Rizvi', votes: 0 },
];

const Candidates = ({ setTotalVotes }) => {
  const [candidates, setCandidates] = useState(candidatesData);

  const handleVote = (candidateId) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId ? { ...candidate, votes: candidate.votes + 1 } : candidate
      )
    );
    setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
  };

  return (
    <div className='candidates'>
      {candidates.map((candidate) => (
        <div className='candidate' key={candidate.id}>
          <img src={`/candidate${candidate.id}.jpeg`} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>Votes: {candidate.votes}</p>
          <button onClick={() => handleVote(candidate.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default Candidates;
