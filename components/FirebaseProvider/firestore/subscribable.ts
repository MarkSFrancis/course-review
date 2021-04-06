import { Subscribable, Unsubscribable } from "rxjs";
import { QueryState } from "../../../utils";

type Subscribe<T> = Subscribable<T>["subscribe"];

interface CounterSubject<T> extends Subscribable<T> {
  totalListeners: number;
}

export interface SubscribableQuery<T> extends CounterSubject<QueryState<T>> {
  destroy: () => void;
}

export const createCounterSubject = <T>(
  subject: Subscribable<T>
): CounterSubject<T> => {
  let subscriptions: Unsubscribable[] = [];
  const subscribe: Subscribe<T> = (...params: any[]) => {
    const subscription = subject.subscribe(...params);
    subscriptions = [...subscriptions, subscription];

    const cleanup: Unsubscribable = {
      unsubscribe: () => {
        const sub = subscriptions.find((s) => s === subscription);
        if (!sub) return;

        sub.unsubscribe();
        subscriptions = subscriptions.filter((s) => s !== subscription);
      },
    };

    return cleanup;
  };

  return {
    subscribe,
    get totalListeners() {
      return subscriptions.length;
    },
  };
};
