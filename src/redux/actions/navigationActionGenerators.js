const navigationActionGenerators = {
    updateNavigation: (navItem) => {
        return {
            type: 'UPDATE_NAVIGATION',
            navItem
        }
    }
}

export default navigationActionGenerators;