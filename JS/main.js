$(document).ready(function () {
    $('#carrocel-img').slick({
        autoplay: true
    });


    $(".menu-hamburguer").click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo: {
                required: false
            }
            
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'digite seu número com DDD.',
            email: 'Por favor, insira seu e-mail.',
            mensagem: 'Deixe sua mensagem aqui.' 
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if( camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})