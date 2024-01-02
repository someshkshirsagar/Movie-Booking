export class Login{

    set email(email){
        this._email=email;
    }
    set password(password){
        this._password=password;
    }
    set id(id){
        this._id=id;
    }
    
    get email(){
        return this._email;
    }
    get id(){
        return this._id;
    }
    get password(){
        return this._password;
    }
}
export default Login;