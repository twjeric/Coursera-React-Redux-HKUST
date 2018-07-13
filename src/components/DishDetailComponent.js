import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments:</h4>
            <ul className="list-unstyled">
                {comments.map(comment => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.selectedDish} />
                {props.selectedDish.comments && 
                    <RenderComments comments={props.selectedDish.comments} />
                }
            </div>
        </div>
    );
}

export default DishDetail;
