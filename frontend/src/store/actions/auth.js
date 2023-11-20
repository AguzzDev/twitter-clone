import * as api from "api";
import { types } from "store/types/types";

export const login = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadAuth });

    const { data } = await api.login(formData);

    dispatch({
      type: types.login,
      payload: { data },
    });

    history.go("/");
  } catch (error) {
    dispatch({
      type: types.login,
      payload: { error: error.response.data },
    });
  }
};

export const register = (value, history) => async (dispatch) => {
  try {
    dispatch({ type: types.uiLoadAuth });

    const { data } = await api.register(value);

    dispatch({
      type: types.register,
      payload: { data },
    });

    history.go("/");
  } catch (error) {
    dispatch({
      type: types.register,
      payload: { error: error.response.data },
    });
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: types.logout });

    history.go("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteAccount = (id) => async (dispatch) => {
  try {
    await api.deleteAccount(id);

    dispatch({ type: types.logout });
  } catch (error) {
    console.log(error);
  }
};
