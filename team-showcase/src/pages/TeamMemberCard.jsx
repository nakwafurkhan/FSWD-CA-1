import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, jobTitle }) => {
  return (
    <div className="team-member-card">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </div>
  );
};


export default TeamMemberCard;
