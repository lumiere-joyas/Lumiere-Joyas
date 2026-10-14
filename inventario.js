/* =====================================================================
   INVENTARIO · Lumière Joyas
   ---------------------------------------------------------------------
   Aquí controlas cuántas piezas tienes disponibles de cada producto.
   Este archivo lo usan las dos páginas (lumiere_joyas.html y
   nosotros.html), así que solo tienes que editarlo aquí.

   · Número mayor que 0  → el producto está disponible.
   · 0                   → se muestra el aviso "Agotado" y no se puede añadir.

   Cuando un cliente envía su pedido, el sitio descuenta esas piezas
   automáticamente en el dispositivo de ese cliente, y el producto le
   aparece como "Agotado". Para el resto de clientes, el sitio no puede
   saber qué vendiste, así que mantén estas cantidades al día.

   CUANDO CAMBIES CANTIDADES (te llegaron piezas nuevas, o vendiste):
     1. Escribe aquí la cantidad real que tienes ahora de cada producto.
     2. Sube en 1 el número de INVENTARIO_VERSION (abajo).
        Así se reinician las compras guardadas en los dispositivos de
        los clientes y todo vuelve a quedar según estas cantidades.

   Nota: la cantidad por pedido sigue limitada a 2 piezas en
   lumiere_joyas.html y a 1 en nosotros.html (o menos, si te quedan pocas).
   ===================================================================== */

// Sube este número en 1 cada vez que cambies las cantidades de abajo.
const INVENTARIO_VERSION = 0;

const STOCK = {
    // ----- Anillos -----
    'anillo-1': 2,   // Anillo dorado 18k
    'anillo-2': 2,   // Anillo banda lisa
    'anillo-3': 2,   // Anillo piedra central
    'anillo-4': 2,   // Conjunto de anillos dorados

    // ----- Aretes -----
    'arete-1': 2,    // Aretes con forma de serpiente
    'arete-2': 2,    // Aretes con forma de corazón
    'arete-3': 2,    // Aretes corazón dorado
    'arete-4': 2,    // Aretes colgantes corazón

    // ----- Collares -----
    'collar-1': 2,   // Collar en forma de estrella
    'collar-2': 2,   // Gargantilla elegante
    'collar-3': 2,   // Collar forma de corazón
    'collar-4': 2,   // Collar de perlas

    // ----- Pulseras -----
    'pulsera-1': 2,  // Pulsera de perlas rojas
    'pulsera-2': 2,  // Juego de pulseras con perlas
    'pulsera-3': 2,  // Pulsera pandora plateada
    'pulsera-4': 2,  // Pulseras para compartir

    // ----- Piezas únicas (nosotros.html) -----
    'novedad-1': 1,  // Anillo con diseño de flores
    'novedad-2': 1,  // Collar doble de perlas
    'novedad-3': 1,  // Conjunto de aretes plateados
    'novedad-4': 1,  // Brazalete floral
    'novedad-5': 1,  // Anillo apilable con cristal azul
    'novedad-6': 1   // Collar con dije de corazón minimalista
};
