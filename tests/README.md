# Tests del Portfolio

Este directorio contiene los tests unitarios del proyecto.

## Estructura

- `setup.js` - Configuración global para todos los tests
- `terminal.test.js` - Tests de la clase Terminal
- `navigation.test.js` - Tests de la clase Navigation

## Ejecutar tests

### Instalar dependencias
```bash
npm install
```

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests con interfaz gráfica
```bash
npm run test:ui
```

### Ejecutar tests con cobertura
```bash
npm run test:coverage
```

## Framework

Los tests utilizan **Vitest** con las siguientes características:
- Entorno de pruebas: jsdom (para simular el DOM del navegador)
- Sintaxis: describe/it/expect (compatible con Jest)
- Cobertura: v8

## Convenciones

- **Nombres de tests**: `should_do_something_when_condition`
- **Patrón**: Arrange – Act – Assert
- **Cobertura mínima**: Se recomienda >80% para código crítico

## Ejemplo

```javascript
describe('Terminal', () => {
  it('should_execute_valid_command', () => {
    // Arrange
    const terminal = new Terminal();
    
    // Act
    const result = terminal.executeCommand('whoami');
    
    // Assert
    expect(result).toContain('whoami');
  });
});
```
