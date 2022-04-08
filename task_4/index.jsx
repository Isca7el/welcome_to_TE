import { Component, createRef, useState } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref for controlling child component */}
            </>
        );
    }
};


const ChildComponent = () => {
    const [state, setState] = useState(true);

    toggleButton = () => setState(!state);

    return (
        state === true ? <div>child component</div> : null
    )
}
