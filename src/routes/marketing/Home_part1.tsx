import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { products, testimonials, capabilities, trustLogos, problems, solutions, comparisonData, howItWorks, brandyFeatures, teamMembers } from '../../data/products'
import { CheckIcon, ArrowRightIcon } from 'lucide-react'
import { getAssetUrl } from '../../lib/storageUtils'
import { 
  siCanva, 
  siOpenai, 
  siGmail, 
  siGithubcopilot, 
  siTiktok, 
  siInstagram, 
  siMeta, 
  siWhatsapp, 
  siGooglegemini,
  siMessenger,
  siCheckmarx,
  siIcloud,
  siOpenai as siBrain,
  siCashapp
} from 'simple-icons'
import { Smartphone, Brain, Bot, Calendar, MessageCircle, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/what_is.mp4" type="video/mp4" />
        </video>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 px-4 py-8">
          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[0.9] tracking-tight">
              Tu marca con vida propia.
              <br />
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Literal.</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
              Brandy es el primer asistente inteligente que se convierte en tu negocio. Sí, es tu marca: responde como tú, crea como tú, habla como tú.
            </p>
            <p className="text-base md:text-lg text-white font-medium">
              No es un bot, es tu nueva cabeza creativa, social y publicitaria.
            </p>
          </div>
          
          {/* Quote highlight */}
          <div className="mb-12">
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-cyan-500/20">
              <p className="text-lg md:text-xl text-cyan-400 italic font-medium">
                "Hola, soy El Torito. ¿Subimos un post para la promo de los viernes?"
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-base md:text-lg px-8 py-4 hover-lift">
              <span className="mr-2">👉</span>
              Empezar con Brandy
            </button>
            <button className="btn-secondary text-base md:text-lg px-8 py-4 hover-lift">
              <span className="mr-2">🚀</span>
              Ver cómo funciona
            </button>
          </div>
          
          {/* Integrations Section */}
          <div className="mt-20 pt-8">
            <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">Conecta tus Apps con tu Marca</p>
            <div className="bg-gradient-to-r from-gray-100/10 to-gray-200/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/20 shadow-inner">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siCanva.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siOpenai.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siGmail.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                     <path d={siGithubcopilot.path} />
                   </svg>
                 </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siTiktok.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siInstagram.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siMeta.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siWhatsapp.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siGooglegemini.path} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* 2. What Brandy Does - Complete Team */}
      <section className="py-32 relative" style={{
        backgroundImage: `url(https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/hero-background.gif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="container-custom relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">💡</span> ¿Qué hace Brandy?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Imagina esto:
            </p>
          </div>
          
          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Tu restaurante necesita ideas para levantar las ventas esta semana. Tu negocio te sugiere una promo irresistible en segundos
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace1.png" 
                  alt="Promociones" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Le mandas una foto de tu plato estrella. En un parpadeo, te devuelve un flyer listo para publicar en Instagram
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace2.png" 
                  alt="Foto a flyer" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Un cliente escribe por DM preguntando por la carta. Tu negocio responde al instante, con el tono y estilo de tu marca
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace3.png" 
                  alt="Respuestas instantáneas" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Quieres lanzar una campaña de anuncios. Tu negocio ya está armando los textos, el diseño y hasta el presupuesto
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace4.png" 
                  alt="Anuncios automáticos" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Team Section Header */}
          <div className="text-center mb-16 bg-black rounded-2xl p-8 border border-cyan-500/20 relative">
            <img 
              src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
              alt="Brandy Logo" 
              className="absolute top-4 left-4 w-8 h-8"
            />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">🤖</span> ¿Quién es quién?
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Brandy App no es solo un asistente. Es tu equipo completo, siempre disponible, sin sueldos, sin vacaciones, y sin que tengas que explicarle dos veces.
            </p>
          </div>
          
          {/* Team cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {/* Brand Agent */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Brand Agent (sí, Brandy mismo)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Es quien habla como tu negocio. Toma su nombre, su personalidad y su tono. Recibe tus ideas, te propone promociones, redacta posts y coordina con el resto del team. Es tu voz, pero con superpoderes.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien1.png" 
                  alt="Brand Agent" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Creative Director */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Creative Director (el/la seco/a del diseño)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Le mandas una foto y te devuelve un flyer listo para subir. Usa uno de los 5 templates de marca y adapta el diseño a tu estilo. No necesitas saber de diseño, él/ella lo hace todo por ti.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien2.png" 
                  alt="Creative Director" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Community Manager */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Community Manager & PR
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Atiende los mensajes que llegan por redes sociales, como si fuera un humano. Responde dudas, envía promos, arma listas y guarda todo en tu base de datos. Siempre activo, siempre amable, siempre en tu idioma.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien3.png" 
                  alt="Community Manager" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Trafficker */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Trafficker (el ninja de los anuncios)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  (Muy pronto…) Lanza y optimiza campañas publicitarias por ti. Se conecta con Meta y Google, ajusta presupuestos y te muestra resultados sin que tengas que meterte a un panel. El ROI en piloto automático.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien4.png" 
                  alt="Trafficker" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-cyan-500/20">
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Todo eso, <strong className="text-white">sin agencias, sin briefings, sin dolores de cabeza.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>