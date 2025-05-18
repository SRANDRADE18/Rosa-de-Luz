import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components produtos/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from 'react';

export const Produtos = (): JSX.Element => {
  // Price range filter options
  const priceRanges = [
    { id: "price-1", label: "Até R$ 25,00" },
    { id: "price-2", label: "De R$ 50,00 A R$ 75,00" },
    { id: "price-3", label: "De R$ 75,00 A R$ 100,00" },
    { id: "price-4", label: "De R$ 100,00 A R$ 150,00" },
    { id: "price-5", label: "Acima de R$ 150,00" },
  ];

  // Model filter options
  const modelTypes = [
    { id: "model-1", label: "Colares" },
    { id: "model-2", label: "Anéis" },
    { id: "model-3", label: "Brincos" },
    { id: "model-4", label: "Banhados a Ouro" },
    { id: "model-5", label: "Banhados a Prata" },
  ];


  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Comprar", href: "compra", active: false },
    { name: "Sobre", href: "sobre", active: false },
    { name: "Contato", href: "contato", active: false },
    { name: "Produtos", href: "/produtos", active: false },
  ];

  // Product data
  const products = [
    {
      id: 1,
      image: "/image-4.png",
      description:
        "Modelo de pulseira bem especial, porque representa muito do que eu creio",
      price: "R$35,00",
    },
    {
      id: 2,
      image: "/image-5.png",
      description: "Pulseiras mãe e filho",
      price: "R$150,00",
    },
    {
      id: 3,
      image: "/image-6.png",
      description: "Pulseiras Personalizadas",
      price: "R$35,50",
    },
    {
      id: 4,
      image: "/image-4.png",
      description:
        "Modelo de pulseira bem especial, porque representa muito do que eu creio",
      price: "R$35,00",
    },
    {
      id: 5,
      image: "/image-5.png",
      description: "Pulseiras mãe e filho",
      price: "R$150,00",
    },
    {
      id: 6,
      image: "/image-6.png",
      description: "Pulseiras Personalizadas",
      price: "R$35,50",
    },
  ];

  // Footer links
  const navItems2 = [
    { name: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=5511992560217&text&type=phone_number&app_absent=0", active: false },
    { name: "Instagram", href: "https://www.instagram.com/rosadeluzoficial/", active: false },
    { name: "Facebook", href: "https://www.facebook.com/rosadeluzoficial", active: false },
  ];
  



     const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => setIsOpen(!isOpen);

      const footerData = {
       products: ["Perguntas frequentes", "Entrega", "Garantia"],
       help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
       social: ["Facebook", "Instagram", "Twitter", "Whatsapp"  ],

 
  
};
  
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[1440px] relative">
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
                <a href="/contato" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Contato</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <SearchIcon className="w-5 h-5 cursor-pointer" />
                <ShoppingBagIcon className="w-5 h-5 cursor-pointer" />
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
                    <a href="/contato" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Contato</a>
                </nav>
            )}
        </header>


        {/* Hero Section */}
        <section className="flex w-full h-[534px]">
          <img
            className="w-[498px] h-[534px] object-cover"
            alt="Jewelry showcase"
            src="/image.png"
          />
          <div className="bg-[#212a2f] flex-1 flex items-center justify-center p-10">
            <div className="max-w-[572px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px] leading-normal">
              Quem disse que estilo não pode ter alma?
              <br /> Aqui, cada bijuteria é feita com intenção, pra te lembrar
              que você não precisa se encaixar — só se expressar.
              <br /> Escolha peças que contem a sua história, do seu jeitinho.
              <br />
              Porque o verdadeiro luxo é ser você mesma.
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="flex mt-10">
          {/* Filters */}
          <div className="w-[274px] ml-2 space-y-4">
            {/* Price Range Filter */}
            <div>
              <div className="w-full h-[37px] bg-[#393939] flex items-center px-4">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px]">
                  FAIXA DE PREÇO
                </h3>
              </div>
              <Card className="shadow-[0px_4px_4px_#00000040] rounded-none">
                <CardContent className="p-6 space-y-4">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={range.id}
                        className="w-[22px] h-[22px] rounded-none bg-[#393939]"
                      />
                      <label
                        htmlFor={range.id}
                        className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xs tracking-[1.56px]"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Model Filter */}
            <div>
              <div className="w-full h-[37px] bg-[#393939] flex items-center px-4">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px]">
                  MODELO
                </h3>
              </div>
              <Card className="shadow-[0px_4px_4px_#00000040] rounded-none">
                <CardContent className="p-6 space-y-4">
                  {modelTypes.map((model) => (
                    <div key={model.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={model.id}
                        className="w-[22px] h-[22px] rounded-none bg-[#393939]"
                      />
                      <label
                        htmlFor={model.id}
                        className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xs tracking-[1.56px]"
                      >
                        {model.label}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Catalog Header */}
          <div className="flex-1 pl-8">
            <div className="w-[274px] h-[37px] bg-[#393939] flex items-center justify-center mb-8">
              <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-[11px] tracking-[1.43px]">
                CATÁLOGO
              </h3>
            </div>

            {/* Products Grid */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {products.map((product) => (
    <Card
      key={product.id}
      className="w-[297px] h-[393px] bg-gradient-to-b from-[#f8f0e8] to-[#f4e4cf] shadow-lg rounded-xl border border-[#bf8c50] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#f4e4cf] hover:to-[#f8f0e8] hover:z-10"
    >
      <CardContent className="p-0">
        <div className="flex flex-col items-center">
          <img
            className="w-[241px] h-[209px] mt-[30px] object-cover rounded-lg border border-[#bf8c50] shadow-md"
            alt={product.description}
            src={product.image}
          />
          <div className="w-[242px] mt-6 font-['Montserrat',Helvetica] font-semibold text-[#5e3a2d] text-base tracking-[2.08px] leading-normal text-center">
            {product.description}
          </div>
          <div className="mt-auto mb-5 self-start ml-[27px] font-['Montserrat',Helvetica] font-medium text-[#bf8c50] text-base tracking-[2.08px]">
            {product.price}
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>


   


            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="w-[337px] h-16 bg-[#d6ad6033] rounded-[10px] flex items-center justify-between px-8">
                <img
                  className="w-[35px] h-[35px] object-cover transform rotate-180 cursor-pointer"
                  alt="Página anterior"
                  src="/icons8-seta-direita-48-2.png"
                />
                <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#4a3f35] text-lg">
                  1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
                </div>
                <img
                  className="w-[35px] h-[35px] object-cover cursor-pointer"
                  alt="Próxima página"
                  src="/icons8-seta-direita-48-2.png"
                />
              </div>
            </div>
          </div>
        </section>

    {/* Footer */}
<footer className="w-full bg-[#2a2a2a] text-white px-[20px] sm:px-[40px] lg:px-[179px] pt-[87px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Produtos
      </h3>
      <ul className="space-y-[27px]">
        {["Pulseiras", "Colares", "Brincos"].map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={`/${item.toLowerCase()}`} className="hover:text-[#bf8c50] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Ajuda
      </h3>
      <ul className="space-y-[27px]">
        {["Formas de pagamento", "Perguntas frequentes", "Reclame aqui"].map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-[#bf8c50] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Social
      </h3>
      <ul className="space-y-[27px]">
        {navItems2.map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#bf8c50] transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="text-center">
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Formas de pagamento
      </h3>
      <a href="/formas-de-pagamento">
        <img
          className="w-56 h-[60px] mx-auto object-cover"
          alt="Payment methods"
          src="/image-77.png"
        />
      </a>
    </div>
  </div>

  <div className="my-[30px] bg-[#d9d9d9] h-[1px]"></div>

  <p className="font-['Montserrat',Helvetica] font-normal text-[11px] text-center">
    <a href="/" className="hover:text-[#bf8c50] transition-colors">
      ROSA DE LUZ Comércio LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo
    </a>
  </p>
</footer>

      </div>
    </div>
  );
};
