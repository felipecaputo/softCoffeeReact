import React, {PropTypes} from 'react';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';

const AddCoffeeControls = props => {
    return (
        <Form>
            <div>
                <Input
                    ref= { input => this.collaborator = input }
                    label="Colaborador"
                    dataSource={props.collaborators} />
                <Input
                    label="Quantidade de café"
                    ref={ input => this.coffeeAmount = input }
                    hint="Número de pacotes de 500 gramas" />
                <Input
                    ref={ input => this.filterAmmount = input }
                    label="Quantidade de filtros"
                    hint="Número de caixinhas de filtro" />
                <Button
                    color="primary"
                    onClick= { () => props.onConfirm(this.collaborator.value, 
                            this.coffeeAmount.value, this.filterAmmount.value)}>
                    Confirm </Button>
                <Button onClick={ () => onCancel() }> Cancel </Button>
            </div>
        </Form>
    );
};

AddCoffeeControls.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    collaborators: PropTypes.array.isRequired,
    collaborator: PropTypes.string
};

export default AddCoffeeControls;