/**
 * Configuración global para los tests
 * Inicializa el entorno del DOM antes de ejecutar los tests
 */

// Mock del objeto i18n global
window.i18n = {
  es: {
    lang: 'es',
    langName: 'Español',
    footer: 'Construido en el lado oscuro de la Fuerza',
    welcome: 'Bienvenido al portfolio',
    commandNotFound: 'comando no encontrado',
    helpTitle: 'Comandos disponibles:',
    helpCommands: [
      { cmd: 'whoami', desc: 'Información sobre mí' },
      { cmd: 'help', desc: 'Mostrar ayuda' },
      { cmd: 'clear', desc: 'Limpiar terminal' }
    ],
    whoamiName: 'ÀLEX GARCIA VILÀ',
    experienceTitle: 'Experiencia Laboral',
    educationTitle: 'Formación Académica',
    skillsTitle: 'Habilidades Técnicas',
    certsTitle: 'Certificaciones',
    contactTitle: 'Contacto'
  },
  ca: {
    lang: 'ca',
    langName: 'Català',
    footer: 'Construït al costat fosc de la Força'
  }
};
