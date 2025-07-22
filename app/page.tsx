
'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-green-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/22fdf49a419ca265aa6d0e909078d07e/6a92180cb7b2b74d2dc31a91ac086849.jfif"
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300"> Entrega Imediata</span>
              <span className="text-sm text-gray-300"> Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-green-900 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="relative container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme sua Vida e Carreira com Nossos
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">eBooks Exclusivos!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Descubra os segredos para ter sucesso pessoal e profissional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-lg">
              <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-green-400 mr-2"></i>
              Garantia de 7 dias
            </div>
            <div className="flex items-center text-lg">
              <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-purple-400 mr-2"></i>
              Entrega imediata por e-mail
            </div>
          </div>
        </div>
      </section>

      {/* Individual eBooks Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Escolha Seu Caminho para o <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">Sucesso</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* eBook 1 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
              <div className="mb-6">
                <img 
                  src="https://static.readdy.ai/image/22fdf49a419ca265aa6d0e909078d07e/e1904a51cbedd566fedfccd24d387286.jfif"
                  alt="Desperte Seu Poder"
                  className="w-48 h-60 object-cover rounded-lg mx-auto shadow-lg object-top"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Desperte Seu Poder
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Como mudar de vida, ganhar mais dinheiro e recuperar sua autoestima
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Técnicas comprovadas para aumentar autoestima</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Estratégias para transformar sua mentalidade</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Métodos práticos para aumentar renda</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Exercícios de desenvolvimento pessoal</span>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-400">R$ 14,99</span>
                </div>
                <a 
                  href="https://pay.kirvano.com/1f38cc75-22d1-4b96-b079-e3167352e597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-full transition-all whitespace-nowrap cursor-pointer inline-block text-center shadow-lg"
                >
                  <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
                  Comprar Agora
                </a>
              </div>
            </div>

            {/* eBook 2 */}
            <div className="bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
              <div className="mb-6">
                <img 
                  src="https://static.readdy.ai/image/22fdf49a419ca265aa6d0e909078d07e/3a9ec7e845179362e35a594a0dbd6168.jfif"
                  alt="Marketing Digital para Iniciantes"
                  className="w-48 h-60 object-cover rounded-lg mx-auto shadow-lg object-top"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Marketing Digital para Iniciantes
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Guia completo do zero ao avançado
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Fundamentos do marketing digital</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Estratégias para redes sociais</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Técnicas de SEO e tráfego pago</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Como criar campanhas eficazes</span>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-400">R$ 19,99</span>
                </div>
                <a 
                  href="https://pay.kirvano.com/7d8e6505-053f-459d-a5a5-83e6e98edf73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-full transition-all whitespace-nowrap cursor-pointer inline-block text-center shadow-lg"
                >
                  <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Combo Offer */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 via-purple-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              OFERTA ESPECIAL - TEMPO LIMITADO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Dupla Virada
            </h2>
            <p className="text-xl text-gray-100">
              Adquira os dois eBooks e economize R$ 4,99!
            </p>
          </div>
          
          <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">O que você vai receber:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="ri-book-line w-5 h-5 flex items-center justify-center text-purple-400 mr-3 mt-1"></i>
                    <span className="text-gray-300">eBook "Desperte Seu Poder"</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-book-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-1"></i>
                    <span className="text-gray-300">eBook "Marketing Digital para Iniciantes"</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-gift-line w-5 h-5 flex items-center justify-center text-yellow-400 mr-3 mt-1"></i>
                    <span className="text-gray-300 font-semibold">BÔNUS: Planner Digital Exclusivo</span>
                  </li>
                </ul>
                
                <div className="text-center mb-6">
                  <div className="text-lg text-gray-400 line-through mb-2">De R$ 34,98</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">R$ 29,99</div>
                  <div className="text-sm text-gray-300">Economia de R$ 4,99</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="https://static.readdy.ai/image/22fdf49a419ca265aa6d0e909078d07e/4ed0f08a7b816194ecf6b84930f7b882.jfif"
                    alt="Dupla Virada - Combo Completo"
                    className="w-64 h-80 object-cover rounded-lg mx-auto shadow-2xl object-top"
                  />
                </div>
                
                <a 
                  href="https://pay.kirvano.com/104ac24c-a0ea-4ef1-8229-13eb8895b522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white font-bold py-6 px-8 rounded-full text-xl transition-all shadow-lg whitespace-nowrap cursor-pointer inline-block text-center"
                >
                  <i className="ri-fire-line w-6 h-6 flex items-center justify-center mr-3 inline-block"></i>
                  QUERO O COMBO AGORA!
                </a>
                
                <div className="mt-4 text-sm text-gray-300">
                  <i className="ri-secure-payment-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>
                  Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line w-10 h-10 flex items-center justify-center text-white"></i>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">
              Garantia de 7 Dias
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem complicações.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-download-line w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="font-semibold text-white">Entrega Imediata</h4>
                <p className="text-sm text-gray-400">Receba em seu e-mail em até 5 minutos</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-file-pdf-line w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="font-semibold text-white">Formato PDF</h4>
                <p className="text-sm text-gray-400">Leia em qualquer dispositivo</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-customer-service-line w-6 h-6 flex items-center justify-center text-white"></i>
                </div>
                <h4 className="font-semibold text-white">Suporte Total</h4>
                <p className="text-sm text-gray-400">Atendimento especializado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-green-400">Formas de Pagamento</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-smartphone-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">PIX (Aprovação Instantânea)</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-bank-card-line w-5 h-5 flex items-center justify-center text-purple-400 mr-3"></i>
                  <span className="text-gray-300">Cartão de Crédito</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-file-text-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">Boleto Bancário</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-400">Suporte</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-purple-400 mr-3"></i>
                  <span className="text-gray-300">yurysmartins@hotmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">WhatsApp: (21) 96494-4905</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">Seg a Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-green-400">Segurança</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">Compra 100% Segura</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-lock-line w-5 h-5 flex items-center justify-center text-purple-400 mr-3"></i>
                  <span className="text-gray-300">Dados Criptografados</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-award-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                  <span className="text-gray-300">Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              2024 Todos os direitos reservados. Plataforma segura para vendas digitais.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
