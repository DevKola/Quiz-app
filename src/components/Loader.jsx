// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { ProgressSpinner } from "primereact/progressspinner";

function Loader() {
  return (
    <div className="card flex justify-content-center mt-36">
      <ProgressSpinner />
    </div>
  );
}

export default Loader;
