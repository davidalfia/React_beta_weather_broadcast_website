import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import Forecast from "./components/Forecast";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu/>}>
                        <Route index element={<Forecast/>}/>
                        <Route path="locations" element={<Locations/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
