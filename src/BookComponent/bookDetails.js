import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Book/provider"
import Sidebar from "../sidebar/sidebar";

export function BookDetails() {
    const { book } = AppState();
    const { id } = useParams();
    const history = useHistory();
    const books = book[id];
    return (
        <Sidebar>
            <div className="book-detail-condinar">
                <div className="Detail-card">
                    <h1 style={{ color: "darkgreen" }}>{books.name}</h1>
                    <img style={{ width: "300px", height: "300px" }} src={books.image} title={books.name} alt={books.names}></img>
                    <p style={{ color: "blue", fontSize: "40px" }}>Author:{books.Author}</p>
                    <p style={{ fontSize: "30px" }}>Description: {books.description}</p>
                    <button
                        style={{ borderRadius: "10px", backgroundColor: "gold" }}
                        onClick={() => history.push("/book")}
                    >Book List</button>
                </div>

            </div>
        </Sidebar>
    )
}