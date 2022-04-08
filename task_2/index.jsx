import { useState, Fragment, useMemo } from "react";

const MainComponent = () => {
    // eslint-disable-next-line no-unused-vars
    const [ _, updateComponent ] = useState(); // change state for force component updating

    const makeLog = () =>useMemo(() => {
        console.log("hi from MainComponent")
    }); // function to make a log from MainComponent

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = React.memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from MainComponent</button>
));
export default MainComponent;
