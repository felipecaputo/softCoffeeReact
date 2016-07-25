import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AddCoffeeControls = props => {
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AutoComplete
                        ref= { input => this.collaborator = input } 
                        hintText="Colaborador"
                        value={ props.collaborator || ''}
                        dataSource={props.collaborators} />
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
            </MuiThemeProvider>
        </div>
    );
};

AddCoffeeControls.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    collaborators: PropTypes.array.isRequired,
    collaborator: PropTypes.string
};

export default AddCoffeeControls;