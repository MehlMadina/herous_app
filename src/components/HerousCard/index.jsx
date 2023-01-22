import React from "react";
import s from "./index.module.css";

export default function HerousCard({ firstname, lastname, anime, avatar }) {
  return (
    <div className={s.card}>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <img src={avatar} alt="#" className={s.avatar} />
      <p className={s.anime_title}>{anime}</p>
    </div>
  );
}
