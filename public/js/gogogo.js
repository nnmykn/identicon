var btn = document.getElementById('go');


window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
        window.location.assign(`/${inputRef.current.value}`)
    }
}