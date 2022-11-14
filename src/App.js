import "./styles/App.css";
import AppRoutes from "./Routes";
import {BrowserRouter} from 'react-router-dom';

export default function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
