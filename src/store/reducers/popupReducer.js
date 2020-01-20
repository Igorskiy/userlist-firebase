const TOGGLE_POPUP = 'TOGGLE_POPUP';

export const togglePopup = () => ({ type: TOGGLE_POPUP });

export const getPopupShow = state => state.isPopupShown;

const initialState = {
 isPopupShown: false,
}

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_POPUP:
        return {
          ...state,
          isPopupShown: !state.isPopupShown,
        };
      default: return state;
    }
  };
  
  export default popupReducer;