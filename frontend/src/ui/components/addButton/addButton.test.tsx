import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { AddButton } from "./addButton";
import { useViewContext } from "@/ui/context/viewContext";
import { useNavigate } from "react-router-dom";

import styles from "./addButton.module.scss";

vi.mock("@/ui/context/viewContext", () => ({
  useViewContext: vi.fn()
}));

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn()
}));

describe("AddButton", () => {
  const mockUseViewContext = useViewContext as Mock;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseViewContext.mockReturnValue({ isGridView: false });
  });

  it("should render the button", () => {
    render(<AddButton />);

    expect(screen.getByText("+ Add Document")).toBeInTheDocument();
  });

  it.only("should navigate to /add-document on button click", () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<AddButton />);

    fireEvent.click(screen.getByText("+ Add Document"));
    expect(mockNavigate).toHaveBeenCalledWith("/add-document");
  });

  it("should apply gridView class when isGridView is true", () => {
    mockUseViewContext.mockReturnValue({ isGridView: true });

    render(<AddButton />);

    const container = screen.getByText("+ Add Document").parentElement;
    expect(container).toHaveClass(styles.gridView);
  });
});
