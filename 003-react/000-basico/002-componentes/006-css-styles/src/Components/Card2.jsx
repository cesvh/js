import PropTypes from 'prop-types';

export function Card2 ({ flag, title, content }) {   
    const cardStyle = {
        background: flag ? 'green': 'gray',
        fontWeight: 'lighter',
        color: 'white',
        padding: '20px' 
    };
    return <>
        <div style={cardStyle}>
            <h1>{ title }</h1>
            <p>{ content }</p>
        </div>
    </>;
}

Card2.propTypes = {
    flag: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
