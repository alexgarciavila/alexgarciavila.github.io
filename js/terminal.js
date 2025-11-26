/**
 * @fileoverview Terminal interactivo para el portfolio de Àlex Garcia Vilà
 * @author Àlex Garcia Vilà
 * @version 1.0.0
 */

/**
 * Clase principal del terminal interactivo
 * @class Terminal
 */
class Terminal {
    /**
     * Crea una instancia del terminal
     * @constructor
     */
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.commandButtons = document.getElementById('command-buttons');
        this.terminalBody = document.querySelector('.terminal-body');
        this.terminalInput = document.getElementById('terminal-input');
        this.currentLang = 'es';
        this.isTyping = false;
        this.skipTyping = false;
        this.typingSpeed = 15;
        this.currentCommand = null;
        this.pendingContent = null;
        this.pendingElement = null;
        this.sessionId = 0;
        this.commandHistory = [];
        this.historyIndex = -1;
        this.validCommands = ['whoami', 'experience', 'education', 'skills', 'certs', 'contact', 'help', 'clear'];
        
        this.init();
    }
    
    /**
     * Inicializa el terminal vinculando eventos y mostrando el mensaje de bienvenida
     * @returns {void}
     */
    init() {
        this.bindEvents();
        this.showWelcome();
        setTimeout(() => this.terminalInput.focus(), 100);
    }
    
    /**
     * Vincula todos los eventos del terminal: botones de comandos, idioma, clicks y teclado
     * @returns {void}
     */
    bindEvents() {
        const cmdButtons = this.commandButtons.querySelectorAll('.cmd-btn');
        cmdButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const cmd = btn.dataset.cmd;
                this.executeCommand(cmd);
                this.terminalInput.focus();
            });
        });
        
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
                this.terminalInput.focus();
            });
        });
        
        this.terminalBody.addEventListener('click', (e) => {
            if (e.target.closest('.cmd-btn') || e.target.closest('.lang-btn') || e.target.closest('a') || e.target.closest('input')) {
                return;
            }
            this.completeTypingInstantly();
            this.terminalInput.focus();
        });
        
        this.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const cmd = this.terminalInput.value.trim().toLowerCase();
                if (cmd) {
                    this.commandHistory.push(cmd);
                    this.historyIndex = this.commandHistory.length;
                    this.terminalInput.value = '';
                    this.executeCommand(cmd);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.terminalInput.value = this.commandHistory[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.terminalInput.value = this.commandHistory[this.historyIndex];
                } else {
                    this.historyIndex = this.commandHistory.length;
                    this.terminalInput.value = '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autocomplete();
            }
        });
    }
    
    /**
     * Autocompleta el comando actual basándose en los comandos válidos disponibles
     * @returns {void}
     */
    autocomplete() {
        const input = this.terminalInput.value.trim().toLowerCase();
        if (!input) return;
        
        const matches = this.validCommands.filter(cmd => cmd.startsWith(input));
        if (matches.length === 1) {
            this.terminalInput.value = matches[0];
        }
    }
    
    /**
     * Completa instantáneamente el efecto de escritura actual
     * @returns {void}
     */
    completeTypingInstantly() {
        if (this.isTyping && this.pendingElement && this.pendingContent) {
            this.skipTyping = true;
            this.pendingElement.innerHTML = this.pendingContent;
            this.isTyping = false;
            this.animateSkillBars();
            this.output.scrollTop = this.output.scrollHeight;
        }
    }
    
    /**
     * Cancela el efecto de escritura actual
     * @returns {void}
     */
    cancelCurrentTyping() {
        if (this.isTyping) {
            this.skipTyping = true;
            this.isTyping = false;
        }
    }
    
    /**
     * Obtiene una traducción del idioma actual
     * @param {string} key - Clave de traducción
     * @returns {string|Array|Object} Valor traducido
     */
    t(key) {
        return window.i18n[this.currentLang][key];
    }
    
    /**
     * Cambia el idioma de la interfaz y re-renderiza el contenido actual
     * @param {string} lang - Código del idioma ('es' o 'ca')
     * @returns {void}
     */
    switchLanguage(lang) {
        if (lang === this.currentLang) return;
        
        const commandToRerun = this.currentCommand;
        
        if (this.isTyping) {
            this.cancelCurrentTyping();
        }
        
        this.currentLang = lang;
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        document.documentElement.lang = lang;
        
        const footerText = document.querySelector('[data-i18n="footer"]');
        if (footerText) {
            footerText.textContent = this.t('footer');
        }
        
        if (commandToRerun && commandToRerun !== 'clear' && this.validCommands.includes(commandToRerun)) {
            this.clearTerminal();
            this.executeCommand(commandToRerun, false);
        } else {
            this.clearTerminal();
            this.showWelcome();
        }
    }
    
    /**
     * Ejecuta un comando del terminal y muestra su resultado
     * @param {string} cmd - Nombre del comando a ejecutar
     * @param {boolean} [animate=true] - Si debe animar la escritura del resultado
     * @returns {Promise<void>}
     */
    async executeCommand(cmd, animate = true) {
        this.sessionId++;
        const currentSession = this.sessionId;
        
        if (this.isTyping) {
            this.cancelCurrentTyping();
            await this.sleep(20);
        }
        
        this.currentCommand = cmd;
        
        document.querySelectorAll('.cmd-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cmd === cmd);
        });
        
        let content = '';
        
        switch (cmd) {
            case 'whoami':
                content = this.renderWhoami();
                break;
            case 'experience':
                content = this.renderExperience();
                break;
            case 'education':
                content = this.renderEducation();
                break;
            case 'skills':
                content = this.renderSkills();
                break;
            case 'certs':
                content = this.renderCerts();
                break;
            case 'contact':
                content = this.renderContact();
                break;
            case 'help':
                content = this.renderHelp();
                break;
            case 'clear':
                this.clearTerminal();
                this.showWelcome();
                return;
            default:
                content = `<span class="output-text" style="color: var(--red-terminal);">bash: ${cmd}: ${this.t('commandNotFound')}</span>`;
        }
        
        const commandLine = this.createCommandLine(cmd);
        
        if (currentSession !== this.sessionId) return;
        
        this.output.innerHTML = '';
        this.output.appendChild(commandLine);
        
        const outputBlock = document.createElement('div');
        outputBlock.className = 'output-block fade-in';
        this.output.appendChild(outputBlock);
        
        if (animate) {
            await this.typeHTML(outputBlock, content, currentSession);
        } else {
            outputBlock.innerHTML = content;
            this.animateSkillBars();
        }
        
        if (currentSession !== this.sessionId) return;
        
        this.output.scrollTop = this.output.scrollHeight;
    }
    
    /**
     * Crea el elemento HTML de la línea de comando con el prompt
     * @param {string} cmd - Comando ejecutado
     * @returns {HTMLElement} Elemento div con la línea de comando
     */
    createCommandLine(cmd) {
        const line = document.createElement('div');
        line.className = 'command-line';
        line.innerHTML = `
            <span class="prompt-user">alex</span><span class="prompt-separator">@</span><span class="prompt-user">portfolio</span><span class="prompt-separator">:</span><span class="prompt-path">~</span><span class="prompt-symbol">$</span>
            <span class="command-text">${cmd}</span>
        `;
        return line;
    }
    
    /**
     * Escribe HTML carácter a carácter simulando el efecto de una máquina de escribir
     * @param {HTMLElement} element - Elemento donde escribir
     * @param {string} html - Contenido HTML a escribir
     * @param {number|null} [sessionId=null] - ID de sesión para control de concurrencia
     * @returns {Promise<void>}
     */
    async typeHTML(element, html, sessionId = null) {
        this.isTyping = true;
        this.skipTyping = false;
        this.pendingContent = html;
        this.pendingElement = element;
        
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        const shouldAbort = () => {
            return this.skipTyping || (sessionId !== null && sessionId !== this.sessionId);
        };
        
        const processNode = async (node, parent) => {
            if (shouldAbort()) {
                return false;
            }
            
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                const textNode = document.createTextNode('');
                parent.appendChild(textNode);
                
                for (let i = 0; i < text.length; i++) {
                    if (shouldAbort()) {
                        return false;
                    }
                    
                    textNode.textContent += text[i];
                    
                    const delay = text[i] === '\n' ? this.typingSpeed * 3 : this.typingSpeed;
                    await this.sleep(delay);
                    
                    this.output.scrollTop = this.output.scrollHeight;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const clone = document.createElement(node.tagName);
                
                for (const attr of node.attributes) {
                    clone.setAttribute(attr.name, attr.value);
                }
                
                parent.appendChild(clone);
                
                for (const child of node.childNodes) {
                    const shouldContinue = await processNode(child, clone);
                    if (shouldContinue === false) {
                        return false;
                    }
                }
            }
            return true;
        };
        
        let completed = true;
        for (const child of temp.childNodes) {
            const shouldContinue = await processNode(child, element);
            if (shouldContinue === false) {
                completed = false;
                break;
            }
        }
        
        if (sessionId === null || sessionId === this.sessionId) {
            this.isTyping = false;
            this.skipTyping = false;
            this.pendingContent = null;
            this.pendingElement = null;
            
            if (completed) {
                this.animateSkillBars();
            }
            
            this.output.scrollTop = this.output.scrollHeight;
        }
    }
    
    /**
     * Pausa la ejecución por un tiempo determinado
     * @param {number} ms - Milisegundos a esperar
     * @returns {Promise<void>}
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * Muestra el mensaje de bienvenida del terminal
     * @returns {Promise<void>}
     */
    async showWelcome() {
        const welcomeBlock = document.createElement('div');
        welcomeBlock.className = 'output-block';
        this.output.appendChild(welcomeBlock);
        
        await this.typeHTML(welcomeBlock, this.t('welcome'));
    }
    
    /**
     * Limpia el contenido del terminal y resetea el estado
     * @returns {void}
     */
    clearTerminal() {
        this.output.innerHTML = '';
        this.currentCommand = null;
        
        document.querySelectorAll('.cmd-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    /**
     * Anima las barras de progreso de las habilidades
     * @returns {void}
     */
    animateSkillBars() {
        const bars = document.querySelectorAll('.skill-bar-fill');
        bars.forEach(bar => {
            const level = bar.dataset.level;
            setTimeout(() => {
                bar.style.width = `${level}%`;
            }, 100);
        });
    }
    
    /**
     * Renderiza la sección "whoami" con información personal
     * @returns {string} HTML de la sección
     */
    renderWhoami() {
        return `
<div class="output-title glow">${this.t('whoamiName')}</div>
<div class="output-subtitle">${this.t('whoamiTitle')}</div>

<div class="output-text">${this.t('whoamiLocation')}</div>
<div class="output-text">${this.t('whoamiRole')}</div>
<div class="output-text">${this.t('whoamiFocus')}</div>

<div class="output-text" style="margin-top: 1rem;">
${this.t('whoamiDesc')}
</div>
`;
    }
    
    /**
     * Renderiza la sección de experiencia laboral
     * @returns {string} HTML de la sección
     */
    renderExperience() {
        const experience = this.t('experience');
        let html = `<div class="output-title">${this.t('experienceTitle')}</div>\n`;
        
        experience.forEach(company => {
            company.roles.forEach(role => {
                const currentClass = role.current ? ' current' : '';
                html += `
<div class="experience-item${currentClass}">
    <div class="experience-date">${role.period} · ${role.duration}</div>
    <div class="experience-role">${role.title}</div>
    <div class="experience-company">${company.company}</div>
    <div class="experience-location">${role.location}</div>
    ${role.tasks.length > 0 ? `
    <ul class="experience-tasks">
        ${role.tasks.map(task => `<li>${task}</li>`).join('\n        ')}
    </ul>` : ''}
</div>
`;
            });
        });
        
        return html;
    }
    
    /**
     * Renderiza la sección de formación académica
     * @returns {string} HTML de la sección
     */
    renderEducation() {
        const education = this.t('education');
        let html = `<div class="output-title">${this.t('educationTitle')}</div>\n`;
        
        education.forEach(edu => {
            html += `
<div class="education-item">
    <div class="education-degree">🎓 ${edu.degree}</div>
    <div class="education-school">${edu.school}</div>
    <div class="education-year">${edu.year}</div>
    <div class="education-skills">
        ${edu.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('\n        ')}
    </div>
</div>
`;
        });
        
        return html;
    }
    
    /**
     * Renderiza la sección de habilidades técnicas con tags
     * @returns {string} HTML de la sección
     */
    renderSkills() {
        const categories = this.t('skillsCategories');
        let html = `<div class="output-title">${this.t('skillsTitle')}</div>\n`;
        
        categories.forEach(category => {
            html += `
<div class="skills-category">
    <div class="skills-category-title">${category.name}</div>
    <div class="skills-tags">
        ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('\n        ')}
    </div>
</div>
`;
        });
        
        return html;
    }
    
    /**
     * Renderiza la sección de certificaciones
     * @returns {string} HTML de la sección
     */
    renderCerts() {
        const certs = this.t('certs');
        let html = `<div class="output-title">${this.t('certsTitle')}</div>\n`;
        
        certs.forEach(cert => {
            html += `
<div class="cert-item">
    <div class="cert-icon">🏆</div>
    <div class="cert-info">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-date">${cert.date} · ID: ${cert.credentialId}</div>
    </div>
</div>
`;
        });
        
        return html;
    }
    
    /**
     * Renderiza la sección de contacto con enlaces sociales
     * @returns {string} HTML de la sección
     */
    renderContact() {
        const items = this.t('contactItems');
        let html = `<div class="output-title">${this.t('contactTitle')}</div>\n`;
        
        items.forEach(item => {
            html += `
<div class="contact-item">
    <span class="contact-icon">${item.icon}</span>
    <span class="contact-label">${item.label}:</span>
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="output-link contact-value">${item.value}</a>
</div>
`;
        });
        
        html += `\n<div class="output-text output-muted" style="margin-top: 1rem;">${this.t('contactNote')}</div>`;
        
        return html;
    }
    
    /**
     * Renderiza la sección de ayuda con la lista de comandos disponibles
     * @returns {string} HTML de la sección
     */
    renderHelp() {
        const commands = this.t('helpCommands');
        let html = `<div class="output-title">${this.t('helpTitle')}</div>\n`;
        
        commands.forEach(cmd => {
            html += `<div class="output-text"><span class="output-highlight">${cmd.cmd.padEnd(12)}</span> <span class="output-muted">-</span> ${cmd.desc}</div>\n`;
        });
        
        return html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.terminal = new Terminal();
});
