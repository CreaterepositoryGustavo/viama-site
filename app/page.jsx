'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plane, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Star, Instagram } from "lucide-react";
import Image from "next/image";

// === Carrusel: imágenes ===
const slides = [
  "/slide1.jpg", // tu foto tropical (colocada en /public/slide1.jpg)
  "/slide2.jpg", // tu foto del globo (colocada en /public/slide2.jpg)
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1920&auto=format&fit=crop", // montaña/lago (Unsplash)
];

const PhoneLink = "https://wa.me/5493412715621?text=Hola%20Viama%2C%20quiero%20una%20cotizaci%C3%B3n%20desde%20la%20web";
const instagramLink = "https://instagram.com/viama.viajes";

export default function Page() {
    // Estado y temporizador del carrusel
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 6000); // cambia cada 6s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      {/* NAVBAR */}
<header className="sticky top-0 z-50 bg-transparent border-b border-sky-200">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
    <a href="#inicio" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Viama Viajes y Turismo"
        width={160}   // ← solo agrandamos el logo
        height={160}
        priority
      />
    </a>

    {/* Menú: NO lo tocamos */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-sky-800">
      <a href="#servicios" className="hover:text-sky-600">Servicios</a>
      <a href="#destinos" className="hover:text-sky-600">Destinos</a>
      <a href="#nosotros" className="hover:text-sky-600">Nosotros</a>
      <a href="#testimonios" className="hover:text-sky-600">Opiniones</a>
      <a href="#contacto" className="hover:text-sky-600">Contacto</a>
    </nav>

    {/* Botón: NO lo tocamos */}
    <div className="hidden md:flex items-center gap-3">
      <a href="#contacto">
        <Button className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white">
          Pedí tu cotización
        </Button>
      </a>
    </div>
  </div>
</header>

      {/* HERO con carrusel (fade entre imágenes) */}
<section id="inicio" className="relative overflow-hidden">
  <div className="relative h-[72vh] md:h-[78vh]">
    {/* Slides como fondo con fade */}
    {slides.map((src, i) => (
      <img
        key={src}
        src={src}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
        decoding="async"
        loading={i === 0 ? 'eager' : 'lazy'}
      />
    ))}

   
    {/* Texto y botones encima (mismo contenido que venías usando) */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center h-full text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
      <div className="self-center">
        + <span className="inline-block mb-4 rounded-full px-3 py-1 bg-white/25 text-white border border-white/40 text-sm">
          Te ayudamos a vivir experiencias
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Viajar bien es viajar <span className="text-sky-600">con nosotros</span>
        </h1>
        <p className="text-white/95 mb-6 max-w-prose">
          En Viama Viajes y Turismo trabajamos con reservas seguras, asesoramiento real y
          acompañamiento antes, durante y después de tu viaje. Atención personalizada y
          propuestas a medida.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contacto">
            <Button size="lg" className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white">
              Quiero mi propuesta <span className="ml-2">→</span>
            </Button>
          </a>
          <a href="#servicios">
            <Button variant="outline" size="lg" className="rounded-2xl border-white text-white hover:bg-white/10">
              Ver servicios
            </Button>
          </a>
          <a
            href="https://wa.me/5493412715621?text=Hola%20Viama%2C%20quiero%20una%20cotizaci%C3%B3n%20desde%20la%20web"
            target="_blank"
            rel="noreferrer"
          >
            + <Button variant="outline" size="lg" className="rounded-2xl border-white text-white hover:bg-white/10">
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      <section id="servicios" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-800">Servicios</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Asesoramiento integral para que viajes con claridad y sin sorpresas.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title: "Paquetes y vuelos", desc: "Combinamos aerolíneas y hoteles para optimizar precio y comodidad."},
              {title: "All Inclusive & Resorts", desc: "Opciones curadas para familias, parejas y grupos."},
              {title: "Seguros y asistencia", desc: "Coberturas completas y soporte en tu idioma las 24 hs."},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-sky-100 bg-white/90 shadow-sm p-5">
                <h3 className="font-semibold text-lg flex items-center gap-2"><Plane className="h-5 w-5"/> {s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinos" className="py-16 bg-sky-50/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-800">Destinos destacados</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Inspirate con estas ideas y pedinos un plan a medida.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:"Caribe", img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop"},
              {title:"Europa clásica", img:"https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop"},
              {title:"Patagonia", img:"https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop"},
            ].map((d,i)=> (
              <div key={i} className="overflow-hidden rounded-2xl bg-white/90 border shadow-sm">
                <div className="aspect-[4/3]">
                  <img src={d.img} alt={d.title} className="h-full w-full object-cover"/>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-semibold">{d.title}</h3>
                  <a href="#contacto" className="text-sm inline-flex items-center gap-1 hover:underline text-sky-700">Consultar <ArrowRight className="h-4 w-4"/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-16">
        <div className="max-w-6xl mx_auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-800">Quiénes somos</h2>
            <p className="text-gray-600 mb-4">Más de 10 años conectando viajeros con experiencias memorables. Trabajamos con proveedores verificados y priorizamos la transparencia en todo el proceso de compra.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 mt-1"/> Atención humana y cercana.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 mt-1"/> Opciones claras y comparables, vos decidís.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 mt-1"/> Acompañamiento durante el viaje por Phone.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-16 bg-sky-50/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-800">Qué dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Excelente asesoramiento y el mejor precio que encontramos.", "Nos resolvieron un cambio de vuelo en minutos, súper contención.", "La luna de miel salió perfecta, 100% recomendables."].map((t,i)=> (
              <div key={i} className="rounded-2xl bg-white/90 border shadow-sm p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="h-4 w-4" />))}
                </div>
                <p className="text-gray-700">“{t}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-800">Contacto</h2>
            <p className="text-gray-600 mb-6">Contanos tu idea y te enviamos una propuesta en menos de 24 horas hábiles.</p>
            <div className="space-y-3 text-gray-700">
              <p className="inline-flex items-center gap-2"><Phone className="h-5 w-5"/> +54 9 341 271 5621 (Phone)</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-5 w-5"/> contacto@viamaviajes.com.ar</p>
              <p className="inline-flex items-center gap-2"><MapPin className="h-5 w-5"/> Gruning Rosas 9124 - Rosario - Santa Fe - Argentina</p>
              <p className="inline-flex items-center gap-2"><Instagram className="h-5 w-5"/> <a href={instagramLink} target="_blank" rel="noreferrer" className="underline">@viama.viajes</a></p>
              <div className="pt-2">
                <a href={PhoneLink} target="_blank" rel="noreferrer">
                  <Button className="rounded-2xl inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"><Phone className="h-4 w-4"/> Escribinos por Phone</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/90 border shadow-sm p-5">
            <h3 className="font-semibold text-lg">Pedí tu cotización</h3>
            <div className="grid gap-4 mt-4">
              <Input placeholder="Nombre y apellido"/>
              <Input type="email" placeholder="Correo"/>
              <Input placeholder="Destino o idea de viaje"/>
              <Textarea placeholder="Contanos fechas, cantidad de personas y preferencias" rows={5}/>
              <Button className="rounded-2xl bg-sky-600 hover:bg-sky-700 text-white">Enviar consulta</Button>
              <p className="text-xs text-gray-500">Al enviar aceptás ser contactad@ por nuestro equipo comercial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">¿Listo para planear tu próximo viaje?</h3>
              <p className="text-white/90">Te guiamos paso a paso para que disfrutes desde el momento cero.</p>
            </div>
            <a href="#contacto"><Button className="rounded-2xl bg-white text-sky-700">Empezar ahora</Button></a>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p>© {new Date().getFullYear()} Viama Viajes y Turismo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#nosotros" className="hover:underline">Nosotros</a>
            <a href="#servicios" className="hover:underline">Servicios</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
