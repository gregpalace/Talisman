export default function closeLevelUpDialog() {
  return (dispatch: any, getState: any) => {
    const { chest } = getState().dialog;
    dispatch({
      type: 'PAUSE',
      payload: {
        pause: chest,
        chest,
      },
    });
  };
}
