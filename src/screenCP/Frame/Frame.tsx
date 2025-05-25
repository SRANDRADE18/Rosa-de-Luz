import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components compra/ui/card";
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon  } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Frame = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => setIsOpen(!isOpen);



  const productDat = [
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
      image: "/image-10.png",
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

  // Product data
  const productData = {
    id: "BX001",
    title:
      "Pulseira Mística com Pedra Olho de Tigre e Pingentes Esotéricos – Força, Proteção e Estilo",
    availability: "Disponibilidade: Imediata",
    price: "R$ 35,90",
    dispo: "Disponibilidade Imediata",
    featured: "DESTAQUE",
    image: "/image.png",
    shortDescription:
      "Modelo de pulseira bem especial, porque representa muito do que eu creio",
    rating: 5,
    description: `Pulseira Mística com Pedra Olho de Tigre e Pingentes Esotéricos – Força, Proteção e Estilo\nDesperte sua força interior com essa pulseira artesanal feita com pedras naturais de Olho de Tigre, conhecidas por seu poder de proteção e coragem.\n🗡 Espada da Coragem – Para enfrentar desafios com determinação.\n✝ Cruz da Fé – Para guiar seus passos com confiança.\n🜁 Pentagrama da Harmonia – Para equilibrar corpo e mente.\n⚕ Caduceu da Cura – Para promover bem-estar e equilíbrio.\n✠ Cruz Templária – Símbolo de honra e bravura.\n∞ Símbolo do Infinito – Para lembrar que suas possibilidades são ilimitadas.\n🌌 Liberte seu verdadeiro potencial – leve essa pulseira com você para onde for.`,
  };

  const footerData = {
    products: ["Perguntas frequentes", "Entrega", "Garantia"],
    help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
    social: ["Facebook", "Instagram", "Twitter", "Whatsapp"],
  };

  const whatsappNumber = "5511978951764"; // Substitua pelo número do WhatsApp da loja
  const [protocolNumber, setProtocolNumber] = useState<string | null>(null);

  const generateProtocol = (productId: string) => {
    const protocol =
      productId +
      "-" +
      Date.now().toString().slice(-6) +
      "-" +
      uuidv4().slice(0, 4).toUpperCase();
    setProtocolNumber(protocol);
  };

  const handleCheckout = () => {
    if (!protocolNumber) generateProtocol(productData.id);
    const message = `Olá! Gostaria de finalizar meu pedido com os seguintes detalhes:%0A%0A🛒 *Produto*: ${productData.title}%0A💲 *Preço*: ${productData.price}%0A📄 *Descrição*: ${productData.shortDescription}%0A🔐 *Número do Protocolo*: ${protocolNumber}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[100%] relative">
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
  href="https://wa.me/5599999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  Contato
</a>
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

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-8 mt-8 px-4 md:px-16">
          <div className="flex flex-col md:w-1/2">
            <div className="w-[30px] mt-4 mx-auto md:ml-[31px] font-['Inter',Helvetica] text-black text-5xl text">
              {productData.dispo}
            </div>
            <Separator className="bg-[#d9d9d9] my-[30px]" />
            <div className="w-[30px] mt-4 mx-auto md:ml-[31px] font-['Inter',Helvetica] text-black text-5xl text-center">
              {productData.featured}
            </div>
            <div className="w-[330px] mt-8 mx-auto md:ml-0 font-['Inter',Helvetica] text-black text-6xl text-center">
              {productData.price}
            </div>
            <section className="w-full px-[10%] py-[10%]">
              <div>
                {productDat.slice(0, 1).map(() => (
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="w-full px-70 mt-[10px]">
                      <div className="w-[237px] h-[43px] mt-[8px] bg-white shadow-[0px_4px_10px_#00000040] flex items-center justify-start px-3.5 space-x-[14px]">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className="w-8 h-[26px]"
                            alt="Star rating"
                            src="/vector.svg"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                ))}
              </div>
            </section>
            <Button
              className="w-[504px] h-[116px] mt-16 mx-auto md:ml-[15px] bg-[#d6ad6059] rounded-[30px] hover:bg-[#d6ad60] transition-colors"
              onClick={handleCheckout}
            >
              <span className="[-webkit-text-stroke:2px_#d9d9d9] font-['Inter',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-normal">
                COMPRAR
              </span>
            </Button>
            {protocolNumber && (
              <p className="text-green-600 font-semibold text-center mt-4 text-2xl">
                Número do Protocolo: {protocolNumber}
              </p>
            )}
          </div>
          <Card className="md:w-1/2 bg-[#bf8c5033] shadow-[0px_4px_10px_#00000040] border-none mt-8 md:mt-0">
            <CardContent className="p-12">
              <img
                className="w-full max-w-[447px] h-auto mx-auto object-cover"
                alt="Pulseira Mística"
                src={productData.image}
              />
              <p className="mt-16 font-['Montserrat',Helvetica] font-medium text-black text-3xl tracking-[3.90px] leading-normal">
                {productData.shortDescription}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Description */}
        <Card className="mt-16 mx-4 md:mx-20 bg-white rounded-[40px] border-2 border-solid border-black">
          <CardContent className="p-6 md:p-8">
            <p className="font-['Baloo_Paaji_2',Helvetica] font-normal text-black text-[40px] whitespace-pre-line leading-normal">
              {productData.description}
            </p>
          </CardContent>
        </Card>

        <Separator className="bg-[#d9d9d9] my-[30px]" />

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
