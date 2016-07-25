import React, {PropTypes} from 'react';

const CoffeeStockStatus = ({
    qtCofee, qtFilter
}) => {
    return (
        <div>
            <span style="cofee-badge"> {qtCofee}  </span>
            <span style="filter-badge"> {qtFilter}  </span>
        </div>
    );
};

CoffeeStatus.propTypes = {
    qtCofee: PropTypes.number.isRequired,
    qtFilter: PropTypes.number.isRequired
};

export default CoffeeStatus;