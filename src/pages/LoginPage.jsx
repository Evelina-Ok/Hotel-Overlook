import { useContext, useState } from "react"
import { UserContext } from "../context/userContext";
import { InputField } from "../components/InputField/InputField";


export function LoginPage () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState();
    const [error, setError] = useState();

    console.log('input', email, password);

    const { setUserData } = useContext(UserContext);

    function submitData() {
        const body = new URLSearchParams();
        body.append("username", email);
        body.append("password", password);

        const options = {
            method: "POST",
            body: body,
        };

        fetch("http://localhost:4000/login", options)
        .then ((res) = res.json())
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
    }

    return (
      <>
      
        <h1>Login</h1>
        <h5>{loginMessage}</h5>
        <form>
          <InputField
            type="email"
            placeholder="Indtast din mail"
            email="Email"
            id="emailField"
            labelText="Email"
            name="Email"
            action={setEmail}
          />

          <InputField
            type="password"
            placeholder="Indtast dit password"
            password="Password"
            id="passwordField"
            labelText="Password"
            action={setPassword}
          />
        </form>
        {/* button should never be inside the form as it's going to refresh the form. Or use prevent default */}
        <button onClick={() => submitData()}>Send</button>
      
      </>
    )
}