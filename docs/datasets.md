# Documentación de Datasets - Old World Builder

## Actualización 06-08-2025

### Nuevas Funcionalidades

- **Atributo de Salvación**: Todas las unidades ahora incluyen el atributo de salvación (Sv) en sus estadísticas
- **Traducción Completa**: Soporte mejorado para múltiples idiomas con funciones de localización
- **Exportación Avanzada**: Nuevos formatos de exportación (PDF, Word)

## Estructura de Datasets

### Estadísticas de Unidades

Las unidades ahora incluyen el atributo de salvación (Sv) en sus estadísticas:

```json
{
  "stats": [
    {
      "Name": "General del Imperio",
      "M": 4,
      "WS": 5,
      "BS": 4,
      "S": 4,
      "T": 4,
      "W": 3,
      "I": 5,
      "A": 3,
      "Ld": 8,
      "Sv": 4
    }
  ]
}
```

### Estructura de Nombres Localizados

Todos los elementos del juego soportan múltiples idiomas:

```json
{
  "name_en": "General of the Empire",
  "name_es": "General del Imperio",
  "name_de": "General des Imperiums",
  "name_fr": "Général de l'Empire",
  "name_it": "Generale dell'Impero",
  "name_pl": "Generał Imperium",
  "name_cn": "帝国将军"
}
```

### Reglas Especiales Localizadas

```json
{
  "specialRules": {
    "name_en": "Close Order, Regimental Unit",
    "name_es": "Formación Cerrada, Unidad Regimental",
    "name_de": "Geschlossene Ränge, Hauptregiment",
    "name_fr": "Ordre Serré, Unité Régimentaire",
    "name_it": "Ordine Chiuso, Unità Reggimentale",
    "name_pl": "Zwarty Szyk, Jednostka Pułkowa",
    "name_cn": "紧密阵型, 主团单位"
  }
}
```

### Notas Localizadas

```json
{
  "notes": {
    "name_en": "0-1 per 1000 points",
    "name_es": "0-1 por cada 1000 puntos",
    "name_de": "0-1 pro 1.000 Punkte",
    "name_fr": "0-1 par tranche de 1000 points",
    "name_it": "0-1 ogni 1000 punti",
    "name_pl": "0-1 na 1000 punktów",
    "name_cn": "每1000分0-1"
  }
}
```

## Funciones de Localización

El sistema incluye funciones helper para obtener contenido localizado:

### getLocalizedName(item)
Obtiene el nombre del elemento en el idioma actual.

### getLocalizedNote(item)
Obtiene la nota del elemento en el idioma actual.

### getLocalizedSpecialRules(item)
Obtiene las reglas especiales del elemento en el idioma actual.

## Estructura Completa de una Unidad

```json
{
  "name_en": "State Troops",
  "name_es": "Tropas Estatales",
  "id": "state-troops",
  "points": 7,
  "minimum": 10,
  "maximum": 0,
  "stats": [
    {
      "Name": "State Troop",
      "M": 4,
      "WS": 3,
      "BS": 3,
      "S": 3,
      "T": 3,
      "W": 1,
      "I": 3,
      "A": 1,
      "Ld": 7,
      "Sv": 5
    }
  ],
  "equipment": [
    {
      "name_en": "Hand weapons",
      "name_es": "Armas de mano",
      "points": 0,
      "perModel": true,
      "active": true
    }
  ],
  "armor": [
    {
      "name_en": "Light armour",
      "name_es": "Armadura ligera",
      "points": 1,
      "perModel": true
    }
  ],
  "specialRules": {
    "name_en": "Close Order, Regimental Unit",
    "name_es": "Formación Cerrada, Unidad Regimental"
  },
  "notes": {
    "name_en": "Core unit",
    "name_es": "Unidad básica"
  }
}
```

## Formatos de Exportación

### PDF
- Generación automática de PDFs con formato profesional
- Incluye estadísticas completas con atributo de salvación
- Soporte para múltiples páginas

### Word (.docx)
- Compatible con Microsoft Word y LibreOffice
- Formato estructurado con estilos
- Fácil de editar y personalizar

### Texto
- Formato simple para copiar y pegar
- Opciones compactas y minimalistas
- Soporte para Markdown

## Contribuir

Para contribuir con datos de ejércitos:

1. Usa las funciones de localización para todos los textos
2. Incluye el atributo de salvación en todas las estadísticas
3. Asegúrate de que todas las traducciones estén completas
4. Prueba la exportación en todos los formatos

## Ejemplos de Uso

### Añadir una Nueva Unidad

```json
{
  "name_en": "New Unit",
  "name_es": "Nueva Unidad",
  "id": "new-unit",
  "points": 10,
  "minimum": 5,
  "stats": [
    {
      "Name": "New Unit",
      "M": 5,
      "WS": 4,
      "BS": 4,
      "S": 4,
      "T": 4,
      "W": 2,
      "I": 4,
      "A": 2,
      "Ld": 8,
      "Sv": 4
    }
  ],
  "specialRules": {
    "name_en": "Special Rule",
    "name_es": "Regla Especial"
  }
}
```

### Añadir Equipamiento

```json
{
  "equipment": [
    {
      "name_en": "Great Weapon",
      "name_es": "Arma a Dos Manos",
      "points": 4,
      "perModel": true,
      "notes": {
        "name_en": "Requires two hands",
        "name_es": "Requiere dos manos"
      }
    }
  ]
}
```

---

**Nota**: Esta documentación se actualiza regularmente. Para la información más reciente, consulta el repositorio principal.
