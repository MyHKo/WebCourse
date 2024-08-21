import './App.css'
import {useState} from "react";

function App() {
    const [user, setUser] = useState({})
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)

    const confirmUserData = (data) => {
        setUser(data)
        setConfirmationOpen(true)
    }
    const closeDialog =() => setConfirmationOpen(false)
    const confirm = () => {
        closeDialog();
        setIsConfirmed(true)
    }


  return (
    <>
        <main>
            {isConfirmed ? `Congratulations user ${user.email}`:
            <RegisterForm onSubmit={confirmUserData} />}
        </main>
        <ConfirmDialog
        title="Please confirm registration"
        cancel={closeDialog}
        open={confirmationOpen}
        confirm={confirm}
        >
        <p>Please confirm your email: {user.email}</p>
        </ConfirmDialog>
    </>
  )
}

function RegisterForm({onSubmit}) {
    const [user, setUserData] = useState({email: "", password: ""})

    const setUserEmail = (e) => {
        const email = e.target.value
        setUserData({...user, email})
    }

    const setUserPassword = (e) => {
        const password = e.target.value
        setUserData({ ...user, password})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const { email, password } = user;

        if(!email.includes("@"))
            return

        if(!password.trim())
            return

        onSubmit(user)
    }

    return(
        <>
            <h1>Please register</h1>

            <form onSubmit={handleSubmit}>
                <AppInput
                name="email"
                label="Email"
                type="email"
                onChange={setUserEmail}
                required={user.email}
                />
                <AppInput
                name="pwd"
                label="Password"
                type="password"
                onChange={setUserPassword}
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
