/**
 * @fileoverview Navegación entre vistas (Hero, Terminal, Dashboard)
 * @author Àlex Garcia Vilà
 * @version 1.0.0
 */

/**
 * Clase para gestionar la navegación entre vistas del portfolio
 * @class Navigation
 */
class Navigation {
    /**
     * Crea una instancia del gestor de navegación
     * @constructor
     */
    constructor() {
        // Elementos del DOM
        this.hero = document.getElementById('hero-section');
        this.terminalContainer = document.getElementById('terminal-container');
        this.header = document.getElementById('site-header');
        this.body = document.body;
        
        // Botones de navegación
        this.btnTerminal = document.getElementById('btn-terminal');
        this.btnDashboard = document.getElementById('btn-dashboard');
        this.btnTerminalHeader = document.getElementById('btn-terminal-header');
        this.btnDashboardHeader = document.getElementById('btn-dashboard-header');
        this.btnClose = document.querySelector('.control-btn.close');
        
        // Estado actual
        this.currentView = 'hero';
        
        this.init();
    }
    
    /**
     * Inicializa los eventos de navegación
     * @returns {void}
     */
    init() {
        // Botones del hero
        if (this.btnTerminal) {
            this.btnTerminal.addEventListener('click', () => this.showTerminal());
        }
        
        if (this.btnDashboard) {
            this.btnDashboard.addEventListener('click', () => this.showDashboard());
        }
        
        // Botones del header
        if (this.btnTerminalHeader) {
            this.btnTerminalHeader.addEventListener('click', () => this.showTerminal());
        }
        
        if (this.btnDashboardHeader) {
            this.btnDashboardHeader.addEventListener('click', () => this.showDashboard());
        }
        
        // Botón cerrar terminal (X)
        if (this.btnClose) {
            this.btnClose.addEventListener('click', () => this.hideTerminal());
        }
        
        // Tecla Escape para volver al hero
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentView === 'terminal') {
                this.hideTerminal();
            }
        });
    }
    
    /**
     * Muestra la vista del terminal
     * @returns {void}
     */
    showTerminal() {
        this.currentView = 'terminal';
        this.body.classList.add('terminal-active');
        this.terminalContainer.classList.add('active');
        this.header.classList.add('visible');
        
        // Actualizar botones activos
        this.updateActiveButtons('terminal');
        
        // Enfocar el input del terminal después de la transición
        setTimeout(() => {
            const terminalInput = document.getElementById('terminal-input');
            if (terminalInput) {
                terminalInput.focus();
            }
        }, 500);
    }
    
    /**
     * Oculta el terminal y vuelve al hero
     * @returns {void}
     */
    hideTerminal() {
        this.currentView = 'hero';
        this.body.classList.remove('terminal-active');
        this.terminalContainer.classList.remove('active');
        this.header.classList.remove('visible');
    }
    
    /**
     * Muestra la vista del dashboard (pendiente de implementar)
     * @returns {void}
     */
    showDashboard() {
        // TODO: Implementar dashboard
        console.log('Dashboard aún no implementado');
    }
    
    /**
     * Actualiza el estado visual de los botones activos
     * @param {string} view - Vista activa ('terminal' o 'dashboard')
     * @returns {void}
     */
    updateActiveButtons(view) {
        // Quitar clase activa de todos los botones
        const allBtns = document.querySelectorAll('.tech-btn');
        allBtns.forEach(btn => btn.classList.remove('tech-btn--active'));
        
        // Añadir clase activa al botón correspondiente
        if (view === 'terminal') {
            this.btnTerminal?.classList.add('tech-btn--active');
            this.btnTerminalHeader?.classList.add('tech-btn--active');
        } else if (view === 'dashboard') {
            this.btnDashboard?.classList.add('tech-btn--active');
            this.btnDashboardHeader?.classList.add('tech-btn--active');
        }
    }
}

// Inicializar navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
});

// Exportar clase para pruebas unitarias
export { Navigation };
