import React from 'react';
import PropTypes from 'prop-types';

import ItemCardList from '../../components/ItemCardList/';

const Items = ({ itemsData, children }) => (
    <ItemCardList itemsData={itemsData}>
        {children}
    </ItemCardList>
);

export default Items;

Items.defaultProps = {
    children: null
};

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.shape({
        available: PropTypes.bool.isRequired,
        borrower: PropTypes.objectOf(PropTypes.string),
        created: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        imageurl: PropTypes.string.isRequired,
        itemowner: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fullname: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    children: PropTypes.node
};

