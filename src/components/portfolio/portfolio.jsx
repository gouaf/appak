import { useEffect, useState } from "react";
import "./portfolio.scss";
import PorfolioList from "../../components/porfolioList/PorfolioList";
import { React, Javascript, Design, Animations } from "../../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("React");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "React",
      title: "React"
    },
    {
      id: "Animations",
      title: "Animations"
    },
    {
      id: "Javascript",
      title: "Javascript"
    },
    {
      id: "Design",
      title: "Design"
    }
  ];
  //select run data
  useEffect(() => {
    switch (selected) {
      case "React":
        setData(React);
        break;

      case "Javascript":
        setData(Javascript);
        break;

      case "Design":
        setData(Design);
        break;

      case "Animations":
        setData(Animations);
        break;
      default:
        setData(React);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PorfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h2>{d.link}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
