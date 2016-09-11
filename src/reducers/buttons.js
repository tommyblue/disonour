function buttons(state = { saves: 0 }, action) {
  if (action.type === 'increment_save') {
    return {
      saves: state.saves + 1,
    };
  }

  return state;
}

export default buttons;
