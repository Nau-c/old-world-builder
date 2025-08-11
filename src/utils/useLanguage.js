export const useLanguage = () => {
  const language = localStorage.getItem("lang");
  
  const getLocalizedName = (item) => {
    if (!item) return "";
    
    // Si el item tiene un nombre específico para el idioma actual
    if (item[`name_${language}`]) {
      return item[`name_${language}`];
    }
    
    // Si no, usar el nombre en inglés como fallback
    return item.name_en || item.name || "";
  };
  
  const getLocalizedNote = (item) => {
    if (!item) return "";
    
    // Si el item tiene una nota específica para el idioma actual
    if (item.notes && item.notes[`name_${language}`]) {
      return item.notes[`name_${language}`];
    }
    
    // Si no, usar la nota en inglés como fallback
    return item.notes?.name_en || "";
  };
  
  const getLocalizedSpecialRules = (item) => {
    if (!item) return "";
    
    // Si el item tiene reglas especiales específicas para el idioma actual
    if (item.specialRules && item.specialRules[`name_${language}`]) {
      return item.specialRules[`name_${language}`];
    }
    
    // Si no, usar las reglas especiales en inglés como fallback
    return item.specialRules?.name_en || "";
  };
  
  return { 
    language,
    getLocalizedName,
    getLocalizedNote,
    getLocalizedSpecialRules
  };
};
