import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { QuizButtons } from "../../components/QuizButtons";

describe("QuizButtons component rendering", () => {
  const goldenrod = "#DAA520";
  const navy = "#000080";
  const handleClick = vi.fn();

  const rendering = (state: string) => {
    return <QuizButtons state={state} setStateFunc={handleClick} options={["name1", "name2"]} />
  };

  test("Render with test options", () => {
    render(rendering("test"));
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("name1");
    expect(buttons[0]).toHaveStyle({ backgroundColor: goldenrod });
    expect(buttons[1]).toHaveTextContent("name2");
    expect(buttons[1]).toHaveStyle({ backgroundColor: goldenrod });
  });

  test("Render with option selected", async () => {
    render(rendering("name1"));
    const button = screen.getAllByRole("button")[0];
    expect(button).toHaveStyle({ backgroundColor: navy });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
