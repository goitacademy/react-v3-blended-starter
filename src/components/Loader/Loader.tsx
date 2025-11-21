import style from "./Loader.module.css";
import { PropagateLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <PropagateLoader />
    </div>
  );
}
