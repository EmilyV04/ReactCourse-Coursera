import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    //Constructor de utileria
    constructor(props) {
        //Suministra los accesorios (props) a la super clase
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    OnDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    //Gira la vista correspondiente para este componente
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                //Los elementos requieren de un atributo clave (key)
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.OnDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

/*
Exportar componente desde este archivo
Necesario para importar este componente en cualquier lugar de la app
*/
export default Menu;