import { AppRouter } from "./app-router";
import { ViewProvider } from "./ui/providers/viewContextProvider";

function App() {
  return (
    <ViewProvider>
      <AppRouter />
    </ViewProvider>
  );
}

export default App;
