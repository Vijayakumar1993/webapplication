import React, { useState } from "react";

const Autocomplete = ({ suggestions,id,placeholder,event }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleInputChange = (e) => {
        const userInput = e.target.value;

        // Filter suggestions based on user input
        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().startsWith(userInput.toLowerCase())
        );
        event(e)

        setInputValue(userInput);
        setFilteredSuggestions(filtered);
        setShowSuggestions(userInput.length > 0);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="position-relative">
            <input
                type="text"
                className="form-control form-control-sm"
                placeholder={placeholder}
                value={inputValue}
                id={id}
                onChange={handleInputChange}
            />
            {showSuggestions && (
                <ul className="dropdown-menu show position-absolute w-100">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <li key={index}>
                                <button
                                    className="dropdown-item"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="dropdown-item disabled">No suggestions</span>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;