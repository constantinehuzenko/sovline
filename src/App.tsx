import { Routing } from "pages/routing";
import { useEffect } from "react";
import { syncReduxAndLocalStore } from "services/questionsThunk";
import { useAppDispatch } from "utils/hooks/redux";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(syncReduxAndLocalStore());
  }, [dispatch]);

  return <Routing />;
};
