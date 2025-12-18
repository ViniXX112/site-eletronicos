"use client"

import { useState } from "react"
import { BookOpen, TrendingUp, Award, PlayCircle, CheckCircle, Lock, Star, BarChart3, DollarSign, LineChart, PieChart, Target, Brain, Trophy, ChevronRight, Menu, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3])
  const [userPoints, setUserPoints] = useState(450)
  const [userLevel, setUserLevel] = useState("Iniciante")

  const modules = [
    {
      id: 1,
      title: "Fundamentos da Bolsa",
      level: "Básico",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      progress: 75,
      lessons: 8,
      completedLessons: 6,
      duration: "2h 30min",
      description: "Aprenda os conceitos essenciais do mercado de ações",
      topics: ["O que é a Bolsa de Valores", "Como funciona o mercado", "Tipos de ativos", "Horários de negociação"]
    },
    {
      id: 2,
      title: "Análise Fundamentalista",
      level: "Intermediário",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      progress: 40,
      lessons: 12,
      completedLessons: 5,
      duration: "4h 15min",
      description: "Entenda como avaliar empresas e seus fundamentos",
      topics: ["Balanços patrimoniais", "Indicadores financeiros", "Valuation", "Análise setorial"]
    },
    {
      id: 3,
      title: "Análise Técnica",
      level: "Intermediário",
      icon: LineChart,
      color: "from-purple-500 to-pink-600",
      progress: 20,
      lessons: 15,
      completedLessons: 3,
      duration: "5h 00min",
      description: "Domine gráficos, padrões e indicadores técnicos",
      topics: ["Candlesticks", "Suportes e resistências", "Médias móveis", "IFR e MACD"]
    },
    {
      id: 4,
      title: "Estratégias de Trading",
      level: "Avançado",
      icon: Target,
      color: "from-orange-500 to-red-600",
      progress: 0,
      lessons: 10,
      completedLessons: 0,
      duration: "3h 45min",
      description: "Aprenda estratégias profissionais de operação",
      topics: ["Day trade", "Swing trade", "Position", "Gerenciamento de risco"]
    },
    {
      id: 5,
      title: "Psicologia do Trader",
      level: "Avançado",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      progress: 0,
      lessons: 8,
      completedLessons: 0,
      duration: "2h 20min",
      description: "Controle emocional e disciplina nas operações",
      topics: ["Controle emocional", "Disciplina", "Vieses cognitivos", "Mindset vencedor"]
    },
    {
      id: 6,
      title: "Derivativos e Opções",
      level: "Avançado",
      icon: PieChart,
      color: "from-pink-500 to-rose-600",
      progress: 0,
      lessons: 14,
      completedLessons: 0,
      duration: "6h 00min",
      description: "Opere com contratos futuros e opções",
      topics: ["Mercado futuro", "Opções de compra e venda", "Estratégias com opções", "Hedge"]
    }
  ]

  const lessons = [
    {
      id: 1,
      moduleId: 1,
      title: "O que é a Bolsa de Valores?",
      duration: "15 min",
      type: "Vídeo + Quiz",
      completed: true,
      locked: false
    },
    {
      id: 2,
      moduleId: 1,
      title: "Como funciona o mercado de ações",
      duration: "20 min",
      type: "Vídeo + Exercício",
      completed: true,
      locked: false
    },
    {
      id: 3,
      moduleId: 1,
      title: "Tipos de ativos financeiros",
      duration: "18 min",
      type: "Leitura + Quiz",
      completed: true,
      locked: false
    },
    {
      id: 4,
      moduleId: 1,
      title: "Horários e funcionamento da B3",
      duration: "12 min",
      type: "Vídeo",
      completed: false,
      locked: false
    },
    {
      id: 5,
      moduleId: 1,
      title: "Como abrir conta em corretora",
      duration: "15 min",
      type: "Tutorial + Checklist",
      completed: false,
      locked: false
    },
    {
      id: 6,
      moduleId: 1,
      title: "Primeiros passos para investir",
      duration: "25 min",
      type: "Vídeo + Simulação",
      completed: false,
      locked: true
    }
  ]

  const activities = [
    {
      id: 1,
      title: "Quiz: Fundamentos do Mercado",
      description: "Teste seus conhecimentos sobre os conceitos básicos",
      questions: 10,
      points: 50,
      difficulty: "Fácil",
      icon: Brain,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Simulador de Investimentos",
      description: "Pratique compra e venda de ações em ambiente simulado",
      points: 100,
      difficulty: "Médio",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Análise de Caso Real",
      description: "Analise uma empresa real e tome decisões de investimento",
      points: 150,
      difficulty: "Difícil",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Desafio Semanal",
      description: "Competição com outros alunos em simulação de mercado",
      points: 200,
      difficulty: "Avançado",
      icon: Trophy,
      color: "from-orange-500 to-red-600"
    }
  ]

  const achievements = [
    { id: 1, title: "Primeiro Passo", description: "Complete sua primeira aula", unlocked: true },
    { id: 2, title: "Estudante Dedicado", description: "Complete 10 aulas", unlocked: true },
    { id: 3, title: "Mestre dos Fundamentos", description: "Complete o módulo básico", unlocked: false },
    { id: 4, title: "Analista em Formação", description: "Complete 50 aulas", unlocked: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  BolsaAprendiz
                </h1>
                <p className="text-xs text-slate-400">Aprenda a investir do zero</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-white font-semibold">{userPoints}</span>
                <span className="text-slate-400 text-sm">pontos</span>
              </div>
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 border-0">
                {userLevel}
              </Badge>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <User className="w-5 h-5" />
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden text-slate-300">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              🎓 Plataforma de Educação Financeira
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Aprenda a Operar na
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Bolsa de Valores
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Do básico ao avançado, com aulas práticas, simuladores e atividades interativas para você dominar o mercado financeiro.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold">
                <PlayCircle className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              {[
                { label: "Aulas", value: "67+" },
                { label: "Horas de Conteúdo", value: "24h" },
                { label: "Certificado", value: "Sim" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="modules" className="space-y-8">
          <TabsList className="bg-slate-900/50 border border-slate-800 p-1">
            <TabsTrigger value="modules" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600">
              <BookOpen className="w-4 h-4 mr-2" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600">
              <Target className="w-4 h-4 mr-2" />
              Atividades
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600">
              <Trophy className="w-4 h-4 mr-2" />
              Conquistas
            </TabsTrigger>
          </TabsList>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Trilha de Aprendizado</h3>
                <p className="text-slate-400">Siga a sequência de módulos do básico ao avançado</p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Input 
                  placeholder="Buscar módulo..." 
                  className="w-64 bg-slate-900/50 border-slate-700 text-white"
                />
                <Button variant="ghost" size="icon" className="text-slate-400">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => {
                const Icon = module.icon
                return (
                  <Card 
                    key={module.id}
                    className="group bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedModule(module.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-r ${module.color} p-3 rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-slate-700 text-slate-300">
                          {module.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-white group-hover:text-emerald-400 transition-colors">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {module.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Progresso</span>
                          <span className="text-white font-semibold">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-slate-400">
                          <PlayCircle className="w-4 h-4" />
                          <span>{module.lessons} aulas</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>{module.completedLessons} completas</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800">
                        <p className="text-xs text-slate-500 mb-2">Tópicos principais:</p>
                        <div className="flex flex-wrap gap-1">
                          {module.topics.slice(0, 2).map((topic, i) => (
                            <Badge key={i} variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-0">
                              {topic}
                            </Badge>
                          ))}
                          {module.topics.length > 2 && (
                            <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-0">
                              +{module.topics.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                      >
                        {module.progress > 0 ? "Continuar" : "Começar"}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>

            {/* Lessons Detail (when module selected) */}
            {selectedModule && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white">Aulas do Módulo</h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedModule(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    Fechar
                  </Button>
                </div>

                <div className="grid gap-3">
                  {lessons.filter(l => l.moduleId === selectedModule).map((lesson) => (
                    <Card 
                      key={lesson.id}
                      className={`bg-slate-900/50 border-slate-800 ${
                        lesson.locked 
                          ? "opacity-50" 
                          : "hover:border-emerald-500/50 cursor-pointer"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${
                            lesson.completed 
                              ? "bg-emerald-500/20" 
                              : lesson.locked 
                              ? "bg-slate-800" 
                              : "bg-slate-800"
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                            ) : lesson.locked ? (
                              <Lock className="w-5 h-5 text-slate-600" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-slate-400" />
                            )}
                          </div>

                          <div className="flex-1">
                            <h5 className="font-semibold text-white mb-1">{lesson.title}</h5>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span>{lesson.duration}</span>
                              <span>•</span>
                              <span>{lesson.type}</span>
                            </div>
                          </div>

                          {!lesson.locked && (
                            <Button 
                              size="sm"
                              variant={lesson.completed ? "outline" : "default"}
                              className={lesson.completed 
                                ? "border-slate-700 text-slate-300" 
                                : "bg-gradient-to-r from-emerald-500 to-teal-600"
                              }
                            >
                              {lesson.completed ? "Revisar" : "Assistir"}
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Atividades Práticas</h3>
              <p className="text-slate-400">Pratique seus conhecimentos e ganhe pontos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity) => {
                const Icon = activity.icon
                return (
                  <Card 
                    key={activity.id}
                    className="group bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          +{activity.points} pts
                        </Badge>
                      </div>
                      <CardTitle className="text-white group-hover:text-emerald-400 transition-colors">
                        {activity.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {activity.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-slate-700 text-slate-300">
                          {activity.difficulty}
                        </Badge>
                        {activity.questions && (
                          <span className="text-sm text-slate-400">
                            {activity.questions} questões
                          </span>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                        Iniciar Atividade
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>

            {/* Practice Simulator Preview */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Simulador de Investimentos</CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  Pratique compra e venda de ações com dinheiro virtual
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Saldo Virtual</p>
                    <p className="text-2xl font-bold text-white">R$ 10.000</p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Lucro/Prejuízo</p>
                    <p className="text-2xl font-bold text-emerald-400">+R$ 1.250</p>
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                    <p className="text-sm text-slate-400 mb-1">Operações</p>
                    <p className="text-2xl font-bold text-white">24</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white">
                  Abrir Simulador
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Suas Conquistas</h3>
              <p className="text-slate-400">Desbloqueie conquistas conforme progride</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`bg-slate-900/50 border-slate-800 text-center ${
                    achievement.unlocked 
                      ? "border-yellow-500/50 shadow-lg shadow-yellow-500/10" 
                      : "opacity-50"
                  }`}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        achievement.unlocked 
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500" 
                          : "bg-slate-800"
                      }`}>
                        <Trophy className={`w-10 h-10 ${
                          achievement.unlocked ? "text-white" : "text-slate-600"
                        }`} />
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="text-slate-400 text-sm">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Progress Overview */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Visão Geral do Progresso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Aulas Completas</span>
                      <span className="text-white font-semibold">14/67</span>
                    </div>
                    <Progress value={21} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Atividades</span>
                      <span className="text-white font-semibold">8/24</span>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Conquistas</span>
                      <span className="text-white font-semibold">2/12</span>
                    </div>
                    <Progress value={17} className="h-2" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold mb-1">Próximo Nível</h4>
                      <p className="text-sm text-slate-400">Faltam 550 pontos para Intermediário</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 border-0">
                      Nível 3
                    </Badge>
                  </div>
                  <Progress value={45} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Por que escolher o BolsaAprendiz?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Metodologia completa e prática para você se tornar um investidor de sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Conteúdo Completo",
                description: "Do básico ao avançado com mais de 24h de aulas"
              },
              {
                icon: Target,
                title: "Atividades Práticas",
                description: "Exercícios e simuladores para fixar o aprendizado"
              },
              {
                icon: TrendingUp,
                title: "Simulador Real",
                description: "Pratique com dados reais do mercado sem risco"
              },
              {
                icon: Award,
                title: "Certificado",
                description: "Receba certificado ao concluir cada módulo"
              }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="bg-slate-900/50 border-slate-800 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-xl w-fit">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <CardContent className="relative p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de alunos que já estão aprendendo a investir com segurança e conhecimento
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 font-semibold">
                <PlayCircle className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Conhecer os Planos
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">BolsaAprendiz</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Educação financeira de qualidade para todos que desejam investir com segurança.
              </p>
            </div>

            {[
              {
                title: "Plataforma",
                items: ["Módulos", "Atividades", "Simulador", "Certificados"]
              },
              {
                title: "Suporte",
                items: ["Central de Ajuda", "FAQ", "Contato", "Comunidade"]
              },
              {
                title: "Legal",
                items: ["Termos de Uso", "Privacidade", "Cookies", "Sobre Nós"]
              }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 BolsaAprendiz. Todos os direitos reservados. Plataforma educacional - não oferecemos consultoria de investimentos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
