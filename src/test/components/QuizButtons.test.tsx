import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { QuizButtons } from "../../components/QuizCheckbox";

describe("QuizButtons component rendering", () => {
  const goldenrod = "#DAA520";
  const deepskyblue = "#00BFFF";
  const handleClick = vi.fn();
  const options = [
    { value: "value1", name: "name1" },
    { value: "value2", name: "name2" }
  ];

  test("Render with test options", () => {
    render(
      <QuizButtons value="test" onChangeFunc={handleClick} options={options} />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("name1");
    expect(buttons[0]).toHaveStyle({ backgroundColor: goldenrod });
    expect(buttons[1]).toHaveTextContent("name2");
    expect(buttons[1]).toHaveStyle({ backgroundColor: goldenrod });
  });

  test("Render with option selected", async () => {
    render(
      <QuizButtons
        value="value1"
        onChangeFunc={handleClick}
        options={options}
      />
    );
    const button = screen.getAllByRole("button")[0];
    expect(button).toHaveStyle({ backgroundColor: deepskyblue });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
