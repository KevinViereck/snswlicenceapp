import { Link } from "react-router-dom"

export default function HomePage(){
    
    return(
        <div>
            <section>
            <h4 className="left"> Home </h4>
            </section>
            <section>
            <p className="p"> Welcome to the NSW Driving Licence Application </p>
            </section>
            <section>
                <h4 className="right"> <Link to="/register"> Register </Link> </h4>
                <h4 className="right"> <Link to="/login"> Login </Link></h4>
            </section>

        </div>
    )
}
