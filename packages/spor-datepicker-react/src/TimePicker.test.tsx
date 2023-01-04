import { Time } from "@internationalized/date";
import { act, render } from "@testing-library/react";
import React from "react";
import { axe } from "vitest-axe";
import { TimePicker } from "./TimePicker";

describe("<TimePicker />", () => {
  it("is accessible", async () => {
    const { container } = render(<TimePicker />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("jumps backwards as expected", async () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker defaultValue={new Time(13, 3)} />
    );
    const backwardsButton = getByLabelText("Bakover 5 minutter");
    expect(getByRole("group")).toHaveTextContent("13:03");
    act(() => {
      backwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("13:00");
    act(() => {
      backwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("12:55");
  });
  it("jumps forwards as expected", async () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker defaultValue={new Time(13, 53)} />
    );
    const forwardsButton = getByLabelText("Fremover 5 minutter");
    expect(getByRole("group")).toHaveTextContent("13:53");
    act(() => {
      forwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("13:55");
    act(() => {
      forwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("14:00");
  });
  it("jumps backwards as expected when stepGranularity is set", async () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker defaultValue={new Time(13, 3)} stepGranularity={15} />
    );
    const backwardsButton = getByLabelText("Bakover 15 minutter");
    expect(getByRole("group")).toHaveTextContent("13:03");
    act(() => {
      backwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("13:00");
    act(() => {
      backwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("12:45");
  });
  it("jumps forwards as expected when stepGranularity is set", async () => {
    const { getByLabelText, getByRole } = render(
      <TimePicker defaultValue={new Time(13, 49)} stepGranularity={15} />
    );

    const forwardsButton = getByLabelText("Fremover 15 minutter");
    expect(getByRole("group")).toHaveTextContent("13:49");
    act(() => {
      forwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("14:00");
    act(() => {
      forwardsButton.click();
    });
    expect(getByRole("group")).toHaveTextContent("14:15");
  });
});
