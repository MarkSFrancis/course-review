import { formatRelativeDate } from "./date";
import MockDate from "mockdate";
import dayjs from "dayjs";

const now = "2020-01-01";

describe("formatRelativeDate", () => {
  beforeEach(() => {
    MockDate.set(now);
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should display number of days when time is days ago", () => {
    const days = 7;
    const date = dayjs(now).add(-days, "day");

    const text = formatRelativeDate(date);
    expect(text).toEqual(`${days} days ago`);
  });

  it("should display number of hours when time is hours ago", () => {
    const hours = 7;
    const date = dayjs(now).add(-hours, "hour");

    const text = formatRelativeDate(date);
    expect(text).toEqual(`${hours} hours ago`);
  });

  it("should round to nearest time ago to display", () => {
    const hours = 7.5;
    const date = dayjs(now).add(-hours, "hour");

    const text = formatRelativeDate(date);
    expect(text).toEqual(`${Math.round(hours)} hours ago`);
  });

  it("should display number of hours when time is minutes ago", () => {
    const minutes = 30;
    const date = dayjs(now).add(-minutes, "minute");

    const text = formatRelativeDate(date);
    expect(text).toEqual(`${minutes} minutes ago`);
  });

  it("should display 'a few seconds ago' when time is less than a minute ago", () => {
    const seconds = 40;
    const date = dayjs(now).add(-seconds, "second");

    const text = formatRelativeDate(date);
    expect(text).toEqual(`a few seconds ago`);
  });
});
