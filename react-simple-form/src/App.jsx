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
                <AppInput />
                <AppInput />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function ConfirmDialog() {

    return (
        <dialog>
            <div>{title}</div>
            <div>{children}</div>
            <div>
                <button>Confirm</button>
                <button>Cancel</button>
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
