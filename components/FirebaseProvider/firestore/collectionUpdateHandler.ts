import { firestore, WithId } from "../../../utils";
import { queryStateAsSubject } from "./queryReducer";
import { SubscribableQuery } from "./subscribable";

export const collectionUpdateHandler = <T>(
  query: firestore.CollectionQuery
): SubscribableQuery<T> => {
  const { subject, dispatch } = queryStateAsSubject<T>({ state: "loading" });

  const destroy = query.onSnapshot(
    (refs) => {
      dispatch({
        type: "success",
        payload: refs.docs.map(
          (r) =>
            ({
              id: r.id,
              ...r.data(),
            } as WithId<T>)
        ),
      });
    },
    (err) => {
      dispatch({ type: "error", payload: err });
    }
  );

  return { ...subject, destroy };
};
