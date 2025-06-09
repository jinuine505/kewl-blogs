import { Link } from "react-router-dom";
import Squares from './Squares';

const NotFound = () => {
    return (
        <div className="not-found">
            <Squares
            className="squares" 
            speed={0.5} 
            squareSize={40}
            borderColor="rgb(239, 239, 239)"
            direction='diagonal'
            hoverFillColor='rgb(145, 82, 247)'
            />
            <h2>NOT FOUND!</h2>
            <p>Page not found</p>
            <Link to="/">Return Home</Link>
        </div>
    );
}
 
export default NotFound;