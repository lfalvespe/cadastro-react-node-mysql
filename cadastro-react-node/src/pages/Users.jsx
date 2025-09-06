import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [active, setActive] = useState(false);

  const fetchData = () => {
    fetch("https://cadastro-node-mysql.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersList(data);
      })
      .catch((err) => console.log(err));
  };

  const clearData = () => {
    setName('');
    setBirthday('');
    setEmail('');
    setOccupation('');
    setActive(false);
    setMessage('')
  };

  useEffect(() => {
    fetchData();
  }, [usersList]);

  const handleChange = () => {
    setActive(!active);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !birthday || !email || !occupation) {
      setMessage("Preencha todos os campos!");
      return;
    }

    const user = {
      name,
      birthday,
      email,
      occupation,
      active,
    };

    fetch("https://cadastro-node-mysql.vercel.app/users/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucesso: ", data);
      })
      .catch((err) => console.log("Erro: ", err));

    clearData();
  };

  return (
    <div>
      <h2 className="page-title">Cadastrar novo usuário</h2>

      <form>
        <fieldset className="register-form">
          <legend>Dados do novo usuário</legend>
          <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              placeholder="Digite o nome do usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="birthday">Data de Nasc.:</label>
            <input
              type="date"
              name="birthday"
              placeholder="Digite o nome do usuário"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Digite o nome do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="occupation">Profissão:</label>
            <input
              type="text"
              name="occupation"
              placeholder="Digite o nome do usuário"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="check-control">
            <label htmlFor="active">Ativo</label>
            <input type="checkbox" checked={active} onChange={handleChange} />
          </div>
          <button onClick={handleRegister}>Cadastrar</button>
        </fieldset>
      </form>

      <hr />

      <div className="message orange">{message && <h4>{message}</h4>}</div>

      <h2>Usuários cadastrados</h2>

      <div className="users-container">
        {usersList &&
          usersList.map((u) => (
            <div key={u.id} className="user-data">
              <span className="user-name">{u.name}</span>

              {u.active ? (
                <span className="green user-active">'Ativo'</span>
              ) : (
                <span className="red user-active">'Inativo'</span>
              )}
              <span>
                <button onClick={() => navigate(`/users/${u.id}`)}>
                  Detalhes
                </button>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
