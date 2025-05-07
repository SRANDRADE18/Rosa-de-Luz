import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

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

// Footer links data
const footerData = {
  products: ["Perguntas frequentes", "Entrega", "Garantia"],
  help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
  social: ["Facebook", "Instagram", "Twitter", "Whatsapp"],
};

export const Template = (): JSX.Element => {
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[100%] relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-7 h-[84px] relative">
          <img
            className="w-[70px] h-[70px] object-cover"
            alt="Rosa de Luz Logo"
            src="/image-8.png"
          />

          <div className="flex items-center space-x-6">
            <div className="font-['Montserrat',Helvetica] font-medium text-[#c30000] text-[13px] tracking-[1.69px]">
              Home
            </div>
            <div className="font-['Montserrat',Helvetica] font-medium text-black text-[13px] tracking-[1.69px]">
              Comprar
            </div>
            <div className="font-['Montserrat',Helvetica] font-medium text-black text-[13px] tracking-[1.69px]">
              <a href="/sobre"> Sobre </a> 
            </div>
            <div className="font-['Montserrat',Helvetica] font-medium text-black text-[13px] tracking-[1.69px]">
              Contato
            </div>
            <div className="flex items-center space-x-4 ml-6">
              <SearchIcon className="w-5 h-5" />
              <ShoppingBagIcon className="w-5 h-5" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="w-full h-[15%] flex">
          <div className="relative w-1/2 h-full">
            <img
              className="w-full h-full object-cover"
              alt="Jewelry showcase left"
              src="/image-2.png"
            />
          </div>
          <div className="relative w-1/2 h-full">
            <img
              className="w-full h-full object-cover"
              alt="Jewelry showcase right"
              src="/image-3.png"
            />
          </div>
          <div className="absolute top-[327px] left-1/2 transform -translate-x-1/2 w-[404px] text-center">
            <div className="relative w-[400px]">
              <div className="font-['Montserrat',Helvetica] font-medium text-white text-[32px] tracking-[4.16px] whitespace-nowrap">
                R
                <span className="[text-shadow:0px_4px_4px_#00000040] font-['Dancing_Script',Helvetica] font-normal text-[#f2eb1d] text-[50px] tracking-[6.50px]">
                  o
                </span>
                SA DE LUZ
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="w-full px-[10%] py-[10%]">
          <div className="grid grid-cols-3 gap-6">
            {productData.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                className="w-[300px] h-[400px] bg-[#bf8c5017] shadow-[0px_4px_10px_#00000040]"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <img
                    className="w-[209px] h-[209px] mt-[29px] object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                  <div className="w-full px-7 mt-[37px]">
                    <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                      {product.title}
                    </p>
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
              </Card>
            ))}
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="w-full px-[1%] py-[5%]">
          <div className="grid grid-cols-4 gap-[47px]">
            {productData.slice(3, 7).map((product) => (
              <Card
                key={product.id}
                className="w-[297px] h-[393px] bg-[#bf8c5033] shadow-[0px_4px_10px_#00000040]"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <img
                    className="w-[241px] h-[209px] mt-[30px] object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                  <div className="w-full px-7 mt-[15px]">
                    <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                      {product.title}
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-medium text-black text-base text-center tracking-[2.08px] mt-[20px]">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section className="w-full h-[10%] flex">
          <div className="w-[699px] h-full bg-[#dfb68880] flex flex-col items-center justify-center px-[54px]">
            <p className="font-['Montserrat',Helvetica] font-medium text-black text-xl text-center tracking-[2.60px]">
              Em um mundo onde a elegância encontra a arte,
              nossa&nbsp;&nbsp;surge como uma luz cintilante, oferecendo uma
              experiência verdadeiramente única para os amantes de Bijuterias
              Personalizadas
            </p>
            <Button className="mt-[55px] w-[185px] h-16 bg-[#d9d9d9ad] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
              COMPRE JÁ
            </Button>
          </div>
          <div className="w-[741px] h-full">
            <img
              className="w-full h-full object-cover"
              alt="Jewelry showcase"
              src="/image.png"
            />
          </div>
        </section>

        {/* Featured Collection */}
        <section className="w-full h-[697px] bg-[url(/conceito-de-moda-e-beleza-mulher-elegante-com-vestido-preto-de-l.png)] bg-cover bg-center flex items-center justify-end pr-[55px]">
          <div className="grid grid-cols-2 gap-[72px]">
            {productData.slice(4, 6).map((product) => (
              <Card
                key={product.id}
                className="w-[297px] h-[393px] bg-[#ffffff17] shadow-[0px_4px_10px_#00000040]"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <img
                    className="w-[241px] h-[209px] mt-[30px] object-cover"
                    alt={product.title}
                    src={product.image}
                  />
                  <div className="w-full px-7 mt-[46px]">
                    <p className="font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                      {product.title}
                    </p>
                    <p className="font-['Montserrat',Helvetica] font-medium text-black text-base text-center tracking-[2.08px] mt-[20px]">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personalization CTA */}
        <section className="w-full h-[364px] bg-[#fff9f4] flex flex-col items-center justify-center">
          <p className="w-[604px] font-['Inter',Helvetica] font-medium text-[#5e3a2d] text-xl text-center tracking-[0]">
            Dê vida à sua visão de uma bijuteria perfeita. Deixe sua marca e
            conte sua história através de designs exclusivos. Clique abaixo para
            começar a transformar sua imaginação em realidade.
          </p>
          <Button className="mt-[50px] w-[216px] h-16 bg-[#d9b08c] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
            PERSONALIZE JÁ
          </Button>
        </section>

        {/* About Section */}
        <section className="w-full h-[] bg-white flex">
          <div className="w-[805px] h-full flex flex-col items-center justify-center px-[139px]">
            <p className="w-[565px] font-['Montserrat',Helvetica] font-medium text-black text-xl tracking-[0]">
              Você já parou para pensar no impacto das suas escolhas? Escolher
              uma bijuteria feita com carinho e propósito é um gesto de
              consciência e conexão. Conheça o universo da ROSA DE LUZ e
              descubra como estilo e sustentabilidade caminham juntos.
            </p>
            <Button className="mt-[50px] w-[216px] h-16 bg-[#d9b08cad] rounded-[15px] font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
              SAIBA MAIS
            </Button>
          </div>
          <div className="w-[100%] h-full">
            <img
              className="w-full h-full object-cover"
              alt="About section image"
              src="/fundo.png"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full h-[314px] bg-[#2a2a2a] text-white px-[179px] pt-[87px]">
          <div className="flex justify-between">
            <div>
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
                Produtos
              </h3>
              <ul className="space-y-[27px]">
                {footerData.products.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
                Ajuda
              </h3>
              <ul className="space-y-[27px]">
                {footerData.help.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
                Social
              </h3>
              <ul className="space-y-[26px]">
                {footerData.social.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
                Formas de pagamento
              </h3>
              <img
                className="w-56 h-[60px] mx-auto object-cover"
                alt="Payment methods"
                src="/image-77.png"
              />
            </div>
          </div>

          <Separator className="bg-[#d9d9d9] my-[30px]" />

          <p className="font-['Montserrat',Helvetica] font-normal text-[11px] text-center">
            ROSA DE LUZ Comércio LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP
            04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro,
            São Paulo
          </p>
        </footer>
      </div>
    </div>
  );
};
