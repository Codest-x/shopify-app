import {Routes, Route} from "react-router-dom";
import {SettingsPagePresenter, HomePagePresenter} from "../pages/index.js";

export default function MainRouter(){
    return (
        <Routes>
            <Route path="/" element={<HomePagePresenter/>}/>
            <Route path="/settings" element={<SettingsPagePresenter/>}/>
        </Routes>
    )
}