function getuser(){
    return JSON.parse(localStorage.getItem('user'));
}

function loginUser(){
    localStorage.setItem('user', JSON.stringify({name:'Prachi Sardekar'}))
}