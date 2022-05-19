import { Link } from "react-router-dom";
import BottomNav from "../shared/BottomNav";

export default function Home() {
    return (
    <>
    <h1>Home</h1>
    <p>
        <Link to="/liste/175123131">La todo liste</Link>
    </p>
    <BottomNav />
    </>
    )
}