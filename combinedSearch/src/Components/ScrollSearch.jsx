
/** 

Okay so let's just talk things through at the moment. 

So for now we have a working search scroll bar. 

And we have have suggestions based on the input. 

What we need now is to add in the functionality for the handling of the suggestion 
click. 

This will then set a state variable to teh value of that suggestion. 

What we will then do is check to see if the value of the suggestion state variable is truthy 
and if it is then we will set the input value to be that of the state variable. 






*/




import React, { useState, useRef } from "react";
import {Hidden, ListItem, Button, TextField } from '@mui/material'

import { scroller } from "react-scroll";


// Import the stylesheet here 
// import S from '../Styles/SearchContainer.module.css'; 


let suggestions = [
  "element",
  "button",
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
const scrollToElement = (id) => {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

// A custom hook to handle the input value and validation
const useInput = (initialValue) => {

  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);


  const [suggestion, setSuggestion] = useState(""); 
  
  const [changed, setChanged] = useState(false); 
  
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  
  const handleSuggestionClick = (suggestion) => {
    
    setChanged(true); 
    
    
    setSuggestion(suggestion); 
    setValue(suggestion); 
    
    
    console.log("this is the SUGGESTION242$@#$@#$")
    console.log(suggestion); 

    setFilteredSuggestions([]);

    
  };

  // A function to update the value and check if it matches one of the valid words
  const handleChange = (e) => {
    

    
    console.log("this is the value ")
    console.log(value); 
        setValue(e.target.value); 

        console.log("THIS IS THE VALUE SUGGESTION"); 
        console.log(suggestion); 
        
 
      
    const validWords = ["button", "element"];
    let userData = e.target.value;
    
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

    
    if (validWords.includes(e.target.value.toLowerCase())) {
      setError(null);
    } else {
      setError("Please enter one of the valid words: " + validWords.join(","));
    
    }
  
  };
  

  return { value, error, filteredSuggestions, suggestion, changed, handleChange, handleSuggestionClick };
  
  
};


const ScrollSearch = () => {
  
  const [input, setInput] = useState("");
  
  const { value, error, filteredSuggestions, suggestion, changed, handleChange, handleSuggestionClick } = useInput("");
  
  // A ref to store the submit button element
  const submitRef = useRef(null);

  // A ref to store the element element
  const elementRef = useRef(null);

  // A function to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // If there is no error, scroll to the corresponding element based on the input value
    if (!error) {
      // Define an object that maps the valid words to the refs of the elements
      const refMap = {
        button: submitRef,
        element: elementRef,
      };
      // Get the ref of the element based on the input value
      console.log("THIS IS THE VALUE ");
      console.log(value); 
      
      
      const ref = refMap[value.toLowerCase()];
      // Scroll to the element with the id of the ref
      scrollToElement(ref.current.id);
    }
  };

  return (
  <>
    <form style={{position: "absolute", top: "0", left: "0"}}  htmlFor="" onSubmit={handleSubmit}>
    
    {/* Add in the Container here  */}
    
    {/* <div className={S.container }tabIndex="1"> */}
      {/* <div className={S.searchContainer} tabIndex="1"> */}
      <TextField
        label="Search"
        variant="outlined"
        value={value}
        onChange={handleChange}
        error={!!error}
        helperText={error} />
  {/* <a href="my" className={S.button}> */}
          {/* <FaSearch /> */}
          <Button
        type="submit"
        variant="contained"
        color="primary">
        Submit
      </Button> 
          {/* </a> */}
 
      
      
      {/* </div> */}
      {/* </div> */}
      
     
    
    </form>

    {/* <div  id="submit-button" ref={submitRef} style={{width: "100vw", marginTop: "100vh",  minHeight:"100vh", backgroundColor: "blue"}} ></div> */}
    
    <div style={{width: "100vw", marginTop: "100vh",  minHeight:"100vh", backgroundColor: "red"}} ref={elementRef} id={"element"}>
        This is another element
      </div>
    

    
  </>
    
    
  );
};

export default ScrollSearch;
