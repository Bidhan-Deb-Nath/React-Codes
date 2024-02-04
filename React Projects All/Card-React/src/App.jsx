/** @format */
// src/App.js

import PersonCard from "../src/components/PersonCard";

// const peopleDetails = [
//   { name: "Bidhan Deb Nath", jobTitle: "Web Developer", imageUrl: "../src/j.jpg" },
//   { name: "Bidhan Deb Nath", jobTitle: "Web Developer", imageUrl: "../src/j.jpg" },

  // Add details for Person 2 to Person 10
// ];

const App = () => {
  return (
    <div>
      <h1>People Cards</h1>
      <div>
        {peopleDetails.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default App;
