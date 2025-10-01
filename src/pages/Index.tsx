import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const countries = [
    { name: 'Корея', icon: '🇰🇷', description: 'Hyundai, Kia, Genesis' },
    { name: 'Германия', icon: '🇩🇪', description: 'Mercedes, BMW, Audi, Porsche' },
    { name: 'США', icon: '🇺🇸', description: 'Tesla, Ford, Chevrolet' },
    { name: 'Китай', icon: '🇨🇳', description: 'BYD, Geely, Li Auto' }
  ];

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      country: 'Германия',
      price: 'от 8 500 000 ₽',
      year: '2024',
      image: '/img/ed5cc191-8189-4501-94b6-aa7cf0bbf374.jpg'
    },
    {
      id: 2,
      name: 'Genesis GV80',
      country: 'Корея',
      price: 'от 5 200 000 ₽',
      year: '2024',
      image: '/img/fa8d39e3-9c21-4d66-8ea8-76af5e908ea7.jpg'
    },
    {
      id: 3,
      name: 'Porsche 911',
      country: 'Германия',
      price: 'от 12 000 000 ₽',
      year: '2024',
      image: '/img/33a32b85-5c72-4f18-8eea-3664679c4a3f.jpg'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши требования и подбираем идеальный автомобиль'
    },
    {
      number: '02',
      title: 'Поиск и проверка',
      description: 'Находим автомобиль, проверяем его историю и техническое состояние'
    },
    {
      number: '03',
      title: 'Оформление',
      description: 'Заключаем договор, оформляем все документы и страховки'
    },
    {
      number: '04',
      title: 'Доставка',
      description: 'Организуем логистику и таможенное оформление'
    },
    {
      number: '05',
      title: 'Передача',
      description: 'Передаём автомобиль с полным пакетом документов'
    }
  ];

  const guarantees = [
    {
      title: 'Юридическая чистота',
      description: 'Полная проверка истории автомобиля, отсутствие залогов и обременений'
    },
    {
      title: 'Договор с гарантиями',
      description: 'Официальный договор купли-продажи с прописанными обязательствами'
    },
    {
      title: 'Техническая проверка',
      description: 'Диагностика в официальных сервисных центрах перед покупкой'
    },
    {
      title: 'Страхование сделки',
      description: 'Страхование рисков на всех этапах доставки автомобиля'
    },
    {
      title: 'Сопровождение',
      description: 'Юридическое сопровождение сделки от начала до постановки на учёт'
    },
    {
      title: 'Гарантия возврата',
      description: 'Возврат средств, если автомобиль не соответствует заявленным характеристикам'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={28} className="text-primary" />
            <span className="text-2xl font-bold">Premium Auto Import</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="story-link text-foreground/80 hover:text-foreground">Каталог</a>
            <a href="#process" className="story-link text-foreground/80 hover:text-foreground">Как это работает</a>
            <a href="#guarantees" className="story-link text-foreground/80 hover:text-foreground">Гарантии</a>
            <a href="#contact" className="story-link text-foreground/80 hover:text-foreground">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Элитные автомобили из
                <span className="text-primary"> Европы, Азии и США</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Официальный импорт премиальных автомобилей с полным юридическим сопровождением и гарантией качества
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать автомобиль
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/33a32b85-5c72-4f18-8eea-3664679c4a3f.jpg" 
                alt="Premium car" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={index} 
                className="hover-scale cursor-pointer border-primary/20 hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-3">{country.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{country.name}</h3>
                  <p className="text-sm text-foreground/60">{country.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Актуальные предложения</h2>
            <p className="text-xl text-foreground/70">Автомобили в наличии и под заказ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover-scale border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {car.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <span>{car.country}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{car.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{car.price}</span>
                    <Button variant="outline" size="sm" className="border-primary text-primary">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-foreground/70">Прозрачный процесс от выбора до получения автомобиля</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground/70 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ChevronRight" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гарантии и защита сделки</h2>
            <p className="text-xl text-foreground/70">Ваша безопасность — наш приоритет</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all hover-scale">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                  <p className="text-foreground/70">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Icon name="FileCheck" size={32} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Официальный договор</h3>
                <p className="text-foreground/70 mb-4">
                  Все сделки оформляются через официальный договор купли-продажи с полным описанием всех условий, 
                  сроков и гарантийных обязательств. Вы получаете полный пакет документов для постановки автомобиля на учёт.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="docs">
                    <AccordionTrigger className="text-primary hover:text-primary/80">
                      Какие документы входят в пакет?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Договор купли-продажи</li>
                        <li>Паспорт транспортного средства (ПТС)</li>
                        <li>Таможенная декларация</li>
                        <li>Сертификат соответствия</li>
                        <li>Акт приёма-передачи</li>
                        <li>Страховой полис</li>
                        <li>Документы об оплате</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-foreground/70">Готовы ответить на все ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Петров"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (900) 000-00-00"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите, какой автомобиль вас интересует..."
                      rows={4}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-foreground/70">+7 (495) 123-45-67</p>
                    <p className="text-sm text-foreground/50 mt-1">Пн-Пт: 9:00 - 20:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-foreground/70">info@premiumauto.ru</p>
                    <p className="text-sm text-foreground/50 mt-1">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Офис</h3>
                    <p className="text-foreground/70">Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-foreground/50 mt-1">Метро Парк Культуры</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Car" size={28} className="text-primary" />
            <span className="text-2xl font-bold">Premium Auto Import</span>
          </div>
          <p className="text-foreground/60 mb-6">
            Официальный импорт автомобилей премиум-класса с 2015 года
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#catalog" className="text-foreground/60 hover:text-primary transition-colors">Каталог</a>
            <a href="#process" className="text-foreground/60 hover:text-primary transition-colors">Как работаем</a>
            <a href="#guarantees" className="text-foreground/60 hover:text-primary transition-colors">Гарантии</a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-foreground/40">
            © 2024 Premium Auto Import. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;