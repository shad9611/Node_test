// Escriba un algoritmo que devuelva un string identico al del mensaje, pero
// cambiando las partes que dicen %client%, %productName% y %companyName% por
// valores ingresados por el usuario

const { read, readNumber, print } = require('../helpers')

const MESSAGE = `
Estimado(a) %client%,

Espero que este mensaje encuentre a usted y a su familia con buena salud y bienestar. Me dirijo a usted en representación de %copmanyName%, una reconocida compañía que se especializa en brindar soluciones innovadoras a sus clientes.

Recientemente, hemos lanzado un producto revolucionario que puede resultar de interés para usted. Se trata de %productName%, una herramienta que ha sido diseñada meticulosamente para mejorar su vida diaria. Con %productName%, podrá disfrutar de numerosas ventajas y simplificar tareas que antes podrían resultar tediosas.

Nuestro equipo de expertos ha invertido una cantidad considerable de tiempo y esfuerzo en desarrollar este producto de alta calidad. Estamos seguros de que %productName% cumplirá con todas sus expectativas y le proporcionará una experiencia única.

Permítame resumir algunas de las características destacadas de %productName%:

    Funcionalidad avanzada: %productName% ha sido diseñado para ofrecer un rendimiento excepcional y superar cualquier otra alternativa disponible en el mercado.

    Facilidad de uso: Nuestro objetivo principal es simplificar su vida, por lo que %productName% ha sido creado con una interfaz intuitiva y amigable que garantiza una experiencia sin complicaciones.

    Durabilidad y calidad: %copmanyName% se enorgullece de ofrecer productos de la más alta calidad. Con %productName%, puede tener la tranquilidad de saber que ha invertido en un artículo resistente y duradero.

    Soporte técnico: Entendemos la importancia de brindar un excelente servicio al cliente. Por ello, nuestro equipo de soporte técnico está siempre disponible para responder a cualquier pregunta o inquietud que pueda surgir durante el uso de %productName%.

Nos gustaría ofrecerle la oportunidad de adquirir %productName% a un precio especial, exclusivamente para nuestros clientes destacados. ¡No deje pasar esta oferta única y benefíciese de todas las ventajas que %productName% tiene para ofrecer!

Para obtener más información sobre %productName%, visite nuestro sitio web o póngase en contacto con nuestro equipo de ventas o por correo electrónico. Estaremos encantados de proporcionarle toda la asistencia que necesite.

Agradecemos su tiempo y consideración. Esperamos poder brindarle una solución que satisfaga plenamente sus necesidades.

Atentamente,

%copmanyName%
`

const main = async () => {
  print('Problema aún no resuelto')
}

module.exports = main
