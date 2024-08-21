import './App.css'

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

    return(
        <>
            <h1>Please register</h1>

            <form>
                <AppInput
                name="email"
                label="Label"
                type="email"
                onChage={console.log}
                required={true}
                />
                <AppInput
                name="pwd"
                label="Password"
                type="email"
                onChage={console.log}
                required={true}
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
