import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function SignupPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/login");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const body = new URLSearchParams();
    body.append("firstname", data.firstname);
    body.append("lastname", data.lastname);
    body.append("email", data.email);
    body.append("password", data.password);
    body.append("is_active", true);
    body.append("org_id", "1");
    body.append("refresh_token", "1234");
    body.append("groups", "1");

    console.log("user data", data);

    const fetchData = async () => {
      setIsLoading(true);

      const options = {
        method: "POST",
        body: urlencoded,
      };

      fetch("http://localhost:4000/users", options)
        .then((res) => res.json())
        .then((data) => {
          setMessage("Din profil er nu oprettet");
        })
        .catch((error) => {
          console.error("Der opstod en fejl", error);
          setError("Der opstod en fejl. Prøv igen senere");
        });
    };
    fetchData();
  };

  return (
    <>
      <h2>Opret ny bruger</h2>
      <p>
        Indtast dine oplysninger for at oprette en ny bruger på Hotel Overlook
      </p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            autoComplete="email"
            placeholder="E-mail"
            {...register("email", {
              required: "E-mailen er nødvendig.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ugyldigt e-mailformat",
              },
            })}
          />
          <input
            type="text"
            placeholder="First name"
            {...register("firstname", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            {...register("lastname", { required: true, maxLength: 100 })}
          />
          {error.username && <p>{error.username.message}</p>}
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Adgangskode"
            {...register("password", {
              required: "Koden er nødvendig.",
              minLength: {
                value: 5,
                message: "Adgangskoden skal være mindst 5 tegn lang",
              },
            })}
          />
          {error.password && <p>{error.password.message}</p>}

          <div className={s.Buttons}>
            <input type="submit" className={s.Button} value="Opret bruger" />
          </div>
        </form>
      </div>

      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </>
  );
}
