import './App.css';
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from "react";

function App() {
    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
        setImages(await searchImages(term));
    };
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
            <ImageList images={images}></ImageList>
        </div>
    );
}

export default App;
