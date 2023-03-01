import react from 'react'

const container = () => {
    return (
        <div className='login'>
          <h2 className='text'>
            Login
          </h2>
          <form>
            <input type = "text" placeholder='Email'></input>
            <input type= "password" placeholder='Senha'></input>
            <input type = "submit" value="Entrar"></input>
          </form>
          <p>Nao é Usuario? <a href=""> Criar Conta</a></p>
        </div>
    );
}

export default container