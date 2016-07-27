import React, {PropTypes} from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import s from './Coffee.css';


const CoffeeStockStatus = ({
    qtCoffee, qtFilter
}) => {
    return (
        <Card>
            <CardHeader
                title="Current Coffee Stock Status"
                subtitle="Looking good!"
                actAsExpander={true} 
                showExpandableButton={true}/>
            <CardText expandable={true}>
                <div id="CoffeeAmmout" className="coffee-amount-card">
                    <div className={s.header}> {qtCoffee} {' '} Cafés </div>
                    <LinearProgress
                        mode="determinate"
                        min={0}
                        max= {6}
                        value={qtCoffee > 6 ? 6 : qtCoffee } />
                    <span className="cofee-badge"> {qtCoffee} {' '} Cafés </span>
                    <span className="filter-badge"> {qtFilter}  </span>
                </div>
            </CardText>
        </Card>
    );
};

CoffeeStockStatus.propTypes = {
    qtCoffee: PropTypes.number.isRequired,
    qtFilter: PropTypes.number.isRequired
};

export default CoffeeStockStatus;