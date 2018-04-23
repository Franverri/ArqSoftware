# ArqSoftware

La empresa en la que trabajan está planeando modernizar el producto que hacen. Este producto es un gran monolito (una única aplicación muy grande), que se viene haciendo hace muchos años y se volvió difícil de mantener.
La idea no es rehacerlo entero porque llevaría demasiado tiempo y sería muy riesgoso. En el corto plazo, lo que quieren hacer es separar unas pocas partes pequeñas de la gran aplicación a servicios externos, y hacer que la aplicación use esos servicios. Así, ven que cada servicio va a ser más fácil de mantener.
La gran duda ahora es cómo encarar estos nuevos servicios. ¿Qué tecnologías conviene usar? ¿Qué ventajas y desventajas tiene cada una? Por esto, les pidieron que analicen algunas alternativas de tecnologías y configuraciones:

Obligatorias:

	● app flask + gunicorn web server (1 worker)
	● app node/express (1 worker, sin usar el modo cluster)
	● N instancias app (alguna de las anteriores) con load balancer

Opcionales:

	● app flask + gunicorn web server (múltiples workers)
	● app node/express en modo cluster, con múltiples subprocesos
	● N instancias de la app, cada una con varios workers, y un load balancer delante

Ustedes deberán someter a distintos tipos de escenario de carga a un servicio de prueba que hagan en cada una de las configuraciones anteriores y medir diversos aspectos, para así tener resultados representativos de cada configuración en cada caso que les permitan entender las ventajas y desventajas de cada uno.
En función de los datos obtenidos tendrán analizarlos y confeccionar un informe que describa el trabajo realizado junto con los resultados del análisis. Este informe debe contener también gráficos que muestren una serie temporal de las mediciones realizadas y una descripción de las herramientas y escenarios de cargas ejecutados. Para cada una de las configuraciones, el informe debe incluir un diagrama con una ​ vista de
la Estructura de Deployment​ de la arquitectura.

Por un lado, quieren ver cómo se comporta cada tecnología ante endpoints sencillos, como estiman que terminarán siendo algunas de las funcionalidades básicas que tendrán los nuevos servicios. Para ello, y para empezar a familiarizarse con cada una, la idea es hacer un endpoint ​ rápido y liviano​ (tipo “ping” u “hola mundo”).
Por otro lado, saben que Python tiene un modelo de procesamiento sincrónico mientras que Node tiene uno asincrónico, y sospechan que eso puede generar diferencias notables. Para poner la teoría a prueba, pueden probar cómo se comporta cada uno ante carga distintos tipos de endpoints:

	● Endpoint lento y liviano​ . Estiman que con un simple sleep/delay pueden simular el impacto que tendría llamar a otro servicio externo (por ejemplo, una base de datos en otro servidor o simplemente otro app server que tenga otra parte de la funcionalidad), es decir que la respuesta final puede demorar pero consumen pocos recursos en ese nodo en procesarlo.
	● Endpoint lento y pesado​ . Los endpoints que requieren cálculos más complejos o manipular muchos datos suelen demorar un poco y sí consumen muchos recursos (CPU y/o memoria). En particular, creen que el uso de CPU puede marcar una diferencia notable, con lo que tienen la teoría de que un simple ciclo que demore cierto tiempo sin descansar puede servirles para comparar.

Además, tienen algunas otras ideas que les resultaría interesante probar ​ (opcionales):

	● Contenido estático​ . Endpoints que simplemente devuelvan archivos existentes, grandes o chicos
	● Passthrough a otro servicio​ . Si bien el sleep/delay es una aproximación simple, les gustaría probar si efectivamente se comporta igual cuando llama a otro servicio.