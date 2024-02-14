import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TypeBadge } from "../../components/TypeBadge";
import { Type } from "../../enums";

describe("TypeBadge component rendering", () => {
  test("One type", () => {
    render(<TypeBadge type={Type.Grass} />);
    const badge = screen.getByText("Grass");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle({ backgroundColor: "#78C850" });
  });

  test("Two types", () => {
    render(<TypeBadge type={Type.Grass} type2={Type.Ghost} />);
    const grassBadge = screen.getByText("Grass");
    expect(grassBadge).toBeInTheDocument();
    expect(grassBadge).toHaveStyle({ backgroundColor: "#78C850" });
    const ghostBadge = screen.getByText("Ghost");
    expect(ghostBadge).toBeInTheDocument();
    expect(ghostBadge).toHaveStyle({ backgroundColor: "#705998" });
  });
});
