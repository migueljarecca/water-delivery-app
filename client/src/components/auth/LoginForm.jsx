
export const LoginForm = () => {

    return(
        <form className="login-form">

            <label>Correo electrónico</label>
            <input 
                type="email"
                name="email"
                // value={email}
                // onChange={onInputChange}
            />

            <label>Contraseña:</label>
            <input 
                type="password"
                name="password"
                // value={password}
                // onChange={onInputChange}
            />  

            <button
                type="submit"
            >
            Iniciar
            </button> 
        
        </form>
    )
}