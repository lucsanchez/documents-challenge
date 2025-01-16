import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

vi.mock("react-router-dom", async (importOriginal) => {
  const rrd = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...rrd,
    useNavigate: vi.fn()
  };
});

afterEach(() => {
  cleanup();
});
