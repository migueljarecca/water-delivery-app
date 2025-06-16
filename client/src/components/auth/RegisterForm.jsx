
export const RegisterForm = () => {

    return(
        

        <form className="register-form">

            <label>Nombre</label>
            <input 
                type="email"
                name="email"
                // value={email}
                // onChange={onInputChange}
            />

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