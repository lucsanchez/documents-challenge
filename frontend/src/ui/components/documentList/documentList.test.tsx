import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { DocumentList } from "./documentList";
import { useDocumentsContext } from "@/ui/context/documentContext";
import { useViewContext } from "@/ui/context/viewContext";

vi.mock("@/ui/context/documentContext");
vi.mock("@/ui/context/viewContext");

const MOCKED_DATE = new Date().toISOString();
describe("DocumentList", () => {
  it("should render list headers in list view", () => {
    (useViewContext as Mock).mockReturnValue({ isGridView: false });
    (useDocumentsContext as Mock).mockReturnValue({ documents: [] });

    render(<DocumentList />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Contributors")).toBeInTheDocument();
    expect(screen.getByText("Attachments")).toBeInTheDocument();
  });

  it("shouldn't render list headers when in grid view", () => {
    (useViewContext as Mock).mockReturnValue({ isGridView: true });
    (useDocumentsContext as Mock).mockReturnValue({ documents: [] });

    render(<DocumentList />);

    expect(screen.queryByText("Name")).not.toBeInTheDocument();
    expect(screen.queryByText("Contributors")).not.toBeInTheDocument();
    expect(screen.queryByText("Attachments")).not.toBeInTheDocument();
  });

  it("should render documents", () => {
    (useViewContext as Mock).mockReturnValue({ isGridView: false });
    (useDocumentsContext as Mock).mockReturnValue({
      documents: [
        {
          id: 1,
          title: "Document 1",
          created_at: MOCKED_DATE,
          updated_at: MOCKED_DATE,
          uattachments: [],
          contributors: []
        },
        {
          id: 2,
          title: "Document 2",
          created_at: MOCKED_DATE,
          updated_at: MOCKED_DATE
        }
      ]
    });

    render(<DocumentList />);

    expect(screen.getByText("Document 1")).toBeInTheDocument();
    expect(screen.getByText("Document 2")).toBeInTheDocument();
  });

  it("should render AddButton", () => {
    (useViewContext as Mock).mockReturnValue({ isGridView: false });
    (useDocumentsContext as Mock).mockReturnValue({ documents: [] });

    render(<DocumentList />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
