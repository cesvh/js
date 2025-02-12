import PropTypes from 'prop-types';
import './style.css';

export function Card3 ({ flag, title, content }){
    return <>
    <div className={flag ? 'Card3': 'Card3-2'}>
        <h1>{ title }</h1>
        <p>{ content }</p>
    </div>
    </>;
}

Card3.propTypes = {
    flag: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
