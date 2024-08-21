import './App.css'
import {useState} from "react";

function App() {

  return (
    <>
        <main>
            <RegisterForm />
        </main>
        <ConfirmDialog />
    </>
  )
}

function RegisterForm() {
    const [user, setUserData] = useState({email: "", password: ""})

    const setUserEmail = (e) => {
        const email = e.target.value
        setUserData({...user, email})
    }

    const setUserPassword = (e) => {
        const password = e.target.value
        setUserData({ ...user, password})
    }

    return(
        <>
            <h1>Please register</h1>

            <form>
                <AppInput
                name="email"
                label="Label"
                type="email"
                onChage={setUserEmail}
                required={user.email}
                />
                <AppInput
                name="pwd"
                label="Password"
                type="email"
                onChage={setUserPassword}
                required={user.password}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function ConfirmDialog({title, children, confirm, cancel, open}) {

    return (
        <dialog open={open}>
            <div>{title}</div>
            <div>{children}</div>
            <div>
                <button type="button" onClick={confirm}>Confirm</button>
                <button type="button" onClick={cancel}>Cancel</button>
            </div>
        </dialog>
    )
}

function AppInput({label, name, ...rest}){
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest}/>
        </div>
    )
}

export default App
