import './App.css';

function AppJSX() {
  const name = '호준';
  const list = ['우유', '딸기', '바나나'];
  return (
    <div>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default AppJSX;
