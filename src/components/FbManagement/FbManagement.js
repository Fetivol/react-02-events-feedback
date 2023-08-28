export const FbManagement = ({ options, onClick }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button onClick={() => onClick(option)}>{option}</button>
          </li>
        );
      })}
    </ul>
  );
};
