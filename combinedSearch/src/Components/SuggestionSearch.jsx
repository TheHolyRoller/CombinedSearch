import React, { useState } from "react";



let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vehicles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

// the search input component
function SuggestionSearch() {

  
//   ADD IN 
  const [input, setInput] = useState("");
  
  const [suggestion, setSuggestion] = useState(""); 
  
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);


// ADD IN 
  const handleSuggestionClick = (suggestion) => {
    
    setInput(suggestion);
    setSuggestion(suggestion); 
    
    console.log("this is the SUGGESTION242$@#$@#$")
    console.log(suggestion); 
    
    
    console.log("THIS IS THE SET INPUT!!!#@!#!@"); 
    console.log(input); 
    
    // clear the filtered suggestions
    setFilteredSuggestions([]);
    
    // handleInputChange(suggestion); 
    
  };

  const handleInputChange = (e) => {
    // get the user entered value
    let userData = e.target.value;
    
    
    
    if(input){

    console.log("this is the INPUT ")
    console.log(input); 
        
    }
    
    console.log("THIS IS THE VALUE OF THE EVENT"); 
    console.log(e.target.value); 
    console.log(userData); 
    
    // filter the suggestions based on the user value
    let emptyArray = [];
    
    
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        //filtering array value and user characters to lowercase and return only those words which are start with user entered chars
            return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
    }
    // update the state with the filtered suggestions and the input value
    setFilteredSuggestions(emptyArray);
    setInput(userData);
    
  };

 
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search..."
        // ADD IN 
        value={input}
        onChange={handleInputChange}
      />

      {/* ADD IN  */}
      <div className="resultBox">
        {filteredSuggestions.map((suggestion, i) => (
          <li key={i} onClick={() => handleSuggestionClick(suggestion)}>
          
            {suggestion}
            
          </li>
        ))}
      </div>
    </div>
  );
}

export default SuggestionSearch;
