import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./app-router";
import { DocumentsProvider } from "./ui/providers/documentContextProvider";
import { ViewProvider } from "./ui/providers/viewContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DocumentsProvider>
        <ViewProvider>
          <AppRouter />
        </ViewProvider>
      </DocumentsProvider>
    </QueryClientProvider>
  );
}

export default App;
