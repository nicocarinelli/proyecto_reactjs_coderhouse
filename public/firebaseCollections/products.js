const products = [
    {name: 'Buzo Ancla', price: 5220, type: 'Abrigos', category: 'Buzo', img: '/images/Abrigos/buzo-ancla.jpg', stock: 4, description: `Descripción de Buzo Ancla, re original`},
    {name: 'Buzo Ketle', price: 7300, type: 'Abrigos', category: 'Buzo', img: '/images/Abrigos/buzo-ketle.jpg', stock: 5, description: `Descripción de Buzo Ketle, por qué le ponía nombre de pava pero en inglés?`},
    {name: 'Buzo Lyon', price: 6120, type: 'Abrigos', category: 'Buzo', img: '/images/Abrigos/buzo-lyon.jpg', stock: 8, description: `Descripción de Buzo Lyon, hizo algo ese equipo alguna vez?`},
    {name: 'Buzo Morris', price: 6120, type: 'Abrigos', category: 'Buzo', img: '/images/Abrigos/buzo-morris.jpg', stock: 2, description: `Descripción de Buzo Morris, el vicio`},
    {name: 'Buzo Travis', price: 6480, type: 'Abrigos', category: 'Buzo', img: '/images/Abrigos/buzo-travis.jpg', stock: 4, description: `Descripción de Buzo Travis, alto skater`},
    {name: 'Campera Malba', price: 8100, type: 'Abrigos', category: 'Campera', img: '/images/Abrigos/campera-malba.jpg', stock: 2, description: `Descripción de Campera Malba, que manera de lavar guita`},
    {name: 'Sweater Blud', price: 6200, type: 'Abrigos', category: 'Sweater', img: '/images/Abrigos/sweater-blud.jpg', stock: 3, description: `Descripción de Sweater Blud, y este nombre?`},
    {name: 'Cinturon Genoma', price: 4500, type: 'Accesorios', category: 'Cinturon', img: '/images/Accesorios/cinturon-genoma.jpg', stock: 7, description: `Descripción de Cinturon Genoma, mejorando la raza humana`},
    {name: 'Cinturon Jacinto', price: 4000, type: 'Accesorios', category: 'Cinturon', img: '/images/Accesorios/cinturon-jacinto.jpg', stock: 6, description: `Descripción de Cinturon Jacinto, pobre...con ese nombre`},
    {name: 'Cinturon Serrano', price: 4000, type: 'Accesorios', category: 'Cinturon', img: '/images/Accesorios/cinturon-serrano.jpg', stock: 7, description: `Descripción de Cinturon Serrano, que rico un jamoncito`},
    {name: 'Borcegos Ozzy', price: 15600, type: 'Calzado', category: 'Borcegos', img: '/images/Calzado/borcegos-ozzy.jpg', stock: 6, description: `Descripción de Borcegos Ozzy, que tipo limado`},
    {name: 'Botas Macallan Chocolate', price: 22050, type: 'Calzado', category: 'Botas', img: '/images/Calzado/botas-macallan-chocolate.jpg', stock: 3, description: `Descripción de Botas Macallan Chocolate, ojo que un vasito de Macallan con una barrita de chocolate a esta hora...RE juega`},
    {name: 'Botas Macallan Negro', price: 22000, type: 'Calzado', category: 'Botas', img: '/images/Calzado/botas-macallan-negro.jpg', stock: 4, description: `Descripción de Botas Macallan Negro, etiqueta premium?`},
    {name: 'Botas Macallan Suela', price: 22000, type: 'Calzado', category: 'Botas', img: '/images/Calzado/botas-macallan-suela.jpg', stock: 5, description: `Descripción de Botas Macallan Suela, me quedé sin ideas`},
    {name: 'Botas Steve Raspado', price: 19500, type: 'Calzado', category: 'Botas', img: '/images/Calzado/botas-steve-raspado.jpg', stock: 2, description: `Descripción de Botas Steve Raspado, por no ponerse talco....ah no...`},
    {name: 'Zapatillas Amadeo', price: 15900, type: 'Calzado', category: 'Zapatillas', img: '/images/Calzado/zapatillas-amadeo.jpg', stock: 1, description: `Descripción de Zapatillas Amadeo, fan de River?`},
    {name: 'Zapatillas Luigi', price: 15900, type: 'Calzado', category: 'Zapatillas', img: '/images/Calzado/zapatillas-luigi.jpg', stock: 6, description: `Descripción de Zapatillas Luigi, como le gusta el chupi a esta gente`},
    {name: 'Zapatillas Ozzy', price: 16900, type: 'Calzado', category: 'Zapatillas', img: '/images/Calzado/zapatillas-ozzy.jpg', stock: 7, description: `Descripción de Zapatillas Ozzy, porque nunca sobran 2 Ozzys`},
    {name: 'Camisa Barry', price: 6570,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-barry.jpg', stock: 3, description: `Descripción de Camisa Barry, que voz que tenía el gordo`},
    {name: 'Camisa Bing', price: 7300,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-bing.jpg', stock: 4, description: `Descripción de Camisa Bing, claramente Chandler. El buscador no lo conoce nadie`},
    {name: 'Camisa Fisher', price: 7300,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-fisher.jpg', stock: 3, description: `Descripción de Camisa Fisher, y el otro destornillador cómo se llamaba?`},
    {name: 'Camisa Mauri', price: 6800,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-mauri.jpg', stock: 2, description: `Descripción de Camisa Mauri, quién?`},
    {name: 'Camisa Monroe', price: 6910,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-monroe.jpg', stock: 4, description: `Descripción de Camisa Monroe, y Libertador hay una heladería copada`},
    {name: 'Camisa Pistacho', price: 7150,  type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-pistacho.jpg', stock: 3, description: `Descripción de Camisa Pistacho, porque está re de moda poner nombres de morfi`},
    {name: 'Camisa Sour', price: 7800, type: 'Camisas', category: 'Camisa', img: '/images/Camisas/camisa-sour.jpg', stock: 3, description: `Descripción de Camisa Sour, más nombres de morfi`},
    {name: 'Bermuda Floyd', price: 6300, type: 'Pantalones', category: 'Bermuda', img: '/images/Pantalones/bermuda-floyd.jpg', stock: 2, description: `Descripción de Bermuda Floyd, Mayweather-Pink`},
    {name: 'Chino Azul', price: 8900, type: 'Pantalones', category: 'Chino', img: '/images/Pantalones/chino-azul.jpg', stock: 3, description: `Descripción de Chino Azul, y no se por qué imagino un Toyota`},
    {name: 'Chino Negro', price: 8900, type: 'Pantalones', category: 'Chino', img: '/images/Pantalones/chino-negro.jpg', stock: 4, description: `Descripción de Chino Negro, raro. Nunca vi uno`},
    {name: 'Chino Verde', price: 8900, type: 'Pantalones', category: 'Chino', img: '/images/Pantalones/chino-verde.jpg', stock: 6, description: `Descripción de Chino Verde, el Yen es verde?`},
    {name: 'Dixon Gris', price: 8250, type: 'Pantalones', category: 'Dixon', img: '/images/Pantalones/dixon-gris.jpg', stock: 7, description: `Descripción de Dixon Gris, Dixon es nombre de toro o de búfalo, me suena algo así`},
    {name: 'Jean Blend', price: 7900, type: 'Pantalones', category: 'Jean', img: '/images/Pantalones/jean-blend.jpg', stock: 4, description: `Descripción de Jean Blend de Tintas`},
    {name: 'Jean Cube', price: 7900, type: 'Pantalones', category: 'Jean', img: '/images/Pantalones/jean-cube.jpg', stock: 5, description: `Descripción de Jean Cubensis`},
    {name: 'Jean Curry', price: 7900, type: 'Pantalones', category: 'Jean', img: '/images/Pantalones/jean-curry.jpg', stock: 5, description: `Descripción de Jean Curry con pollo`},
    {name: 'Remera Cougar', price: 3200, type: 'Remeras', category: 'Remera', img: '/images/Remeras/remera-cougar.jpg', stock: 7, description: `Descripción de Remera Cougar....jajaj`},
    {name: 'Remera Not Dead', price: 3200, type: 'Remeras', category: 'Remera', img: '/images/Remeras/remera-not-dead.jpg', stock: 8, description: `Descripción de Remera Not Dead, entonces Alive`},
    {name: 'Remera Rose', price: 3060, type: 'Remeras', category: 'Remera', img: '/images/Remeras/remera-rose.jpg', stock: 9, description: `Descripción de Remera Rose, Axl?`},
    {name: 'Remera Stones', price: 2890, type: 'Remeras', category: 'Remera', img: '/images/Remeras/remera-stones.png', stock: 7, description: `Descripción de Remera Stones con fleco incluido`},
    {name: 'Remera Tradi', price: 3340, type: 'Remeras', category: 'Remera', img: '/images/Remeras/remera-tradi.png', stock: 3, description: `Descripción de Remera Tradi...que de tradi(cional) no tiene nada`}
]