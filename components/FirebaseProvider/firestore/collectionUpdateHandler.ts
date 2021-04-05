import { firestore, WithId } from "../../../utils";
import { queryAsSubject } from "./reducer";

export const collectionUpdateHandler = <
  T,
  TQuery extends firestore.CollectionQuery
>(
  query: TQuery
) => {
  const { subject, dispatch } = queryAsSubject<T>({ state: "loading" });

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

  return { subject, destroy };
};
