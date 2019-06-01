//JavaScript, programación de animaciones

$(document).ready(function () {

    // Animando menu
    $('nav a').each(function (index, elemento) { //Accede a la propiedad de css
        $(this).css({
            'left': '1000px' //Modifica la propiedad margin left
        });

        $(this).animate({ //Devuelve la propiedad margin left a su posicion inicial con una animacion
            left: '0'
        }, 1500 + (index * 200));
    });

    if ($(window).width() > 800) {
        $('.contenedor .carrera').css({
            'left': '-500px'
        });

        $('.contenedor .carrera').animate({
            left: '0'
        }, 1500);

        $('.contenedor .area').css({
            'left': '-700px'
        });

        $('.contenedor .area').animate({
            left: '0'
        }, 1500);

        $('.contenedor .logo').css({
            'opacity': '0',
            'top': '200px'
        });

        $('.contenedor .logo').animate({
            top: '0',
            opacity: '1'
        }, 1500);
    }


    // Animando al bajar a las secciones

    //variables necesarias para guardar la ruta de cada seccion
    var top_ = $('#top').offset().top,
        perfil = $('#primero').offset().top,
        plan = $('#segundo').offset().top,
        conoce = $('#tercero').offset().top,
        galeria = $('#cuarto').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn_perfil').on('click', function (e) { //Funcion con evento Onclick
        e.preventDefault(); //Evita que el '#' se muestre en la direccion URL de la pagina en el navegador
        $('html, body').animate({ //Accede al cuerpo del documento html
            scrollTop: perfil - 100
        }, 500);

        //Animando parrafos
        $('.turismo_parrafo').css({
            'opacity': '0',
            'top': '200px'
        });

        $('.turismo_parrafo').animate({
            top: '0',
            opacity: '1'
        }, 1500);

        $('.bloque_imagen').css({
            'left': '-800px',
            'opacity': '0'
        });

        $('.bloque_imagen').animate({
            left: '0',
            opacity: '1'
        }, 1500);
    });

    $('#btn_plan').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: plan - darDespliegue($(window).width())
        }, 500);

        //Animando tablas
        $('table').css({
            'opacity': '0',
            'top': '200px'
        });

        $('table').animate({
            top: '0',
            opacity: '1'
        }, 1500);
    });

    /*boton de conoce la ut*/
    $('#btn_conoce').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: conoce - 50
        }, 500);

        //Animando parrafos
        $('.ut_parrafos').css({
            'opacity': '0',
            'top': '200px'
        });

        $('.ut_parrafos').animate({
            top: '0',
            opacity: '1'
        }, 1500);

        $('.bloque_imagen2').css({
            'right': '-800px',
            'opacity': '0'
        });

        $('.bloque_imagen2').animate({
            right: '0',
            opacity: '1'
        }, 2500);
    });

    /*boton de galeria*/
    $('#btn_galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 100
        }, 500);

        //Animando galeria
        $('.imagenes').css({
            'opacity': '0',
            'top': '200px'
        });

        $('.imagenes').animate({
            top: '0',
            opacity: '1'
        }, 1200);
    });

    /*Boton de contacto */

    $('#btn_contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - darDespliegue($(window).width())
        }, 500);
    });

    /*Programando boton flotante para subir*/
    $('#btn_arriba').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: top_ - 30
        }, 500);
    });

});

/* Recibe de parametro el ancho de la pantalla del dispositivo y evalua si el
tamaño es mayor a 800 pixeles que por lo general apartir de este tamaño usan los dispositivos
moviles */
function darDespliegue(tamanio){
    if(tamanio > 800){
        return 10;
    }else{
        return 30
    }
}




