import { renderHook, act } from "@testing-library/react";
import { useViewContext } from "./viewContext";
import { ViewProvider } from "../providers/viewContextProvider";

describe("useViewContext", () => {
  it("should throw an error if useViewContext is used outside of ViewProvider", () => {
    expect(() => renderHook(() => useViewContext())).toThrow(
      "useViewContext must be used within a ViewProvider"
    );
  });

  it("should provide the correct initial context values", () => {
    const { result } = renderHook(() => useViewContext(), {
      wrapper: ViewProvider
    });
    expect(result.current.isGridView).toBe(true);
  });

  it("should toggle to grid view", () => {
    const { result } = renderHook(() => useViewContext(), {
      wrapper: ViewProvider
    });

    act(() => {
      result.current.toggleGridView();
    });

    expect(result.current.isGridView).toBe(true);
  });

  it("should toggle to list view", () => {
    const { result } = renderHook(() => useViewContext(), {
      wrapper: ViewProvider
    });

    act(() => {
      result.current.toggleListView();
    });

    expect(result.current.isGridView).toBe(false);
  });
});

it("should provide the correct initial context values", () => {
  const { result } = renderHook(() => useViewContext(), {
    wrapper: ViewProvider
  });
  expect(result.current.isGridView).toBe(true);
});

it("should toggle to grid view", () => {
  const { result } = renderHook(() => useViewContext(), {
    wrapper: ViewProvider
  });

  act(() => {
    result.current.toggleGridView();
  });

  expect(result.current.isGridView).toBe(true);
});

it("should toggle to list view", () => {
  const { result } = renderHook(() => useViewContext(), {
    wrapper: ViewProvider
  });

  act(() => {
    result.current.toggleListView();
  });

  expect(result.current.isGridView).toBe(false);
});
