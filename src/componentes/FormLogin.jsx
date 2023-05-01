import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Productos from "./componentes/Productos";
import Detalle from "./componentes/Detalle";

export const ForLogin = () => {

    const [miLogin, setLogin] = useState("false");
    const [use, setUse] = useState("");
    const [pass, setPass] = useState("");

    function iniciarSesion (e){
        e.preventDefault(); //evitar que la pagina se recargue
        let usuario = document.getElementById("usuario").value; //capturar lo que este en el campo
        let password = document.getElementById("password").value;
        //Para validar los campos
        if (usuario.length === 0 || password.length === 0){
            alert("Todos los campos son requeridos!!!!!");
        }else{
            if (use === "Admin" && pass === "root" || use === "Usuario" && pass === "123"){
                setLogin("true");
                document.getElementById("forma").style.display = "none"; //Ocultar el formulario
            }else{
                setLogin("false");
                alert("Usuario o contraseña incorrectos!!!!!");
                document.getElementById("usuario").value = ""; //Para limpiar los campos
                document.getElementById("password").value = "";
                document.getElementById("usuario").focus();     // Para dejar el cursor en el campo
            }
        }
    }

    return (
        <selection  className={LoginStyle.contenedor}>
            
                <form id='forma'>
                    <h2>Acceso</h2>
                    <article className={LoginStyle.elemento}>
                        <label htmlFor="usuario">
                            Usuario
                        </label>
                        <input type="text" id='usuario' name='usuario' onChange={(e) => setUse(e.target.value)} required='true'/>
                    </article>
                    <article className={LoginStyle.elemento}>
                        <label htmlFor="password">
                            Contraseña
                        </label>
                        <input type="password" id='password' name='password' onChange={(e) => setPass(e.target.value)} required='true'/>
                    </article>
                    <article class={LoginStyle.elemento}>
                        <input type="submit" value="Enviar" onClick={iniciarSesion}/>
                    </article>
                </form>
                
                {miLogin === "true" && <Navbar usuario={use}/> }    
                {miLogin === "true" && <Main/> }  
                {miLogin === "true" && <Catalogo/> } 
                {miLogin === "true" && <Productos/> } 
                {miLogin === "true" && <Detalle/> } 
            
        </selection>
    )
}

export default ForLogin;