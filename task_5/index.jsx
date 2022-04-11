import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';


// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const MainComponent = () => {
    const userData = createSelector(reduxState => reduxState.userData);
    const userOnline = createSelector(reduxState => reduxState.isOnline);

    const memoizeUserData = createSelector(userData);
    const memoizedUserOnline = createSelector(userOnline);
    // ... other code
};
