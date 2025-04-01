import "../styles/dropdown.css";

export default function Dropdown({ name, options }) {
  return (
    <div className="dropdown-container-coordinator">
      <select className="dropdown" name={name} id={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
