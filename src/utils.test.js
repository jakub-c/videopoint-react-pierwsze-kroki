import { secondsToHourMinuteSecond } from "./utils";

test("3600 is 01:00:00", () => {
  expect(secondsToHourMinuteSecond(3600)).toBe("01:00:00");
});

test("0 is 00:00:00", () => {
  expect(secondsToHourMinuteSecond(0)).toBe("00:00:00");
});

test("3601 is 01:00:01", () => {
  expect(secondsToHourMinuteSecond(3601)).toBe("01:00:01");
});
