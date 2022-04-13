function alerteishon() {
    (async() => {


        const { value: pais } = await Swal.fire({

            title: "Bienvenido",

            text: 'Selecciona tu país',

            icon: 'question',

            backdrop: true,

            input: 'select',

            inputPlaceholder: 'Pais',

            inputValue: '',

            allowOutsideClick: false,

            showCancelButton: true,



            inputOptions: {

                Argentina: 'Argentina',

                Uruguay: 'Uruguay',



            }

        });

        if (pais == 'Argentina')
            window.location.href = "inicio.html"
        else [window.location.href = "iniciouy.html"]


    })()

}