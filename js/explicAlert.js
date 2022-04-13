function explicAlert() {
    (async() => {


        const { value: pais } = await Swal.fire({



            html: "<p>Es nuestro nuevo sistema de gestión donde podras:</p><br>- Realizar Altas y bajas<p></p><br><p>-Modificar tu OOSS</p><br><p>-Cambio de posiciones</p>",

            icon: 'none',

            backdrop: true,

            imageUrl: "resources/workday.jpg",

            allowOutsideClick: true,

            confirmButtonText: 'Entendido',

            imageHeight: 200,
            imageWidth: 200,

        }).then(okay => {
        if (okay) {
        window.location.href = "https://www.myworkday.com/abinbev/d/home.htmld"
        }
        });



    })()

}
