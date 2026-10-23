# IAET · Interfaz de Asimilación de Experiencias Tecnológicas

> **La IAET es una organización ficticia** que reúne estudios serios y otros que nadie pidió. Cada expediente declara su naturaleza: **Parodia**, **Estudio** o **Divulgación**. Sus divisiones, comisiones y cargos no existen; sus estudios, en general, sí.

Este repositorio es la sede de la IAET: un sitio estático publicado con GitHub Pages, sin paso de compilación. Aloja los proyectos pequeños que no justifican un repositorio propio, ordenados por divisiones, y enlaza los que sí lo tienen.

**Sede publicada:** <https://v0raonline.github.io/iaet/>

## Organigrama

| División | Sigla | Carpeta | Naturaleza habitual |
|---|---|---|---|
| Estudios Que Nadie Pidió | EQNP | `eqnp/` | Parodia |
| Física de Mundos Simulados | FMS | `fms/` | Estudio, divulgación |

## Estructura

```
iaet/
├── index.html                 Portal: divisiones y últimos expedientes
├── expedientes.json           Catálogo: divisiones y expedientes (internos y externos)
├── comun/
│   ├── iaet.css               Marco institucional común (paleta, barra, metadatos, citas, pie…)
│   ├── catalogo.js            Pinta el catálogo en el portal y en las páginas de división
│   ├── plantilla-expediente.html
│   └── emblemas/
│       ├── iaet.webp          Emblema en uso
│       └── originales/        Fuentes en alta resolución
├── eqnp/
│   ├── index.html             Página de la División EQNP
│   ├── 0069-ergonomia-del-deseo/index.html
│   └── exp1800-01/            Expediente 1800/01: index.html y assets/
└── fms/
    └── index.html             Página de la División FMS
```

Para verlo en local (el catálogo se carga con `fetch`, así que abrir los archivos directamente desde el disco no basta):

```bash
python -m http.server
```

y abrir <http://localhost:8000/>.

## Cómo añadir un expediente

### Expediente interno (vive en este repositorio)

1. Copiar `comun/plantilla-expediente.html` a `<division>/<nnnn-titulo-corto>/index.html`, por ejemplo `eqnp/0070-otro-estudio/index.html`. Las rutas de la plantilla (`../../comun/…`) asumen esa profundidad.
2. Rellenar los campos entre corchetes. El campo **Tipo** de los metadatos debe coincidir con el del catálogo.
3. El bloque de nota de parodia del pie se deja solo si el tipo es `parodia`; en estudios y divulgación se borra.
4. Los estilos propios del expediente van en su `<style>`; el marco institucional ya viene de `comun/iaet.css`.
5. Añadir la ficha a `expedientes.json`:

```json
{
  "id": "EQNP-0070",
  "division": "eqnp",
  "titulo": "Título del expediente",
  "resumen": "Una o dos frases.",
  "tipo": "parodia",
  "fecha": "2026-11-01",
  "url": "eqnp/0070-otro-estudio/",
  "externo": false
}
```

### Expediente externo (vive en su propio repositorio)

Algunos estudios tienen repositorio y enlaces publicados propios. **Se quedan donde están**: la IAET solo los registra y enlaza, para que ningún enlace compartido se rompa. Basta con añadir la ficha al catálogo, con la URL absoluta de la página publicada y, si se quiere, la del repositorio:

```json
{
  "id": "FMS-0002",
  "division": "fms",
  "titulo": "Título del estudio",
  "resumen": "Una o dos frases.",
  "tipo": "estudio",
  "fecha": "2026-11-01",
  "url": "https://usuario.github.io/repositorio/",
  "externo": true,
  "repo": "https://github.com/usuario/repositorio"
}
```

El portal marca estas fichas con «repositorio propio ↗». Mientras una URL valga `"PENDIENTE"`, la ficha aparece sin enlace y con la marca «enlace pendiente».

### Campos del catálogo

- `tipo`: `parodia`, `estudio` o `divulgacion`. Se muestra como etiqueta visible en cada ficha.
- `fecha`: ISO `aaaa-mm-dd`. El portal ordena de más reciente a más antiguo.
- `url`: relativa a la raíz del sitio para los internos; absoluta para los externos.
- `repo`: opcional.
- `nota`: opcional, uso interno (TODOs); no se muestra.

### Nueva división

Añadirla a `divisiones` en `expedientes.json` (`slug`, `nombre`, `sigla`, `descripcion`; `provisional: true` si el nombre no es definitivo) y crear `<slug>/index.html` copiando `eqnp/index.html` y cambiando textos y la llamada final `IAET.division("<slug>")`. La barra superior no necesita cambios: enlaza al índice de divisiones del portal.

## Marcas

Los expedientes que citan obras, personajes o marcas de terceros son obra de aficionados, sin ánimo de lucro, y **no tienen afiliación con sus titulares** ni cuentan con su respaldo. Las marcas citadas pertenecen a sus titulares. Vale igual para parodias, estudios y divulgación.

Titulares citados hasta la fecha:

| Obra | Titular | Expedientes |
|---|---|---|
| *Star Wars* (Stormtrooper y marcas relacionadas) | Lucasfilm Ltd. / The Walt Disney Company | EQNP-0069 |
| *Portal* | Valve Corporation | FMS-0001 (externo) |

Al añadir un expediente que cite una obra nueva, sumar su fila a esta tabla y poner la nota de no afiliación en el pie del expediente, nombrando al titular (ver la plantilla).

## Licencia

Todo el repositorio (código, textos e imágenes) se publica bajo **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)**: se puede copiar y adaptar citando la autoría, sin fines comerciales y compartiendo lo derivado con la misma licencia. Ver [`LICENSE`](LICENSE).

La licencia no concede derechos sobre las marcas de terceros citadas. Los expedientes externos se rigen por la licencia de su propio repositorio.

---

*Edita la Interfaz de Asimilación de Experiencias Tecnológicas. No intente encontrarnos.*
