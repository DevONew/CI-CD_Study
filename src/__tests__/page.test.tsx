import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe("Home", () => {
  it("제목 텍스트가 렌더링된다", () => {
    render(<Home />);
    expect(
      screen.getByText("To get started, edit the page.tsx file.")
    ).toBeInTheDocument();
  });
});
