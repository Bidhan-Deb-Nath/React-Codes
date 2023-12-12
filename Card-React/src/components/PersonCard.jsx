/** @format */

// src/PersonCard.js
import styled from "@emotion/styled";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const PersonCard = ({ name, jobTitle, imageUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{jobTitle}</p>
    </Card>
  );
};

export default PersonCard;
