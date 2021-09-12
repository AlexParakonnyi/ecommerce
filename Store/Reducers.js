import ACTIONS from './Actions'

// const body = document.querySelector('body')

// const scrollHeight = document.body.scrollHeight
// console.log(scrollHeight)

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      }
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload,
      }
    case ACTIONS.SIDE_MENU_CLOSE:
      return {
        ...state,
        sideMenuActive: false,
      }
    case ACTIONS.SIDE_MENU_TOGGLE:
      return {
        ...state,
        sideMenuActive: !state.sideMenuActive,
      }
    case ACTIONS.SIDE_MENU_TURN_ON:
      return {
        ...state,
        sideMenuActive: true,
      }
    case ACTIONS.RESET_SCROLL:
      return {
        ...state,
        scrollMarkPage: action.payload,
      }
    case ACTIONS.IT_IS_BURGER:
      return {
        ...state,
        burgerRef: action.payload,
      }
    case ACTIONS.LOADING_ON:
      return {
        ...state,
        loading: true,
      }
    case ACTIONS.LOADING_OFF:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default reducers
