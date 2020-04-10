export function uiReducer(state, action) {
  switch (action.type) {
    case "show_confirmation_modal":
      return {
        ...state,
        showConfirmationModal: true
      };
    case "hide_confirmation_modal":
      return {
        ...state,
        showConfirmationModal: false
      };
  }
}
