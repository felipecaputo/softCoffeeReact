import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

const AddCoffeeControls = props => {
    return (
        <div>
            <AutoComplete
                ref= { input => this.collaborator = input } 
                hintText="Colaborador"
                value={ props.collaborator || ''}
                dataSource={collaborators} />
            <TextField
                ref={ input => this.coffeeAmount = input }
                hintText="Qtd Café" />
            <TextField
                ref={ input => this.filterAmmount = input }
                hintText="Qtd Filtro" />
            <RaisedButton
                label="Confirm"
                primary={true}
                onClick= { () => props.onConfirm(this.collaborator.value, 
                        this.coffeeAmount.value, this.filterAmmount.value)}/>
            <RaisedButton
                label="Cancel" 
                onClick={ () => onCancel() }/>
        </div>
    );
};

AddCoffeeControl.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    collaborator: PropTypes.string
};

export default AddCoffeeControl;