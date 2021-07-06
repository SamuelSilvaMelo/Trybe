import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        Bem vindo!
      </div>
      <div>
        <Link to="/login">
          <button type="button" >Login</button>
        </Link>
        <Link to="/register-user">
          <button type="button" >Cadastro</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
