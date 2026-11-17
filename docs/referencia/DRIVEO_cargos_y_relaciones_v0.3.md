# DRIVEO — Secciones y cargos funcionales

Versión 0.3 · 16/11/2026. Seis secciones por mapa, con módulos delimitados, funciones internas y líneas directas entre los elementos relacionados. Los bloques blancos enlazan con otra sección y repiten el identificador jerárquico de su origen o destino.

## Lectura

A → B indica que A consulta o referencia funcionalmente a B. F indica un flujo documental. Azul continuo corresponde a referencia observada; morado discontinuo a relación inferida; ocre discontinuo a pendiente. Un cruce sin punto representa dos líneas independientes, no una integración adicional.

Los códigos R/F conservan la evidencia y limitaciones del registro anterior. Las líneas no acreditan consultas SQL, automatismos, cardinalidades ni procesos ejecutados.

## Cargos propuestos

Los puestos incluidos son una propuesta de responsabilidades funcionales basada en los procesos y pantallas analizados. No fueron confirmados como cargos reales de Datsoft o de sus clientes; tampoco representan permisos efectivos. La versión de operarios sigue basada en la cuenta elegida por el usuario. Los cargos propuestos no amplían su acceso.

| Sección | Contenido |
|---|---|
| S01 | Abastecimiento, inventario y logística |
| S02 | Comercial, facturación y CRM |
| S03 | B2B y red de concesionarios |
| S04 | Administración, finanzas y contabilidad |
| S05 | Garantías y postventa |
| S06 | Organización, personas, soporte y BI |

## S01 · Abastecimiento, inventario y logística

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| CS.3.1 · Catálogo | Analista de catálogo | Analista de precios / responsable de producto | Mantener referencias de repuestos, servicios y vehículos; coordinar calidad de datos. |
| CS.3.2 · Compras | Comprador / analista de compras | Jefe de compras / receptor de mercancía | Gestionar proveedores, OC, reorden, recepción documental y facturas de compra. |
| CS.3.3 · Importaciones | Analista de importaciones | Coordinador de comercio exterior / agente aduanal | Dar seguimiento al expediente, embarque, facturas y soportes de nacionalización. |
| CS.3.4 · WMS | Jefe de almacén | Almacenista / preparador de pedidos | Coordinar ubicaciones, movimientos, picking y conteos físicos. |
| CS.3.5 · Kardex | Analista de inventario y costos | Contador / jefe de almacén | Revisar trazabilidad, movimientos históricos, costos y referencias contables. |
| CS.3.6 · Logística | Coordinador de logística | Despachador / conductor | Planificar rutas y despachos; coordinar flota, entregas y devoluciones. |
| Dis.2 · PA · Planeación de Abastecimiento | Planificador de abastecimiento | Jefe de compras / analista de demanda | Elaborar el forecast y propuestas de abastecimiento; disponibilidad de PA pendiente. |

## S02 · Comercial, facturación y CRM

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| CRM.4.1 · Gestión de Clientes | Ejecutivo de atención comercial | Vendedor / coordinador comercial | Dar seguimiento a prospectos, clientes e interacciones. |
| CRM.4.2 · Mercadeo | Analista de mercadeo | Coordinador de marketing | Administrar el seguimiento de suscripciones y actividades de mercadeo habilitadas. |
| CRM.4.3 · Fidelización | Responsable de fidelización | Atención al cliente / mercadeo | Coordinar comunicaciones de fidelización; alcance más allá de notificaciones pendiente. |
| Ven.5.1 · Comercial | Coordinador comercial | Vendedor / analista de precios y comisiones | Gestionar cartera, pedidos, condiciones comerciales, precios y comisiones. |
| Ven.5.2 · Facturación | Analista de facturación | Coordinador comercial / cuentas por cobrar | Preparar y revisar facturas, notas de débito y notas de crédito según autorización. |
| Dis.3 · MC · Diseño de referencia | Coordinador de mercadeo corporativo | Analista de marketing | Coordinar CRM corporativo, eventos y campañas previstos en el diseño. |

## S03 · B2B y red de concesionarios

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| B2B.9.1 · Cliente | Administrador del concesionario | Responsable de atención de la importadora | Consultar la gestión y las notificaciones del concesionario. |
| B2B.9.2 · Compras | Comprador del concesionario | Administrador del concesionario | Consultar y gestionar, según autorización, pedidos, documentos de entrega y facturas B2B. |
| B2B.9.3 · Tickets | Usuario solicitante del concesionario | Analista de soporte | Solicitar y seguir soporte entre concesionario e importadora. |
| B2B.9.4 · Cobranza | Analista financiero del concesionario | Cobranzas de la importadora | Revisar notas de crédito y abonos asociados a la cuenta B2B. |
| B2B.9.5 · Consignación · Importadora | Coordinador de red y consignación | Administrador de concesionario / facturación / tesorería / garantías | Coordinar solicitudes, asignaciones, inventario en red, venta, entrega, pólizas y comisiones. |
| B2B.9.6 · Solicitudes de Repuestos | Encargado de repuestos del concesionario | Comprador / almacenista receptor | Coordinar solicitudes y recepción de repuestos entre red e importadora. |
| B2B.9.7 · Mis vehículos | Encargado de inventario del concesionario | Asesor comercial | Consultar las unidades asociadas al concesionario. |
| B2B.9.8 · Notificaciones | Administrador del concesionario | Usuarios autorizados de la red | Consultar las notificaciones B2B. |

## S04 · Administración, finanzas y contabilidad

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| AF.6.1 · Cuentas por Cobrar | Analista de cuentas por cobrar | Cobrador / tesorería | Revisar entregas por facturar, abonos, cobros, anticipos y saldos. |
| AF.6.2 · Cuentas por Pagar | Analista de cuentas por pagar | Tesorería / responsable de aprobación | Revisar solicitudes y programación de pagos; separar preparación, aprobación y ejecución. |
| AF.6.3 · Bancos y Cajas | Tesorero / cajero | Analista bancario / contador | Controlar cuentas bancarias y cajas; coordinar sus movimientos y revisión. |
| AF.6.4 · Contabilidad | Contador / analista contable | Responsable fiscal / jefe de contabilidad | Revisar asientos, incidencias, libros, estados y cierres según sus autorizaciones. |
| Dis.6 · CF · Diseño de referencia | Responsable fiscal / contador | Analista tributario | Revisar el alcance fiscal y su correspondencia con libros y operaciones actuales. |

## S05 · Garantías y postventa

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| TG.10.1 · Taller y Garantías | Coordinador de postventa | Asesor de servicio / analista de garantías | Supervisar el tablero de garantías; el ciclo integral de taller no está confirmado. |
| TG.10.2 · Garantías (importadora) | Analista de garantías de la importadora | Supervisor de garantías / técnico evaluador | Revisar SRG, reglas y catálogo de fallas; dictamen sujeto a autorización. |
| Act.1 · Concesionario · actor externo | Asesor de garantías del concesionario | Técnico de diagnóstico | Remitir la solicitud SRG a la importadora; actor externo descrito por la interfaz. |
| Dis.4 · Servicio integral de taller | Jefe de taller / asesor de servicio | Técnico de taller | Coordinar el servicio integral de taller cuando se confirme su alcance implementado. |

## S06 · Organización, personas, soporte y BI

| Código / módulo | Cargo responsable propuesto | Otros cargos que intervienen | Trabajo principal |
|---|---|---|---|
| Org.1.1 · Empresas y Usuarios | Administrador del sistema | Administrador de empresa | Mantener empresas e identidad corporativa; coordinar usuarios y configuración con autorización. |
| Org.1.2 · Estructura Organizativa | Analista de organización | Responsable de Talento Humano | Mantener perfiles, manuales y métricas organizativas. |
| HG.2.1 · E-Learning Usuarios | Colaborador en capacitación | Supervisor del colaborador | Consultar y realizar los cursos que le sean asignados. |
| HG.2.2 · E-Learning Corporativo | Coordinador de capacitación | Talento Humano / facilitador | Coordinar capacitación corporativa y sus comunicaciones; alcance actual por validar. |
| HG.2.3 · Notificaciones | Coordinador de comunicación interna | Responsables de cada área | Coordinar avisos internos y su seguimiento; permisos de emisión pendientes. |
| HG.2.4 · Tickets | Analista de soporte | Implementador / usuario solicitante | Recibir, clasificar y dar seguimiento a tickets. |
| TH.7.1 · Estructura Organizativa | Analista de Talento Humano | Jefe de Talento Humano / responsables de área | Mantener estructura de cargos, manuales y métricas; no presuponer nómina operativa. |
| SF.8.1 · Control y Supervisión | Supervisor de sucursales y red | Auditor operativo / responsable de concesionario | Dar seguimiento a evaluaciones asignadas, documentos y períodos de supervisión. |
| BI.11.1 · Control de Gestión | Analista de control de gestión | Gerencia / responsables de área | Analizar indicadores habilitados; fuentes y alcance del tablero pendientes. |
| Dis.1 · BI Corp · diseño / desarrollo documentado | Analista de inteligencia de negocios | Responsable de producto / desarrollo | Definir fuentes e indicadores; BI Corp documentado en desarrollo. |
| Dis.5 · CH · Diseño; funciones no localizadas | Analista de Talento Humano | Analista de nómina / responsable de capacitación | Funciones históricas de selección, evaluación, nómina, capacitación, horarios y vacaciones; disponibilidad no confirmada. |

## Relaciones y cambios de sección

| Código | Consulta / emite | Referencia / destino | Nivel | Evidencia |
|---|---|---|---|---|
| R01 | CS.3.2.3 · Reorden | CS.3.2.2 · Órdenes de Compra | Verificado | E05 |
| R02 | CS.3.2.4 · Recepciones | CS.3.2.2 · Órdenes de Compra | Verificado | E06 |
| R03-OC | CS.3.2.6 · Facturas de Compra | CS.3.2.2 · Órdenes de Compra | Verificado | E07 |
| R03-RE | CS.3.2.6 · Facturas de Compra | CS.3.2.4 · Recepciones | Verificado | E07 |
| R04 | CS.3.6.1 · Notas de Entrega | Ven.5.1.7 · Pedidos | Verificado | E13 |
| R05-P | Ven.5.2.1 · Facturas | Ven.5.1.7 · Pedidos | Verificado | E16 |
| R05-E | Ven.5.2.1 · Facturas | CS.3.6.1 · Notas de Entrega | Verificado | E16 |
| R06 | AF.6.1.2 · Por facturar | CS.3.6.1 · Notas de Entrega | Verificado | E19 |
| R07 | AF.6.1.3 · Abonos | Ven.5.2.1 · Facturas | Verificado | E21 |
| R08-F | CRM.4.1.2 · Clientes | Ven.5.2.1 · Facturas | Verificado | E34 |
| R08-E | CRM.4.1.2 · Clientes | AF.6.1.2 · Por facturar | Verificado | E34 |
| R09 | CS.3.3.1 · Expedientes | CS.3.5.1 · Libro Kardex | Verificado | E08 |
| R10 | AF.6.4.2 · Asientos Contables | CS.3.2 · Compras | Verificado | E24 |
| R11-O | AF.6.4.2 · Asientos Contables | CS.3.4 · WMS | Verificado | E11; E24 |
| R11-A | CS.3.5.1 · Libro Kardex | AF.6.4.2 · Asientos Contables | Verificado | E11; E24 |
| R12 | AF.6.4.2 · Asientos Contables | Ven.5.2 · Facturación | Verificado | E24 |
| R13 | AF.6.4.2 · Asientos Contables | AF.6.1 · Cuentas por Cobrar | Verificado | E24 |
| R14 | AF.6.4.2 · Asientos Contables | AF.6.2 · Cuentas por Pagar | Verificado | E24 |
| R15 | AF.6.4.2 · Asientos Contables | AF.6.3 · Bancos y Cajas | Verificado | E24 |
| F16 | Act.1.1 · SRG remitida a la importadora | TG.10.2.1 · Revisión de garantías | Verificado | E32 |
| R17 | B2B.9.5.3 · Asignaciones | B2B.9.5.2 · Solicitudes | Verificado | E27 |
| R18 | Ven.5.1.6 · Asignación de Precios | CS.3.1 · Catálogo | Inferido | E17; E03 |
| R19 | CS.3.4.2 · Movimientos de Inventario | CS.3.2.4 · Recepciones | Inferido | E06; E09 |
| R20 | CS.3.6.7 · Planificación de Despacho | CS.3.4.4 · Órdenes de Picking | Inferido | E10; E14 |
| R21 | B2B.9.5.11 · Comisiones de la red | B2B.9.5.7 · Facturación de ventas | Inferido | E28; E29 |
| R22 | B2B.9.5.10 · Pólizas de garantía | B2B.9.5.7 · Facturación de ventas | Inferido | E30 |
| R23 | AF.6.2.1 · Pagos | CS.3.2.6 · Facturas de Compra | Inferido | E07; E22 |
| F24 | Dis.2.1 · Forecast: diseño; Beta / desarrollo en Notion | CS.3.2 · Compras | Pendiente | Notion: PA (Beta), contenido En desarrollo; PPTX diapositiva 1 |
| R25 | BI.11.1.1 · Tablero | Dis.1.2 · Fuentes e indicadores por validar | Pendiente | E01 |

## Validación con Datsoft

1. Confirmar el nombre oficial del cargo responsable de cada módulo y si acumula más de una función.
2. Identificar quién prepara, aprueba y ejecuta operaciones en compras, pagos, ajustes de inventario, facturación y garantías. No asignar esas tres responsabilidades por defecto a una sola persona.
3. Contrastar esta propuesta con una matriz de permisos existente, sin cambiar usuarios ni permisos en producción.
4. Confirmar relaciones inferidas y el alcance de los componentes de diseño antes de incorporarlos al mapa operativo.

El inventario sigue comprendiendo 11 áreas, 34 agrupaciones y 152 opciones observadas. El mapa interno conserva ese inventario más la documentación de diseño. El mapa para operarios conserva las 42 consultas inspeccionadas; los bloques externos solo aportan contexto de relación. Un módulo sin líneas no se declara aislado: sus conexiones no se han validado en el registro.
