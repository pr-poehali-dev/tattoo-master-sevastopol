import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      image: '/img/0dfcb0d5-b4b5-4f93-b430-8b986d23ce3c.jpg',
      title: 'Реалистичная роза',
      category: 'Black & Gray',
      description: 'Детализированная работа в стиле реализм'
    },
    {
      id: 2,
      image: '/img/7605afc8-4ea3-4614-82f5-fab04e4ac133.jpg',
      title: 'Геометрическая мандала',
      category: 'Color',
      description: 'Яркие цвета и четкие линии'
    },
    {
      id: 3,
      image: '/img/08d73e4e-3067-4f15-9fc2-0cf660443995.jpg',
      title: 'Акварельные цветы',
      category: 'Watercolor',
      description: 'Нежная техника акварели'
    }
  ];

  const services = [
    {
      name: 'Татуировки',
      price: 'от 3000₽',
      duration: '2-6 часов',
      description: 'Создание уникальных татуировок любой сложности'
    },
    {
      name: 'Эскизы',
      price: 'от 1500₽',
      duration: '1-3 дня',
      description: 'Разработка индивидуального дизайна'
    },
    {
      name: 'Коррекция',
      price: 'от 2000₽',
      duration: '1-3 часа',
      description: 'Исправление и обновление существующих татуировок'
    }
  ];

  const faqItems = [
    {
      question: 'Сколько времени заживает татуировка?',
      answer: 'Процесс заживления занимает 2-4 недели. В первые дни важно следовать рекомендациям по уходу.'
    },
    {
      question: 'Можно ли делать татуировку в цвете?',
      answer: 'Да, я работаю как с черно-серыми, так и с цветными татуировками. Все зависит от ваших предпочтений.'
    },
    {
      question: 'Нужна ли предварительная консультация?',
      answer: 'Консультация обязательна для обсуждения дизайна, размера и размещения татуировки.'
    },
    {
      question: 'Какие есть противопоказания?',
      answer: 'Не рекомендуется делать татуировки при беременности, кожных заболеваниях, приеме разжижающих кровь препаратов.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-lavender/20">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-purple-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-softPurple to-pinkGlow rounded-full"></div>
              <h1 className="font-oswald text-2xl font-bold text-navy">Маргарита</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="font-lato text-navy hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="font-lato text-navy hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="font-lato text-navy hover:text-primary transition-colors">Услуги</a>
              <a href="#faq" className="font-lato text-navy hover:text-primary transition-colors">Вопросы</a>
              <a href="#contact" className="font-lato text-navy hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
              Тату-мастер
              <span className="block bg-gradient-to-r from-softPurple via-pinkGlow to-deepPurple bg-clip-text text-transparent">
                Маргарита
              </span>
            </h1>
            <p className="font-lato text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаю уникальные татуировки в Севастополе. Профессиональный подход, стерильность и внимание к деталям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-softPurple to-pinkGlow hover:from-deepPurple hover:to-softPurple text-white px-8 py-3 shadow-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Записаться на сеанс
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-softPurple text-softPurple hover:bg-gradient-to-r hover:from-softPurple hover:to-pinkGlow hover:text-white px-8 py-3">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-navy mb-4">Портфолио работ</h2>
            <p className="font-lato text-gray-600 text-lg">Каждая татуировка — это уникальная история</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-softPurple to-pinkGlow text-white border-0">{item.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-oswald text-xl text-navy">{item.title}</CardTitle>
                  <CardDescription className="font-lato">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 border-softPurple text-softPurple hover:bg-gradient-to-r hover:from-softPurple hover:to-pinkGlow hover:text-white">
              <Icon name="Instagram" size={20} className="mr-2" />
              Больше работ в Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-purple-50/30 to-lavender/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-navy mb-4">Услуги</h2>
            <p className="font-lato text-gray-600 text-lg">Профессиональные услуги тату-мастера</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.name} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedService === service.name ? 'ring-2 ring-softPurple bg-purple-50/50' : ''
                }`}
                onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
              >
                <CardHeader>
                  <CardTitle className="font-oswald text-2xl text-navy flex items-center justify-between">
                    {service.name}
                    <span className="text-softPurple text-lg font-semibold">{service.price}</span>
                  </CardTitle>
                  <div className="font-lato text-gray-600">
                    <div className="flex items-center mb-2">
                      <Icon name="Clock" size={16} className="mr-2 text-accent" />
                      {service.duration}
                    </div>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-100/50 to-pink-100/30 border-purple-200/50">
              <CardHeader className="text-center">
                <CardTitle className="font-oswald text-2xl text-navy mb-4">Онлайн запись</CardTitle>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Описание татуировки" />
                  <Button className="w-full bg-gradient-to-r from-softPurple to-pinkGlow hover:from-deepPurple hover:to-softPurple shadow-lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-lavender/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-navy mb-4">Часто задаваемые вопросы</h2>
            <p className="font-lato text-gray-600 text-lg">Ответы на популярные вопросы о татуировках</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-oswald text-lg text-navy text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-lato text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-purple-100/40 via-pink-100/30 to-lavender/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-navy mb-4">Контакты</h2>
            <p className="font-lato text-gray-600 text-lg">Свяжитесь со мной для записи</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100/60 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-softPurple" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-navy">Адрес</h3>
                    <p className="font-lato text-gray-600">г. Севастополь, ул. Большая Морская, 15</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100/60 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-pinkGlow" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-navy">Телефон</h3>
                    <p className="font-lato text-gray-600">+7 (978) 123-45-67</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100/60 rounded-full flex items-center justify-center">
                    <Icon name="Instagram" size={24} className="text-deepPurple" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold text-navy">Instagram</h3>
                    <p className="font-lato text-gray-600">@margarita_tattoo_sev</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="p-6 bg-white">
                <CardHeader>
                  <CardTitle className="font-oswald text-2xl text-navy mb-4">Написать сообщение</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email" />
                  <Input placeholder="Телефон" />
                  <textarea 
                    className="w-full p-3 border rounded-md min-h-[100px] font-lato"
                    placeholder="Ваше сообщение"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-softPurple to-pinkGlow hover:from-deepPurple hover:to-softPurple shadow-lg">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-navy to-deepPurple py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-softPurple to-pinkGlow rounded-full"></div>
            <h3 className="font-oswald text-xl font-bold">Маргарита</h3>
          </div>
          <p className="font-lato text-gray-300">© 2024 Тату-мастер Маргарита. Севастополь.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;