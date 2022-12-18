import "./toggle-switch.css";

function ToggleSwitch({onChange, checked}) {
    
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="switch" />
      </label>
    );
  }
  export default ToggleSwitch;