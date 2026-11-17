# Publicación por el administrador de la empresa

## Generar el sitio

1. Clonar el repositorio y utilizar Node.js 20 o posterior.
2. Ejecutar `npm run check`.
3. Ejecutar `npm run build`.
4. Copiar **solo el contenido de dist/** a la carpeta de publicación del servidor.

No se requieren dependencias de npm, un servidor Node en producción, base de datos, claves API ni variables de entorno. No publique la raíz del repositorio: contiene originales editables, documentación y el historial de Git.

## Acceso restringido

El público autorizado es **personal autorizado de la empresa**. Antes de habilitar una URL accesible, configure la autenticación en el servidor o en el proxy de acceso corporativo. Aplique esa protección a todos los archivos, incluyendo los HTML individuales y el manual, y sirva el sitio mediante HTTPS.

El sitio no incluye un sistema propio de usuarios. Ocultar una URL, un botón o una vista de operarios no protege su contenido. La privacidad del repositorio de GitHub tampoco protege una web publicada por separado.

## Rutas y navegación

La entrada es `index.html`. Los otros tres HTML son accesos directos a cada tipo de mapa. `guia.html` contiene instrucciones de uso y `manuales/index.html` abre los documentos de consulta como páginas web. No hace falta redirigir todas las rutas a index.html: se generan archivos estáticos reales.

Puede alojarse en una subcarpeta porque los enlaces son relativos. No altere la estructura interna de dist/. Sirva `.html` como `text/html; charset=utf-8`.

Los mapas contienen sus estilos, código y datos embebidos. Si el servidor impone una Content-Security-Policy, debe ser compatible con el código y estilos inline existentes; el HTML incluye su propia política limitada. Una política del servidor que bloquee los scripts inline impedirá la navegación.

## Comprobación en el servidor

- Un visitante no autorizado debe ser rechazado también al abrir directamente un HTML individual o una página del manual.
- Un usuario autorizado debe poder abrir los tres mapas, cambiar sus filtros de forma independiente y consultar una descripción.
- Compruebe arrastre, zoom, pantalla completa y salida con Esc. La pantalla completa depende del navegador; si se bloquea, se ofrece vista ampliada. Si se incrusta en un iframe, configure sus permisos de pantalla completa.
- Compruebe la leyenda R/F, el manual funcional y un enlace del mapa al ERP. El acceso al ERP requiere la sesión y permisos propios del usuario.
- Confirme que el servidor no publica .git/, docs/, src/ ni editables/.

## Actualizar

Obtenga la revisión aprobada del repositorio, ejecute los comandos de comprobación y generación, y sustituya la versión publicada de dist/ mediante el procedimiento habitual del servidor. El proyecto no contiene automatismos de despliegue ni integra un proveedor de hosting.
