const Perfil = () => {
    const usuario = {
        nome: "Willian Gabriel",
        avatar: 'https://github.com/WillGMF.png'
    }


    return (
        <>
        <div>
            <img src={usuario.avatar}/>
            <h3>{usuario.nome}</h3>
        </div>
        </>
    )
}