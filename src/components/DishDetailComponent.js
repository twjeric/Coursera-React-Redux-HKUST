import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments(dish) {
        return (
            <ul className="list-unstyled">
                {dish.comments.map(comment => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>{"-- " + comment.author + " ," + comment.date}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }

    render() {
        const dish = this.props.selectedDish;
        if (dish) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments:</h4>
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }
}

export default DishDetail;
