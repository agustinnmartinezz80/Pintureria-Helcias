document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado');
    
    // DEBUG: Verificar elementos
    console.log('Botones de pestaña encontrados:', document.querySelectorAll('.tab-button').length);
    console.log('Secciones de productos encontradas:', document.querySelectorAll('.products-section').length);

    // Funcionalidad de pestañas MEJORADA
    const tabButtons = document.querySelectorAll('.tab-button');
    const productSections = document.querySelectorAll('.products-section');

    if (tabButtons.length > 0 && productSections.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Click en pestaña:', this.getAttribute('data-target'));
                
                // Remover clase active de todos los botones
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });
                
                // Remover clase active de todas las secciones
                productSections.forEach(section => {
                    section.classList.remove('active');
                    section.setAttribute('aria-hidden', 'true');
                });

                // Agregar clase active al botón clickeado
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                // Mostrar la sección correspondiente
                const target = this.getAttribute('data-target');
                const targetSection = document.getElementById(target + '-products');
                
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.setAttribute('aria-hidden', 'false');
                    console.log('Sección activada:', targetSection.id);
                    
                    // Opcional: Scroll suave a la sección activada
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                } else {
                    console.error('No se encontró la sección:', target + '-products');
                }
            });
        });

        // Activar la primera pestaña por defecto si no hay ninguna activa
        const activeTab = document.querySelector('.tab-button.active');
        if (!activeTab && tabButtons.length > 0) {
            tabButtons[0].click(); // Simular click en la primera pestaña
        }
    } else {
        console.warn('No se encontraron botones de pestaña o secciones de productos');
    }

    // Smooth scrolling para enlaces internos (MEJORADO)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Actualizar URL sin recargar la página
                history.pushState(null, null, targetId);
            }
        });
    });

    // Manejar pestañas con teclado (accesibilidad)
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    console.log('Sistema de pestañas inicializado correctamente');
});

// Función adicional para cambiar pestañas programáticamente
function cambiarPestaña(targetName) {
    const targetButton = document.querySelector(`.tab-button[data-target="${targetName}"]`);
    if (targetButton) {
        targetButton.click();
    } else {
        console.error('No se encontró el botón de pestaña para:', targetName);
    }
}

// Función para obtener la pestaña actual activa
function obtenerPestañaActiva() {
    const activeButton = document.querySelector('.tab-button.active');
    return activeButton ? activeButton.getAttribute('data-target') : null;
}