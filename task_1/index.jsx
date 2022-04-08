import { Component } from 'react';

// functional component
const FirstComponent = React.memo(({ name }) => (
    <div>my name is {name}</div>
));

// class component
class SecondComponent extends Component {
    shouldComponentUpdate(prevProps, nextProps) {
        if (prevProps.name === nextProps.name){
            return false
        }
    }
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}

{/* При решении данной задачи на классовых компонентах так, же можн использовать React.PureComponent,
оиличе его от React.Component, тем что React.PureComponent реализует метод shouldComponentUpdate(),
т.е если будет вложенность, либо сложная структура, будт происходить ренлеринг */}