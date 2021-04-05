import { firestore, WithId } from "../../../utils";
import { queryAsSubject } from "./reducer";

export const docUpdateHandler = <T, TQuery extends firestore.DocRef>(
  query: TQuery
) => {
  const { subject, dispatch } = queryAsSubject<T>({ state: "loading" });

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

  return { subject, destroy };
};
