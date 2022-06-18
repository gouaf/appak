import "./list.scss";

export default function PorfolioList({ id, title, link, active, setSelected }) {
  return (
    <li
      className={active ? "list active" : "list"}
      onClick={({}) => setSelected(id, link)}
    >
      {title}
    </li>
  );
}
