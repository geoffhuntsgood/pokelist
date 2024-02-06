import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TypeBadge } from "../../components/TypeBadge";
import { Type } from "../../enums";
import { Types } from "../../classes";

describe("TypeBadge component rendering", () => {
  test("One type", () => {
    render(<TypeBadge type={new Types(Type.Grass)} />);
    const badge = screen.getByText("Grass");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle({ backgroundColor: "#78C850" });
  });

  test("Two types", () => {
    render(<TypeBadge type={new Types(Type.Grass, Type.Ghost)} />);
    const grassBadge = screen.getByText("Grass");
    expect(grassBadge).toBeInTheDocument();
    expect(grassBadge).toHaveStyle({ backgroundColor: "#78C850" });
    const ghostBadge = screen.getByText("Ghost");
    expect(ghostBadge).toBeInTheDocument();
    expect(ghostBadge).toHaveStyle({ backgroundColor: "#705998" });
  });
});
