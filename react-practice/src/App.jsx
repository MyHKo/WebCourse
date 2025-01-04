
function Header(){
    return (
        <h1>This is a header</h1>
    )
}

function MainText(){
    return (
        <p>This is a main text</p>
    )
}

function Content(){
    return (
        <div>
            <Header />
            <MainText />
        </div>
    )
}

function App() {

  return (
    <>
      <div>
          <Content />
      </div>
    </>
  )
}


export default App
