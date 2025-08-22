# Foto Castro - Página Web Estática

Sitio web completamente estático para estudio fotográfico, compatible con Live Server y hosting web simple.

## 📁 Estructura del Proyecto

```
# 📸 Foto Castro - Sitio Web del Estudio Fotográfico

Un sitio web moderno y responsivo para el estudio fotográfico Foto Castro, especializado en fotografía de eventos y sesiones especiales.

## ✨ Características

- **Sitio web estático** con diseño moderno y responsivo
- **Sistema de gestión de trabajos** con panel de administración
- **Verificación de estado de trabajos** para clientes
- **Galería de servicios** con categorías especializadas
- **Integración con WhatsApp** para contacto directo
- **Diseño adaptable** para móviles y escritorio

## 🎯 Servicios Fotográficos

- Matrimonios
- Quinceañeros (15 años)
- Sesiones Newborn
- Fotografía Pre-mamá
- Sesiones de Bebés
- Eventos Religiosos
- Eventos Corporativos
- Foto Estudio

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura del sitio
- **CSS3** - Estilos personalizados
- **JavaScript ES6+** - Funcionalidad interactiva
- **Tailwind CSS** - Framework de CSS utilitario
- **Material Symbols** - Iconografía moderna
- **LocalStorage** - Almacenamiento de datos local

## 📱 Características Técnicas

- **Responsive Design** - Compatible con todos los dispositivos
- **PWA Ready** - Preparado para Progressive Web App
- **SEO Optimizado** - Estructura optimizada para buscadores
- **Carga Rápida** - Optimizado para rendimiento
- **Sin Dependencias Backend** - Funciona completamente en el frontend

## 🗂️ Estructura del Proyecto

```
paginaFotoCastro/
├── index.html              # Página principal
├── admin/
│   └── admin-auto.html     # Panel de administración
├── pages/
│   ├── categorias.html     # Página de servicios
│   ├── contacto.html       # Información de contacto
│   ├── verificar-trabajo.html  # Verificación para clientes
│   ├── acerca-de.html      # Información del estudio
│   └── galeria-*.html      # Galerías por categoría
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── main.js            # JavaScript principal
└── images/                # Recursos gráficos
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd paginaFotoCastro
   ```

2. **Abrir en navegador:**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local como Live Server

3. **Panel de Administración:**
   - Accede a `admin/admin-auto.html`
   - Contraseña por defecto: `Candy2024.`

## 🔧 Configuración

### Panel de Administración
- **Ubicación:** `/admin/admin-auto.html`
- **Contraseña:** Configurable en el archivo (línea 365)
- **Funciones:** Crear, editar y gestionar trabajos de clientes

### Sistema de Verificación
- **Ubicación:** `/pages/verificar-trabajo.html`
- **Función:** Los clientes pueden verificar el estado de sus trabajos
- **Búsqueda:** Por palabra clave (insensible a mayúsculas/minúsculas)

## 📞 Contacto

- **WhatsApp:** +57 312 416 7936
- **Ubicación:** [Agregar ubicación]
- **Email:** [Agregar email si corresponde]

## 🔒 Seguridad

- Panel administrativo protegido por contraseña
- Sesiones con timeout automático (30 minutos)
- Datos almacenados localmente en el navegador

## 📄 Licencia

Este proyecto es privado y pertenece a Foto Castro.

## 🤝 Contribución

Para modificaciones o mejoras, contactar directamente con el propietario del estudio.

---

**Desarrollado para Foto Castro** - Capturando tus mejores momentos ✨
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   └── main.js         # JavaScript funcional
├── pages/              # Páginas adicionales
│   ├── categorias.html # Lista de servicios
│   ├── galeria-*.html  # Galerías estáticas por categoría
│   ├── contacto.html   # Información de contacto
│   ├── acerca-de.html  # Información del estudio
│   └── verificar-trabajo.html # Estado de trabajos
├── images/             # Imágenes locales
│   └── uploads/        # Imágenes de galerías organizadas por categorías
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Live Server (Recomendado para desarrollo)
1. Abre VS Code
2. Instala la extensión "Live Server"
3. Haz clic derecho en `index.html` → "Open with Live Server"
4. Se abrirá en `http://localhost:5500`

### Opción 2: Abrir directamente
1. Abre `index.html` en cualquier navegador web
2. Todas las funcionalidades estarán disponibles

### Opción 3: Subir a hosting web
1. Sube todos los archivos a tu hosting
2. Asegúrate de que `index.html` esté en la raíz
3. El sitio funcionará inmediatamente

## 🎨 Cómo Personalizar la Página

### Cambiar Colores del Tema

En el archivo `css/styles.css`, modifica estas variables:

```css
:root {
  --primary-color: #ea2a33;  /* Color principal (actualmente rojo) */
}
```

### Modificar Textos Principales

En el archivo `index.html`, busca estos elementos:

1. **Nombre del estudio** (línea ~47):
   ```html
   <h1 class="text-xl font-bold text-[var(--text-primary)]">Foto Castro</h1>
   ```

2. **Título principal** (línea ~72):
   ```html
   <h2 class="text-3xl font-bold text-[var(--text-primary)] mt-2">Foto Castro</h2>
   ```

3. **Descripción** (línea ~74):
   ```html
   <p class="text-base text-[var(--text-secondary)]">Capturando tus mejores momentos</p>
   ```

### Cambiar Enlaces del Menú

En el archivo `index.html`, busca la sección del menú (línea ~57):

```html
<nav class="hidden absolute top-full left-0 w-full bg-[var(--background-primary)] shadow-md" id="menu">
    <a href="#">Servicios</a>      <!-- Cambiar enlace aquí -->
    <a href="#">Portafolio</a>     <!-- Cambiar enlace aquí -->
    <a href="#">Contacto</a>       <!-- Cambiar enlace aquí -->
    <a href="#">Verificar Trabajo</a> <!-- Cambiar enlace aquí -->
</nav>
```

### Modificar Servicios

Para cambiar los servicios mostrados, edita la sección del grid (línea ~86):

1. **Cambiar imagen**: Modifica la URL en `background-image`
2. **Cambiar texto**: Modifica el contenido del elemento `<p>`
3. **Cambiar enlace**: Modifica el atributo `href` del elemento `<a>`

### Personalizar Navegación Inferior

En el archivo `index.html`, busca el footer (línea ~145):

- Cambiar iconos: Modifica el texto dentro de `<span class="material-symbols-outlined">`
- Cambiar textos: Modifica el contenido de los elementos `<p>`
- Cambiar enlaces: Modifica los atributos `href`

## 🔧 Funcionalidades Implementadas

### JavaScript (main.js)

1. **Menú Hamburguesa**: Se abre/cierra al hacer clic
2. **Cierre automático**: El menú se cierra al hacer clic fuera
3. **Navegación activa**: Resalta la sección actual
4. **Manejo de errores**: Imágenes placeholder si no cargan
5. **Animaciones**: Efectos de entrada suaves

### CSS (styles.css)

1. **Tema automático**: Detecta tema claro/oscuro del sistema
2. **Diseño responsive**: Se adapta a móvil y escritorio
3. **Animaciones**: Efectos hover y transiciones
4. **Variables CSS**: Fácil personalización de colores

## 📱 Características Móviles

- ✅ Diseño optimizado para celular
- ✅ Navegación táctil
- ✅ Menú hamburguesa
- ✅ Footer de navegación fijo
- ✅ Imágenes adaptables
- ✅ Fuentes legibles

## 🚀 Próximos Pasos

Para agregar las sub-páginas:

1. Crea archivos HTML en la carpeta `pages/`
2. Conecta los enlaces del menú a estas páginas
3. Mantén la misma estructura y estilos
4. Usa el mismo header y footer para consistencia

## 🎯 Elementos Personalizables Rápidos

### Cambios Simples:
- Nombre del estudio: Buscar "Foto Castro"
- Color principal: Variable `--primary-color`
- Imágenes de servicios: URLs en `background-image`
- Textos de servicios: Elementos `<p>` bajo cada imagen

### Cambios Avanzados:
- Agregar más servicios: Duplicar estructura en el grid
- Nuevas páginas: Crear archivos en carpeta `pages/`
- Formularios: Agregar en nuevas secciones
- Integración social: Modificar footer o header

## 📞 Soporte

Para modificaciones específicas, los comentarios en el código indican exactamente dónde hacer cada cambio.
