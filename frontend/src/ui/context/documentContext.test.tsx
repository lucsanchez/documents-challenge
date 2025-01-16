import { renderHook, act } from "@testing-library/react";
import { useDocumentsContext } from "./documentContext";
import { Document } from "@/domain/entities/Document";
import { DocumentsProvider } from "../providers/documentContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const newDocuments: Document[] = [
  {
    id: "1",
    title: "Adoc",
    version: "1.15.1",
    created_at: "2023-01-01",
    updated_at: "2023-01-01",
    attachments: [],
    contributors: []
  },
  {
    id: "2",
    title: "Bdoc",
    version: "1.17.2",
    created_at: "2023-01-02",
    updated_at: "2023-01-02",
    attachments: [],
    contributors: []
  }
];

const DocumentWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <DocumentsProvider>{children}</DocumentsProvider>
    </QueryClientProvider>
  );
};

describe("useDocuments", () => {
  it("should throw an error if used outside of a DocumentProvider", () => {
    expect(() => renderHook(() => useDocumentsContext())).toThrow(
      "useViewContext must be used within a ViewProvider"
    );
  });

  it("should add a document", () => {
    const { result } = renderHook(() => useDocumentsContext(), {
      wrapper: DocumentWrapper()
    });

    act(() => {
      result.current.addDocument(newDocuments[0]);
    });

    expect(result.current.documents).toContainEqual(newDocuments[0]);
  });

  it("should sort documents by name", () => {
    const { result } = renderHook(() => useDocumentsContext(), {
      wrapper: DocumentWrapper()
    });

    act(() => {
      result.current.addDocument(newDocuments[0]);
      result.current.addDocument(newDocuments[1]);
      result.current.sortDocuments("name");
    });

    expect(result.current.documents[0].title).toBe("Adoc");
    expect(result.current.documents[1].title).toBe("Bdoc");
  });

  it("should sort documents by version", () => {
    const { result } = renderHook(() => useDocumentsContext(), {
      wrapper: DocumentWrapper()
    });

    act(() => {
      result.current.addDocument(newDocuments[0]);
      result.current.addDocument(newDocuments[1]);
      result.current.sortDocuments("version");
    });

    expect(result.current.documents[0].version).toBe("1.15.1");
    expect(result.current.documents[1].version).toBe("1.17.2");
  });

  it("should sort documents by date", () => {
    const { result } = renderHook(() => useDocumentsContext(), {
      wrapper: DocumentWrapper()
    });

    act(() => {
      result.current.addDocument(newDocuments[0]);
      result.current.addDocument(newDocuments[1]);
      result.current.sortDocuments("date");
    });

    expect(result.current.documents[0].created_at).toBe("2023-01-01");
    expect(result.current.documents[1].created_at).toBe("2023-01-02");
  });
});
