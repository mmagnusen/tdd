import defaultNavigationState from '../defaultStates/defaultNavigationState'

const navigationReducer = (state = defaultNavigationState, action = {}) => {
    switch(action.type) {
        case 'UPDATE_NAVIGATION':
            return {
                ...state,
                [action.navItem.item]: action.navItem.activeIndex
            }
        default:
            return state
     }
}

export default navigationReducer