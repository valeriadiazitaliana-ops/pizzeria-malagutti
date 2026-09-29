document.addEventListener('DOMContentLoaded', () => {
    console.log("Benvenuto a Malagutti Pizzeria! Menu completo com Doces carregado.");

    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        // Altera dinamicamente as cores de acordo com o hover, simulando movimento da bandeira
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = '#009246'; // Verde Itália
        });
        
        item.addEventListener('mouseleave', () => {
            // Se for um item de sobremesa, volta para a borda cinza/branca original, senão volta para o vermelho
            if (item.classList.contains('dulce-item')) {
                item.style.borderColor = '#e0e0e0';
            } else {
                item.style.borderColor = '#ce2b37'; // Vermelho Itália
            }
        });
    });
});
