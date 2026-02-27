# Sublytics

[![Web Oficial](https://img.shields.io/badge/Live_demo-Sublytics-0A66C2?style=flat&logo=google-chrome&logoColor=white)](https://sublytics.pages.dev/)

## Descripción

Sublytics es una plataforma de control inteligente diseñada para centralizar, optimizar el gasto y visualizar todos los pagos recurrentes en suscripciones digitales de un usuario en un único dashboard. En un ecosistema donde el modelo de pago recurrente se ha fragmentado (streaming, software, productividad, etc.), el usuario tiende a perder la noción de sus compromisos financieros, resultando en lo que conocemos como "gastos fantasmas": renovaciones automáticas de servicios que apenas o nunca ya se utilizan.

El proyecto está dirigido a todos los públicos, siendo especialmente útil para profesionales digitales con un alto volumen de servicios contratados. Sublytics no solo visualiza el gasto mensual y anual, sino que permite identificar servicios infrautilizados y facilitar su cancelación, transformando un caos de recibos en un sistema consciente y medible.

Sublytics busca resolver tres problemas concretos: el gasto invisible acumulado, las renovaciones automáticas no deseadas y la pérdida de control financiero. A través de alertas previas a la renovación, visualización clara del coste mensual/anual y detección de servicios infrautilizados, el sistema permite tomar decisiones informadas y reducir gastos innecesarios.

## Estructura del Prototipo

El prototipo está planteado como una aplicación web estructurada en varias vistas estáticas que simulan el flujo principal del producto.

* **index.html:** Es el dashboard central. Representa la vista principal donde el usuario ve de un vistazo su gasto total (mensual/anual), el próximo pago más cercano y una lista resumida de sus suscripciones activas con indicadores visuales de uso.

* **login.html:** Simula la pantalla de acceso de usuario. Permite introducir credenciales y representa el punto de entrada al dashboard privado.

* **product.html:** Vista detallada de una suscripción específica. En esta pantalla se muestra el histórico de pagos de un servicio concreto (ej. Netflix o Adobe Creative Cloud), la fecha de la próxima renovación del servcio y posibles acciones como cancelar o editar una suscripción.

La navegación entre vistas se realiza mediante enlaces internos que replican el flujo natural de uso de la aplicación (Login → Dashboard → Product).

## Tecnologías Utilizadas

![HTML](https://img.shields.io/badge/HTML5-%23E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-%23663399?style=flat&logo=css&logoColor=white)

## Enfoque Técnico

El desarrollo del prototipo se ha planteado con un enfoque simple y estructurado, priorizando claridad semántica y organización del CSS.

* Diseño **Mobile First**, construyendo primero la versión para dispositivos móviles y ampliando mediante media queries para pantallas mayores.
* Uso de selectores básicos, combinados y pseudo-clases para estructurar estilos de forma clara y mantenible.
* Aplicación de diferentes valores de `display` para la maquetación de secciones y componentes.
* Uso estratégico de `position` (relative, absolute) para elementos decorativos y componentes interactivos.
* Organización del CSS mediante variables personalizadas (`:root`) para mantener coherencia visual y facilitar futuras escalabilidades.

## Roadmap (Visión de Producto)

Aunque el prototipo actual es estático, la visión del producto incluye:

* Dashboard dinámico con cálculo automático de gasto mensual y anual.
* Sistema de alertas 7–14 días antes de cada renovación.
* Cancelación de suscripciones *in-app*.
* Generación de tarjetas virtuales para nuevos servicios.

## Autor

[![GitHub](https://img.shields.io/badge/GitHub-Jaldekoa-181717?style=flat&logo=github&logoColor=white)](https://github.com/Jaldekoa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jon_Aldekoa-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jaldekoa/)