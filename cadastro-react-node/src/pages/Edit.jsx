import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [active, setActive] = useState(false);

  const bd = moment(birthday).utc().format("YYYY-MM-DD");

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = () => {
    setActive(!active);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const user = {
      id,
      name,
      birthday: bd,
      email,
      occupation,
      active,
    };

    fetch("https://cadastro-node-mysql.vercel.app/users/update", {
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
    navigate("/users");
  };

  const fetchData = () => {
    fetch(`https://cadastro-node-mysql.vercel.app/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
        setBirthday(data.birthday);
        setEmail(data.email);
        setOccupation(data.occupation);
        setActive(data.active);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="page-title">
        Editar dados de{" "}
        <span className="yellow">{user && user.name.toUpperCase()}</span>
      </h2>

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
              value={bd}
              onChange={(e) => setBirthday(e.target.value)}
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
              placeholder="Digite a profissão"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="check-control">
            <label htmlFor="active">Ativo</label>
            <input type="checkbox" checked={active} onChange={handleChange} />
          </div>
          <div className="users-container">
            <div className="actions">
              <button onClick={() => navigate(`/users/${user.id}`)}>Cancelar</button>
              <button onClick={handleUpdate}>Salvar</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Edit;
