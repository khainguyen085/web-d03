import './style.css';

function UserFunctionalComponent(props) {
  const { name, age, gender } = props

  return (
    <div className="func-component">
      <h1 className="name">Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}

export default UserFunctionalComponent;
