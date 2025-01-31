import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { InputField } from "../components/InputField/InputField";
import { useForm } from "react-hook-form";

export function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginMessage, setLoginMessage] = useState("");
  const [error, setError] = useState(null);

  console.log("input", email, password);

  const { setUserData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", data.username);
    urlencoded.append("password", data.password);

    const options = {
      method: "POST",
      body: body,
    };

    fetch("http://localhost:4000/login", options)
      .then((res = res.json()))
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage(
            `Du er nu logget ind... Velkommen tilbage ${data.user.firstname}`
          );
        } else {
          setLoginMessage("Du har indtastet forkert password eller email");
        }
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <h1>Login</h1>
      <h5>{loginMessage}</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="Indtast din mail"
          email="Email"
          id="emailField"
          labelText="Email"
          name="Email"
          action={setEmail}
          {...register("username", {
            required: "E-mailen er nødvendig.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Ugyldigt e-mail",
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <InputField
          type="password"
          placeholder="Indtast dit password"
          password="Password"
          id="passwordField"
          labelText="Password"
          action={setPassword}
          {...register("password", {
            required: "Koden er nødvendig.",
            minLength: {
              value: 5,
              message: "Adgangskoden skal være mindst 5 tegn lang",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </form>
      {/* button should never be inside the form as it's going to refresh the form. Or use prevent default */}
      <button onClick={() => submitData()}>Login</button>
    </>
  );
}
