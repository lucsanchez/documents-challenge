import { ReactNode, useState } from "react";
import { ViewContext } from "../context/viewContext";

interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  const [isGridView, setIsGridView] = useState<boolean>(true);

  const toggleListView = () => setIsGridView(false);
  const toggleGridView = () => setIsGridView(true);

  return (
    <ViewContext.Provider
      value={{ isGridView, toggleListView, toggleGridView }}
    >
      {children}
    </ViewContext.Provider>
  );
};
