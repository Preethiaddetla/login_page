function myfun(){
    let username1= document.getElementById('username_input').value 
    let password1= document.getElementById('password_input').value 

    if(username1=="preethiaddetla" && password1=="preethi1807"){
        window.location='home.html'
    }

    else{
        document.getElementById('result').innerHTML='Oops..Invalid Username Or password.'
    }
}