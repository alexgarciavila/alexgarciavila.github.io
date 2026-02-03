/**
 * Traducciones ES/CA para el portfolio de Àlex Garcia Vilà
 */
const i18n = {
    es: {
        // Meta
        lang: 'es',
        langName: 'Español',
        
        // Footer
        footer: 'Construido en el lado oscuro de la Fuerza',
        
        // Mensajes del sistema
        welcome: `Bienvenido al portfolio de <span class="output-highlight">Àlex Garcia Vilà</span>
Sysadmin & IT Engineer

<br>Escribe un comando o haz clic en los botones de abajo.</br>
Usa <span class="output-highlight">help</span> para ver los comandos disponibles.`,
        
        commandNotFound: 'comando no encontrado. Escribe <span class="output-highlight">help</span> para ver los comandos disponibles.',
        
        helpTitle: 'Comandos disponibles:',
        helpCommands: [
            { cmd: 'whoami', desc: 'Información sobre mí' },
            { cmd: 'experience', desc: 'Experiencia laboral' },
            { cmd: 'education', desc: 'Formación académica' },
            { cmd: 'skills', desc: 'Habilidades técnicas' },
            { cmd: 'certs', desc: 'Certificaciones' },
            { cmd: 'contact', desc: 'Información de contacto' },
            { cmd: 'help', desc: 'Mostrar esta ayuda' },
            { cmd: 'clear', desc: 'Limpiar terminal' }
        ],
        
        // Whoami
        whoamiName: 'ÀLEX GARCIA VILÀ',
        whoamiTitle: 'Sysadmin & IT Engineer',
        whoamiLocation: '📍 Cataluña, España',
        whoamiRole: '💼 Responsable de equipo de TI @ Group Saltó',
        whoamiFocus: '🎯 Administración de Sistemas & Seguridad Informática',
        whoamiDesc: `Ingeniero de Sistemas y Seguridad Informática. 
Profesional proactivo y apasionado por la tecnología, con una actitud de aprendizaje 
continuo y una gran motivación para afrontar nuevos retos en el ámbito de la seguridad 
y la administración de sistemas.

<span class="output-highlight">+20 años</span> de experiencia en el sector tecnológico.`,
        
        // Experiencia
        experienceTitle: 'Experiencia Laboral',
        experienceAreasTitle: '🔹 ÁREAS DE EXPERIENCIA',
        experienceHistoryTitle: '--- HISTORIAL ---',
        experiencePeriodCol: 'Periodo',
        experienceCargoCol: 'Cargo',
        experienceEmpresaCol: 'Empresa',
        experience: {
            summary: `Cuento con más de 20 años de experiencia gestionando infraestructuras tecnológicas, especialmente en el sector educativo y empresarial. Mi enfoque principal es el liderazgo de equipos técnicos y la optimización de sistemas para garantir entornos estables y eficientes.

Mi experiencia se centra en:
- <span class="output-highlight">Sistemas:</span> Especialista en administración de servidores y estaciones de trabajo.
- <span class="output-highlight">Liderazgo:</span> Responsable de equipos técnicos y gestión avanzada de incidencias.
- <span class="output-highlight">Automatización:</span> Optimización de procesos mediante la creación de automatizaciones.
- <span class="output-highlight">Virtualización:</span> Despliegue y mantenimiento de entornos virtualizados.
- <span class="output-highlight">Seguridad:</span> Implementación de medidas de seguridad y gestión de activos.
- <span class="output-highlight">Backups:</span> Estrategias de recuperación y continuidad del servicio.`,
            areas: [
                {
                    title: "Infraestructura y sistemas",
                    items: [
                        "Gestión de servidores y estaciones de trabajo Windows y Linux.",
                        "Despliegue y orquestación de entornos virtuales con Proxmox y contenedores Docker.",
                        "Gestión centralizada de seguridad y activos mediante consolas Kaspersky, Deep Freeze y PaperCut",
                        "Automatización operativa avanzada utilizando Python, PowerShell, scripting y control de versiones con Git.",
                        "Gestión de incidencias de servicios en entornos educativos a través de GLPI y BMC-Remedy",
                        "Implementación de backups y recuperación para garantizar la integridad de los datos y la continuidad del servicio."
                    ]
                }
            ],
            historyIntro: `Este trabajo lo he desarrollado en distintos contextos:
- Entornos educativos
- Empresas privadas`,
            history: [
            {
                company: 'Group Saltó',
                roles: [
                    {
                        title: 'Responsable de equipo de TI',
                        period: '2023 - XXXX',
                        duration: '2 años',
                        location: 'Reus, Cataluña · Remoto',
                        current: true,
                        tasks: [
                            'Referente de centros educativos del área PEN (Penedès)',
                            'Gestión del equipo de técnicos del área PEN',
                            'Gestión de incidencias (BMC-Remedy y GLPI)',
                            'Enlace entre centros educativos, servicios territoriales y técnicos',
                            'Gestión de consolas Kaspersky, Deep Freeze Cloud y PaperCut'
                        ]
                    },
                    {
                        title: 'Administrador informático',
                        period: '2013 - 2023',
                        duration: '10 años ',
                    
                        location: 'Reus, Cataluña',
                        current: false,
                        tasks: [
                            'Mantenimiento del parque informático de escuelas del Baix Penedès',
                            'Instalación y actualización de servidores Windows y Linux',
                            'Mantenimiento de estaciones de trabajo',
                            'Asesoramiento informático a escuelas e institutos'
                        ]
                    }
                ]
            },
            {
                company: 'Cloud Informàtica',
                roles: [
                    {
                        title: 'Administrador informático',
                        period: '2013 - 2017',
                        duration: '4 años',
                        location: 'El Vendrell, Cataluña · Autónomo',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'La Boutique Natural',
                roles: [
                    {
                        title: 'Director técnico',
                        period: '2013 - 2016',
                        duration: '3 años',
                        location: 'Cataluña · Híbrido · Autónomo',
                        current: false,
                        tasks: [
                            'Estrategia de Marketing Online',
                            'Mantenimiento de ordenadores, servidores y servicios',
                            'Mantenimiento de la página web'
                        ]
                    }
                ]
            },
            {
                company: 'Qb Informatica',
                roles: [
                    {
                        title: 'Administrador informático',
                        period: '2009 - 2013',
                        duration: '4 años',
                        location: 'Granollers, Cataluña',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: '77TRES ARROBA SL',
                roles: [
                    {
                        title: 'Administrador informático',
                        period: '2007 - 2009',
                        duration: '2 años',
                        location: 'Barcelona, Cataluña',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'Anursis',
                roles: [
                    {
                        title: 'Administrador informático',
                        period: '2006 - 2007',
                        duration: '1 año',
                        location: 'Barcelona, Cataluña',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'AMALTEA NETWORKS SL',
                roles: [
                    {
                        title: 'Administrador informático',
                        period: '2004 - 2006',
                        duration: '2 años',
                        location: 'Barcelona, Cataluña',
                        current: false,
                        tasks: []
                    }
                ]
            }
        ]
        },
        
        // Educación
        educationTitle: 'Formación Académica',
        education: [
            {
                degree: 'Grado en Ingeniería Informática',
                school: 'Universitat Oberta de Catalunya (UOC)',
                year: '2021 - En curso',
                skills: ['Ciberseguridad', 'IA', 'Python', 'Seguridad de redes', 'Criptografía', 'Gestión de redes', 'Arquitectura de redes', 'Gestión de proyectos', 'R', 'Java']
            },
            {
                degree: 'CFGS Programación Informática',
                school: 'Centre d\'Estudis Politècnics',
                year: '2004 - 2005',
                skills: ['ANSI C', 'C++', 'C#', 'Java', 'UML']
            },
            {
                degree: 'CFGS Administración de Sistemas Informáticos',
                school: 'Centre d\'Estudis Politècnics',
                year: '2002 - 2004',
                skills: ['Administración de sistemas', 'Windows', 'Windows Server', 'Linux', 'GNU/Linux']
            }
        ],
        
        // Skills
        skillsTitle: 'Habilidades Técnicas',
        skillsCategories: [
            {
                name: 'Sistemas Operativos',
                skills: ['Windows Server', 'GNU/Linux', 'Windows Desktop']
            },
            {
                name: 'Seguridad',
                skills: ['Ciberseguridad', 'Kaspersky', 'Seguridad de redes', 'Criptografía']
            },
            {
                name: 'Redes',
                skills: ['Arquitectura de redes', 'Gestión de redes', 'Diseño de redes']
            },
            {
                name: 'Programación',
                skills: ['Python', 'Java', 'C/C++/C#', 'R']
            },
            {
                name: 'Herramientas',
                skills: ['BMC-Remedy', 'GLPI', 'Deep Freeze Cloud', 'PaperCut', 'Gestión de proyectos']
            }
        ],
        
        // Certificaciones
        certsTitle: 'Certificaciones',
        certs: [
            {
                name: 'Programación Orientada a Objetos con Python',
                issuer: 'Universidad Austral',
                date: 'Noviembre 2020',
                credentialId: 'D7JQETTQEY49'
            },
            {
                name: 'Estructuras de datos en Python',
                issuer: 'Universidad Austral',
                date: 'Octubre 2020',
                credentialId: 'F9JHS8WKB32J'
            },
            {
                name: 'Introducción a la programación con Python',
                issuer: 'Universidad Austral',
                date: 'Septiembre 2020',
                credentialId: 'DSFPH5N6CS3Q'
            }
        ],
        
        // Contacto
        contactTitle: 'Contacto',
        contactItems: [
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexgarciavila', url: 'https://www.linkedin.com/in/alexgarciavila/' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/alexgarciavila', url: 'https://github.com/alexgarciavila' }
        ],
        contactNote: '💬 Para contactar conmigo, envíame un mensaje a través de LinkedIn.'
    },
    
    ca: {
        // Meta
        lang: 'ca',
        langName: 'Català',
        
        // Footer
        footer: 'Construït al costat fosc de la Força',
        
        // Mensajes del sistema
        welcome: `Benvingut al portfolio d'<span class="output-highlight">Àlex Garcia Vilà</span>
Sysadmin & IT Engineer

<br>Escriu una comanda o fes clic als botons de sota.
Escriu <span class="output-highlight">help</span> per veure les comandes disponibles.`,
        
        commandNotFound: 'comanda no trobada. Escriu <span class="output-highlight">help</span> per veure les comandes disponibles.',
        
        helpTitle: 'Comandes disponibles:',
        helpCommands: [
            { cmd: 'whoami', desc: 'Informació sobre mi' },
            { cmd: 'experience', desc: 'Experiència laboral' },
            { cmd: 'education', desc: 'Formació acadèmica' },
            { cmd: 'skills', desc: 'Habilitats tècniques' },
            { cmd: 'certs', desc: 'Certificacions' },
            { cmd: 'contact', desc: 'Informació de contacte' },
            { cmd: 'help', desc: 'Mostrar aquesta ajuda' },
            { cmd: 'clear', desc: 'Netejar terminal' }
        ],
        
        // Whoami
        whoamiName: 'ÀLEX GARCIA VILÀ',
        whoamiTitle: 'Sysadmin & IT Engineer',
        whoamiLocation: '📍 Catalunya, Espanya',
        whoamiRole: '💼 Responsable d\'equip de TI @ Group Saltó',
        whoamiFocus: '🎯 Administració de Sistemes & Seguretat Informàtica',
        whoamiDesc: `Enginyer de Sistemes i Seguretat Informàtica. 
Professional proactiu i apassionat per la tecnologia, amb una actitud d'aprenentatge 
continu i una gran motivació per afrontar nous reptes en l'àmbit de la seguretat 
i l'administració de sistemes.

<span class="output-highlight">+20 anys</span> d'experiència en el sector tecnològic.`,
        
        // Experiencia
        experienceTitle: 'Experiència Laboral',
        experienceAreasTitle: '🔹 ÀREES D\'EXPERIÈNCIA',
        experienceHistoryTitle: '--- HISTORIAL ---',
        experiencePeriodCol: 'Període',
        experienceCargoCol: 'Càrrec',
        experienceEmpresaCol: 'Empresa',
        experience: {
            summary: `Compto amb més de 20 anys d'experiència gestionant infraestructures tecnològiques, especialment en el sector educatiu i empresarial. El meu enfocament principal és el lideratge d'equips tècnics i l'optimització de sistemes per garantir entorns estables i eficients.

La meva experiència se centra en:
- <span class="output-highlight">Sistemes:</span> Especialista en administració de servidors i estacions de treball.
- <span class="output-highlight">Lideratge:</span> Responsable d'equips tècnics i gestió avançada d'incidències.
- <span class="output-highlight">Automatització:</span> Optimització de processos mitjançant la creació d'automatitzacions.
- <span class="output-highlight">Virtualització:</span> Desplegament i manteniment d'entorns virtualitzats.
- <span class="output-highlight">Seguretat:</span> Implementació de mesures de seguretat i gestió d'actius.
- <span class="output-highlight">Backups:</span> Estratègies de recuperació i continuïtat del servei.`,
            areas: [
                {
                    title: "Infraestructura i sistemes",
                    items: [
                        "Gestió de servidors i estacions de treball Windows i Linux.",
                        "Desplegament i orquestració d'entorns virtuals amb Proxmox i contenidors Docker.",
                        "Gestió centralitzada de seguretat i actius mitjançant consoles Kaspersky, Deep Freeze i PaperCut",
                        "Automatització operativa avançada utilitzant Python, PowerShell, scripting i control de versions amb Git.",
                        "Gestió d'incidències de serveis en entorns educatius a través de GLPI i BMC-Remedy",
                        "Implementació de backups i recuperació per garantir la integritat de les dades i la continuïtat del servei."
                    ]
                }
            ],
            historyIntro: `Aquesta feina l'he desenvolupat en diferents contextos:
- Entorns educatius
- Empreses privades`,
            history: [
            {
                company: 'Group Saltó',
                roles: [
                    {
                        title: 'Responsable d\'equip de TI',
                        period: '2023 - XXXX',
                        duration: '2 anys',
                        location: 'Reus, Catalunya · Remot',
                        current: true,
                        tasks: [
                            'Referent de centres educatius de l\'àrea PEN (Penedès)',
                            'Gestió de l\'equip de tècnics de l\'àrea PEN',
                            'Gestió d\'incidències (BMC-Remedy i GLPI)',
                            'Enllaç entre centres educatius, serveis territorials i tècnics',
                            'Gestió de consoles Kaspersky, Deep Freeze Cloud i PaperCut'
                        ]
                    },
                    {
                        title: 'Administrador informàtic',
                        period: '2013 - 2023',
                        duration: '10 anys ',
                    
                        location: 'Reus, Catalunya',
                        current: false,
                        tasks: [
                            'Manteniment del parc informàtic d\'escoles del Baix Penedès',
                            'Instal·lació i actualització de servidors Windows i Linux',
                            'Manteniment d\'estacions de treball',
                            'Assessorament informàtic a escoles i instituts'
                        ]
                    }
                ]
            },
            {
                company: 'Cloud Informàtica',
                roles: [
                    {
                        title: 'Administrador informàtic',
                        period: '2013 - 2017',
                        duration: '4 anys',
                        location: 'El Vendrell, Catalunya · Autònom',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'La Boutique Natural',
                roles: [
                    {
                        title: 'Director tècnic',
                        period: '2013 - 2016',
                        duration: '3 anys',
                        location: 'Catalunya · Híbrid · Autònom',
                        current: false,
                        tasks: [
                            'Estratègia de Màrqueting Online',
                            'Manteniment d\'ordinadors, servidors i serveis',
                            'Manteniment de la pàgina web'
                        ]
                    }
                ]
            },
            {
                company: 'Qb Informatica',
                roles: [
                    {
                        title: 'Administrador informàtic',
                        period: '2009 - 2013',
                        duration: '4 anys',
                        location: 'Granollers, Catalunya',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: '77TRES ARROBA SL',
                roles: [
                    {
                        title: 'Administrador informàtic',
                        period: '2007 - 2009',
                        duration: '2 anys',
                        location: 'Barcelona, Catalunya',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'Anursis',
                roles: [
                    {
                        title: 'Administrador informàtic',
                        period: '2006 - 2007',
                        duration: '1 any',
                        location: 'Barcelona, Catalunya',
                        current: false,
                        tasks: []
                    }
                ]
            },
            {
                company: 'AMALTEA NETWORKS SL',
                roles: [
                    {
                        title: 'Administrador informàtic',
                        period: '2004 - 2006',
                        duration: '2 anys',
                        location: 'Barcelona, Catalunya',
                        current: false,
                        tasks: []
                    }
                ]
            }
        ]
        },
        
        // Educación
        educationTitle: 'Formació Acadèmica',
        education: [
            {
                degree: 'Grau en Enginyeria Informàtica',
                school: 'Universitat Oberta de Catalunya (UOC)',
                year: '2021 - En curs',
                skills: ['Ciberseguretat', 'IA', 'Python', 'Seguretat de xarxes', 'Criptografia', 'Gestió de xarxes', 'Arquitectura de xarxes', 'Gestió de projectes', 'R', 'Java']
            },
            {
                degree: 'CFGS Programació Informàtica',
                school: 'Centre d\'Estudis Politècnics',
                year: '2004 - 2005',
                skills: ['ANSI C', 'C++', 'C#', 'Java', 'UML']
            },
            {
                degree: 'CFGS Administració de Sistemes Informàtics',
                school: 'Centre d\'Estudis Politècnics',
                year: '2002 - 2004',
                skills: ['Administració de sistemes', 'Windows', 'Windows Server', 'Linux', 'GNU/Linux']
            }
        ],
        
        // Skills
        skillsTitle: 'Habilitats Tècniques',
        skillsCategories: [
            {
                name: 'Sistemes Operatius',
                skills: ['Windows Server', 'GNU/Linux', 'Windows Desktop']
            },
            {
                name: 'Seguretat',
                skills: ['Ciberseguretat', 'Kaspersky', 'Seguretat de xarxes', 'Criptografia']
            },
            {
                name: 'Xarxes',
                skills: ['Arquitectura de xarxes', 'Gestió de xarxes', 'Disseny de xarxes']
            },
            {
                name: 'Programació',
                skills: ['Python', 'Java', 'C/C++/C#', 'R']
            },
            {
                name: 'Eines',
                skills: ['BMC-Remedy', 'GLPI', 'Deep Freeze Cloud', 'PaperCut', 'Gestió de projectes']
            }
        ],
        
        // Certificaciones
        certsTitle: 'Certificacions',
        certs: [
            {
                name: 'Programació Orientada a Objectes amb Python',
                issuer: 'Universidad Austral',
                date: 'Novembre 2020',
                credentialId: 'D7JQETTQEY49'
            },
            {
                name: 'Estructures de dades en Python',
                issuer: 'Universidad Austral',
                date: 'Octubre 2020',
                credentialId: 'F9JHS8WKB32J'
            },
            {
                name: 'Introducció a la programació amb Python',
                issuer: 'Universidad Austral',
                date: 'Setembre 2020',
                credentialId: 'DSFPH5N6CS3Q'
            }
        ],
        
        // Contacto
        contactTitle: 'Contacte',
        contactItems: [
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexgarciavila', url: 'https://www.linkedin.com/in/alexgarciavila/' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/alexgarciavila', url: 'https://github.com/alexgarciavila' }
        ],
        contactNote: '💬 Per contactar amb mi, envia\'m un missatge a través de LinkedIn.'
    }
};

// Exportar para uso global
window.i18n = i18n;
