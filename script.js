
        // Funcionalidad de pestañas
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones y secciones
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.products-section').forEach(section => section.classList.remove('active'));

                // Agregar clase active al botón clickeado
                button.classList.add('active');

                // Mostrar la sección correspondiente
                const target = button.getAttribute('data-target');
                document.getElementById(`${target}-products`).classList.add('active');
            });
        });

        // Smooth scrolling para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });




    // Funcionalidad de pestañas
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y secciones
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.products-section').forEach(section => section.classList.remove('active'));

            // Agregar clase active al botón clickeado
            button.classList.add('active');

            // Mostrar la sección correspondiente
            const target = button.getAttribute('data-target');
            document.getElementById(`${target}-products`).classList.add('active');
        });
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });