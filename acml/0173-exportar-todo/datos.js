/*
  IAET  ·  https://v0raonline.github.io/iaet/
  Copyright (c) 2026 V0ra (v0raonline)
  Licencia CC BY-NC-SA 4.0 — sin fines comerciales. https://creativecommons.org/licenses/by-nc-sa/4.0/

  Datos públicos del expediente ACML-0173. Fichero generado: no editar a mano.
*/
window.MISION = {
  "actualizado": "2026-11-11",
  "proveedores": [
    {
      "id": "chatgpt",
      "nombre": "ChatGPT (OpenAI)",
      "via": "Export desde Ajustes y Privacy Portal (privacy.openai.com)",
      "formato": "ZIP con zips anidados: conversaciones en JSON, ficheros .dat por file_id",
      "trae": "Conversaciones, adjuntos subidos y parte de las imágenes generadas",
      "falta": "173 imágenes generadas que la galería sí muestra (171 de ellas en Proyectos), también en el export que lanzaron ellos tras recibir el listado. Ningún mensaje de herramientas: ni imagen, ni búsqueda, ni ninguna otra",
      "estado": "rojo",
      "estadoTexto": "Reclamación abierta",
      "ultimoExport": "2026-11-13"
    },
    {
      "id": "grok",
      "nombre": "Grok / Imagine (xAI)",
      "via": "Export de datos de la cuenta (accounts.x.ai). El «Access your data» del Privacy Portal redirige a ese mismo export. Vía formal: correo al DPO y al representante en la UE",
      "formato": "ZIP con JSON (prod-grok-backend.json) y una carpeta de ficheros",
      "trae": "Conversaciones, proyectos y una lista de «media posts»",
      "falta": "Las media posts llegan como enlaces a grok.com: de 186, solo 16 traen el fichero; 76 sin prompt. La lista se corta en mayo de 2026 aunque el export es de octubre",
      "estado": "rojo",
      "estadoTexto": "Aviso enviado",
      "ultimoExport": "2026-11-09"
    },
    {
      "id": "copilot",
      "nombre": "Copilot (Microsoft)",
      "via": "Panel de privacidad de Microsoft → Copilot: cuatro botones de exportar, uno por producto, que descargan un CSV al momento",
      "formato": "Cuatro CSV de texto con columnas y formatos de fecha distintos",
      "trae": "El texto de las conversaciones, repartido entre dos ficheros que no coinciden: el historial de aplicaciones cubre unos 18 meses y el de Copilot Chat llega hasta abril de 2025",
      "falta": "Ninguna imagen, aunque la ayuda de Microsoft dice que las imágenes vienen incrustadas en Base64 (data:image) dentro del CSV. Los mensajes de más de unos 18 meses desaparecen del historial de aplicaciones",
      "estado": "rojo",
      "estadoTexto": "Solicitud formal enviada",
      "ultimoExport": "2026-11-09"
    },
    {
      "id": "suno",
      "nombre": "Suno",
      "via": "Privacy Center (enlazado desde suno.com/privacy), acceso y portabilidad para la UE",
      "formato": "Sin comprobar",
      "trae": "Sin comprobar",
      "falta": "Sin comprobar",
      "estado": "ambar",
      "estadoTexto": "Export pedido",
      "ultimoExport": null
    },
    {
      "id": "flow",
      "nombre": "Flow Music (Google)",
      "via": "Dos vías oficiales: en la app, Songs → marcar canciones una a una (no hay «seleccionar todo», ni Mayúsculas + clic para un rango, ni selección arrastrando: comprobado el 9-nov) → Download (zip); y Google Takeout → «Flow». Flow Music no aparece con su nombre en Takeout, pero la ayuda de Google Flow dice que su export incluye audio (.wav), prompts y metadatos",
      "formato": "Takeout: JSON de estructura, carpeta media/ y un _metadata.json por fichero (según la ayuda)",
      "trae": "Takeout de «Flow»: nada («No data found», menos de 1 MB)",
      "falta": "Todas las canciones. La única vía es marcarlas de una en una en la app",
      "estado": "rojo",
      "estadoTexto": "Takeout vacío",
      "ultimoExport": null
    },
    {
      "id": "claude",
      "nombre": "Claude (Anthropic)",
      "via": "Ajustes → Privacidad → Exportar datos. Deja elegir el periodo (todo, 30 días, 90 días o personalizado) y dice qué incluye: conversaciones, usuarios y proyectos. Enlace por correo, válido 24 horas",
      "formato": "Un manifiesto JSON con 6 enlaces de un solo uso que caducan a las 24 h: metadatos, proyectos, memorias, feedback, artifacts y conversaciones (237 MB en total)",
      "trae": "273 conversaciones, proyectos, memorias y 25 artifacts con sus versiones y sus recursos (imágenes, audio). De los documentos subidos (txt, pdf, docx), el texto extraído",
      "falta": "Los ficheros que subiste: 1.167 citados por nombre e id (765 PNG) y ninguno incluido",
      "estado": "ambar",
      "estadoTexto": "Control, con un hueco",
      "ultimoExport": "2026-11-09"
    },
    {
      "id": "substack",
      "nombre": "Substack",
      "via": "Ajustes de la publicación → Exportar. Una por publicación",
      "formato": "ZIP con posts.csv, un HTML por entrada, CSV de estadísticas de cada envío y la lista de suscriptores",
      "trae": "Artículos, podcasts y páginas, y la lista de suscriptores",
      "falta": "Las notas, los comentarios y las imágenes de los posts (los HTML las enlazan al CDN de Substack)",
      "estado": "rojo",
      "estadoTexto": "Solicitud formal enviada",
      "ultimoExport": "2026-10-20"
    }
  ],
  "plazos": [
    {
      "prov": "chatgpt",
      "desde": "2026-11-07",
      "vence": "2026-12-07",
      "base": "Art. 12.3 RGPD: un mes desde la solicitud"
    },
    {
      "prov": "suno",
      "desde": "2026-11-09",
      "vence": "2026-12-09",
      "base": "Art. 12.3 RGPD: un mes desde la solicitud"
    },
    {
      "prov": "grok",
      "desde": "2026-11-09",
      "vence": "2026-12-09",
      "base": "Art. 12.3 RGPD: un mes desde el aviso"
    },
    {
      "prov": "copilot",
      "desde": "2026-11-09",
      "vence": "2026-12-09",
      "base": "Art. 12.3 RGPD; Microsoft anuncia «un plazo de 30 días»"
    },
    {
      "prov": "substack",
      "desde": "2026-11-11",
      "vence": "2026-12-11",
      "base": "Art. 12.3 RGPD; Substack se compromete a responder en un mes (ampliable dos)"
    }
  ],
  "eventos": [
    {
      "fecha": "2026-10-21",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Detectado que faltan imágenes en el export de ChatGPT"
    },
    {
      "fecha": "2026-11-05",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Cruce con la biblioteca web: 62 generadas que no están en ningún export"
    },
    {
      "fecha": "2026-11-07",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Lo generado dentro de Proyectos no llega ni a la biblioteca ni al export; la galería /images sí lo lista"
    },
    {
      "fecha": "2026-11-07",
      "prov": "chatgpt",
      "tipo": "envio",
      "texto": "Reclamación enviada: aviso de error en la web y solicitud RGPD (arts. 15 y 20) en el Privacy Portal"
    },
    {
      "fecha": "2026-11-08",
      "prov": "chatgpt",
      "tipo": "respuesta",
      "texto": "Respuesta: el export de Ajustes «may only include references»; remiten al Privacy Portal"
    },
    {
      "fecha": "2026-11-08",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Llega el export del Privacy Portal: faltan las mismas. 173 por contenido, 171 de Proyectos, 0 mensajes de la herramienta de imagen"
    },
    {
      "fecha": "2026-11-08",
      "prov": "chatgpt",
      "tipo": "envio",
      "texto": "Segunda respuesta enviada con ejemplos y el listado de las 173"
    },
    {
      "fecha": "2026-11-09",
      "prov": "chatgpt",
      "tipo": "respuesta",
      "texto": "Respuesta con una plantilla de cómo descargar y descomprimir un zip. No contesta a nada de lo pedido"
    },
    {
      "fecha": "2026-11-09",
      "prov": "chatgpt",
      "tipo": "envio",
      "texto": "Tercera réplica: pide pasar el caso al DPO y un inventario de las generaciones (art. 5.2)"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "Análisis de 10 exports: las media posts son solo enlaces; 16 de 186 traen fichero"
    },
    {
      "fecha": "2026-11-09",
      "prov": "copilot",
      "tipo": "hallazgo",
      "texto": "Los CSV del panel de privacidad no traen ninguna imagen"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "La política del programa de recompensas de xAI en HackerOne lo dice abiertamente: «Grok Imagine media is publicly accessible to anyone with the link». Lo que generas en Imagine es público, por diseño, para quien tenga el enlace"
    },
    {
      "fecha": "2026-11-09",
      "prov": "suno",
      "tipo": "envio",
      "texto": "Solicitud de acceso y portabilidad enviada desde el Privacy Center"
    },
    {
      "fecha": "2026-11-09",
      "prov": "copilot",
      "tipo": "hallazgo",
      "texto": "La ayuda de Microsoft dice que, si el historial incluye imágenes, el CSV las trae incrustadas en Base64"
    },
    {
      "fecha": "2026-11-09",
      "prov": "copilot",
      "tipo": "envio",
      "texto": "Exportados los cuatro historiales de Copilot desde el panel de privacidad"
    },
    {
      "fecha": "2026-11-09",
      "prov": "flow",
      "tipo": "hallazgo",
      "texto": "Flow Music no aparece en Google Takeout: de 63 productos, solo está «Flow», el de imágenes y vídeos"
    },
    {
      "fecha": "2026-11-09",
      "prov": "flow",
      "tipo": "envio",
      "texto": "Takeout pedido solo con Flow, por si incluye algo de Flow Music"
    },
    {
      "fecha": "2026-11-09",
      "prov": "flow",
      "tipo": "respuesta",
      "texto": "Takeout de «Flow» terminado en 45 minutos: «Flow (No data found)», menos de 1 MB, ninguna descarga. Las canciones de Flow Music no están en Takeout"
    },
    {
      "fecha": "2026-11-09",
      "prov": "claude",
      "tipo": "envio",
      "texto": "Export nuevo pedido desde Ajustes, con todo el periodo, como control"
    },
    {
      "fecha": "2026-11-09",
      "prov": "claude",
      "tipo": "hallazgo",
      "texto": "Llega en menos de 40 minutos como un manifiesto con 6 enlaces de un solo uso. Trae todo lo que genera Claude (artifacts con versiones y recursos), pero no los ficheros que subió la usuaria: 1.167 citados, ninguno incluido; de los documentos, solo el texto"
    },
    {
      "fecha": "2026-11-09",
      "prov": "copilot",
      "tipo": "envio",
      "texto": "Solicitud formal «Exportar mis datos» enviada por el formulario de privacidad de Microsoft. Aviso: estará lista en un plazo de 30 días en el panel de privacidad. El formulario no tiene campo de texto ni menciona Copilot ni las imágenes"
    },
    {
      "fecha": "2026-11-09",
      "prov": "copilot",
      "tipo": "hallazgo",
      "texto": "Ninguna imagen en los cuatro CSV. El historial de aplicaciones ha perdido los mensajes de hace más de unos 18 meses; el de Copilot Chat, vacío en octubre, ahora trae 1.195 mensajes"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "Preguntado por cómo hacer una copia completa, el propio Grok dice que el zip «suele llevar los medios» y, para descargar en lote, recomienda extensiones de Chrome que usan la sesión abierta: lo que prohíben los términos de xAI"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "El «Access your data» del Privacy Portal de xAI redirige al mismo export de la cuenta, el incompleto: no hay una vía formal distinta en el portal"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "El botón de descarga promete «todo lo almacenado en todos los productos de SpaceXSI». El zip trae el fichero de 16 de 186 media posts"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "envio",
      "texto": "Export nuevo pedido desde accounts.x.ai (el botón que promete «todo lo almacenado»)"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "Llega el export nuevo en unas horas: mismas 186 media posts que en octubre, las mismas 16 con fichero. Trae la conversación «Descargar contenido completo de mi cuenta»"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "hallazgo",
      "texto": "Encontrada otra joya de privacidad en Grok Imagine. Ya está notificada a xAI; la contaremos cuando respondan o venza su plazo"
    },
    {
      "fecha": "2026-11-09",
      "prov": "grok",
      "tipo": "envio",
      "texto": "Aviso enviado al responsable de protección de datos de xAI, con copia a su representante en la UE y a su equipo de seguridad: el export incompleto y un problema de privacidad que, de momento, no detallamos"
    },
    {
      "fecha": "2026-11-10",
      "prov": "copilot",
      "tipo": "hallazgo",
      "texto": "La solicitud formal aparece en el panel como «Se está archivando». Cerrar la página que pedía «permanezca en esta página» no la ha anulado"
    },
    {
      "fecha": "2026-11-11",
      "prov": "substack",
      "tipo": "hallazgo",
      "texto": "El export de Substack no trae las notas ni los comentarios, y las imágenes de los posts son enlaces a su CDN, no ficheros"
    },
    {
      "fecha": "2026-11-11",
      "prov": "substack",
      "tipo": "hallazgo",
      "texto": "Los datos existen: el perfil muestra 892 notas propias, del 30-nov-2025 al 11-nov-2026, con 171 imágenes adjuntas. Ninguna está en el export"
    },
    {
      "fecha": "2026-11-11",
      "prov": "substack",
      "tipo": "envio",
      "texto": "Solicitud RGPD enviada por correo al equipo de privacidad, con copia a su representante en la UE: pide las notas, los comentarios y las imágenes subidas (arts. 15.3 y 20) y cuánto tiempo conservan lo borrado (art. 15)"
    },
    {
      "fecha": "2026-11-11",
      "prov": "substack",
      "tipo": "respuesta",
      "texto": "Acuse automático del equipo «Standards & Enforcement»: el buzón de privacidad lo lleva moderación. Sin número de caso"
    },
    {
      "fecha": "2026-11-12",
      "prov": "chatgpt",
      "tipo": "respuesta",
      "texto": "Respuesta: han lanzado ellos un export nuevo desde el Privacy Portal («a few days»). No contesta ni al DPO ni al inventario pedidos"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Llega el export que lanzaron ellos: faltan las mismas 173, 171 de Proyectos. Solo añade lo de los últimos cinco días (21 conversaciones, 86 ficheros)"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Ninguno de los dos exports trae un solo mensaje de herramientas: solo usuario y asistente. Fuera la imagen, la búsqueda web y el resto. De las 173, en 94 conversaciones falta hasta el mensaje que la generó"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Por qué faltan: el export saca las imágenes de la biblioteca y de los adjuntos de los mensajes que conserva. Ninguna de las 173 está en la biblioteca, y su mensaje (el de la herramienta) no viaja"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "La causa: en los proyectos con memoria «Solo proyecto», el acceso a la Biblioteca está deshabilitado y no se puede activar. Lo que se genera ahí no entra en la biblioteca, y por tanto tampoco en el export. Nada lo avisa. Los seis proyectos donde se pierden imágenes tienen ese ajuste: 167 de las 173. En el resto de proyectos se pierden 4 de 70; fuera de proyectos, 2 de 448"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "publicacion",
      "texto": "Publicado en LinkedIn y en una nota de Substack: la causa, la prueba de los tres cubos y el anuncio de una herramienta para comprobar qué le falta a tu export"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "envio",
      "texto": "Cuarta réplica enviada: el export que lanzaron sigue incompleto, con la causa y los pasos para reproducirlo. Pide de nuevo las imágenes, el inventario, si es una limitación conocida y desde cuándo, y pasar el caso al DPO"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Reproducido: la misma petición en un chat normal, en un proyecto con memoria normal y en un proyecto «Solo proyecto». Las dos primeras imágenes aparecen en la biblioteca; la del proyecto «Solo proyecto», no"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Segundo hueco, menor: 6 imágenes de chats normales o de proyectos con biblioteca habilitada (marzo a julio). Se ven en el chat, pero el panel «Archivos del chat» dice que no hay ninguno, y el export no trae ni la imagen ni el mensaje que la contenía"
    },
    {
      "fecha": "2026-11-13",
      "prov": "chatgpt",
      "tipo": "hallazgo",
      "texto": "Dos vistas de OpenAI que no coinciden: la imagen de prueba del proyecto «Solo proyecto» aparece en «Mis imágenes» (/images) y no en la biblioteca. El export sigue a la biblioteca"
    }
  ],
  "pruebas": [
    {
      "id": "P3",
      "prov": "chatgpt",
      "titulo": "Método de comparación por sha1 y por píxeles",
      "demuestra": "Que el cruce es reproducible"
    },
    {
      "id": "P4",
      "prov": "chatgpt",
      "titulo": "Cambio de texto del artículo de ayuda (archive.org)",
      "demuestra": "«your other data on file with us» pasa a «other relevant account data» entre el 26-feb y el 5-mar de 2026"
    },
    {
      "id": "P6",
      "prov": "grok",
      "titulo": "Estructura de media_posts en el export",
      "demuestra": "Que solo trae {id, prompt, tipo, fecha, enlace}"
    },
    {
      "id": "P9",
      "prov": "grok",
      "titulo": "Texto del botón de descarga en accounts.x.ai/account#data",
      "demuestra": "Promete «todos los datos asociados a tu cuenta… todo lo almacenado en todos los productos de SpaceXSI»; el zip trae 16 de 186 media posts con fichero"
    },
    {
      "id": "P12",
      "prov": "copilot",
      "titulo": "Artículo de ayuda de Microsoft sobre las imágenes en los exports",
      "demuestra": "Que Microsoft dice que las imágenes vienen en Base64 dentro del CSV, y que para verlas recomienda pegarlas en la barra del navegador o en un decodificador de Base64 de terceros («publicly available for free on the internet»)"
    },
    {
      "id": "P13",
      "prov": "grok",
      "titulo": "Política del programa de recompensas de xAI (hackerone.com/x)",
      "demuestra": "Que el acceso público por enlace a los medios de Imagine es deliberado y está declarado"
    },
    {
      "id": "P7",
      "prov": "copilot",
      "titulo": "Recuento de imágenes en los CSV del panel",
      "demuestra": "0 imágenes"
    }
  ],
  "terminos": [
    {
      "prov": "chatgpt",
      "cita": "Automatically or programmatically extracting data or Output",
      "fecha": "Condiciones de uso UE, 16-ene-2026",
      "articulos": "15, 20.1, 12.2, 5.2",
      "lectura": "El export oficial omite contenido y la única vía completa está prohibida"
    },
    {
      "prov": "grok",
      "cita": "through a bot, script, or otherwise · Scraping, harvesting or reselling any Input or Output",
      "fecha": "AUP de xAI (sin fecha); ToS 27-oct-2026",
      "articulos": "15.3, 20.1",
      "lectura": "Un enlace a grok.com no es una copia ni es portable"
    },
    {
      "prov": "copilot",
      "cita": "Don't use tools or computer programs (like bots or scrapers) to access Copilot",
      "fecha": "Términos de Copilot, 18-ago-2026",
      "articulos": "15, 20, 12.2",
      "lectura": "El export no trae ninguna imagen. Y si las trajera, la vía documentada es impracticable: abrir el CSV con doble clic lo abre en Excel, que corta cada celda a 32.767 caracteres (una imagen ocupa cientos de miles); después hay que copiar la cadena a mano, pegarla en el navegador o en un decodificador de terceros, y repetirlo con cada imagen"
    },
    {
      "prov": "grok",
      "cita": "Grok Imagine media is publicly accessible to anyone with the link, and reports of that access are ineligible",
      "fecha": "Política de recompensas de xAI en HackerOne, comprobada el 9-nov-2026",
      "articulos": "25",
      "lectura": "Público por diseño para quien tenga el enlace"
    },
    {
      "prov": "suno",
      "cita": "by any means other than a download channel made available by Suno",
      "fecha": "Términos de Suno, 3-sep-2026",
      "articulos": "20",
      "lectura": "Pendiente del export"
    },
    {
      "prov": "flow",
      "cita": "Solo prohíbe lo automatizado que se salte robots.txt o sus protecciones",
      "fecha": "Términos de Google, 30-jul-2026",
      "articulos": "—",
      "lectura": "El más permisivo de los seis"
    },
    {
      "prov": "substack",
      "cita": "“Crawls,” “scrapes,” or “spiders” any page, data, or portion of Substack (through use of manual or automated means) · Copies or stores any significant portion of the content on Substack",
      "fecha": "Términos de Substack, «Acceptable Use Policy», 6-oct-2026 (substack.com/tos, comprobado el 11-nov-2026)",
      "articulos": "15, 20",
      "lectura": "Los mismos términos dicen «you own what you create» y llaman «Post» a todo lo publicado, notas y comentarios incluidos. La prohibición no tiene excepción para lo propio, ni siquiera a mano, y el export no trae las notas. A la vez avisan de que quizá no puedan borrar tu contenido «from Substack’s records or backups»: ellos guardan copia y tú no puedes"
    }
  ]
};
