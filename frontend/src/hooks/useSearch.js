import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "hooks/useDebounce";
import { useHistory } from "react-router-dom";

import { fetchSearch } from "store/actions/tweets";

export const useSearch = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const debounceValue = useDebounce(
    history.location.pathname.includes("/search") && !value
      ? history.location.search.split("=")[1] || history.location.hash
      : value,
    300
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${debounceValue}`);
  };

  useEffect(() => {
    if (!debounceValue) return;
    dispatch(fetchSearch(debounceValue));
  }, [debounceValue]);

  return { handleSubmit, setValue };
};
