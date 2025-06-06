import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon, ShoppingCart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { useState } from 'react';

// Product data for reusability
const productData = [
  {
    id: 1,
    image: "/image-10.png",
    title: "Pulseiras Personalizadas",
    price: null,
  },
  {
    id: 2,
    image: "/image-7.png",
    title: "Colares personalizados",
    price: null,
  },
  {
    id: 3,
    image: "/image-11.png",
    title: "Brincos Folhas de Perolas",
    price: null,
  },
  {
    id: 4,
    image: "/look3.jpeg",
    title:
      "Modelo de pulseira bem especial, porque representa muito do que eu creio",
    price: "R$35,00",
  },
  {
    id: 5,
    image: "/image-8.png",
    title: "Pulseiras mãe e filho",
    price: "R$150,00",
  },
  {
    id: 6,
    image: "/image-9.png",
    title: "Pulseiras Personalizadas",
    price: "R$35,50",
  },
  {
    id: 7,
    image: "/image-4.png",
    title: "Colar Floresta Negra com pingente de Vidro",
    price: "R$110,80",
  },
];

// Footer links data
const footerData = {
  products: ["Perguntas frequentes", "Entrega", "Garantia"],
  help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
  social: ["Facebook", "Instagram", "Twitter", "Whatsapp"],
};



export const Template = (): JSX.Element => {

   const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[100%] h-[100%] relative 
          bg-[#ffffff] shadow-[0px_4px_10px_#00000040]">
            
        {/* Navigation */}

      <header className="flex items-center justify-between px-7 h-[84px] bg-white shadow-md relative">
            {/* Logo */}
            <a href="/" className="w-[70px] h-[70px]">
                <img
                    className="w-full h-full object-contain"
                    alt="Rosa de Luz Logo"
                    src="/image-303.png"
                />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
                <a href="/" className="font-medium text-[#c30000] text-[13px] tracking-[1.69px] hover:text-black">Home</a>
                <a href="/produtos" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Compra</a>
                <a href="/sobre" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Sobre</a>
                        <a
  href="https://wa.me/5511978951764"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  Contato
</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <a href="/produtos"> <ShoppingCart className="w-5 h-5 cursor-pointer" /> </a>           
                <a href="/produtos"> <ShoppingBagIcon className="w-5 h-5 cursor-pointer" /> </a>
                
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-black">
                {isOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="absolute top-[84px] left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-6 z-20">
                    <a href="/" className="font-medium text-[#c30000] text-lg tracking-[1.69px] hover:text-black">Home</a>
                    <a href="/produtos" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Compra</a>
                    <a href="/sobre" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Sobre</a>
                            <a
  href="https://wa.me/5599999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  Contato
</a>
                </nav>
            )}
        </header>

        {/* Hero Section */}
<section className="w-full flex relative h-[260px] sm:h-[320px] md:h-[400px] lg:h-[600px]">
  {/* Imagem da esquerda */}
  <div className="w-1/2 h-full">
    <img
      className="w-full h-full object-cover"
      alt="Jewelry showcase left"
      src="/image-2.png"
    />
  </div>

  {/* Imagem da direita */}
  <div className="w-1/2 h-full">
    <img
      className="w-full h-full object-cover"
      alt="Jewelry showcase right"
      src="/image-3.png"
    />
  </div>

  {/* Texto centralizado em todas as telas */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
    <h1 className="font-['Montserrat',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
      R
      <span className="font-['Dancing_Script',Helvetica] font-normal text-[#f2eb1d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        o
      </span>
      SA DE LUZ
    </h1>
  </div>
</section>



{/* Featured Products Section */}
<section className="flex justify-center w-full px-5 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
    {productData.slice(0, 3).map((product, index) => {
      const visibilityClasses = [
        "block",              // index 0: sempre visível
        "hidden sm:block",    // index 1: visível a partir de sm
        "hidden lg:block",    // index 2: visível só em lg
      ];

      return (
        <Card
          key={product.id}
          className={`w-full max-w-xs mx-auto h-[400px] bg-[#bf8c5017] shadow-[0px_4px_10px_#00000040] ${visibilityClasses[index]}`}
        >
          <CardContent className="p-0 flex flex-col items-center">
            <img
              className="w-52 h-52 mt-7 object-cover"
              alt={product.title}
              src={product.image}
            />
            <div className="w-full px-7 mt-9">
              <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                {product.title}
              </p>
              <div className="w-full max-w-[237px] h-[43px] mt-2 flex items-center justify-center px-3.5 space-x-3.5">
             <Button className="mt-12 w-[185px] h-16 bg-[#bf8c50] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px] mx-auto lg:mx-0">
      <a href="/produtos">COMPRE JÁ</a>
    </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>
</section>


<section className="w-full px-2 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12 justify-center">
    {productData.slice(3, 7).map((product, index) => {
      // Define visibilidade por index e breakpoint
      const visibilityClasses = [
        "block",                      // index 0: sempre visível
        "hidden md:block",            // index 1: visível a partir de md
        "hidden md:block",            // index 2: visível a partir de md
        "hidden xl:block",            // index 3: visível só em xl
      ];

      return (
       
        <Card
          key={product.id}
          className={`w-full max-w-[297px]   h-[400px] bg-[#bf8c5033]  shadow-[0px_4px_10px_#00000040] mx-auto ${visibilityClasses[index]}`}
        >
    
          <CardContent className="p-0 flex flex-col items-center">
            <img
              className="w-[241px] h-[209px] mt-7 object-cover max-w-full"
              alt={product.title}
              src={product.image}
            />
            <div className="w-full px-7 mt-4 justify-center text-center">
              <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                {product.price}
              </p>
             <Button className="mt-12 w-[185px] h-16 bg-[#bf8c50] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px] mx-auto lg:mx-0">
      <a href="/produtos">COMPRE JÁ</a>
    </Button>
            </div>
          </CardContent>
          
        </Card>
      );
    })}
  </div>
</section>


        {/* Banner Section */}
<section className="w-full flex flex-col lg:flex-row min-h-[300px]">
  <div className="w-full lg:w-[699px] bg-[#dfb68880] flex flex-col items-center justify-center px-6 py-10 lg:px-[54px] text-center lg:text-left">
    <p className="font-['Montserrat',Helvetica] font-medium text-black text-lg lg:text-xl tracking-[2.6px] max-w-xl mx-auto lg:mx-0">
      Em um mundo onde a elegância encontra a arte, nossa&nbsp;&nbsp;surge como uma luz cintilante, oferecendo uma experiência verdadeiramente única para os amantes de Bijuterias Personalizadas
    </p>
    <Button className="mt-12 w-[185px] h-16 bg-[#d9d9d9ad] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px] mx-auto lg:mx-0">
      <a href="/produtos">COMPRE JÁ</a>
    </Button>
  </div>

  <div className="w-full lg:w-[741px] h-64 lg:h-auto hidden xl:block">
    <img
      className="w-full h-full object-cover"
      alt="Jewelry showcase"
      src="/look3.jpeg"
    />
  </div>
</section>



        {/* Featured Collection */}
<section
  className="w-full min-h-[600px]  bg-cover bg-center flex items-center justify-center px-4 xl:px-[55px] py-10"
>
  <div className="flex flex-col xl:flex-row justify-between items-center w-full max-w-7xl gap-10 bg-white/70 p-6 rounded-2xl shadow-md">
    
    {/* Cards de produtos */}
    <div className="flex gap-8">
      {productData.slice(0, 2).map((product, index) => (
        <Card
          key={product.id}
          className={`
            max-w-[297px] h-[393px] bg-[#ffffffee] shadow-[0px_4px_10px_#00000040]
            ${index === 1 ? 'hidden max-[1000px]:hidden' : ''}
          `}
        >
          <CardContent className="p-0 flex flex-col items-center">
            <img
              className="w-[241px] h-[209px] mt-7 object-cover max-w-full"
              alt={product.title}
              src={product.image}
            />
            <div className="w-full px-7 mt-[46px] text-center">
              <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                {product.title}
              </p>
              <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px] mt-[20px]">
                {product.price}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Texto e botão */}
    <div className="text-center max-w-[500px] space-y-4">
      <h2 className="text-2xl font-semibold">
        Dê vida à sua visão de uma bijuteria perfeita.
      </h2>
      <p className="text-gray-700 text-sm">
        Deixe sua marca e conte sua história através de designs exclusivos.
        Clique abaixo para começar a transformar sua imaginação em realidade.
      </p>
      <button className="bg-[#C09D77] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#a68463] transition">
        PERSONALIZE JÁ
      </button>
    </div>
  </div>
</section>







        {/* Personalization CTA */}




        {/* About Section */}
<section className="w-full bg-white flex flex-col lg:flex-row flex-wrap lg:flex-nowrap">
  <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-12 lg:py-24">
    <p className="max-w-[565px] font-['Montserrat',Helvetica] font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-normal text-center lg:text-left">
      Você já parou para pensar no impacto das suas escolhas? Escolher
      uma bijuteria feita com carinho e propósito é um gesto de
      consciência e conexão. Conheça o universo da ROSA DE LUZ e
      descubra como estilo e sustentabilidade caminham juntos.
    </p>
    <Button className="mt-8 w-full max-w-[216px] h-16 bg-[#d9b08cad] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
     <a href="/sobre"> SAIBA MAIS </a> 
    </Button>
  </div>

  <div className="w-full  lg:w-1/2 ">
    <img
      className="w-full h-full object-contain"
      alt="About section image"
      src="/fundo.png"
    />
  </div>
</section>





        {/* Footer */}
     <footer className="w-full bg-[#2a2a2a] text-white py-12 px-4 md:px-16 lg:px-32">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between gap-8">
        <div>
          <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg mb-6">Produtos</h3>
          <ul className="space-y-4">
            {footerData.products.map((item, index) => (
              <li key={index} className="font-['Montserrat',Helvetica] font-normal text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg mb-6">Ajuda</h3>
          <ul className="space-y-4">
            {footerData.help.map((item, index) => (
              <li key={index} className="font-['Montserrat',Helvetica] font-normal text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg mb-6">Social</h3>
          <ul className="space-y-4">
            {footerData.social.map((item, index) => (
              <li key={index} className="font-['Montserrat',Helvetica] font-normal text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="font-['Montserrat',Helvetica] font-semibold text-lg mb-6">Formas de Pagamento</h3>
          <img className="w-40 h-auto mx-auto" alt="Payment methods" src="/image-77.png" />
        </div>
      </div>

      <Separator className="bg-[#d9d9d9] my-8" />

      <p className="font-['Montserrat',Helvetica] font-normal text-xs text-center px-4">
        ROSA DE LUZ Comércio LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo
      </p>
    </footer>
      </div>
    </div>
  );
};
