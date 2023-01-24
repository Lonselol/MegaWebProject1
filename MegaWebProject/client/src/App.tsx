import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <AuthContextProvider>
            <HomePage />
        </AuthContextProvider>
        )
}
export default App;