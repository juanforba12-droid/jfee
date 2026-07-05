replacements = {
    "jugador: 'Akanji'": "jugador: 'Manuel Akanji'",
    "jugador: 'Alberto'": "jugador: 'Carlos Alberto'",
    "jugador: 'Brown'": "jugador: 'José Luis Brown'",
    "jugador: 'Burruchaga'": "jugador: 'Jorge Burruchaga'",
    "jugador: 'Costa'": "jugador: 'Diego Costa'",
    "jugador: 'De Bruyne'": "jugador: 'Kevin De Bruyne'",
    "jugador: 'Del Piero'": "jugador: 'Alessandro Del Piero'",
    "jugador: 'Di María'": "jugador: 'Ángel Di María'",
    "jugador: 'Džeko'": "jugador: 'Edin Džeko'",
    "jugador: 'Falcão'": "jugador: 'Falcão'",
    "jugador: 'Haller'": "jugador: 'Helmut Haller'",
    "jugador: 'Inui'": "jugador: 'Takashi Inui'",
    "jugador: 'Kolo Muani'": "jugador: 'Randal Kolo Muani'",
    "jugador: 'Mata'": "jugador: 'Juan Mata'",
    "jugador: 'Mensah'": "jugador: 'John Mensah'",
    "jugador: 'Mercado'": "jugador: 'Gabriel Mercado'",
    "jugador: 'Park'": "jugador: 'Park Ji-sung'",
    "jugador: 'Pašalić'": "jugador: 'Mario Pašalić'",
    "jugador: 'Pavón'": "jugador: 'Cristian Pavón'",
    "jugador: 'Rebić'": "jugador: 'Ante Rebić'",
    "jugador: 'Smicer'": "jugador: 'Vladimír Šmicer'",
    "jugador: 'Valdano'": "jugador: 'Jorge Valdano'",
    "jugador: 'Van Persie'": "jugador: 'Robin van Persie'",
    "jugador: 'van de Beek'": "jugador: 'Donny van de Beek'",
    "jugador: 'Weghorst'": "jugador: 'Wout Weghorst'",
    "jugador: 'Weber'": "jugador: 'Wolfgang Weber'",
    "jugador: 'Zagallo'": "jugador: 'Mário Zagallo'",
    "jugador: 'Arthur'": "jugador: 'Arthur Melo'",
}

with open('src/lib/golazosData.js', 'r', encoding='utf-8') as f:
    content = f.read()

count = 0
for old, new in replacements.items():
    n = content.count(old)
    if n > 0:
        content = content.replace(old, new)
        count += n
        print(str(n) + "x: " + old + " -> " + new)

with open('src/lib/golazosData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nTOTAL: " + str(count) + " reemplazos")
