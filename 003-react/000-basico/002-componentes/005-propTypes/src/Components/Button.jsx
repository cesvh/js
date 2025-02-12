import PropTypes from 'prop-types';

export function Button({ text, name='Unknown' }) {
    return <button>
        { text } - { name }
    </button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};
