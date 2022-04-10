import { useState } from 'react';
const withBlock = (Сomponent) => {
    return (props) => {
        const [ isActive, setActive ] = useState(false);

        const mouseEnterHandler = () => {
            setActive(true);
            mouseEnterCallbak();
        }

        return <Component 
        {...props}
        isActive={isActive}
         setActive={setActive}/>
    }
}

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {

    return (
        <div onMouseEnter={mouseEnterHandler} className={ props.isActive ? 'active': '' }>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}

const Block2 = ({ mouseEnterCallbak, content }) => {

    return (
        <div onMouseEnter={mouseEnterHandler} className={ props.isActive ? 'active': '' }>
            <p>BLock2 content: {content}</p>
        </div>
    );
}

const Block1withBlock = withBlock(Block1);
const Block2withBlock = withBlock(Block2);
