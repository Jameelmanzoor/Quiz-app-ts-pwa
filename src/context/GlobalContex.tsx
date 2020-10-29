import React, { createContext, useReducer, useState } from "react";
import { formReducer } from "./formReducer";

type ContextType = {
  formData: { category?: string; level?: string; count?: string };
  setFormData: React.Dispatch<{ name: string; value: string }>;
  submit: boolean;
  setSubmit: React.Dispatch<boolean>;
};

export const GlobalContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC = ({ children }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  let [submit, setSubmit] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        submit,
        setSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useData = () => React.useContext(GlobalContext);
