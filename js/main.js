/* ============================================
   JAVASCRIPT PARA FOTO CASTRO
   ============================================ */

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       FUNCIONALIDAD DEL MENÚ HAMBURGUESA
       ============================================ */
    
    // Obtener referencias a los elementos del menú
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    
    // Verificar que los elementos existen antes de agregar eventos
    if (menuButton && menu) {
        // Agregar evento de clic al botón de menú
        menuButton.addEventListener('click', function() {
            // Alternar la clase 'hidden' para mostrar/ocultar el menú
            menu.classList.toggle('hidden');
            
            // Opcional: Cambiar el icono del botón cuando el menú esté abierto
            const icon = menuButton.querySelector('.material-symbols-outlined');
            if (menu.classList.contains('hidden')) {
                icon.textContent = 'menu';
            } else {
                icon.textContent = 'close';
            }
        });
        
        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            // Verificar si el clic fue fuera del menú y del botón
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.add('hidden');
                const icon = menuButton.querySelector('.material-symbols-outlined');
                icon.textContent = 'menu';
            }
        });
    }
    
    /* ============================================
       FUNCIONALIDAD DE NAVEGACIÓN INFERIOR
       ============================================ */
    
    // Obtener todos los enlaces de la navegación inferior
    const navLinks = document.querySelectorAll('footer nav a');
    
    // Función para activar un enlace de navegación
    function setActiveNavLink(activeLink) {
        // Remover la clase activa de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove('text-[var(--primary-color)]');
            link.classList.add('text-[var(--text-secondary)]');
            
            // Cambiar el estilo del texto
            const text = link.querySelector('p');
            if (text) {
                text.classList.remove('font-bold');
                text.classList.add('font-medium');
            }
        });
        
        // Agregar la clase activa al enlace seleccionado
        activeLink.classList.remove('text-[var(--text-secondary)]');
        activeLink.classList.add('text-[var(--primary-color)]');
        
        // Cambiar el estilo del texto del enlace activo
        const activeText = activeLink.querySelector('p');
        if (activeText) {
            activeText.classList.remove('font-medium');
            activeText.classList.add('font-bold');
        }
    }
    
    /* ============================================
       EFECTOS DE ANIMACIÓN
       ============================================ */
    
    // Observador de intersección para animar elementos cuando entran en vista
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);
    
    // Observar las tarjetas de servicios para animarlas
    const serviceCards = document.querySelectorAll('.group');
    serviceCards.forEach(card => {
        observer.observe(card);
    });
    
    /* ============================================
       FUNCIONES AUXILIARES
       ============================================ */
    
    // Función para mostrar/ocultar loading
    function showLoading() {
        // Aquí puedes agregar un spinner o indicador de carga
        console.log('Cargando...');
    }
    
    function hideLoading() {
        // Aquí puedes ocultar el spinner o indicador de carga
        console.log('Carga completa.');
    }
    
    // Función para mostrar mensajes al usuario
    function showMessage(message, type = 'info') {
        // Crear elemento de mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'error' ? 'bg-red-500 text-white' : 
            type === 'success' ? 'bg-green-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        messageDiv.textContent = message;
        
        // Agregar al DOM
        document.body.appendChild(messageDiv);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
    
    /* ============================================
       MANEJO DE ERRORES DE IMÁGENES
       ============================================ */
    
    // Manejar errores de carga de imágenes
    const imageElements = document.querySelectorAll('[style*="background-image"]');
    imageElements.forEach(element => {
        // Crear una imagen temporal para verificar si la URL funciona
        const tempImg = new Image();
        const bgImage = element.style.backgroundImage;
        const urlMatch = bgImage.match(/url\(["']?(.*?)["']?\)/);
        
        if (urlMatch) {
            tempImg.src = urlMatch[1];
            tempImg.onerror = function() {
                // Si la imagen no carga, usar una imagen placeholder
                element.style.backgroundImage = 'url("https://via.placeholder.com/300x300/ea2a33/ffffff?text=Foto+No+Disponible")';
            };
        }
    });
    
    /* ============================================
       INICIALIZACIÓN COMPLETA
       ============================================ */
    
    console.log('Foto Castro - Página cargada correctamente');
    
    // Aquí puedes agregar más funcionalidades según necesites:
    // - Formularios de contacto
    // - Galerías de imágenes
    // - Integración con redes sociales
    // - Sistema de citas
    // etc.
});
