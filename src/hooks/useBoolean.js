import { useCallback, useMemo, useState } from "react";

export const useBoolean = (initial) => {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((y) => !y), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  const actions = useMemo(
    () => ({ setValue, toggle, setTrue, setFalse }),
    [toggle, setTrue, setFalse]
  );
  return [value, actions];
};

export default useBoolean;
