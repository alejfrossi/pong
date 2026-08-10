# 🏓 Pong

> **El clásico. Dos paletas. Una pelota. Cero excusas.**

Un pequeño proyecto desarrollado desde cero con **HTML, CSS y JavaScript**, inspirado en el clásico *Pong*.

La idea es mantener el juego sencillo, pero utilizarlo como una oportunidad para aprender y aplicar conceptos de desarrollo de videojuegos: **física, colisiones, inteligencia artificial, movimiento, puntuación y arquitectura de código**.

---

## 🎮 ¿De qué trata?

Controlás la paleta de la izquierda y tenés un único objetivo:

> 🏓 **¡No dejes que la pelota pase!**

La pelota rebota contra las paredes y las paletas. Cada vez que golpea una paleta puede cambiar su trayectoria y aumentar su velocidad.

Mientras tanto, una **IA controla automáticamente la paleta derecha** e intenta devolver cada pelota que le mandes.

¿Podrás superar a la máquina? 🤖

---

## 🕹️ Controles

| Tecla | Acción                |
| ----- | --------------------- |
| `W`   | ⬆️ Mover hacia arriba |
| `S`   | ⬇️ Mover hacia abajo  |

La paleta derecha está controlada por la IA.

---

## 🤖 La IA

La IA no se limita simplemente a seguir la pelota.

Actualmente intenta **predecir la trayectoria de la pelota**, teniendo en cuenta sus rebotes contra los bordes.

Además, existen diferentes niveles de dificultad:

### 🟢 Easy

La IA:

* Reacciona más tarde.
* Tiene mayor margen de error.
* Se mueve más lentamente.

### 🟡 Normal

Un desafío equilibrado:

* Mejor tiempo de reacción.
* Menor margen de error.
* Mayor velocidad.

### 🔴 Hard

La máquina viene preparada:

* Reacciona antes.
* Predice con mayor precisión.
* Se mueve más rápido.

Pero no hace trampa. 😎

La IA sigue estando limitada por las mismas reglas físicas del juego.

---

## 🧠 ¿Qué estamos aprendiendo?

Este proyecto no busca solamente crear un Pong funcional.

También sirve como laboratorio para experimentar con:

* Game loops
* Movimiento de entidades
* Detección de colisiones
* Velocidad y aceleración
* Trayectorias y rebotes
* Inteligencia artificial
* Predicción de movimiento
* Matemática aplicada a videojuegos
* Refactorización y organización del código
* HTML, CSS y JavaScript

La intención es desarrollar el juego **de forma incremental**, manteniendo cada cambio pequeño, comprensible y registrado mediante Git.

---

## 📁 Estructura del proyecto

Actualmente el código JavaScript está organizado dentro de `js/`:

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

La arquitectura seguirá evolucionando a medida que el juego crezca.

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

## 🛠️ Tecnologías

* **HTML5**
* **CSS3**
* **JavaScript**
* **Canvas API**
* **Git / GitHub**

Sin frameworks. Sin motores. Sin magia.

**Solo código, matemática y una pelota que cada vez va más rápido.** 🏓💨

---

## 🗺️ Próximamente

El proyecto todavía está en desarrollo.

Algunas de las próximas ideas:

* [ ] Mejorar la arquitectura del código
* [ ] Selección de dificultad
* [ ] Sistema de pausa
* [ ] Condición de victoria
* [ ] Efectos de sonido
* [ ] Efectos visuales
* [ ] Menú principal
* [ ] Mejoras en la IA
* [ ] Pulido general del gameplay

---

## Filosofía del proyecto

> **Empezar simple. Entender cada pieza. Mejorarla paso a paso.**

Este proyecto nació como una implementación sencilla de Pong y va evolucionando progresivamente hacia un pequeño videojuego completo.

Cada nueva funcionalidad representa una oportunidad para aprender algo nuevo sobre programación y desarrollo de videojuegos.

---

### 🏓 ¿Listo para jugar?

Y que gane el mejor. 🤖

**¡Buena suerte!**
