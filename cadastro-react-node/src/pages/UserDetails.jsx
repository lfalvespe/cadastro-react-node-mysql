import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://cadastro-node-mysql.vercel.app/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  const handleDelete = (userId) => {
    const json = {
      id: userId,
    };

    fetch("https://cadastro-node-mysql.vercel.app/users/delete", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(json),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucesso: ", data);
      })
      .catch((err) => console.log("Erro: ", err));
    navigate("/users");
  };

  return (
    <div>
      <h2 className="page-title">
        Detalhes de <span className="yellow">{user && user.name.toUpperCase()}</span>
      </h2>

      {user && (
        <div className="users-container">
          <div className="user-data">
            <span className="user-name">{user.name}</span>
            <span className="user-email gray">{user.email}</span>
            <span className="user-occupation orange">{user.occupation}</span>
            {user.active ? (
              <span className="green user-active">'Ativo'</span>
            ) : (
              <span className="red user-active">'Inativo'</span>
            )}
          </div>
          <span className="actions">
            <button className="edit-btn" onClick={() => navigate('/users')}>
              Voltar
            </button>
            <button className="edit-btn" onClick={() => handleEdit(user.id)}>
              Editar
            </button>
            <button className="del-btn" onClick={() => handleDelete(user.id)}>
              Excluir
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
