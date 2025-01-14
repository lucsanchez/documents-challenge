import { createContext, useContext } from "react";

interface ViewContextType {
  isGridView: boolean;
  toggleGridView: () => void;
  toggleListView: () => void;
}

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
};
