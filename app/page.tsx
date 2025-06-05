"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Shield,
  Users,
  BarChart3,
  Star,
  Dumbbell,
  CreditCard,
  FileText,
  Clock,
  Smartphone,
  HeartHandshake,
  MousePointer,
  Gift,
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
    </svg>
  )
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="border-b backdrop-blur supports-[backdrop-filter]:bg-opacity-60 sticky top-0 z-50"
        style={{ backgroundColor: "rgba(7, 62, 48, 0.95)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="#" className="flex items-center space-x-3">
              <Image
                src="/team-reis-crown-logo.png"
                alt="Team Reis Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  color: "#c0ae76",
                  textTransform: "uppercase",
                }}
              >
                Team Reis
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Preços
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
              <Link
                href="https://www.instagram.com/bele_reisr?igsh=ZzNveG94Yzkxbm54&utm_source=qr"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </nav>

            {/* Mobile Menu Button - Positioned for right thumb accessibility */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Menu - Positioned for right thumb accessibility */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full right-4 left-4 bg-green-900 rounded-lg shadow-lg border border-green-700 py-4 px-6 space-y-4">
              <Link
                href="#features"
                className="block text-gray-300 hover:text-white transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#pricing"
                className="block text-gray-300 hover:text-white transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preços
              </Link>
              <Link
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors py-2 text-right"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="https://www.instagram.com/bele_reisr?igsh=ZzNveG94Yzkxbm54&utm_source=qr"
                target="_blank"
                className="flex items-center justify-end text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">Instagram</span>
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-20 lg:py-32 relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/new-hero-background.png')",
          backgroundColor: "#073e30", // fallback color
        }}
      >
        {/* Add overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h1
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  style={{
                    fontFamily: "'The Seasons Bold', 'Times New Roman', 'Georgia', 'Playfair Display', serif",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                    color: "#c0ae76",
                    textTransform: "uppercase",
                  }}
                >
                  Consultoria Online
                </h1>
                <p
                  className="text-2xl lg:text-3xl leading-relaxed"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.02em",
                    color: "#c0ae76",
                  }}
                >
                  Te ajudo a recuperar sua autoestima através de treinos personalizados.
                </p>
                <p
                  className="text-xl lg:text-2xl leading-relaxed"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Perca gordura, ganhe massa muscular e definição e melhore sua qualidade de vida.
                </p>
              </div>

              <div
                className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0 text-base lg:text-lg"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "300",
                  color: "white",
                }}
              >
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span>Treinos personalizados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span>Acompanhamento online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span>Resultados garantidos</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="https://wa.me/5511974285733"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-green-700 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transform"
                >
                  Quero saber mais
                </Link>
              </div>
            </div>

            {/* Coluna direita vazia para manter o layout de duas colunas */}
            <div className="relative h-full hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{ backgroundColor: "#b7d9c0" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Serviços Personalizados</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tudo o que você precisa para alcançar seus objetivos de forma eficiente e saudável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Avaliação Física</CardTitle>
                <CardDescription>
                  Análise detalhada do seu corpo para acompanhar seu progresso e otimizar resultados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Treino Personalizado</CardTitle>
                <CardDescription>
                  Planos de treino adaptados às suas necessidades, objetivos e limitações.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Suporte</CardTitle>
                <CardDescription>
                  Acompanhamento diário através do WhatsApp para que você possa tirar qualquer dúvida referente aos
                  treinos e em relação à execução dos exercícios.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Feedback</CardTitle>
                <CardDescription>
                  Acompanhamento contínuo para garantir que você esteja progredindo as cargas, se mantendo motivado e
                  cumprindo com a meta de treinos semanais.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Materiais bônus</CardTitle>
                <CardDescription>
                  Além da planilha de treino, você receberá materiais de apoio que irão te auxiliar a treinar da forma
                  mais eficiente.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Personal Trainer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Personal Trainer Bele Reis</h2>
            <p className="text-xl text-gray-600">sobre mim</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <Image
                  src="/isabele-graduation.jpg"
                  alt="Personal Trainer Bele Reis - Isabele em sua formatura na UNIFESP"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-lg mx-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-4 italic">
                Personal trainer registrada no Conselho Federal de Educação Física sob o número 177611-G/SP
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Prazer, eu sou <strong>Isabele</strong> — profissional de Educação Física graduada e pós-graduada pela
                  <strong> Universidade Federal de São Paulo (UNIFESP)</strong>, com foco em Fisiologia do Exercício
                  aplicada a Doenças Crônicas e Populações Especiais.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Há <strong>3 anos</strong> acompanho, presencialmente e on-line, centenas de alunos que buscam desde o
                  emagrecimento saudável até o ganho de força e disposição para o dia a dia.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Minha missão é criar treinos <strong>100% personalizados</strong>, baseados em evidências científicas,
                  que se encaixem no seu tempo, no seu espaço e nas suas metas — sem achismos, sem modismos e sem
                  fórmulas prontas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Graduada UNIFESP</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Pós-graduada</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">3+ anos experiência</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Centenas de alunos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passo a Passo Section */}
      <section className="py-20" style={{ backgroundColor: "#073e30" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", letterSpacing: "0.05em" }}
            >
              PASSO A PASSO
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#c0ae76", fontFamily: "'Montserrat', sans-serif" }}
            >
              PARA CONTRATAR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* First Row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">1. Escolha o plano</h3>
                <p className="text-gray-300 text-sm">
                  30, 90 ou 180 dias de acompanhamento.
                  <br />1 planilha para cada 30 dias.
                </p>
              </div>

              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">2. Faça o pagamento</h3>
                <p className="text-gray-300 text-sm">
                  Pague no pix ou no cartão de crédito
                  <br />
                  (acréscimo de juros) e parcele em até 6 vezes.
                </p>
              </div>

              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">3. Preencha o questionário</h3>
                <p className="text-gray-300 text-sm">
                  Após a confirmação do pagamento você
                  <br />
                  vai receber o questionário de avaliação física.
                </p>
              </div>
            </div>

            {/* Second Row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">4. Aguarde a planilha</h3>
                <p className="text-gray-300 text-sm">
                  Em até 7 dias após o recebimento das
                  <br />
                  suas respostas o seu treino estará pronto.
                </p>
              </div>

              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">5. Acesse o app</h3>
                <p className="text-gray-300 text-sm">
                  Enquanto aguarda a planilha ficar pronta
                  <br />
                  você já terá acesso a toda material disponível no app.
                </p>
              </div>

              <div className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#c0ae76" }}
                >
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">6. Conte com meu suporte</h3>
                <p className="text-gray-300 text-sm">
                  Estarei à sua disposição todos os dias
                  <br />
                  da semana para tirar dúvidas.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="https://wa.me/5511974285733"
                className="inline-flex items-center justify-center rounded-md px-12 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 transform"
                style={{
                  backgroundColor: "#c0ae76",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#a89660"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#c0ae76"
                }}
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformações Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Transformações Reais</h2>
            <p className="text-xl text-gray-600">Veja os resultados incríveis dos nossos alunos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Cliente 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/client1-before.png"
                    alt="Antes"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    ANTES
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/client1-after.png"
                    alt="Depois"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>

            {/* Cliente 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/client2-before.png"
                    alt="Antes"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    ANTES
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/client2-after.png"
                    alt="Depois"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>

            {/* Cliente 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/client3-before.png"
                    alt="Antes"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    ANTES
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/client3-after.png"
                    alt="Depois"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>

            {/* Cliente 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/client4-before.png"
                    alt="Antes"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    ANTES
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/client4-after.png"
                    alt="Depois"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>

            {/* Cliente 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/client5-before.png"
                    alt="Antes"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    ANTES
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/client5-after.png"
                    alt="Depois"
                    width={200}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    DEPOIS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Depoimentos de Alunos</h2>
            <p className="text-xl text-gray-600">Veja o que nossos alunos têm a dizer sobre os resultados</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Tá tudo perfeito! Tô amando me desafiar. Ir para a academia era 'chato' e agora tem sido algo
                  incrível, eu vou com prazer, tudo por conta de ter um treino adequado."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Evelyn Lopes"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Evelyn Lopes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Só elogios, essa consultoria foi um presente que me dei, e hoje estou vendo que foi uma ótima
                  escolha. Bele uma ótima profissional, tenho me surpreendido com os treinos e dedicação."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mônica Moura"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Mônica Moura</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Gostei muito dos treinos! Os exercícios encaixaram super bem e deu até mais ânimo para treinar.
                  Também amei o cardio. Essa divisão por minuto faz com que o tempo passe mais rápido e é muito bom ter
                  as velocidades certinhas indicadas. Graças a isso, me desafiei e estou correndo em uma velocidade que
                  nunca tinha corrido antes. O suporte pelo whats também foi excelente. Tive todas as dúvidas supridas e
                  correção dos exercícios."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Natália Alves"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Natália Alves</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Seu treino é incrível!!! Eu sei que teria resultados muito melhores se eu fosse treinasse com mais
                  dedicação e eu quero mt fazer isso ahahaha mas ainda assim os resultados tem sido mto bons ❤️"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Vitória Malves"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Vitória Malves</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Planos e Preços</h2>
            <p className="text-xl text-gray-600">Escolha o plano que melhor se adapta às suas necessidades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Mensal</CardTitle>
                <CardDescription>Ideal para experimentar</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$149,90</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Treino personalizado</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Suporte por WhatsApp</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Avaliação inicial</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Feedbacks semanais</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 relative hover:border-green-600 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Trimestral</CardTitle>
                <CardDescription>Melhor para resultados</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$427,21</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Tudo do plano mensal</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Avaliações mensais</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Ajustes de treino</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Desconto de 5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Semestral</CardTitle>
                <CardDescription>Para compromisso total</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$809,46</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Tudo do plano trimestral</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Desconto de 10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#b7d9c0" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Pronto para Transformar seu Corpo?</h2>
            <p className="text-xl text-gray-700">
              Junte-se a centenas de alunos que já transformaram seus corpos e suas vidas com a Team Reis. Entre em
              contato hoje e comece sua jornada para uma vida mais saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5500000000000"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-8 py-6 text-lg font-medium text-white shadow transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                Fale pelo WhatsApp
              </Link>
            </div>
            <p className="text-sm text-gray-700">Resposta em até 24 horas</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/team-reis-crown-logo.png"
                  alt="Team Reis Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    color: "#c0ae76",
                    textTransform: "uppercase",
                  }}
                >
                  Team Reis
                </span>
              </div>
              <p className="text-gray-400">
                Transforme seu corpo e sua vida com treinos personalizados e acompanhamento especializado.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://wa.me/5511974285733"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/bele_reisr?igsh=ZzNveG94Yzkxbm54&utm_source=qr"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Consultoria Online
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Treino Personalizado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Avaliação Física
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Acompanhamento
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: (11) 97428-5733</li>
                <li>Email: belereisvp@gmail.com</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Team Reis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
