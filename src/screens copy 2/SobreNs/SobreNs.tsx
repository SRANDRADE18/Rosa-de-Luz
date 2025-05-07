import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "/image-1.png",
    title: "Pulseiras Personalizadas",
    alt: "Pulseiras Personalizadas",
  },
  {
    id: 2,
    image: "/image-2.png",
    title: "Colares personalizados",
    alt: "Colares personalizados",
  },
  {
    id: 3,
    image: "/image-3.png",
    title: "Brincos Folhas de Perolas",
    alt: "Brincos Folhas de Perolas",
  },
];

// Navigation items
const navItems = [
  { name: "Home", href: "/", active: true },
  { name: "Comprar", href: "#", active: false },
  { name: "Sobre", href: "#", active: false },
  { name: "Contato", href: "#", active: false },
];
const navItems2 = [
  { name: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=5511992560217&text&type=phone_number&app_absent=0", active: false },
  { name: "Instagram", href: "https://www.instagram.com/rosadeluzoficial/", active: false },
  { name: "Facebook", href: "https://www.facebook.com/rosadeluzoficial", active: false },
];

const footerSections = {
  products: ["Perguntas frequentes", "Entrega", "Garantia"],
  help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
  social: navItems2.filter(item =>
    ["Whatsapp", "Instagram", "Facebook"].includes(item.name)
  ),
};


export const SobreNs = (): JSX.Element => {
  return (
    <div
      className="bg-neutral-100 flex flex-row justify-center w-full"
      data-model-id="192:151"
    >
      <div className="bg-neutral-100 overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-10 py-2.5">
          <img
            className="w-[70px] h-[70px] object-cover"
            alt="Logo"
            src="/image-303.png"
          />

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-[13px] tracking-[1.69px] ${
                  item.active ? "text-[#c30000]" : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center ml-6 space-x-6">
              <img
                className="w-5 h-5 object-cover"
                alt="Pesquisar"
                src="/icons8-pesquisar-50-2.png"
              />
              <img
                className="w-5 h-5 object-cover"
                alt="Sacola de compras"
                src="/icons8-sacola-de-compras-50-2.png"
              />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full h-[961px]">
          <div className="absolute w-full h-[688px] top-0 left-0 bg-[#dfb688]" />
          <div className="absolute w-full h-[860px] top-0 left-0 bg-[url(/fundo02.png)] bg-cover bg-[50%_50%]">
            <div className="absolute bottom-8 left-10 flex items-center space-x-12">
              <div className="w-[163px] h-[54px]">
              <Button className="w-48 h-[54px] bg-[#d9d9d9] rounded-[5px] hover:bg-[#c4c4c4]">
                <span className="font-['Montserrat',Helvetica] font-semibold text-black text-sm tracking-[1.82px]">
                SOBRE NÓS
                </span>
              </Button>    
              </div>

              <Button className="w-48 h-[54px] bg-[#d9d9d9] rounded-[5px] hover:bg-[#c4c4c4]">
                <span className="font-['Montserrat',Helvetica] font-semibold text-black text-sm tracking-[1.82px]">
                  INSCREVA-SE JÁ
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="flex justify-center mt-14 mb-14">
          <div className="grid grid-cols-3 gap-[54px] w-[991px]">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-[297px] h-[393px] bg-[#ffffff17] shadow-[0px_4px_10px_#00000040]"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <img
                    className="w-[209px] h-[209px] mt-[29px] object-cover"
                    alt={product.alt}
                    src={product.image}
                  />
                  <h3 className="mt-9 font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                    {product.title}
                  </h3>
                  <div className="mt-6 w-[237px] h-[43px] bg-[#ffffff17] shadow-[0px_4px_10px_#00000040] flex items-center justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className="w-8 h-[26px]"
                        alt="Star rating"
                        src="/vector.svg"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 px-6 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Veja como usar</h2>
    <p className="text-gray-600 mt-4">Inspire-se com combinações reais e cheias de estilo feitas com nossas peças.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Example looks */}
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look2.jpeg" alt="Look 1 com colar personalizado" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Pulseira + Relógio: A Combinação Perfeita
        Unindo funcionalidade e elegância em um só look.</h3>
        <p className="text-gray-500 text-sm mt-2">Ideal para dias ensolarados ou passeios ao ar livre.</p>
      </div>
    </div>

    
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look3.jpeg" alt="Look 2 com pulseiras" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Anel + Brincos: Detalhes que Encantam
        Elegância em cada traço, brilho em cada olhar.</h3>
        <p className="text-gray-500 text-sm mt-2">Destaque nos pequenos detalhes. Combine com looks básicos.</p>
      </div>
    </div>

    
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look4.jpeg" alt="Look 3 com brincos de pérolas" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Pulseira + Colar: Elegância Natural
        Conecte-se com sua essência através da leveza e do brilho.</h3>
        <p className="text-gray-500 text-sm mt-2">Toque final para eventos especiais ou dia a dia elegante.</p>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="w-full h-[314px] bg-[#2a2a2a] text-white">
          <div className="max-w-[1440px] mx-auto px-[179px] pt-[78px] relative">
            {/* Products Section */}
            <div className="absolute left-[249px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
                Produtos
              </h3>
              <ul className="space-y-3">
                {footerSections.products.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div className="absolute left-[488px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
                Ajuda
              </h3>
              <ul className="space-y-3">
                {footerSections.help.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Section */}
            <div className="absolute left-[682px]">
  <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
    Social
  </h3>
  <ul className="space-y-3">
    {footerSections.social.map((item, index) => (
      <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>


            {/* Payment Methods */}
            <div className="absolute left-[867px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl text-center mb-4">
                Formas de pagamento
              </h3>
              <img
                className="w-56 h-[60px] object-cover"
                alt="Payment methods"
                src="/image-77.png"
              />
            </div>

            <Separator className="absolute w-[1100px] h-px top-[235px] bg-[#d9d9d9]" />

            {/* Copyright */}
            <div className="absolute w-[744px] top-[275px] left-[345px] font-['Montserrat',Helvetica] font-normal text-[11px] text-center">
              Rosa de Luz LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000.
              Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
