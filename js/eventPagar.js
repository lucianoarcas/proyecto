const confirmar = document.getElementById("confirmar")

confirmar.addEventListener("click", (e) => {

    Swal.fire({
        title: 'Enviar pedido?',
        text: "Nos pondremos en contacto contigo para realizar la entrega",
        icon: 'info',
        iconColor: 'goldenrod',
        color: 'black',
        showCancelButton: true,
        confirmButtonColor: 'goldenrod',
        cancelButtonColor: 'black',
        confirmButtonText: 'Enviar pedido',
        cancelButtonText: 'Cancelar',
        background: 'lightgrey',


    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({

            iconColor: 'goldenrod',
            color: 'black',
            title: 'Perfecto!',
            text: 'Tu pedido fue realizado con éxito!',
            icon: 'success',
            background: 'lightgrey',
            confirmButtonColor: 'goldenrod',

        }
            
            
        )
        }
    })
    


})
        
