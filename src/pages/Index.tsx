import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import StarMap from '@/components/StarMap';
import { div, div } from '@/hooks/useScrollAnimation';

export default function Index() {
  const testimonials = [
    {
      question: "Вернётся ли бывший?",
      answer: "Карта показала, что возвращение маловероятно. Астрологические показатели указывали на его окончательный уход и нежелание возобновлять связь.",
      result: "Отпустила и встретила нового партнёра"
    },
    {
      question: "Получу ли я повышение на работе в ближайшее время?",
      answer: "Карта показала \"Да\", повышение будет через 3 месяца. При этом указывалось, что решение будет принято неожиданно, но потребуется проявить настойчивость в переговорах по условиям.",
      result: "Предложили новую должность точно в срок"
    },
    {
      question: "Забеременею ли я в этом году?",
      answer: "Карта показала \"Да\", беременность наступит в ближайшие 2 месяца, но было указание на необходимость определенного медицинского вмешательства.",
      result: "Забеременела через 2 месяца после ЭКО"
    }
  ];

  const features = [
    {
      icon: "Target",
      title: "Конкретика",
      description: "Отвечает точно на вопрос ('Получу ли я работу?' — Да/Нет)"
    },
    {
      icon: "Clock",
      title: "Скорость",
      description: "Карта строится в момент запроса, ответ — в течение суток"
    },
    {
      icon: "Lock",
      title: "Без личных данных",
      description: "Не нужен ни гороскоп, ни дата рождения, только место и время самого вопроса"
    },
    {
      icon: "Globe",
      title: "Универсальность",
      description: "Любая сфера — от любви до бизнеса"
    }
  ];

  const areas = [
    "Любовь", "Работа", "Деньги", "Переезд", 
    "Пропажи", "Судебные дела", "Здоровье", "Рождение и беременность"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <StarMap />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/20">
              <Icon name="Stars" size={20} className="text-yellow-400" />
              <span className="text-purple-200">Древняя наука точных ответов</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 bg-clip-text text-transparent leading-tight">
              Как Хорарная Астрология Даёт Точные Ответы на Ваши Самые Жизненные Вопросы
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-200 mb-8 font-light">
              Когда нет ответа, а решение нужно <span className="text-yellow-400 font-semibold">СЕЙЧАС</span>
            </p>
            
            <Button 
              size="lg" 
              className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full border border-purple-400/30 shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none"
              onClick={() => window.open('https://t.me/maryhorarotvet', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать свой вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div 
                
                className="space-y-6"
              >
                <blockquote className="text-xl italic text-purple-200 border-l-4 border-purple-400 pl-6">
                  "Он действительно меня любит?"
                </blockquote>
                <blockquote className="text-xl italic text-purple-200 border-l-4 border-purple-400 pl-6">
                  "Стоит ли увольняться и искать новую работу?"
                </blockquote>
              </div>
              <div 
                
                className="space-y-6"
              >
                <blockquote className="text-xl italic text-purple-200 border-l-4 border-purple-400 pl-6">
                  "Забеременею ли я в этом году?"
                </blockquote>
                <blockquote className="text-xl italic text-purple-200 border-l-4 border-purple-400 pl-6">
                  "Что с моим ребёнком, который не выходит на связь?"
                </blockquote>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Вы ищете ответ, совет, поддержку — но получаете лишь догадки, обтекаемые рекомендации и ещё больше сомнений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div >
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Что если бы можно было получить конкретный ответ прямо сейчас?
              </h2>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20">
                <Icon name="Compass" size={64} className="mx-auto mb-6 text-yellow-400" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="text-white font-semibold">Хорарная астрология</span> — древняя система, которая отвечает на любой важный вопрос, заданный в определённый момент времени. Вы получаете чёткий ответ: <span className="text-yellow-400">Да/Нет. Когда. Где. Почему.</span> И что делать.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div >
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">
                Как работает Хорар?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-purple-400/20 text-center hover:border-purple-400/40 transition-all duration-300">
                  <CardHeader>
                    <Icon name={feature.icon} size={48} className="mx-auto mb-4 text-yellow-400" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div >
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">
                Тарифы
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Экспресс-Разбор</CardTitle>
                  <CardDescription className="text-3xl font-bold text-yellow-400">500₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Краткий точный ответ</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Без лишнего — только суть</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Быстро, конфиденциально</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base py-2 sm:py-3"
                    onClick={() => window.open('https://t.me/maryhorarotvet', '_blank')}
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Задать свой вопрос
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm border-purple-400/30 relative overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-black">Популярный</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Полная Консультация</CardTitle>
                  <CardDescription className="text-3xl font-bold text-yellow-400">2990₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Глубокий анализ карты</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Прогноз событий</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Рекомендации, как повлиять на ситуацию</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Поддержка и разбор сложных случаев</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-sm sm:text-base py-2 sm:py-3"
                    onClick={() => window.open('https://t.me/maryhorarotvet', '_blank')}
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Задать свой вопрос
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div >
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">
                Примеры реальных историй
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-200">"{testimonial.question}"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge className="bg-yellow-600 text-black mb-2">Ответ Хорара</Badge>
                      <p className="text-white font-medium">{testimonial.answer}</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="border-green-400 text-green-400 mb-2">Результат</Badge>
                      <p className="text-gray-300 text-sm">{testimonial.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div >
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white">
                Вопросы, на которые отвечает Хорар
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-purple-400/30 text-purple-200 hover:bg-purple-600/20 p-4 text-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-purple-400/50 text-lg font-semibold"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div>
              <Icon name="Stars" size={64} className="mx-auto mb-8 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                У вас есть вопрос.<br />
                Хорар даст ответ.
              </h2>
            </div>
            <div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full border border-purple-400/30 shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none"
                onClick={() => window.open('https://t.me/maryhorarotvet', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать свой вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-purple-400/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            
            <div className="space-y-4 text-sm text-gray-400">
              <p>Политика конфиденциальности</p>
              <p className="max-w-2xl mx-auto">
                <span className="font-medium">Дисклеймер:</span> Хорарная астрология не заменяет медицинскую, юридическую или психотерапевтическую помощь.
              </p>
              <p className="text-purple-300">© 2024 Хорарная Астрология. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}