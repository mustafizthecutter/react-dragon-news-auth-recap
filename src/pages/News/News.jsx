import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <div className="text-2xl"> News Detail!!!</div>
                {id}
            </div>
        </div>
    );
};

export default News;