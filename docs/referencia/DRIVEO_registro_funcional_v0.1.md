# DRIVEO — Registro funcional y de evidencias

Fecha de observación: 16 de noviembre de 2026. Versión 0.1. Base: cuenta actual, elegida por el usuario.

## Alcance y límites

Inventario completo del menú que mostró esta cuenta: **11 áreas, 34 agrupaciones, 152 opciones y 146 enlaces**. Se inspeccionaron **42 rutas de consulta** sin crear, guardar, aprobar, facturar, recibir, despachar, pagar ni cambiar configuración. Se registran nombres de campos y referencias, sin valores de clientes, proveedores, cuentas, VIN, saldos ni registros empresariales.

El menú no representa la totalidad de permisos o funcionalidades de todas las cuentas. La carga de una pantalla demuestra una interfaz disponible para esta sesión, no una operación probada. Esta versión es una base de validación; no certifica arquitectura técnica, madurez completa ni integraciones de extremo a extremo.

El mapa interno incorpora todo el menú observado, el diseño histórico y las hipótesis. El mapa para operarios incluye consultas inspeccionadas y referencias verificadas; los avisos de validación no se presentan como capacidades habilitadas. No se incluyen pasos transaccionales no probados.

## Convenciones

- **Verificado:** hecho concreto observado en pantalla o documento; se indica su alcance. Una referencia visible no demuestra automatismo.
- **Inferido:** relación plausible apoyada por campos o dominio, pendiente de corroboración.
- **Pendiente:** sin evidencia suficiente o con estado ambiguo.
- **Madurez:** eje separado. Operativo, beta, en desarrollo y planificado solo se asignan con evidencia específica. El resto se mantiene pendiente.
- **NAVEGACIÓN:** jerarquía observada en el menú; no acredita funcionamiento.

## Fuentes revisadas

- Notion: [Comparación mapeo-actual](https://app.notion.com/p/41a0941a37af8056b872f9d1f20ff7b9), 13 registros en Existencia en mapa y 7 en Existencia en el Sistema agregados. Se leyeron las 20 páginas y sus 26 capturas.
- Diagramas DRIVEO.pptx: cinco diapositivas. La primera contiene el grupo de procesos de la importadora; las diapositivas 2–5 contienen organigramas por fases, no evidencia de estados de implementación del ERP.
- Glosario y Guía Conceptual de Dominio de Negocio: seis páginas leídas. Contexto del negocio, no prueba de implementación ni certificación de vigencia fiscal.
- ERP: navegador de Work, sesión autenticada por el usuario. Versión de pie visible V1.0.0; no identifica por sí sola una compilación o versión funcional.

## Hallazgos principales

1. El PPTX presenta LO — Logísticos, no un rótulo TMS/WMS. Compras y Comercial usan ambos CO. No se identificó un rótulo PP en el texto de las cinco diapositivas; Precios está bajo CI en la primera.
2. Importaciones aparece en dos bases de Notion, pero corresponde a una sola agrupación en el menú actual. No debe contarse dos veces.
3. B2B, Tickets y Capacitación ya aparecen en el diseño histórico bajo otros dominios. Estar en una base de «agregados» no prueba que sean funcionalidades nuevas.
4. PA tiene título «Beta» y contenido «En desarrollo». BI Corp se describe «En desarrollo». No fueron localizados como módulos independientes en el menú de esta cuenta.
5. Las siete opciones de Importaciones incluyen solo un enlace observado, Expedientes. Las otras seis requieren distinguir desarrollo, permisos y funcionalidad embebida.
6. Herramientas de Gestión tiene cuatro agrupaciones, incluido Tickets; su texto de Notion dice tres.
7. Sucursales y Franquicias / Control y Supervisión tiene Mis Evaluaciones y Notificaciones. No tenía un registro propio en las dos bases revisadas.
8. Organización y Talento Humano repiten Estructura Organizativa con rutas diferentes y pantallas semejantes. No se ha probado que compartan maestro.
9. Facturación y entrega no tienen una secuencia única demostrada: existen OE por facturar y Facturado sin entregar.
10. Reorden incorpora disponible, OC abiertas, solicitudes, mínimos y sugeridos; no demuestra el Forecast original de PA.
11. Asientos lista orígenes operativos; Kardex muestra referencia contable. Falta validar disparadores, reglas y cobertura. Módulo 46 no fue identificado.
12. Taller remite a garantías. SRG se describe como solicitud del concesionario a la importadora. No se comprobó un ciclo de orden de servicio de taller.

## Correspondencia histórica

| Diseño o registro | Correspondencia actual | Alcance / pendiente |
|---|---|---|
| LO — Logísticos | Cadena de Suministro / WMS y Logística | Correspondencia de funciones; no se verificó equivalencia íntegra ni se encontró rótulo TMS/WMS en el texto del PPTX. |
| CO — Compras | Cadena de Suministro / Compras | Nombre y funciones documentadas; conserva la ambigüedad del código CO original. |
| IM — Importación y Nacionalización | Cadena de Suministro / Importaciones | Expedientes navegable; seis rótulos sin enlace. No duplicar Importaciones por aparecer en las dos bases de Notion. |
| CO — Comercial | Ventas / Comercial y Facturación; B2B como área | B2B y Facturación ya constan dentro de Comercial en el diseño original; su promoción de nivel no demuestra función nueva. |
| CI — Control de Inventario | Catálogo, WMS y Kardex; Precios en Comercial | Distribución funcional inferida; límites y propietario de stock/costo pendientes. |
| AF — Administrativos y Financieros | Administración y Finanzas / CxC, CxP, Bancos y Cajas | Compras Generales original sin equivalencia específica comprobada. |
| CF — Contables y Fiscales | Administración y Finanzas / Contabilidad; libros en Compras y Facturación | Contabilidad visible; equivalencia fiscal integral pendiente. No existe rótulo separado Módulo Fiscal en el menú observado. |
| CH — Capital Humano | Talento Humano / Estructura Organizativa | Nómina, liquidaciones, vacaciones, horarios y llamados de atención originales no se localizaron en este menú; no declarar inexistencia global. |
| GA — Garantía | Taller y Garantías / Garantías (importadora) | Tablero remite a garantías; servicio integral de taller pendiente según Notion, no probado en producción. |
| PA — Planeación de Abastecimiento | No localizado como módulo en esta cuenta | Notion: título Beta y contenido En desarrollo; estado exacto pendiente. |
| AC — Asistencia al Concesionario | Posibles correspondencias: Tickets y E-Learning | Página de Notion vacía. Equivalencia funcional inferida, no confirmada. |
| MC — Mercadeo Corporativo | Posible correspondencia: CRM / Mercadeo | Página de Notion vacía; suscripciones no demuestra CRM corporativo completo. |
| PP — Productos y Precios (registro en Notion) | Catálogo y Asignación de Precios, como candidatos | El rótulo PP no aparece en el texto de las cinco diapositivas; Precios se sitúa en CI en la primera. Confirmar versión del diseño. |
| BI Corp (Notion) | Sin área Business Intelligence separada en el menú observado | Notion indica En desarrollo. No confundir automáticamente con el área visible Inteligencia de Negocios. |

## Inventario completo de navegación

La nomenclatura sigue Área → Módulo → Función; por ejemplo Org.1 → Org.1.1 → Org.1.1.1. «Consulta» significa pantalla inspeccionada, no transacción ejecutada.

### Organización

#### Org.1.1 · Empresas y Usuarios

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| Org.1.1.1 | Tablero | E37 · Interfaz de consulta verificada | /org/companies-and-users/admin-panel |
| Org.1.1.2 | Empresas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/companies-and-users/companies |
| Org.1.1.3 | Identidad Corporativa | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/companies-and-users/identity |
| Org.1.1.4 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/companies-and-users/config |

#### Org.1.2 · Estructura Organizativa

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| Org.1.2.1 | Perfiles de Cargos | E38 · Interfaz de consulta verificada | /org/organizative-structure/positions |
| Org.1.2.2 | Inventario de Manuales | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/organizative-structure/manuals |
| Org.1.2.3 | Gestor de Métricas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/organizative-structure/metrics |
| Org.1.2.4 | Bolsa de Empleo | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/organizative-structure/job-bank |
| Org.1.2.5 | Perfil | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/organizative-structure/profile |
| Org.1.2.6 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /org/organizative-structure/notifications |

### Herramientas de Gestión

#### HG.2.1 · E-Learning Usuarios

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| HG.2.1.1 | Mis Cursos | E39 · Interfaz de consulta verificada | /management-tools/elearning-users/user-panel/courses |

#### HG.2.2 · E-Learning Corporativo

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| HG.2.2.1 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/elearning-corp/notifications |

#### HG.2.3 · Notificaciones

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| HG.2.3.1 | Tablero | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/general-notifications/admin-panel |
| HG.2.3.2 | Mis Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/general-notifications/my-notifications |

#### HG.2.4 · Tickets

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| HG.2.4.1 | Tablero | E40 · Interfaz de consulta verificada | /management-tools/tickets/dashboard |
| HG.2.4.2 | Mis tickets | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/tickets/my-tickets |
| HG.2.4.3 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/tickets/notifications |
| HG.2.4.4 | Configuraciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /management-tools/tickets/configurations |

### Cadena de Suministro

#### CS.3.1 · Catálogo

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.1.1 | Repuestos | E03 · Interfaz de consulta verificada | /supply-chain/catalog/products |
| CS.3.1.2 | Servicios | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/catalog/services |
| CS.3.1.3 | Vehículos | E02 · Interfaz de consulta verificada | /supply-chain/catalog/vehicles |
| CS.3.1.4 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/catalog/config |

#### CS.3.2 · Compras

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.2.1 | Proveedores | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/providers |
| CS.3.2.2 | Órdenes de Compra | E04 · Interfaz de consulta verificada | /supply-chain/purchases/purchase-orders |
| CS.3.2.3 | Reorden | E05 · Interfaz de consulta verificada | /supply-chain/purchases/reorder |
| CS.3.2.4 | Recepciones | E06 · Interfaz de consulta verificada | /supply-chain/purchases/receptions |
| CS.3.2.5 | Devoluciones de Compra | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/purchase-devolutions |
| CS.3.2.6 | Facturas de Compra | E07 · Interfaz de consulta verificada | /supply-chain/purchases/purchase-invoices |
| CS.3.2.7 | Notas de Crédito de Compra | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/purchase-credit-notes |
| CS.3.2.8 | Notas de Débito de Compra | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/purchase-debit-notes |
| CS.3.2.9 | Retenciones de Compra | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/withholding-taxes |
| CS.3.2.10 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/notifications |
| CS.3.2.11 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/purchases/config |

#### CS.3.3 · Importaciones

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.3.1 | Expedientes | E08 · Interfaz de consulta verificada | /supply-chain/imports/import-files |
| CS.3.3.2 | Cotizaciones del agente | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |
| CS.3.3.3 | Aranceles | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |
| CS.3.3.4 | Regularizaciones | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |
| CS.3.3.5 | Cierre de facturas | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |
| CS.3.3.6 | Seguros | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |
| CS.3.3.7 | Configuración | NAVEGACIÓN · Visible sin enlace | Sin enlace observado |

#### CS.3.4 · WMS

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.4.1 | Almacenes | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/stock/warehouses |
| CS.3.4.2 | Movimientos de Inventario | E09 · Interfaz de consulta verificada | /supply-chain/stock/movements |
| CS.3.4.3 | Ubicaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/stock/inventory-located |
| CS.3.4.4 | Órdenes de Picking | E10 · Interfaz de consulta verificada | /supply-chain/stock/picking |
| CS.3.4.5 | Conteo Físico | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/counts |
| CS.3.4.6 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/stock/notifications |
| CS.3.4.7 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/stock/config |

#### CS.3.5 · Kardex

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.5.1 | Libro Kardex | E11 · Interfaz de consulta verificada | /supply-chain/kardex/ledger |
| CS.3.5.2 | Historial por Lote / VIN | E12 · Interfaz de consulta verificada | /supply-chain/kardex/traceability |
| CS.3.5.3 | Costos y Márgenes | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/kardex/costs |
| CS.3.5.4 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/kardex/config |

#### CS.3.6 · Logística

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CS.3.6.1 | Notas de Entrega | E13 · Interfaz de consulta verificada | /supply-chain/logistics/wms/delivery-notes |
| CS.3.6.2 | Devoluciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/devolutions |
| CS.3.6.3 | Rutas de Despacho | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/dispatch-routes |
| CS.3.6.4 | Planificar rutas de despacho | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/scheduled-dispatch-routes |
| CS.3.6.5 | Gestión de Flota | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/fleet |
| CS.3.6.6 | Gestión de Conductores | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/drivers |
| CS.3.6.7 | Planificación de Despacho | E14 · Interfaz de consulta verificada | /supply-chain/logistics/wms/dispatch-planning |
| CS.3.6.8 | Tracking en Tiempo Real | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/tracking |
| CS.3.6.9 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/notifications |
| CS.3.6.10 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /supply-chain/logistics/wms/config |

### CRM

#### CRM.4.1 · Gestión de Clientes

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CRM.4.1.1 | Prospectos | E33 · Interfaz de consulta verificada | /crm/clients-management/leads |
| CRM.4.1.2 | Clientes | E34 · Interfaz de consulta verificada | /crm/clients-management/clients |
| CRM.4.1.3 | Interacciones | E35 · Interfaz de consulta verificada | /crm/clients-management/interactions |
| CRM.4.1.4 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /crm/clients-management/notifications |
| CRM.4.1.5 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /crm/clients-management/config |

#### CRM.4.2 · Mercadeo

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CRM.4.2.1 | Suscripciones | E36 · Interfaz de consulta verificada | /crm/marketing/subscriptions |

#### CRM.4.3 · Fidelización

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| CRM.4.3.1 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /crm/loyalty/notifications |

### Ventas

#### Ven.5.1 · Comercial

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| Ven.5.1.1 | Clientes | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/clients |
| Ven.5.1.2 | Estadísticas de Clientes | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/clients-statistics |
| Ven.5.1.3 | Vendedores | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/sellers |
| Ven.5.1.4 | Segmentación geografica | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/geographic-segmentation |
| Ven.5.1.5 | Gestión de Rutas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/manage-routes |
| Ven.5.1.6 | Asignación de Precios | E17 · Interfaz de consulta verificada | /sales/commercial/price-assignment |
| Ven.5.1.7 | Pedidos | E15 · Interfaz de consulta verificada | /sales/commercial/orders |
| Ven.5.1.8 | Asignación de Comisiones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/commission-assignment |
| Ven.5.1.9 | Comisiones | E18 · Interfaz de consulta verificada | /sales/commercial/commissions |
| Ven.5.1.10 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/notifications |
| Ven.5.1.11 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/commercial/config |

#### Ven.5.2 · Facturación

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| Ven.5.2.1 | Facturas | E16 · Interfaz de consulta verificada | /sales/billing/invoices |
| Ven.5.2.2 | Notas de Débito | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/billing/debit-notes |
| Ven.5.2.3 | Notas de Crédito | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/billing/credit-notes |
| Ven.5.2.4 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/billing/notifications |
| Ven.5.2.5 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /sales/billing/config |

### Administración y Finanzas

#### AF.6.1 · Cuentas por Cobrar

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| AF.6.1.1 | Tablero | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/collection/admin-panel |
| AF.6.1.2 | Por facturar | E19 · Interfaz de consulta verificada | /admin-finance/collection/delivery-notes |
| AF.6.1.3 | Abonos | E21 · Interfaz de consulta verificada | /admin-finance/collection/partial-payments |
| AF.6.1.4 | Cobros y anticipos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/collection/payment |
| AF.6.1.5 | Cuentas pendientes | E20 · Interfaz de consulta verificada | /admin-finance/collection/account-statements |
| AF.6.1.6 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/collection/notifications |
| AF.6.1.7 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/collection/config |

#### AF.6.2 · Cuentas por Pagar

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| AF.6.2.1 | Pagos | E22 · Interfaz de consulta verificada | /admin-finance/accounts-payable/payments |
| AF.6.2.2 | Planificador de Pagos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounts-payable/payment-planner |
| AF.6.2.3 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounts-payable/notifications |
| AF.6.2.4 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounts-payable/config |

#### AF.6.3 · Bancos y Cajas

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| AF.6.3.1 | Cuentas | E23 · Interfaz de consulta verificada | /admin-finance/banks/accounts |
| AF.6.3.2 | Cajas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/banks/boxes |
| AF.6.3.3 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/banks/notifications |
| AF.6.3.4 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/banks/config |

#### AF.6.4 · Contabilidad

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| AF.6.4.1 | Tablero | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/admin-panel |
| AF.6.4.2 | Asientos Contables | E24 · Interfaz de consulta verificada | /admin-finance/accounting/entries |
| AF.6.4.3 | Incidencias de Contabilización | E25 · Interfaz de consulta verificada | /admin-finance/accounting/posting-incidents |
| AF.6.4.4 | Libro Diario | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/journal-report |
| AF.6.4.5 | Libro Mayor | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/ledger-report |
| AF.6.4.6 | Balance de Comprobación | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/trial-balance |
| AF.6.4.7 | Situación Financiera | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/balance-sheet |
| AF.6.4.8 | Estado de Resultados | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/income-statement |
| AF.6.4.9 | Cierre de Ejercicio | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/year-closing-simulator |
| AF.6.4.10 | Estado Financiero (Formato Concesionario) | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/dealer-statement |
| AF.6.4.11 | Cierre diario | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/daily-close |
| AF.6.4.12 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /admin-finance/accounting/config |

### Talento Humano

#### TH.7.1 · Estructura Organizativa

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| TH.7.1.1 | Perfiles de Cargos | E41 · Interfaz de consulta verificada | /human-talent/organizative-structure/positions |
| TH.7.1.2 | Inventario de Manuales | NAVEGACIÓN · Enlace visible; pantalla pendiente | /human-talent/organizative-structure/manuals |
| TH.7.1.3 | Gestor de Métricas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /human-talent/organizative-structure/metrics |
| TH.7.1.4 | Bolsa de Empleo | NAVEGACIÓN · Enlace visible; pantalla pendiente | /human-talent/organizative-structure/job-bank |
| TH.7.1.5 | Perfil | NAVEGACIÓN · Enlace visible; pantalla pendiente | /human-talent/organizative-structure/profile |
| TH.7.1.6 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /human-talent/organizative-structure/notifications |

### Sucursales y Franquicias

#### SF.8.1 · Control y Supervisión

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| SF.8.1.1 | Mis Evaluaciones | E42 · Interfaz de consulta verificada | /franchises/supervision-control/company |
| SF.8.1.2 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /franchises/supervision-control/notifications |

### B2B

#### B2B.9.1 · Cliente

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.1.1 | Mi Gestión | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/client/management |
| B2B.9.1.2 | Mis Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/client/my-notifications |

#### B2B.9.2 · Compras

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.2.1 | Tablero | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/admin-panel |
| B2B.9.2.2 | Mis Pedidos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/my-orders |
| B2B.9.2.3 | Mis Órdenes de Entrega | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/my-delivery-notes |
| B2B.9.2.4 | Mis Facturas | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/my-invoices |
| B2B.9.2.5 | Mis Devoluciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/my-devolutions |
| B2B.9.2.6 | Productos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/products |

#### B2B.9.3 · Tickets

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.3.1 | Soporte | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/tickets/support |

#### B2B.9.4 · Cobranza

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.4.1 | Mis Notas de Crédito | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/collection/my-credit-notes |
| B2B.9.4.2 | Mis Abonos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/collection/my-partial-payments |

#### B2B.9.5 · Consignación · Importadora

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.5.1 | Panel de administración | E26 · Interfaz de consulta verificada | /b2b/consignment/admin-panel |
| B2B.9.5.2 | Solicitudes | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/requests |
| B2B.9.5.3 | Asignaciones | E27 · Interfaz de consulta verificada | /b2b/consignment/assignments |
| B2B.9.5.4 | Excepciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/exceptions |
| B2B.9.5.5 | Inventario en la red | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/network-inventory |
| B2B.9.5.6 | Concesionarios | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/dealers |
| B2B.9.5.7 | Facturación de ventas | E28 · Interfaz de consulta verificada | /b2b/consignment/vehicle-sales-billing |
| B2B.9.5.8 | Documentos del Deal Jacket | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/deal-jacket-settings |
| B2B.9.5.9 | Entregas de vehículos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/vehicle-deliveries |
| B2B.9.5.10 | Pólizas de garantía | E30 · Interfaz de consulta verificada | /b2b/consignment/warranty-policies |
| B2B.9.5.11 | Comisiones de la red | E29 · Interfaz de consulta verificada | /b2b/consignment/commissions |
| B2B.9.5.12 | Facturas de comisión | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/consignment/commission-invoices |
| B2B.9.5.13 | Configuración | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/settings |

#### B2B.9.6 · Solicitudes de Repuestos

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.6.1 | Solicitudes de Repuestos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/parts/requests |
| B2B.9.6.2 | Recepción de repuestos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/parts/inbound |

#### B2B.9.7 · Mis vehículos

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.7.1 | Mis vehículos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/purchases/my-vehicles |

#### B2B.9.8 · Notificaciones

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| B2B.9.8.1 | Notificaciones | NAVEGACIÓN · Enlace visible; pantalla pendiente | /b2b/notifications |

### Taller y Garantías

#### TG.10.1 · Taller y Garantías

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| TG.10.1.1 | Tablero | E31 · Interfaz de consulta verificada | /workshop |

#### TG.10.2 · Garantías (importadora)

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| TG.10.2.1 | Revisión de garantías | E32 · Interfaz de consulta verificada | /workshop/warranty/ruling |
| TG.10.2.2 | Reglas por importadora | NAVEGACIÓN · Enlace visible; pantalla pendiente | /workshop/warranty/config |
| TG.10.2.3 | Catálogo de fallas y puntos | NAVEGACIÓN · Enlace visible; pantalla pendiente | /workshop/warranty/catalog |

### Inteligencia de Negocios

#### BI.11.1 · Control de Gestión

| ID | Función | Evidencia | Ruta |
|---|---|---|---|
| BI.11.1.1 | Tablero | E01 · Interfaz de consulta verificada | /bi/management-control/admin-panel |

## Registro de pantallas

### E01 · /bi/management-control/admin-panel

[Pantalla de origen](https://datsoft.truster.cloud/bi/management-control/admin-panel)

Campos y elementos observados: Intérvalo, Desde, Hasta.

Tablero accesible con filtros temporales; visualización vacía en la inspección inicial. Orígenes e indicadores pendientes.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E02 · /supply-chain/catalog/vehicles

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/catalog/vehicles)

Campos y elementos observados: Modelos, Unidades (VIN), Código, Marca, Categoría, En patio, Total.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E03 · /supply-chain/catalog/products

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/catalog/products)

Campos y elementos observados: General, Kits, Código interno / proveedor, Cantidad disponible, Costo promedio, Valor inventario.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E04 · /supply-chain/purchases/purchase-orders

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/purchases/purchase-orders)

Campos y elementos observados: Fecha de emisión, Proveedor, Estatus, Subtotal, Total, Procesado.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E05 · /supply-chain/purchases/reorder

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/purchases/reorder)

Campos y elementos observados: Disponible, En OC abiertas, En solicitudes, Posición, Mínimo, Punto de reorden, Punto sugerido, Máximo, Sugerido, Proveedores, Tiempo de entrega.

Botón Generar órdenes de compra observado, no pulsado. No equiparar Reorden con Forecast/PA.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E06 · /supply-chain/purchases/receptions

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/purchases/receptions)

Campos y elementos observados: # Orden de compra, Proveedor, Estatus, Inventario, Estatus de facturación, Origen backorder.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E07 · /supply-chain/purchases/purchase-invoices

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/purchases/purchase-invoices)

Campos y elementos observados: # Control, # OC, # Recepción, Estatus de Pago, Fecha de pago, Nota de crédito, Libro de compras, Libro de IGTF.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E08 · /supply-chain/imports/import-files

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/imports/import-files)

Campos y elementos observados: Expediente, Buque · BL, Facturas · VIN, ETA · arribo, Estado, Facturas cerradas, Estimado pendiente.

Texto de la interfaz: cada expediente nace de facturas comerciales seleccionadas; estimado pendiente en Kardex sin factura, planilla de aduana o regularización. IVA de importación excluido de ese estimado. No se comprobó el proceso de cálculo.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E09 · /supply-chain/stock/movements

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/stock/movements)

Campos y elementos observados: Inventario propio, Consignación, Almacén, Tipo, Traslado, Motivo, Documento, Proveedor / Cliente.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E10 · /supply-chain/stock/picking

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/stock/picking)

Campos y elementos observados: Órdenes (Almacén), Recepción de Carga (Conductor), Almacén, Prioridad, Progreso / Ítems, Estado, Operario Asignado, Fecha Programada.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E11 · /supply-chain/kardex/ledger

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/kardex/ledger)

Campos y elementos observados: Fecha, Folio, Producto, Lote/VIN, Tipo, Documento, Almacén, Cantidad, Costo unitario, Total (Bs), Total (USD), Tasa, Costeo, Asiento contable, Estatus contable.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E12 · /supply-chain/kardex/traceability

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/kardex/traceability)

Campos y elementos observados: Tipo de inventario, Buscar lote o VIN.

No se introdujeron VIN ni lotes; búsqueda disponible, resultados no probados.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E13 · /supply-chain/logistics/wms/delivery-notes

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/logistics/wms/delivery-notes)

Campos y elementos observados: # Pedido, # Control, Cliente, Estatus de facturación, Inventario, Origen backorder.

El menú dice Notas de Entrega y la pantalla Órdenes de Entrega; se conserva la equivalencia de navegación, sin afirmar equivalencia legal.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E14 · /supply-chain/logistics/wms/dispatch-planning

[Pantalla de origen](https://datsoft.truster.cloud/supply-chain/logistics/wms/dispatch-planning)

Campos y elementos observados: Planificación, Capacidad, Optimizar Rutas, Sin Asignar.

No se arrastraron despachos ni se pulsó Optimizar Rutas.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E15 · /sales/commercial/orders

[Pantalla de origen](https://datsoft.truster.cloud/sales/commercial/orders)

Campos y elementos observados: Tipo, Cliente, CxC Fact, OE por fact., Fecha de despacho, Procesado.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E16 · /sales/billing/invoices

[Pantalla de origen](https://datsoft.truster.cloud/sales/billing/invoices)

Campos y elementos observados: # Control, # Pedido, # OE, Fecha de pago, Nota de crédito, Libro de ventas, Libro de IGTF, Facturado sin entregar.

Libro de ventas se observó deshabilitado en ese momento. No establecer disponibilidad permanente por este estado.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E17 · /sales/commercial/price-assignment

[Pantalla de origen](https://datsoft.truster.cloud/sales/commercial/price-assignment)

Campos y elementos observados: SKU, Costo promedio, Último costo, Listas con precio, Tipo de inventario.

Sincronizar Histórico de Precios y Ajuste masivo visibles; no se ejecutaron.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E18 · /sales/commercial/commissions

[Pantalla de origen](https://datsoft.truster.cloud/sales/commercial/commissions)

Campos y elementos observados: Registro de comisiones, Historial de comisiones, Revisión de documentos, Desde, Hasta, Estatus, Monto.

Generar comisión visible; no se ejecutó.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E19 · /admin-finance/collection/delivery-notes

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/collection/delivery-notes)

Campos y elementos observados: # Control, # Pedido, Convenio de Pago, Fecha de Entrega, Fecha de Vencimiento, Total.

Título: Órdenes de Entrega por Facturar.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E20 · /admin-finance/collection/account-statements

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/collection/account-statements)

Campos y elementos observados: Cliente, Entregado sin facturar, Cobrado, Saldo, Antigüedad.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E21 · /admin-finance/collection/partial-payments

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/collection/partial-payments)

Campos y elementos observados: # Factura, Cliente, Total, Pagado, Saldo, Completado, Nota de crédito, Pedidos, Órdenes de entrega.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E22 · /admin-finance/accounts-payable/payments

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/accounts-payable/payments)

Campos y elementos observados: Módulo, Proveedor, Concepto, Estatus, Vencido, Verificado, Plan de pago, Total a pagar, Saldo.

Título: Solicitudes de Pago. No se abrió ni aprobó ninguna solicitud.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E23 · /admin-finance/banks/accounts

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/banks/accounts)

Campos y elementos observados: Nombre, Banco, Responsable, Balance, Moneda.

Pestañas Transacciones y Transacciones en espera deshabilitadas en la observación; causa pendiente.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E24 · /admin-finance/accounting/entries

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/accounting/entries)

Campos y elementos observados: NRO COMPROBANTE, FECHA, CONCEPTO, TOTAL DÉBITO, TOTAL CRÉDITO, ESTADO, Origen, Recurrencia.

Opciones de Origen comprobadas: Manual, Compras, Inventario, Facturación, Cuentas por Cobrar, Cuentas por Pagar, Bancos, Contabilidad y Módulo 46. No se atribuye identidad funcional a Módulo 46 sin validación.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E25 · /admin-finance/accounting/posting-incidents

[Pantalla de origen](https://datsoft.truster.cloud/admin-finance/accounting/posting-incidents)

Campos y elementos observados: Tipo, Documento, Regla, Motivo, Cuándo, Estado, Tipo de avería.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E26 · /b2b/consignment/admin-panel

[Pantalla de origen](https://datsoft.truster.cloud/b2b/consignment/admin-panel)

Campos y elementos observados: Qué, VIN / unidades, Exceso, Ver.

Panel operacional de la red de concesionarios. Estado de los procesos internos no validado.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E27 · /b2b/consignment/assignments

[Pantalla de origen](https://datsoft.truster.cloud/b2b/consignment/assignments)

Campos y elementos observados: N° orden, Estado, Solicitudes, Todas, Órdenes, Enviadas, Cerradas.

Texto: Órdenes de traslado hacia la red de concesionarios.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E28 · /b2b/consignment/vehicle-sales-billing

[Pantalla de origen](https://datsoft.truster.cloud/b2b/consignment/vehicle-sales-billing)

Campos y elementos observados: Orden, VIN, Forma de pago, Monto, Referencia, Cobro, Adjuntos, Reportado, Concesionario, Vehículo, Cliente, Precio, Estado, Reserva, Factura.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E29 · /b2b/consignment/commissions

[Pantalla de origen](https://datsoft.truster.cloud/b2b/consignment/commissions)

Campos y elementos observados: Mes, Concesionario, Estado, VIN, Comisión, IVA, Total, Discrepancias, Confirmaciones, Factura, Pagado.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E30 · /b2b/consignment/warranty-policies

[Pantalla de origen](https://datsoft.truster.cloud/b2b/consignment/warranty-policies)

Campos y elementos observados: Póliza, Vehículo, Titular, Vendió, Garantía, Emitida, VIN o placa, Concesionario vendedor.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E31 · /workshop

[Pantalla de origen](https://datsoft.truster.cloud/workshop)

Campos y elementos observados: Intérvalo, Desde, Hasta.

Enlaces del tablero: Revisión de garantías, Reglas por importadora y Catálogo de fallas y puntos. No se observó una orden de servicio de taller.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E32 · /workshop/warranty/ruling

[Pantalla de origen](https://datsoft.truster.cloud/workshop/warranty/ruling)

Campos y elementos observados: Concesionario que genera, Agrupar por concesionario.

Texto: solicitudes SRG remitidas por los concesionarios para dictamen. Enlace adicional Auditoría de RGH (/workshop/warranty/reconciliation), no abierto.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E33 · /crm/clients-management/leads

[Pantalla de origen](https://datsoft.truster.cloud/crm/clients-management/leads)

Campos y elementos observados: Canal, Segmentación de negocio, Vendedor, Zona, Sector, Nivel, Estatus.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E34 · /crm/clients-management/clients

[Pantalla de origen](https://datsoft.truster.cloud/crm/clients-management/clients)

Campos y elementos observados: Clientes, Sucursales, Solvencia en facturas, OE por facturar, Vendedor, Canal, Verificado, Límite de crédito.

No se verificó si esta ficha y Clientes de Comercial comparten el mismo maestro.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E35 · /crm/clients-management/interactions

[Pantalla de origen](https://datsoft.truster.cloud/crm/clients-management/interactions)

Campos y elementos observados: Cliente/Prospecto, Canal, Vendedor asignado, Tipo, Usuario emisor, Prioridad, Etiquetas.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E36 · /crm/marketing/subscriptions

[Pantalla de origen](https://datsoft.truster.cloud/crm/marketing/subscriptions)

Campos y elementos observados: Fecha de verificación, Correo electrónico, Token, Suscrito.

Solo se registraron nombres de columnas; no se conservaron correos ni tokens.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E37 · /org/companies-and-users/admin-panel

[Pantalla de origen](https://datsoft.truster.cloud/org/companies-and-users/admin-panel)

Campos y elementos observados: Identidad Corporativa, Empresas, Actualizar plan.

No se pulsó Actualizar plan.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E38 · /org/organizative-structure/positions

[Pantalla de origen](https://datsoft.truster.cloud/org/organizative-structure/positions)

Campos y elementos observados: Cargos, Personal, Competencias, Movimientos, Áreas, Estratos, Puestos autorizados, Puestos congelados, Estatus.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E39 · /management-tools/elearning-users/user-panel/courses

[Pantalla de origen](https://datsoft.truster.cloud/management-tools/elearning-users/user-panel/courses)

Campos y elementos observados: Mis Cursos.

Interfaz indica ausencia de cursos asignados; no prueba ausencia del módulo.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E40 · /management-tools/tickets/dashboard

[Pantalla de origen](https://datsoft.truster.cloud/management-tools/tickets/dashboard)

Campos y elementos observados: Tickets, Crear Ticket, Aplicar filtros.

No se creó ningún ticket.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E41 · /human-talent/organizative-structure/positions

[Pantalla de origen](https://datsoft.truster.cloud/human-talent/organizative-structure/positions)

Campos y elementos observados: Cargos, Personal, Competencias, Movimientos, Áreas, Estratos, Puestos autorizados, Puestos congelados, Estatus.

Mismos rótulos que Organización, con rutas distintas. Maestro compartido pendiente.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

### E42 · /franchises/supervision-control/company

[Pantalla de origen](https://datsoft.truster.cloud/franchises/supervision-control/company)

Campos y elementos observados: Evaluaciones Asignadas, Mis documentos, Estatus, Periodo.

Alcance: interfaz de consulta inspeccionada; resultados, reglas y operaciones no validados de extremo a extremo.

## Matriz de relaciones

La dirección representa la referencia o información descrita, no un mensaje técnico ni una ejecución garantizada.

### R01 · Compras / OC abiertas → Compras / Reorden

- Nivel: **Verificado**.
- Proceso: Cálculo de posición de abastecimiento.
- Información: Cantidad en OC abiertas; disponibilidad; sugerido.
- Dependencias: OC abiertas y parámetros de reorden.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E05.
- Límite de la conclusión: Se verifica la columna de entrada, no la fórmula ni generación de OC.

### R02 · Compras / Órdenes de Compra → Compras / Recepciones

- Nivel: **Verificado**.
- Proceso: Referencia de recepción a orden de compra.
- Información: Número de OC, proveedor, estatus.
- Dependencias: OC de origen.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E06.
- Límite de la conclusión: No se creó una recepción ni se comprobó obligatoriedad de OC.

### R03 · Compras / OC y Recepciones → Compras / Facturas de Compra

- Nivel: **Verificado**.
- Proceso: Vinculación documental de factura.
- Información: OC, recepción, proveedor, estado de pago.
- Dependencias: Documentos de origen.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E07.
- Límite de la conclusión: No se validó conciliación automática de cantidades o importes.

### R04 · Comercial / Pedidos → Logística / Órdenes de Entrega

- Nivel: **Verificado**.
- Proceso: Referencia de entrega al pedido.
- Información: Número de pedido, cliente, inventario, estatus de facturación.
- Dependencias: Pedido de origen.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E13.
- Límite de la conclusión: No se comprobó generación automática ni reserva de stock.

### R05 · Pedidos y Órdenes de Entrega → Facturación / Facturas

- Nivel: **Verificado**.
- Proceso: Referencia de factura a documentos comerciales.
- Información: Número de pedido y OE; cliente; fecha de pago.
- Dependencias: Documentos comerciales.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E16.
- Límite de la conclusión: La pantalla también contempla Facturado sin entregar. La secuencia no es única.

### R06 · Logística / Órdenes de Entrega → CxC / Por facturar

- Nivel: **Verificado**.
- Proceso: Seguimiento de entregas sin factura.
- Información: Pedido, control, convenio de pago, entrega, vencimiento.
- Dependencias: OE y su estado de facturación.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E19.
- Límite de la conclusión: Es una consulta documental; no se probó el hecho que genera la cuenta.

### R07 · Facturación / Facturas → CxC / Abonos

- Nivel: **Verificado**.
- Proceso: Seguimiento de deuda y pagos de factura.
- Información: Número de factura, total, pagado, saldo y nota de crédito.
- Dependencias: Factura y movimientos asociados.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E21.
- Límite de la conclusión: No se registró un abono ni se comprobó su aplicación automática.

### R08 · Facturas y OE por facturar → CRM / Clientes

- Nivel: **Verificado**.
- Proceso: Consulta comercial de solvencia.
- Información: Solvencia en facturas; OE por facturar.
- Dependencias: Identificación del cliente.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E34.
- Límite de la conclusión: No se probó que CRM y Comercial compartan el mismo maestro.

### R09 · Importaciones / Expedientes → Kardex / Estimado pendiente

- Nivel: **Verificado**.
- Proceso: Soporte y regularización de costos de importación.
- Información: Facturas comerciales, VIN, planilla aduanal, costo estimado.
- Dependencias: Expediente y soportes.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E08.
- Límite de la conclusión: La conexión está descrita en la interfaz; no se probó asiento ni recosteo.

### R10 · Compras → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Clasificación del origen contable.
- Información: Origen Compras.
- Dependencias: Reglas de contabilización.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E24.
- Límite de la conclusión: Filtro de origen, no prueba de generación automática para todas las compras.

### R11 · Inventario / Kardex → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Trazabilidad de movimiento y asiento.
- Información: Asiento contable, estatus contable; origen Inventario.
- Dependencias: Regla, producto, almacén, costeo.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E11; E24.
- Límite de la conclusión: No se comprobó la correspondencia de un movimiento individual.

### R12 · Facturación → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Clasificación del origen contable.
- Información: Origen Facturación.
- Dependencias: Reglas de contabilización.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E24.
- Límite de la conclusión: Momento de registro y cobertura pendientes.

### R13 · Cuentas por Cobrar → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Clasificación del origen contable.
- Información: Origen Cuentas por Cobrar.
- Dependencias: Reglas de contabilización.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E24.
- Límite de la conclusión: Distinguir factura, abono, cobro y anticipo con el responsable.

### R14 · Cuentas por Pagar → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Clasificación del origen contable.
- Información: Origen Cuentas por Pagar.
- Dependencias: Reglas de contabilización.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E24.
- Límite de la conclusión: No se ejecutó un pago.

### R15 · Bancos y Cajas → Contabilidad / Asientos

- Nivel: **Verificado**.
- Proceso: Clasificación del origen contable.
- Información: Origen Bancos.
- Dependencias: Cuenta, moneda, reglas.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E24.
- Límite de la conclusión: No se comprobó conciliación ni importación bancaria.

### R16 · Red de concesionarios / SRG → Garantías / Revisión

- Nivel: **Verificado**.
- Proceso: Recepción de solicitud para dictamen.
- Información: SRG, concesionario emisor y reglas de importadora.
- Dependencias: Concesionario de la red y solicitud enviada.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E32.
- Límite de la conclusión: Flujo descrito por la pantalla; envío y dictamen no ejecutados.

### R17 · Solicitudes de consignación → B2B / Asignaciones

- Nivel: **Verificado**.
- Proceso: Gestión de traslado hacia concesionarios.
- Información: Solicitud, número de orden y estado.
- Dependencias: Solicitud y concesionario.
- Implementación: Interfaz/referencia observada; automatismo y ejecución pendientes.
- Evidencia: E27.
- Límite de la conclusión: Vínculo Solicitudes y descripción de traslado; transformación no ejecutada.

### R18 · Catálogo / Productos y costos → Comercial / Asignación de Precios

- Nivel: **Inferido**.
- Proceso: Formación de precio sobre costo.
- Información: SKU, costo promedio, último costo, listas.
- Dependencias: Producto, costo, moneda, listas.
- Implementación: Implementación pendiente de validar.
- Evidencia: E17; E03.
- Límite de la conclusión: Coincidencia funcional de campos; fuente técnica de costo no comprobada.

### R19 · Recepciones / Compras → WMS / Movimientos

- Nivel: **Inferido**.
- Proceso: Entrada física y registro de existencias.
- Información: Producto, cantidad, almacén, documento.
- Dependencias: Recepción y almacén.
- Implementación: Implementación pendiente de validar.
- Evidencia: E06; E09.
- Límite de la conclusión: No se observó el movimiento de una recepción específica.

### R20 · WMS / Picking → Logística / Despacho

- Nivel: **Inferido**.
- Proceso: Preparación y recepción de carga por conductor.
- Información: Picking, ítems, operario, conductor.
- Dependencias: Orden de picking y planificación.
- Implementación: Implementación pendiente de validar.
- Evidencia: E10; E14.
- Límite de la conclusión: La pantalla menciona conductor; enlace exacto con despacho pendiente.

### R21 · B2B / Ventas de vehículos → B2B / Comisiones de la red

- Nivel: **Inferido**.
- Proceso: Cálculo y liquidación de comisiones.
- Información: VIN, concesionario, factura, comisión, pagado.
- Dependencias: Venta y convenio comercial.
- Implementación: Implementación pendiente de validar.
- Evidencia: E28; E29.
- Límite de la conclusión: Falta confirmar disparador, base y vínculo con factura de comisión.

### R22 · B2B / Venta y entrega → B2B / Pólizas de garantía

- Nivel: **Inferido**.
- Proceso: Emisión de cobertura al titular.
- Información: Vehículo, titular, vendedor, póliza.
- Dependencias: Venta, entrega y reglas de garantía.
- Implementación: Implementación pendiente de validar.
- Evidencia: E30.
- Límite de la conclusión: No se verificó emisión automática ni vínculo con SRG.

### R23 · Compras / Facturas y retenciones → CxP / Solicitudes de Pago

- Nivel: **Inferido**.
- Proceso: Conversión de obligación a solicitud de pago.
- Información: Proveedor, documento, total a pagar, saldo.
- Dependencias: Factura aprobada y retenciones.
- Implementación: Implementación pendiente de validar.
- Evidencia: E07; E22.
- Límite de la conclusión: La solicitud tiene Módulo y Proveedor; falta documento individual de origen.

### R24 · PA / Forecast → Compras / Plan de abastecimiento

- Nivel: **Pendiente**.
- Proceso: Planificación de demanda y compras.
- Información: Demanda, existencias, plazos y propuesta.
- Dependencias: PA habilitada, maestros y política.
- Implementación: Implementación pendiente de validar.
- Evidencia: Notion: PA (Beta), contenido En desarrollo; PPTX diapositiva 1.
- Límite de la conclusión: No visible como módulo PA en esta cuenta. Reorden no demuestra Forecast.

### R25 · Módulos operativos → BI / Control de Gestión

- Nivel: **Pendiente**.
- Proceso: Consolidación de indicadores.
- Información: Indicadores, período, dimensiones.
- Dependencias: Fuentes, actualización y permisos.
- Implementación: Implementación pendiente de validar.
- Evidencia: E01.
- Límite de la conclusión: Tablero accesible, pero fuentes, métricas y actualización sin confirmar.

## Preguntas de validación

| Prioridad | Responsable sugerido | Pregunta | Qué resuelve |
|---|---|---|---|
| Prioridad 1 | Responsable funcional / seguridad | ¿Qué empresa, perfil y permisos representa la cuenta usada y cuáles son los permisos efectivos de cada operario? | Validar alcance del mapa 2 por rol, sin modificar permisos. |
| Prioridad 1 | Arquitectura / producto | ¿Cuál es la versión aprobada del diseño? ¿CO tiene dos códigos distintos? ¿PP corresponde a otra versión? | Resolver nomenclatura y evitar equivalencias falsas. |
| Prioridad 1 | Producto / desarrollo | ¿PA está en beta habilitable, en desarrollo o planificada? ¿En qué se diferencia de Reorden? | Separar Forecast de reposición por mínimos. |
| Prioridad 1 | Comercio exterior | ¿Las seis opciones sin enlace en Importaciones están pendientes, embebidas en Expedientes o restringidas por permisos? | Definir disponibilidad y alcance de nacionalización, seguros y recosteo. |
| Prioridad 1 | Comercial / finanzas | ¿En qué casos se entrega antes de facturar y en cuáles se factura sin entregar? ¿Cuál es el hecho que crea la CxC? | Documentar alternativas, condiciones y controles de entrega/facturación. |
| Prioridad 1 | Inventario / contabilidad | ¿Qué evento crea el movimiento de stock y el asiento: recepción, validación, factura, OE, despacho o entrega? ¿Cómo se revierte? | Validar disparadores sin probar transacciones en producción. |
| Prioridad 1 | Contabilidad / desarrollo | ¿Qué reglas y documentos cubre cada origen contable? ¿Qué es Módulo 46? ¿Qué ocurre ante una incidencia? | Validar cobertura, duplicidad, reintento e idempotencia en documentación o entorno de prueba. |
| Prioridad 1 | Postventa | ¿Qué estados cubre SRG, qué significa RGH y qué funciones reales de taller existen hoy? | Distinguir garantía, auditoría, servicio, repuestos, mano de obra y facturación. |
| Prioridad 2 | B2B / red comercial | ¿Cómo enlazan solicitud, asignación, traslado, inventario en red, venta, factura, entrega y póliza? | Confirmar documentos y estados de consignación. |
| Prioridad 2 | B2B / finanzas | ¿Qué dispara una comisión de red y su factura? ¿Cuándo se liquida y registra en CxP? | Separar comisiones comerciales de comisiones de la red. |
| Prioridad 2 | Datos maestros | ¿Clientes de CRM y Comercial comparten maestro? ¿Organización y Talento Humano comparten estructura? | Distinguir vistas, duplicados y entidades independientes. |
| Prioridad 2 | Fiscal / contabilidad | ¿Dónde se mantienen reglas fiscales, retenciones, libros y cierres? ¿Quién valida normativa y vigencia? | El glosario es contexto, no certificación de cumplimiento ni reglas activas. |
| Prioridad 2 | BI / producto | ¿BI Corp y Control de Gestión son productos distintos? ¿Qué datos e indicadores consume cada uno y con qué frecuencia? | Confirmar integración y alcance real. |
| Prioridad 2 | Talento / soporte / marketing | ¿Dónde quedaron las funciones originales de CH, AC y MC no localizadas? ¿Están ocultas, sustituidas, planificadas o descartadas? | Asignar estado con evidencia de producto y responsable. |

## Cómo continuar

1. Validar con responsables los estados de PA, BI Corp, Importaciones y servicio de taller.
2. Obtener una matriz de permisos existente o documentada por perfil, sin cambiar permisos en producción.
3. Solicitar manuales técnicos, ejemplos anonimizados o demostraciones en un entorno de prueba para validar disparadores y vínculos R18–R25.
4. Completar pantallas no inspeccionadas y disponibilidad por permiso. No se deben abrir notificaciones que puedan marcarse como leídas sin validar antes ese comportamiento.
5. Actualizar el mapa de operarios cuando los responsables confirmen sus procesos, excepciones y acciones permitidas.

## Uso de los archivos

Los dos archivos .drawio se abren como diagramas editables en diagrams.net o su aplicación de escritorio. Todos los nodos, textos y líneas son objetos editables. El HTML permite revisar ambos mapas sin instalar herramientas y contiene navegación por páginas y ajuste de tamaño. Cada nodo de consulta conserva un enlace a su pantalla; abrirlo puede requerir sesión. No se enviaron los archivos a servicios de diagramación.

El mapa interno incluye 20 páginas: navegación general, 11 inventarios por área, correspondencia histórica, dos inventarios del diseño original, cuatro vistas de relaciones comprobadas e hipótesis. El mapa de operarios contiene cinco vistas de consultas comprobadas para la cuenta actual.

## Páginas individuales de Notion

- [7. CO- Compras](https://app.notion.com/p/41a0941a37af801c97e2d5c199126747?pvs=204)
- [6. PA- Planeación de Abastecimiento (Beta)](https://app.notion.com/p/41a0941a37af802ca2def321905adb74?pvs=204)
- [3. CO- Comercial](https://app.notion.com/p/41a0941a37af80308e8ecf7f777c7b4f?pvs=204)
- [CH- Capital Humano](https://app.notion.com/p/41a0941a37af8051a1f4c161e2d3c1d9?pvs=204)
- [MC- Mercadeo Corporativo](https://app.notion.com/p/41a0941a37af80768c8ce65ee97e207d?pvs=204) — Sin contenido sustantivo.
- [4. CF- Contables y Fiscales](https://app.notion.com/p/41a0941a37af8076bfe6c94e4a283eda?pvs=204)
- [CI- Control de Inventario](https://app.notion.com/p/41a0941a37af80869c7fc9667e2712e8?pvs=204)
- [8. IM- Importación y Nacionalización](https://app.notion.com/p/41a0941a37af809888f2d5c11f2e9339?pvs=204)
- [1. TMS-Transport Management System / WMS- Warehouse Management System](https://app.notion.com/p/41a0941a37af80a48c23f3b0106affe3?pvs=204)
- [GA- Garantía](https://app.notion.com/p/41a0941a37af80ac94c6d6a055414fe7?pvs=204)
- [AC- Asistencia al Concesionario](https://app.notion.com/p/41a0941a37af80bbb87fef7f1858f8b4?pvs=204) — Sin contenido sustantivo.
- [2. PP- Productos y Precios](https://app.notion.com/p/41a0941a37af80ed86c3e7a064bcd7e2?pvs=204) — Sin contenido sustantivo.
- [AF- Administrativos y Financieros](https://app.notion.com/p/41a0941a37af80f28beeea0668083041?pvs=204)
- [5. B2B](https://app.notion.com/p/41a0941a37af80309cece458e6d4259f?pvs=204)
- [Inteligencia de Negocios](https://app.notion.com/p/41a0941a37af803cac24e2dcff4016a6?pvs=204)
- [Importaciones](https://app.notion.com/p/41a0941a37af804bba3bf96040a63bad?pvs=204)
- [Business Intelligence](https://app.notion.com/p/41a0941a37af805eaaa6c46e728a9afa?pvs=204)
- [CRM](https://app.notion.com/p/41a0941a37af808891d8fb3e0a62f668?pvs=204)
- [Herramientas de Gestión](https://app.notion.com/p/41a0941a37af808ea022e3952579ce24?pvs=204)
- [Organización](https://app.notion.com/p/41a0941a37af80dd9871ca0475b4608c?pvs=204)
