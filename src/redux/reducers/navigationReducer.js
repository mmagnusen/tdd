import defaultNavigationState from '../defaultStates/defaultNavigationState'

const navigationReducer = (state = defaultNavigationState, action = {activeIndex: 0, chapter: null}) => {
    switch(action.type) {
        case 'UPDATE_NAVIGATION':
            return {
                ...state,
                [action.navItem.item]: {
                    activeIndex: action.navItem.activeIndex,
                    chapter: action.navItem.chapter
                }
            }
        default:
            return state
     }
}

export default navigationReducer