import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export default function DeleteEntry(){
    const navigate = useNavigate
    const {id} = useParams();
    const [logbook, setLogBook] = useOutletContext();

function deleteProduct(){
       fetch(`http://localhost:8080/licences/${id}`, {method: "DELETE"});
       navigate(-1)
    }


    return(
        <>
        <button> Log Hours </button>
        <table>
            <thead>
                <tr>
                    <th> Start Time:</th>
                    <th> End Time: </th>
                    <th> Total Hours </th>
                </tr>
            </thead>
        </table>
        </>
    );
}

