// PromptContext.js
import React, { createContext, useState } from 'react';

export const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <PromptContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};
