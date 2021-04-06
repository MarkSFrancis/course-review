import { BehaviorSubject, Subject } from "rxjs";
import { createCounterSubject } from ".";

describe("createCounterSubject", () => {
  it("should return 0 when nothing is subscribed", () => {
    const counter = createCounterSubject(new BehaviorSubject(0));

    expect(counter.totalListeners).toEqual(0);
  });

  it("should update all listeners when a new value is emitted", () => {
    const subject = new Subject();
    const counter = createCounterSubject(subject);

    const fn = jest.fn();
    counter.subscribe(fn);

    subject.next(0);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should increment the listener count when something subscribes", () => {
    const counter = createCounterSubject(new Subject());
    counter.subscribe(jest.fn());

    expect(counter.totalListeners).toEqual(1);
  });

  it("should decrement the listener count whe something unsubscribes", () => {
    const counter = createCounterSubject(new Subject());
    const subscription = counter.subscribe(jest.fn());

    subscription.unsubscribe();

    expect(counter.totalListeners).toEqual(0);
  });

  it("should not affect the count if the same listener unsubscribes twice", () => {
    const counter = createCounterSubject(new Subject());
    const subscription = counter.subscribe(jest.fn());

    subscription.unsubscribe();
    subscription.unsubscribe();

    expect(counter.totalListeners).toEqual(0);
  });
});
