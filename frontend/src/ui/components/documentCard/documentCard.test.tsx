import { render } from "@testing-library/react";
import { DocumentCard } from "./documentCard";
import { useViewContext } from "@/ui/context/viewContext";
import { Document } from "@/domain/entities/Document";
import { Mock } from "vitest";

vi.mock("@/ui/context/viewContext");

import styles from "./documentCard.module.scss";

const mockUseViewContext = useViewContext as Mock;

describe("DocumentCard", () => {
  const document: Document = {
    id: "1",
    title: "Sample Document",
    version: "1.0",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    contributors: [
      { id: "c1", name: "Contributor 1" },
      { id: "c2", name: "Contributor 2" }
    ],
    attachments: ["Attachment 1", "Attachment 2"]
  };

  it("should render document title and version", () => {
    mockUseViewContext.mockReturnValue({ isGridView: false });

    const { getByText } = render(<DocumentCard document={document} />);

    expect(getByText("Sample Document")).toBeInTheDocument();
    expect(getByText("Version 1.0")).toBeInTheDocument();
  });

  it("shoul render document contributors", () => {
    mockUseViewContext.mockReturnValue({ isGridView: false });

    const { getByText } = render(<DocumentCard document={document} />);

    expect(getByText("Contributor 1")).toBeInTheDocument();
    expect(getByText("Contributor 2")).toBeInTheDocument();
  });

  it("should render document attachments", () => {
    mockUseViewContext.mockReturnValue({ isGridView: false });

    const { getByText } = render(<DocumentCard document={document} />);

    expect(getByText("Attachment 1")).toBeInTheDocument();
    expect(getByText("Attachment 2")).toBeInTheDocument();
  });

  it("should apply grid view class when isGridView is true", () => {
    mockUseViewContext.mockReturnValue({ isGridView: true });

    const { container } = render(<DocumentCard document={document} />);

    expect(container.firstChild).toHaveClass(styles.column);
  });

  it("should not apply grid view class when isGridView is false", () => {
    mockUseViewContext.mockReturnValue({ isGridView: false });

    const { container } = render(<DocumentCard document={document} />);

    expect(container.firstChild).not.toHaveClass(styles.column);
  });

  it("should render updated date correctly", () => {
    mockUseViewContext.mockReturnValue({ isGridView: false });

    const { getByText } = render(<DocumentCard document={document} />);

    expect(getByText("Updated: less than a minute ago")).toBeInTheDocument();
  });
});
