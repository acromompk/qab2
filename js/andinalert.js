function andinalert() {
    (async() => {


        const { value: pais2 } = await Swal.fire({
                title: "Bienvenido",

                text: 'Selecciona tu país',

                html: '<b class="rojo">Selecciona tu país</b>',

                icon: 'question',

                backdrop: true,

                input: 'select',

                inputPlaceholder: 'Pais',

                inputValue: '',

                allowOutsideClick: false,

                showCancelButton: true,

                background: "#000000",

                color: "#ff0000",

                inputOptions: {
                    Bolivia: 'Bolivia',

                    Chile: 'Chile',

                    Parguay: 'Paraguay',
                },


            }

        );

        if (pais2 == 'Bolivia')
            window.location.href = "inicio.html";
        else
            [window.location.href = "iniciouy.html"];


    })();

}