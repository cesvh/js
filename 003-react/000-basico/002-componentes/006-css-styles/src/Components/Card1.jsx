import PropTypes from 'prop-types';

export function Card1({ flag, title, content }) {
    return <>
        <div style={{ background: flag ? 'blue': 'gray', fontWeight: 'lighter', color: 'white', padding: '20px' }}>
            <h1>{ title }</h1>
            <p>{ content }</p>
        </div>
    </>;
}

Card1.propTypes = {
    flag: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
