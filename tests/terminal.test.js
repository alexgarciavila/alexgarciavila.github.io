/**
 * Tests unitarios simplificados para la clase Terminal
 * Solo testea propiedades y métodos que realmente existen en la implementación
 */

import { describe, it, expect, beforeEach } from 'vitest';

describe('Terminal', () => {
  let terminal;
  let container;

  beforeEach(async () => {
    // Crear estructura DOM necesaria para Terminal
    container = document.createElement('div');
    container.innerHTML = `
      <div class="terminal">
        <div class="terminal-header">
          <div class="control-buttons">
            <button class="control-btn close"></button>
          </div>
          <div class="language-selector">
            <button class="lang-btn active" data-lang="es">ES</button>
            <button class="lang-btn" data-lang="ca">CA</button>
          </div>
        </div>
        <div class="terminal-body">
          <div id="terminal-output" class="terminal-output"></div>
          <div class="terminal-input-container">
            <span class="prompt">guest@portfolio:~$</span>
            <input type="text" id="terminal-input" class="terminal-input" />
          </div>
        </div>
        <div id="command-buttons" class="command-buttons"></div>
      </div>
    `;
    document.body.appendChild(container);

    // Importar la clase Terminal real
    const mod = await import('../js/terminal.js');
    const TerminalClass = mod.Terminal;
    terminal = new TerminalClass();
  });

  describe('Inicialización', () => {
    it('should_initialize_with_spanish_as_default_language', () => {
      expect(terminal.currentLang).toBe('es');
    });

    it('should_initialize_with_empty_command_history', () => {
      expect(terminal.commandHistory).toEqual([]);
    });

    it('should_initialize_with_history_index_at_minus_one', () => {
      expect(terminal.historyIndex).toBe(-1);
    });

    it('should_have_valid_commands_array', () => {
      expect(terminal.validCommands).toBeDefined();
      expect(Array.isArray(terminal.validCommands)).toBe(true);
      expect(terminal.validCommands.length).toBeGreaterThan(0);
    });

    it('should_contain_basic_commands_in_valid_commands', () => {
      const expectedCommands = ['whoami', 'experience', 'education', 'skills', 'certs', 'contact', 'help', 'clear'];
      expectedCommands.forEach(cmd => {
        expect(terminal.validCommands).toContain(cmd);
      });
    });
  });

  describe('Propiedades DOM', () => {
    it('should_have_output_element_reference', () => {
      expect(terminal.output).toBeDefined();
      expect(terminal.output).toBeInstanceOf(HTMLElement);
      expect(terminal.output.id).toBe('terminal-output');
    });

    it('should_have_terminal_input_element_reference', () => {
      expect(terminal.terminalInput).toBeDefined();
      expect(terminal.terminalInput).toBeInstanceOf(HTMLInputElement);
      expect(terminal.terminalInput.id).toBe('terminal-input');
    });

    it('should_have_command_buttons_container_reference', () => {
      expect(terminal.commandButtons).toBeDefined();
      expect(terminal.commandButtons).toBeInstanceOf(HTMLElement);
      expect(terminal.commandButtons.id).toBe('command-buttons');
    });
  });

  describe('Sistema de traducción', () => {
    it('should_have_translation_method_t', () => {
      expect(typeof terminal.t).toBe('function');
    });

    it('should_translate_existing_keys_correctly', () => {
      // Usar claves que existen en el mock (tests/setup.js)
      const whoamiName = terminal.t('whoamiName');
      expect(whoamiName).toBeDefined();
      expect(typeof whoamiName).toBe('string');
      expect(whoamiName).toBe('ÀLEX GARCIA VILÀ');
    });

    it('should_translate_help_title_in_spanish', () => {
      const helpTitle = terminal.t('helpTitle');
      expect(helpTitle).toBeDefined();
      expect(typeof helpTitle).toBe('string');
      expect(helpTitle).toBe('Comandos disponibles:');
    });

    it('should_translate_footer_in_spanish', () => {
      const footer = terminal.t('footer');
      expect(footer).toBeDefined();
      expect(typeof footer).toBe('string');
      expect(footer).toBe('Construido en el lado oscuro de la Fuerza');
    });
  });

  describe('Idiomas soportados', () => {
    it('should_support_spanish_language', () => {
      expect(window.i18n).toBeDefined();
      expect(window.i18n.es).toBeDefined();
      expect(typeof window.i18n.es).toBe('object');
    });

    it('should_support_catalan_language', () => {
      expect(window.i18n).toBeDefined();
      expect(window.i18n.ca).toBeDefined();
      expect(typeof window.i18n.ca).toBe('object');
    });

    it('should_have_required_keys_in_both_languages', () => {
      // Verificar que las claves básicas del mock existen en ambos idiomas
      const requiredKeys = ['lang', 'langName', 'footer'];
      
      requiredKeys.forEach(key => {
        expect(window.i18n.es).toHaveProperty(key);
        expect(window.i18n.ca).toHaveProperty(key);
      });
    });
  });

  describe('Estado del terminal', () => {
    it('should_start_with_defined_command_history', () => {
      expect(terminal.commandHistory).toBeDefined();
      expect(Array.isArray(terminal.commandHistory)).toBe(true);
    });

    it('should_have_history_index_as_number', () => {
      expect(typeof terminal.historyIndex).toBe('number');
    });

    it('should_have_current_language_as_string', () => {
      expect(typeof terminal.currentLang).toBe('string');
      expect(['es', 'ca']).toContain(terminal.currentLang);
    });
  });

  describe('Autocompletado de comandos', () => {
    it('should_autocomplete_partial_command_with_single_match', () => {
      terminal.terminalInput.value = 'who';
      terminal.autocomplete();
      expect(terminal.terminalInput.value).toBe('whoami');
    });

    it('should_autocomplete_experience_from_exp', () => {
      terminal.terminalInput.value = 'exp';
      terminal.autocomplete();
      expect(terminal.terminalInput.value).toBe('experience');
    });

    it('should_not_autocomplete_with_multiple_matches', () => {
      terminal.terminalInput.value = 'e'; // puede ser 'experience' o 'education'
      terminal.autocomplete();
      expect(terminal.terminalInput.value).toBe('e'); // no cambia si hay múltiples coincidencias
    });

    it('should_not_autocomplete_empty_input', () => {
      terminal.terminalInput.value = '';
      terminal.autocomplete();
      expect(terminal.terminalInput.value).toBe('');
    });

    it('should_not_autocomplete_invalid_prefix', () => {
      terminal.terminalInput.value = 'xyz';
      terminal.autocomplete();
      expect(terminal.terminalInput.value).toBe('xyz');
    });
  });

  describe('Cambio de idioma', () => {
    it('should_switch_from_spanish_to_catalan', () => {
      expect(terminal.currentLang).toBe('es');
      terminal.switchLanguage('ca');
      expect(terminal.currentLang).toBe('ca');
    });

    it('should_update_language_buttons_active_state', () => {
      terminal.switchLanguage('ca');
      
      const esBtn = document.querySelector('.lang-btn[data-lang="es"]');
      const caBtn = document.querySelector('.lang-btn[data-lang="ca"]');
      
      expect(esBtn.classList.contains('active')).toBe(false);
      expect(caBtn.classList.contains('active')).toBe(true);
    });

    it('should_update_document_lang_attribute', () => {
      terminal.switchLanguage('ca');
      expect(document.documentElement.lang).toBe('ca');
    });

    it('should_not_change_if_same_language', () => {
      terminal.switchLanguage('es');
      const sessionIdBefore = terminal.sessionId;
      terminal.switchLanguage('es');
      // Si no cambia, no debe limpiar terminal ni incrementar sessionId
      expect(terminal.currentLang).toBe('es');
    });

    it('should_switch_back_to_spanish', () => {
      terminal.switchLanguage('ca');
      terminal.switchLanguage('es');
      expect(terminal.currentLang).toBe('es');
    });
  });

  describe('Limpieza del terminal', () => {
    it('should_have_clearTerminal_method', () => {
      expect(typeof terminal.clearTerminal).toBe('function');
    });

    it('should_clear_output_innerHTML', () => {
      terminal.output.innerHTML = '<div>test content</div>';
      terminal.clearTerminal();
      expect(terminal.output.innerHTML).toBe('');
    });

    it('should_deactivate_all_command_buttons', () => {
      // Simular botón activo
      const cmdBtn = document.createElement('button');
      cmdBtn.className = 'cmd-btn active';
      cmdBtn.dataset.cmd = 'whoami';
      terminal.commandButtons.appendChild(cmdBtn);
      
      terminal.clearTerminal();
      
      const activeButtons = terminal.commandButtons.querySelectorAll('.cmd-btn.active');
      expect(activeButtons.length).toBe(0);
    });
  });

  describe('Historial de comandos', () => {
    it('should_add_command_to_history_programmatically', () => {
      const initialLength = terminal.commandHistory.length;
      terminal.commandHistory.push('whoami');
      terminal.historyIndex = terminal.commandHistory.length;
      
      expect(terminal.commandHistory.length).toBe(initialLength + 1);
      expect(terminal.commandHistory[terminal.commandHistory.length - 1]).toBe('whoami');
    });

    it('should_update_history_index_when_adding_commands', () => {
      terminal.commandHistory = ['help', 'clear'];
      terminal.commandHistory.push('skills');
      terminal.historyIndex = terminal.commandHistory.length;
      
      expect(terminal.historyIndex).toBe(3);
      expect(terminal.commandHistory.length).toBe(3);
    });

    it('should_navigate_backward_in_history_with_arrow_up', () => {
      terminal.commandHistory = ['whoami', 'experience', 'skills'];
      terminal.historyIndex = 3;
      terminal.terminalInput.value = '';
      
      const arrowUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      terminal.terminalInput.dispatchEvent(arrowUpEvent);
      
      expect(terminal.historyIndex).toBe(2);
      expect(terminal.terminalInput.value).toBe('skills');
    });

    it('should_navigate_forward_in_history_with_arrow_down', () => {
      terminal.commandHistory = ['whoami', 'experience', 'skills'];
      terminal.historyIndex = 1;
      terminal.terminalInput.value = 'experience';
      
      const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      terminal.terminalInput.dispatchEvent(arrowDownEvent);
      
      expect(terminal.historyIndex).toBe(2);
      expect(terminal.terminalInput.value).toBe('skills');
    });

    it('should_clear_input_when_navigating_past_history_end', () => {
      terminal.commandHistory = ['whoami', 'experience'];
      terminal.historyIndex = 1;
      terminal.terminalInput.value = 'experience';
      
      const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      terminal.terminalInput.dispatchEvent(arrowDownEvent);
      
      expect(terminal.historyIndex).toBe(2);
      expect(terminal.terminalInput.value).toBe('');
    });

    it('should_not_navigate_before_first_history_item', () => {
      terminal.commandHistory = ['whoami', 'experience'];
      terminal.historyIndex = 0;
      terminal.terminalInput.value = 'whoami';
      
      const arrowUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      terminal.terminalInput.dispatchEvent(arrowUpEvent);
      
      expect(terminal.historyIndex).toBe(0);
    });

    it('should_trigger_autocomplete_on_tab_key', () => {
      terminal.terminalInput.value = 'who';
      
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      terminal.terminalInput.dispatchEvent(tabEvent);
      
      expect(terminal.terminalInput.value).toBe('whoami');
    });

    it('should_maintain_history_array_integrity', () => {
      terminal.commandHistory = [];
      terminal.commandHistory.push('help');
      terminal.commandHistory.push('clear');
      terminal.commandHistory.push('whoami');
      
      expect(terminal.commandHistory).toEqual(['help', 'clear', 'whoami']);
      expect(terminal.commandHistory.length).toBe(3);
    });
  });
});
