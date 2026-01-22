/**
 * Tests unitarios para la clase Navigation
 * Verifica el comportamiento de navegación entre vistas (Hero, Terminal, Dashboard)
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('Navigation', () => {
  let navigation;
  let mockElements;

  beforeEach(async () => {
    // Arrange: Crear estructura HTML mock
    document.body.innerHTML = `
      <header class="site-header" id="site-header"></header>
      <section class="hero" id="hero-section"></section>
      <div class="terminal-container" id="terminal-container">
        <input type="text" id="terminal-input" />
      </div>
      <button id="btn-terminal"></button>
      <button id="btn-dashboard"></button>
      <button id="btn-terminal-header"></button>
      <button id="btn-dashboard-header"></button>
      <button class="control-btn close"></button>
    `;

    mockElements = {
      hero: document.getElementById('hero-section'),
      terminalContainer: document.getElementById('terminal-container'),
      header: document.getElementById('site-header'),
      body: document.body
    };

    // Importar dinámicamente la clase Navigation desde el módulo
    const mod = await import('../js/navigation.js');
    const Navigation = mod.Navigation;

    // Instanciar la clase real
    navigation = new Navigation();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Inicialización', () => {
    it('should_initialize_with_hero_view_by_default', () => {
      // Assert
      expect(navigation.currentView).toBe('hero');
    });

    it('should_reference_all_required_dom_elements', () => {
      // Assert
      expect(navigation.hero).toBeTruthy();
      expect(navigation.terminalContainer).toBeTruthy();
      expect(navigation.header).toBeTruthy();
      expect(navigation.body).toBeTruthy();
    });

    it('should_reference_all_navigation_buttons', () => {
      // Assert
      expect(navigation.btnTerminal).toBeTruthy();
      expect(navigation.btnTerminalHeader).toBeTruthy();
      expect(navigation.btnClose).toBeTruthy();
    });
  });

  describe('showTerminal', () => {
    it('should_change_current_view_to_terminal', () => {
      // Act
      navigation.showTerminal();

      // Assert
      expect(navigation.currentView).toBe('terminal');
    });

    it('should_add_terminal_active_class_to_body', () => {
      // Act
      navigation.showTerminal();

      // Assert
      expect(document.body.classList.contains('terminal-active')).toBe(true);
    });

    it('should_add_active_class_to_terminal_container', () => {
      // Act
      navigation.showTerminal();

      // Assert
      expect(navigation.terminalContainer.classList.contains('active')).toBe(true);
    });

    it('should_make_header_visible', () => {
      // Act
      navigation.showTerminal();

      // Assert
      expect(navigation.header.classList.contains('visible')).toBe(true);
    });
  });

  describe('hideTerminal', () => {
    beforeEach(() => {
      // Arrange: Primero mostrar el terminal
      navigation.showTerminal();
    });

    it('should_change_current_view_back_to_hero', () => {
      // Act
      navigation.hideTerminal();

      // Assert
      expect(navigation.currentView).toBe('hero');
    });

    it('should_remove_terminal_active_class_from_body', () => {
      // Act
      navigation.hideTerminal();

      // Assert
      expect(document.body.classList.contains('terminal-active')).toBe(false);
    });

    it('should_remove_active_class_from_terminal_container', () => {
      // Act
      navigation.hideTerminal();

      // Assert
      expect(navigation.terminalContainer.classList.contains('active')).toBe(false);
    });

    it('should_hide_header', () => {
      // Act
      navigation.hideTerminal();

      // Assert
      expect(navigation.header.classList.contains('visible')).toBe(false);
    });
  });

  describe('Eventos de botones', () => {
    it('should_show_terminal_when_hero_button_clicked', () => {
      // Arrange
      const btn = document.getElementById('btn-terminal');

      // Act
      btn.click();

      // Assert
      expect(navigation.currentView).toBe('terminal');
      expect(navigation.terminalContainer.classList.contains('active')).toBe(true);
    });

    it('should_show_terminal_when_header_button_clicked', () => {
      // Arrange
      const btn = document.getElementById('btn-terminal-header');

      // Act
      btn.click();

      // Assert
      expect(navigation.currentView).toBe('terminal');
    });

    it('should_hide_terminal_when_close_button_clicked', () => {
      // Arrange
      navigation.showTerminal();
      const btnClose = document.querySelector('.control-btn.close');

      // Act
      btnClose.click();

      // Assert
      expect(navigation.currentView).toBe('hero');
      expect(navigation.terminalContainer.classList.contains('active')).toBe(false);
    });
  });

  describe('Transiciones entre vistas', () => {
    it('should_complete_full_cycle_hero_to_terminal_to_hero', () => {
      // Arrange
      expect(navigation.currentView).toBe('hero');

      // Act: Mostrar terminal
      navigation.showTerminal();

      // Assert: Terminal visible
      expect(navigation.currentView).toBe('terminal');
      expect(navigation.terminalContainer.classList.contains('active')).toBe(true);

      // Act: Ocultar terminal
      navigation.hideTerminal();

      // Assert: Volver a hero
      expect(navigation.currentView).toBe('hero');
      expect(navigation.terminalContainer.classList.contains('active')).toBe(false);
    });
  });
});
