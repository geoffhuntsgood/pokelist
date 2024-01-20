import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TypeBadge } from "../../components/TypeBadge";
import { TypeName } from "../../enums";

describe("TypeBadge component rendering", () => {
  test("One type", () => {
    render(<TypeBadge type1={TypeName.Grass} />);
    const badge = screen.getByText("Grass");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle({ backgroundColor: "#78C850" });
  });

  test("Two types", () => {
    render(<TypeBadge type1={TypeName.Grass} type2={TypeName.Ghost} />);
    const grassBadge = screen.getByText("Grass");
    expect(grassBadge).toBeInTheDocument();
    expect(grassBadge).toHaveStyle({ backgroundColor: "#78C850" });
    const ghostBadge = screen.getByText("Ghost");
    expect(ghostBadge).toBeInTheDocument();
    expect(ghostBadge).toHaveStyle({ backgroundColor: "#705998" });
  });
});
