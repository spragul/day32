import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Homepagebar from "../sidebar/bookbar";

export function Dashboard() {
    const history = useHistory();
    return (
        <Homepagebar>
            <div className="al-center">
                <h1>BEST LIBRARY </h1>
                <p className="library">
                    <img id="library-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkkXoyCb-C2EUdTAGXffrsb5rRODLC8hspg&usqp=CAU" title="library" alt="library"></img>
                </p>


                <div style={{ display: "flex", flexWrap: "wrap" }}  >
                    <div style={{ width: "100%", height: "100%" }} >
                        <img id="book-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
                            alt="book"
                            title="book"></img>
                        <p><button
                            className="book-btn"
                            onClick={() => (history.push("/book"))}
                        >
                            Book
                        </button>
                        </p>
                    </div>
                    <div style={{ width: "100%", height: "100%" }} >
                        <img id="book-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAGOMRohv3cRYNI8q6GkPOKgUXf0jJjzd2Q&usqp=CAU" title="school" alt="student"></img>
                        <p>
                            <button
                                className="book-btn"
                                onClick={() => (history.push("/admin"))}
                            >
                                Admin Page
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </Homepagebar>


    )
}