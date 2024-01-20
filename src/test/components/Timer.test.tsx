import { render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import { Timer } from "../../components/Timer";

// TODO: Write Timer test cases
describe("Timer component rendering", () => {
  const setTimedOut = vi.fn();
  const setBest = vi.fn();
  const setPaused = vi.fn();

  test("Initialization", () => {
    render(<Timer setTimedOut={setTimedOut} setBest={setBest} setPaused={setPaused} displayText="Test" done={false} itemCount={100} />);
  });
});
