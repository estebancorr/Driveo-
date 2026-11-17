# DRIVEO — Mapas funcionales

Revisión del 17 de noviembre de 2026 · v1.1

Abra el portal de mapas. Los tres mapas también pueden abrirse por separado: **01_arbol.html**, **02_relaciones.html** y **03_secciones_y_cargos.html**. Incluyen vistas internas y de operarios basadas en la cuenta inspeccionada.

## Cómo navegar

- Arrastre para mover el mapa y use la rueda para acercar o alejar.
- Haga clic para consultar la descripción, evidencia y cargo propuesto del elemento.
- Use **Abrir en DRIVEO**, doble clic, o la opción **Clic abre DRIVEO** para abrir su ruta confirmada en otra pestaña.
- **Pantalla completa** amplía el mapa y mantiene los controles; **Esc** permite salir. Si el navegador no admite esa función, se utiliza una vista ampliada dentro de la ventana.
- **Detalle** muestra u oculta el panel lateral. **Ajustar** recupera la vista completa.
- Cada tipo de mapa conserva de forma independiente su vista, página, acción del clic y posición durante la sesión. Cambiar los parámetros del árbol no cambia los de relaciones ni los de secciones.
- Los bloques externos permiten saltar a la sección relacionada sin modificar el filtro de público guardado en ese otro mapa.

## Qué significan R02, R04 y las otras etiquetas

**R** significa relación funcional y el número identifica esa relación en el registro del levantamiento. No es un módulo, permiso, orden de ejecución ni número de documento del ERP. **F** identifica un flujo documental; conserva el número de la relación de base. Un mismo código repetido conecta puntos alejados del mismo mapa.

- **R02 · # Orden de compra**: las recepciones hacen referencia a una orden de compra. El símbolo **#** significa número de documento: en este caso, número de orden de compra. El número real se consulta en DRIVEO; **02** solo identifica la relación del mapa.
- **R04**: la entrega hace referencia al pedido comercial correspondiente.
- Las letras añadidas a algunos códigos distinguen ramales de la misma relación.
- **E** identifica evidencia de una pantalla inspeccionada. **S01–S06** identifica las secciones del mapa.
- Consulte **Códigos y relaciones** en el HTML, o haga clic en una etiqueta R/F, para ver origen, destino, datos, evidencia y limitaciones.
- A → B indica una referencia funcional según el registro. Azul continuo: referencia observada; morado discontinuo: inferencia; ocre discontinuo: pendiente. Un cruce sin punto no añade otra integración.

## Alcance y descripciones

La nomenclatura mantiene la jerarquía: **Org.1 → Organización; Org.1.1 → Empresas y Usuarios; Org.1.1.1 → Tablero**. Los bloques incorporan frases descriptivas y el panel lateral muestra el contexto completo. Son una orientación funcional basada en nombres, documentación y pantallas; no acreditan todas las acciones posibles.

El inventario contiene 11 áreas, 34 agrupaciones, 152 opciones y 146 enlaces conocidos. Se inspeccionaron 42 pantallas de consulta. Los cargos son propuestos para validar con Datsoft y no representan permisos efectivos. Las relaciones observadas no prueban automatismos, consultas SQL, cardinalidades ni ejecución de procesos completos.

Los mapas funcionan sin Internet para su visualización. Los enlaces a DRIVEO requieren Internet, sesión propia y permisos. Se conserva el dominio real **datsoft.truster.cloud**. No se incluyen credenciales ni rutas inventadas. Las funciones pendientes permanecen identificadas.

Los archivos editables se conservan en el repositorio. El manual funcional reúne el inventario, la nomenclatura y los cargos del levantamiento. No se ejecutaron transacciones ni se modificaron datos del sistema para preparar estos mapas.
