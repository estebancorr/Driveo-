# DRIVEO · Mapas y manual funcional

Proyecto listo para que la empresa lo aloje en su propia infraestructura. Incluye los tres mapas interactivos, las vistas internas y de operarios, y un manual funcional navegable.

## Abrir en VS Code

Abra esta carpeta o el archivo **DRIVEO.code-workspace**. El repositorio ya puede trabajarse como un proyecto normal de Git; no es necesario repetir «Clone Repository» si ya tiene una copia local.

## Ejecutar en el equipo

Requisito: **Node.js 20 o posterior**. No utiliza dependencias externas y no necesita `npm install`.

```sh
npm start
```

Abra **http://localhost:4173**. Para cambiar el puerto: `node scripts/serve.mjs --port 8080` después de generar la web. El servidor incluido sirve solamente para revisión local.

## Comprobar y generar

```sh
npm run check
npm run build
```

La carpeta **dist/** es el resultado que debe alojarse. El proyecto es una web estática: no requiere base de datos ni un proceso Node en producción. Funciona tanto en la raíz de un dominio como bajo una subcarpeta, conservando sus rutas relativas.

El jefe o administrador del servidor debe consultar **docs/PUBLICACION.md** antes de publicarlo. Este repositorio no crea hosting ni activa despliegues automáticos.

## Contenido

- **src/viewer.html**, **src/viewer.css**, **src/viewer.js**: interfaz compartida de los tres mapas.
- **src/data/maps.json**: las 39 vistas, sus descripciones, enlaces y evidencias.
- **src/guia.md** y **src/manuals.json**: guía de uso e índice del manual web.
- **docs/referencia/**: inventario, nomenclatura y cargos utilizados para generar el manual navegable.
- **editables/**: seis originales .drawio para revisar los diagramas; no se copian a la web.
- **scripts/**: generación, comprobación y servidor de revisión.
- **dist/**: web generada, excluida de Git. Se puede reconstruir desde el repositorio.

La web genera **index.html**, **01_arbol.html**, **02_relaciones.html**, **03_secciones_y_cargos.html**, **guia.html** y **manuales/**. Los mapas conservan selección, zoom, arrastre, pantalla completa, filtros independientes y enlaces confirmados al sistema.

## Modificar el contenido

Edite la interfaz en `src/` y vuelva a ejecutar `npm run build`. Para cambiar descripciones o rutas, edite `src/data/maps.json`. Cada vista incluye su SVG y los códigos de sus elementos; si se modifica la estructura de un diagrama, mantenga sus identificadores y conexiones coherentes con sus metadatos. El manual web se actualiza editando los documentos de `docs/referencia/`.

Los archivos .drawio son una referencia editable de los mapas. Su modificación no regenera automáticamente los SVG incluidos en `maps.json`.

## Alcance y acceso

El levantamiento se realizó sobre la cuenta seleccionada: 11 áreas, 34 módulos, 152 opciones y 146 rutas conocidas. Las descripciones orientan sobre el propósito de los elementos. Los cargos son propuestas pendientes de validación y no conceden permisos. Una relación observada no prueba automatismos ni ejecución de procesos completos.

La configuración «Operarios · cuenta actual» es un filtro visual, **no un control de acceso**. La web no incorpora usuarios ni inicio de sesión; el servidor de la empresa debe restringir la entrada mediante su mecanismo de autenticación. Un repositorio privado no convierte por sí solo la web publicada en privada. Los enlaces al ERP mantienen la autenticación y permisos propios de DRIVEO.

## Entrega

Versión funcional **1.1**, preparada el **17/11/2026**. Se conservan las versiones y fechas de los documentos de origen para mantener la trazabilidad. No contiene credenciales ni ejecuta transacciones en el ERP.
