import { AppContext } from "./context.jsx"; // Import from the new file

export const AppContextProvider = ({ children }) => {
  const value = {
    // Your context values here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};