const textarea = document.createElement('textarea')
let td = document.querySelector('.s')


document.addEventListener("click", (event) => {
    if(event.target.tagName !== 'TD')
        return
    td = event.target
    textarea.value = td.innerHTML;
    textarea.style.width = td.offsetWidth + 20 + "px";
    textarea.style.height = td.offsetHeight + 20 + "px";
    td.replaceWith(textarea)

    const cancel = document.createElement("button")
    document.body.append(cancel);
    cancel.textContent = "CANCEL"
    cancel.style.position = 'absolute';
    cancel.style.top = textarea.getBoundingClientRect().bottom + 'px'
    cancel.style.left = textarea.getBoundingClientRect().right - cancel.offsetWidth + 'px'

    const ok = document.createElement('button')
    document.body.append(ok)
    ok.textContent = "OK"
    ok.style.position = 'absolute'
    ok.style.top = textarea.getBoundingClientRect().bottom + 'px'
    ok.style.left = cancel.getBoundingClientRect().left - ok.offsetWidth + 'px'

    cancel.addEventListener('click', () => {
        textarea.replaceWith(td)
        ok.remove()
        cancel.remove()
    })

    ok.addEventListener('click', () => {
        td.innerHTML = textarea.value
        textarea.replaceWith(td)
        ok.remove()
        cancel.remove()
    })
})