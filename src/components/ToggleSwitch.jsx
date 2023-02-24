import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../store/themeSlice';

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [values, setValues] = useState(['1', '2', '3']);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedValue = values[selectedIndex];

  const handleClick = () => {
    setSelectedIndex((selectedIndex + 1) % values.length);
    dispatch(switchTheme((selectedIndex + 1) % values.length));
  };

  const transitionDistance = () => {
    if (selectedIndex === 0) {
      return selectedIndex + 0.2;
    } else {
      return selectedIndex;
    }
  };

  return (
    <div className="toggle-container">
      <div className="toggle-nums">
        {values.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
      <div className={`toggle-switch toggle-${theme}`} onClick={handleClick}>
        <div
          className={`toggle-switch-ball toggle-ball-${theme}`}
          style={{ left: `${transitionDistance() * 33.33}%` }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
