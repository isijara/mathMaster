var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

migration = [ {
    fav: false,
    chiste: "- Quien hijo?\n- Mama, Mama en la escuela dicen que eres adivina.",
    explicacion: "Esta cura porque adivina lo que el hijo le dira entonces si es adivina"
}, {
    fav: false,
    chiste: "- Profe cuando empezaremos a ver multiplicaciones de dos digitos?\n- Calmate cerebrito que esto es el conalep no Harvard.",
    explicacion: "No esta cura, todos merecen respeto... hasta los navajeros del conalep"
}, {
    fav: false,
    chiste: "- Godinez este reporte esta mal.\n- Mire jefe lo importante es que su esposa no se entere que anda con la secretaria.\n-Asi dejelo ta chingon.",
    explicacion: "Ta cura porque... es como que amenaza al jefe pues entonces ya el jefe le dice que asi esta bien"
}, {
    fav: false,
    chiste: "- Mama mama en la escuela me dicen peludo.\n- No mames un perro que habla.",
    explicacion: "Ta cura porque esta tan peludo que creen que es un perro."
}, {
    fav: false,
    chiste: "Porque el Pato cruzo la Calle?\nPorque no es Gallina",
    explicacion: "Esta cura porque si fuera gallina fuera miedoso pues y entonces no se animara a cruzar la calle."
} ];

Alloy.Collections.chiste = Alloy.createCollection("nivel", [ {
    nivel: "Nivel 1"
}, {
    nivel: "Nivel 2"
}, {
    nivel: "Nivel 3"
} ]);

Alloy.createController("index");