import { firestore, WithId } from "../../../utils";
import { queryStateAsSubject } from "./queryReducer";
import { SubscribableQuery } from "./subscribable";

export const docUpdateHandler = <T>(
  query: firestore.DocRef
): SubscribableQuery<T> => {
  const { subject, dispatch } = queryStateAsSubject<T>({ state: "loading" });

  const destroy = query.onSnapshot(
    (ref) => {
      if (!ref.exists) {
        dispatch({
          type: "notFound",
          payload: undefined,
        });
      } else {
        dispatch({
          type: "success",
          payload: {
            id: ref.id,
            ...ref.data(),
          } as WithId<T>,
        });
      }
    },
    (err) => {
      dispatch({ type: "error", payload: err });
    }
  );

  return { ...subject, destroy };
};
