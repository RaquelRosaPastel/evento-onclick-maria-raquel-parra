/**
 * ========================================
 * LÓGICA DE INTERACTIVIDAD (Desafíos Originales)
 * ========================================
 */

/**
 * 1. Cambia el botón "Iniciar sesión" / "Cerrar sesión".
 */
function toggleSession() {
    const sessionBtn = document.getElementById('sessionBtn');
    
    if (sessionBtn.innerText === 'Iniciar sesión') {
        sessionBtn.innerText = 'Cerrar sesión';
    } else {
        sessionBtn.innerText = 'Iniciar sesión';
    }
}

/**
 * 2. y 3. Muestra alerta y aumenta el contador de likes.
 * @param {HTMLElement} buttonElement El botón 'Me gusta' que fue clickeado.
 */
function likeDefinition(buttonElement) {
    const card = buttonElement.closest('.card');
    const title = card.getAttribute('data-title');
    
    // Muestra alerta
    alert("Te gustó la definición de " + title);

    // Aumentar el contador de likes
    const likeCountSpan = buttonElement.querySelector('.likeCount');
    let currentLikes = parseInt(likeCountSpan.innerText);
    currentLikes++;
    likeCountSpan.innerText = currentLikes;
}


/**
 * =================
 * LÓGICA DEL MODAL 
 * =================
 */

/**
 * Muestra la ventana modal.
 */
function openModal() {
    const modal = document.getElementById('definitionModal');
    modal.style.display = 'block';
}

/**
 * Oculta la ventana modal y limpia el formulario.
 */
function closeModal() {
    const modal = document.getElementById('definitionModal');
    modal.style.display = 'none';
    document.getElementById('definitionForm').reset();
}

/**
 * Función que crea y agrega una nueva tarjeta de definición al DOM.
 * @param {string} title Título de la definición.
 * @param {string} plural Plural de la definición.
 * @param {string} description Descripción.
 */
function appendNewDefinition(title, plural, description) {
    const definitionsContainer = document.querySelector('.definitions-container');
    
    // Crear el nuevo elemento de tarjeta (como plantilla)
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute('data-title', title);
    
    // Generar el HTML interno para la nueva tarjeta
    newCard.innerHTML = `
        <div class="card-content">
            <div class="image-wrapper">
                <img src="https://picsum.photos/200/150?random=${Math.floor(Math.random() * 1000)}" alt="${title}">
                <button class="likeBtn image-overlay-btn" onclick="likeDefinition(this)">
                    <span class="likeCount">0</span> me gusta
                </button>
            </div>
            <div class="text-content">
                <h2>${title}</h2>
                <p class="type">sustantivo</p>
                <p><strong>Plural:</strong> ${plural || 'N/A'}</p>
                <p>${description}</p>
            </div>
        </div>
    `;

    // Insertar la nueva tarjeta al inicio del contenedor
    definitionsContainer.prepend(newCard);
}


/**
 * Maneja el envío del formulario del modal.
 */
document.getElementById('definitionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Detiene el envío normal del formulario

    // 1. Recopila los datos del formulario
    const title = document.getElementById('title').value;
    const plural = document.getElementById('plural').value;
    const description = document.getElementById('description').value;
    
    // 2. Agrega la nueva definición a la página (LÓGICA CLAVE)
    appendNewDefinition(title, plural, description);

    // 3. Muestra una alerta de confirmación
    alert(`¡Definición "${title}" agregada con éxito!`);

    // 4. Oculta el modal
    closeModal();
});

// Permite cerrar el modal haciendo clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('definitionModal');
    if (event.target == modal) {
        closeModal();
    }
}

/**
 * 🌟 NUEVA FUNCIÓN: Simula la acción de búsqueda.
 */
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        alert(`Buscando: "${searchTerm}"...`);
        // Aquí iría la lógica real para filtrar las tarjetas
    } else {
        alert('Por favor, ingresa un término de búsqueda.');
    }
}