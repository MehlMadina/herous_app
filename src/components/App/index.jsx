import HerousCard from "../HerousCard";
import { herous } from "../../data/herous";
import s from "./index.module.css";

function App() {
  return (
    <div>
      <p className={s.title}>My favorite Anime Herous!</p>
      <div className={s.block}>
        {herous.map((el) => (
          <HerousCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default App;
