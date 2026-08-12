# 🏓 Pong — JavaScript desde cero

Un proyecto de aprendizaje para desarrollar una versión de **Pong utilizando únicamente HTML, CSS y JavaScript**, construyendo cada sistema de forma incremental y entendiendo qué ocurre detrás de cada línea de código.

> **Mi idea no es solamente desarrollar Pong. Es aprender a hacer un videojuego.**

---

# 🧠 Enfoque de desarrollo

El proyecto se desarrolla **de forma incremental**.

En lugar de intentar construir el juego completo desde el principio, cada etapa agrega o modifica una pequeña pieza del sistema.

Cada etapa debe dejar el juego funcionando antes de comenzar la siguiente.

Esto permite que cada cambio pueda entenderse y probarse de manera aislada.

---

## 🛠️ Tecnologías

- **HTML5**
- **CSS3**
- **JavaScript**
- **Canvas API**
- **Git / GitHub**

Sin frameworks. Sin motores. Sin magia.

**Solo código, matemática y una pelota que cada vez va más rápido.** 🏓💨

---

# 🧩 Arquitectura

La estructura actual del proyecto es:

```text
pong/
│
├── index.html
├── style.css
│
└── js/
    ├── config.js
    ├── entities.js
    └── game.js
```

La separación se está realizando progresivamente.

### `config.js`

Contiene los valores que controlan el comportamiento del juego:

```text
Tamaño de las paletas
Tamaño de la pelota
Velocidad inicial
Aceleración de la pelota
Velocidad máxima
Fricción
Aceleración de las paletas
Configuración de dificultad de la IA
```

La intención es evitar que estos valores queden mezclados con la lógica del juego.

---

### `entities.js`

Define las entidades principales:

```text
Player 1
Player 2
Ball
Score
```

Actualmente las entidades se representan mediante objetos JavaScript.

Por ejemplo, una paleta contiene información como:

```javascript
{
    x,
    y,
    width,
    height,
    velocityY
}
```

Esto permite que una entidad almacene tanto su **estado** como las propiedades necesarias para actualizarlo.

---

### `game.js`

Actualmente concentra la mayor parte de la lógica.

Entre otras responsabilidades, contiene:

```text
Input
Game Loop
Movimiento
Física de la pelota
Colisiones
IA
Puntuación
Renderizado
```

Esto es intencionalmente temporal.

A medida que el proyecto crece, mi idea es seguir refactorizando este archivo para separar responsabilidades.

---

# 📚 Propósito educativo

Este repositorio funciona como un registro del proceso de aprendizaje.

Las decisiones de implementación se toman intentando responder preguntas como:

> ¿Por qué la pelota rebota de esta manera?

> ¿Qué representa realmente `velocityX`?

> ¿Cómo podemos determinar si dos objetos están colisionando?

> ¿Cómo puede una IA predecir dónde estará una pelota?

> ¿Cuándo conviene separar una responsabilidad en otro módulo?

> ¿Cómo podemos mejorar el código sin romper lo que ya funciona?

La intención es que el código final sea el resultado de **entender progresivamente el problema**, no simplemente de copiar una implementación terminada.

---

## 🚀 Ejecutarlo

No necesitás instalar ninguna dependencia.

Simplemente cloná el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrá en la carpeta:

```bash
cd pong
```

Y abrí:

```text
index.html
```

También podés utilizar una extensión como **Live Server** para ejecutar el proyecto desde un servidor local.

---

## 🕹️ Controles

| Tecla | Acción                |
| ----- | --------------------- |
| `W`   | ⬆️ Mover hacia arriba |
| `S`   | ⬇️ Mover hacia abajo  |

La paleta derecha está controlada por la IA.

---

### 🏓 ¿Listo para jugar?

Y que gane el mejor. 🤖

**¡Buena suerte!**

