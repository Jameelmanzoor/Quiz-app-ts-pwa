export const formReducer = (state: {}, event: { name: string; value: string }) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };