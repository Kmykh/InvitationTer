# 📊 Guía Paso a Paso: Conectar Invitación con Google Sheets

Conectar la confirmación de asistencia con tu **Google Sheets** es 100% gratuito, no requiere instalar nada y se actualiza en tiempo real cada vez que un invitado confirma.

---

### Paso 1: Crear la Hoja de Cálculo en Google Sheets
1. Abre [Google Sheets](https://sheets.new) y crea una hoja nueva.
2. Nómbrala por ejemplo: **`Invitados 50 Años Teresa`**.
3. En la primera fila (Fila 1), coloca los siguientes 4 encabezados:
   - **A1**: `Fecha y Hora`
   - **B1**: `Nombre del Invitado`
   - **C1**: `Estado de Asistencia`
   - **D1**: `N° de Asistentes`

---

### Paso 2: Pegar el Código en Google Apps Script
1. En el menú superior de tu Google Sheet, haz clic en:  
   👉 **Extensiones** > **Apps Script**
2. Borra todo el código que aparezca en el editor y pega exactamente este código:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Inserta una nueva fila con los datos enviados desde la invitación web
    sheet.appendRow([
      data.fecha || new Date().toLocaleString("es-PE"),
      data.nombre || "Sin nombre",
      data.asistencia || "Confirmado",
      data.asistentes || "1"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Invitado registrado" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Haz clic en el icono de **Guardar** (el disquete 💾 o Ctrl+S / Cmd+S).

---

### Paso 3: Publicar como Aplicación Web (Deploy)
1. En la esquina superior derecha de Apps Script, haz clic en el botón azul **Implementar** (o *Deploy*) > **Nueva implementación**.
2. En el engranaje ⚙️ (Seleccionar tipo), elige: **Aplicación web**.
3. Configura exactamente estas opciones:
   - **Descripción**: `RSVP Teresa 50 Años`
   - **Ejecutar como**: `Yo (tu correo de Google)`
   - **Quién tiene acceso**: ⚠️ **Cualquier persona** *(Anyone)* -> **¡Este punto es muy importante para que tus invitados puedan registrarse sin necesidad de iniciar sesión!*
4. Haz clic en **Implementar** (Deploy).
5. Google te pedirá autorizar permisos (haz clic en *Revisar permisos*, selecciona tu cuenta y dale en *Permitir*).
6. Al finalizar, copia la **URL de la aplicación web** que termina en `/exec`.  
   (Se verá algo como: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### Paso 4: Pegar tu URL en el Proyecto
Abre el archivo [src/data/eventData.js](file:///Users/maycolrojas/Documents/Proyecto%20Personales/InvitacionTer/src/data/eventData.js#L76) y pega tu URL en `googleSheetWebhookUrl`:

```javascript
  rsvp: {
    phone: "51987654321", // Cambia a tu número de WhatsApp
    messageDefault: "¡Hola Teresa! Confirmo mi asistencia...",
    // PEGA AQUÍ TU URL DE GOOGLE APPS SCRIPT:
    googleSheetWebhookUrl: "https://script.google.com/macros/s/TU_CODIGO_AQUI/exec"
  },
```

¡Listo! A partir de ese momento, cada invitado que presione **"CONFIRMAR MI ASISTENCIA"** se agregará automáticamente en tu hoja de Google Sheets en tiempo real. 🚀
