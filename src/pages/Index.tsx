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
    { name: 'Корея', icon: 'Zap', description: 'Hyundai, Kia, Genesis', color: 'from-blue-500 to-cyan-400' },
    { name: 'Германия', icon: 'Cpu', description: 'Mercedes, BMW, Audi, Porsche', color: 'from-purple-500 to-pink-400' },
    { name: 'США', icon: 'Rocket', description: 'Tesla, Ford, Chevrolet', color: 'from-orange-500 to-red-400' },
    { name: 'Китай', icon: 'Sparkles', description: 'BYD, Geely, Li Auto', color: 'from-green-500 to-emerald-400' }
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
      image: '/img/5419e099-868c-4083-99f9-1f5e5e3f979c.jpg'
    },
    {
      id: 3,
      name: 'Porsche 911',
      country: 'Германия',
      price: 'от 12 000 000 ₽',
      year: '2024',
      image: '/img/a2f79982-f141-49d3-8c36-17c290ae14d5.jpg'
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
      icon: 'ShieldCheck',
      title: 'Юридическая чистота',
      description: 'Полная проверка истории автомобиля, отсутствие залогов и обременений'
    },
    {
      icon: 'FileCheck',
      title: 'Договор с гарантиями',
      description: 'Официальный договор купли-продажи с прописанными обязательствами'
    },
    {
      icon: 'Wrench',
      title: 'Техническая проверка',
      description: 'Диагностика в официальных сервисных центрах перед покупкой'
    },
    {
      icon: 'Shield',
      title: 'Страхование сделки',
      description: 'Страхование рисков на всех этапах доставки автомобиля'
    },
    {
      icon: 'UserCheck',
      title: 'Сопровождение',
      description: 'Юридическое сопровождение сделки от начала до постановки на учёт'
    },
    {
      icon: 'RefreshCcw',
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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-primary/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Icon name="Zap" size={28} className="text-primary animate-pulse-slow" />
              <div className="absolute inset-0 blur-lg bg-primary/30"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">AutoTech</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="story-link text-foreground/80 hover:text-foreground">Каталог</a>
            <a href="#process" className="story-link text-foreground/80 hover:text-foreground">Как это работает</a>
            <a href="#guarantees" className="story-link text-foreground/80 hover:text-foreground">Гарантии</a>
            <a href="#contact" className="story-link text-foreground/80 hover:text-foreground">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Технологии будущего</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Импорт премиальных</span>
                <br />
                автомобилей нового поколения
              </h1>
              <p className="text-xl text-foreground/60 mb-8 leading-relaxed">
                Инновационная платформа для импорта автомобилей премиум-класса с ИИ-помощником, блокчейн-проверкой и полным цифровым сопровождением
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  ИИ-подбор авто
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-foreground/50">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                  <span>Блокчейн-защита</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                  <span>ИИ-аналитика</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                  <span>24/7 мониторинг</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"></div>
              <img 
                src="/img/a2f79982-f141-49d3-8c36-17c290ae14d5.jpg" 
                alt="Premium car" 
                className="relative rounded-2xl shadow-2xl w-full border border-primary/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 rounded-xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-xs text-foreground/60">Доставлено авто</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 gradient-text">Страны-партнёры</h2>
            <p className="text-foreground/60">Прямые поставки из лучших автохабов мира</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card 
                key={index} 
                className="group hover-lift cursor-pointer border-primary/20 hover:border-primary transition-all bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${country.color} p-0.5">
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <Icon name={country.icon} size={32} className="text-primary" />
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Актуальные</span> предложения
            </h2>
            <p className="text-xl text-foreground/60">Проверено ИИ • Блокчейн-сертификация • Онлайн-осмотр</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="group overflow-hidden hover-lift border-primary/20 bg-card/50 backdrop-blur-sm relative">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold z-20 flex items-center gap-2">
                    <Icon name="Sparkles" size={14} />
                    {car.year}
                  </div>
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20 border border-primary/30">
                    <Icon name="CheckCircle2" size={12} className="inline mr-1 text-primary" />
                    ИИ-проверено
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <Icon name="MapPin" size={14} />
                    <span>{car.country}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{car.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-foreground/50 mb-1">Стоимость</div>
                      <span className="text-2xl font-bold gradient-text">{car.price}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground glow-effect">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-foreground/50 pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" size={12} className="text-primary" />
                      Гарантия
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Truck" size={12} className="text-primary" />
                      Доставка
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="FileCheck" size={12} className="text-primary" />
                      Документы
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 relative tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Icon name="Workflow" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Автоматизированный процесс</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это <span className="gradient-text">работает</span>
            </h2>
            <p className="text-xl text-foreground/60">Цифровой процесс с полным контролем на каждом этапе</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-primary/20 hover:border-primary transition-all bg-card/50 backdrop-blur-sm group hover-lift">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{step.number}</div>
                      <div className="absolute top-2 left-0 w-12 h-12 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-foreground/60 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                    </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Icon name="ShieldCheck" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Блокчейн-защищено</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Гарантии</span> и защита сделки
            </h2>
            <p className="text-xl text-foreground/60">Многоуровневая система защиты ваших интересов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="group border-primary/20 hover:border-primary transition-all hover-lift bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Icon name={guarantee.icon} size={28} className="text-primary" />
                    </div>
                    <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/30 transition-all"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{guarantee.title}</h3>
                  <p className="text-foreground/60">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="FileCheck" size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 gradient-text">Цифровой смарт-контракт</h3>
                <p className="text-foreground/60 mb-4">
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

      <section id="contact" className="py-20 px-4 relative tech-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Icon name="MessageSquare" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">ИИ-консультант 24/7</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Свяжитесь</span> с нами
            </h2>
            <p className="text-xl text-foreground/60">Мгновенный ответ через ИИ-чат или личную консультацию</p>
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
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    Отправить ИИ-консультанту
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="group border-primary/30 hover:border-primary transition-all bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-foreground/70">+7 (495) 123-45-67</p>
                    <p className="text-sm text-foreground/50 mt-1">Пн-Пт: 9:00 - 20:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group border-primary/30 hover:border-primary transition-all bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-foreground/70">info@premiumauto.ru</p>
                    <p className="text-sm text-foreground/50 mt-1">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group border-primary/30 hover:border-primary transition-all bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
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

      <footer className="relative bg-card/30 border-t border-primary/30 py-12 px-4 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative">
              <Icon name="Zap" size={28} className="text-primary" />
              <div className="absolute inset-0 blur-lg bg-primary/30"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">AutoTech</span>
          </div>
          <p className="text-foreground/60 mb-6">
            Инновационная платформа для импорта премиум-автомобилей
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#catalog" className="text-foreground/60 hover:text-primary transition-colors">Каталог</a>
            <a href="#process" className="text-foreground/60 hover:text-primary transition-colors">Как работаем</a>
            <a href="#guarantees" className="text-foreground/60 hover:text-primary transition-colors">Гарантии</a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm text-foreground/50 mt-8">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={14} className="text-primary" />
              <span>Блокчейн</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Brain" size={14} className="text-primary" />
              <span>ИИ-аналитика</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Lock" size={14} className="text-primary" />
              <span>Защищено SSL</span>
            </div>
          </div>
          <p className="text-sm text-foreground/40 mt-6">
            © 2024 AutoTech. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;