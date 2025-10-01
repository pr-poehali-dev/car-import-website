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
    { 
      name: 'Корея', 
      flag: '🇰🇷',
      brands: 'Hyundai, Kia, Genesis',
      popular: 'Genesis GV80, Hyundai Santa Fe',
      gradient: 'from-blue-500 to-cyan-400'
    },
    { 
      name: 'Германия', 
      flag: '🇩🇪',
      brands: 'Mercedes, BMW, Audi, Porsche',
      popular: 'Mercedes S-Class, BMW X7',
      gradient: 'from-slate-600 to-slate-400'
    },
    { 
      name: 'США', 
      flag: '🇺🇸',
      brands: 'Tesla, Ford, Chevrolet, Jeep',
      popular: 'Tesla Model Y, Ford F-150',
      gradient: 'from-red-600 to-blue-600'
    },
    { 
      name: 'Китай', 
      flag: '🇨🇳',
      brands: 'BYD, Li Auto, NIO, Zeekr',
      popular: 'BYD Tang, Li Auto L9',
      gradient: 'from-red-500 to-yellow-400'
    }
  ];

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      country: 'Германия 🇩🇪',
      price: 'от 8 500 000 ₽',
      year: '2024',
      image: '/img/ed5cc191-8189-4501-94b6-aa7cf0bbf374.jpg',
      specs: '3.0L • 367 л.с. • AWD'
    },
    {
      id: 2,
      name: 'Genesis GV80',
      country: 'Корея 🇰🇷',
      price: 'от 5 200 000 ₽',
      year: '2024',
      image: '/img/5419e099-868c-4083-99f9-1f5e5e3f979c.jpg',
      specs: '3.5L • 380 л.с. • AWD'
    },
    {
      id: 3,
      name: 'Porsche 911',
      country: 'Германия 🇩🇪',
      price: 'от 12 000 000 ₽',
      year: '2024',
      image: '/img/a2f79982-f141-49d3-8c36-17c290ae14d5.jpg',
      specs: '3.0L • 450 л.с. • AWD'
    },
    {
      id: 4,
      name: 'Tesla Model Y',
      country: 'США 🇺🇸',
      price: 'от 6 800 000 ₽',
      year: '2024',
      image: '/placeholder.svg',
      specs: 'Электро • 462 л.с. • AWD'
    },
    {
      id: 5,
      name: 'BYD Tang',
      country: 'Китай 🇨🇳',
      price: 'от 4 200 000 ₽',
      year: '2024',
      image: '/placeholder.svg',
      specs: 'Гибрид • 487 л.с. • AWD'
    },
    {
      id: 6,
      name: 'Hyundai Palisade',
      country: 'Корея 🇰🇷',
      price: 'от 4 500 000 ₽',
      year: '2024',
      image: '/placeholder.svg',
      specs: '3.8L • 295 л.с. • AWD'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Подбираем автомобиль под ваши требования и бюджет',
      icon: 'MessageCircle'
    },
    {
      number: '02',
      title: 'Поиск авто',
      description: 'Находим лучшие предложения на международных аукционах',
      icon: 'Search'
    },
    {
      number: '03',
      title: 'Проверка',
      description: 'Полная диагностика и проверка истории автомобиля',
      icon: 'ClipboardCheck'
    },
    {
      number: '04',
      title: 'Доставка',
      description: 'Логистика и таможенное оформление под ключ',
      icon: 'Ship'
    },
    {
      number: '05',
      title: 'Передача',
      description: 'Получаете авто с полным пакетом документов',
      icon: 'Key'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingDown',
      title: 'Экономия до 30%',
      description: 'Прямой импорт без посредников - цена ниже рыночной на 20-30%'
    },
    {
      icon: 'Shield',
      title: 'Полная проверка',
      description: 'Проверяем историю, пробег и техническое состояние каждого авто'
    },
    {
      icon: 'FileCheck',
      title: 'Юридическая чистота',
      description: 'Все документы, таможня и сертификация - берём на себя'
    },
    {
      icon: 'Truck',
      title: 'Доставка под ключ',
      description: 'От аукциона до вашего гаража - 30-45 дней в среднем'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Поддержка 24/7',
      description: 'Консультируем на всех этапах сделки, всегда на связи'
    },
    {
      icon: 'Award',
      title: 'Опыт с 2015 года',
      description: 'Доставили более 500 автомобилей по всей России'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AutoImport</h1>
                <p className="text-xs text-muted-foreground">Авто из-за рубежа</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#countries" className="text-sm hover:text-primary transition-colors">Страны</a>
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#process" className="text-sm hover:text-primary transition-colors">Процесс</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="Globe" size={16} className="text-primary" />
              <span className="text-sm font-medium">Международный автоимпорт</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Привезём авто из <span className="text-primary">Кореи, Германии, США и Китая</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Официальный импорт автомобилей под ключ. Экономия до 30% от российской цены. Доставка 30-45 дней. Полное юридическое сопровождение.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Calculator" size={20} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Получить консультацию
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Доставленных авто</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Средняя экономия</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">35 дней</div>
                <div className="text-sm text-muted-foreground">Средний срок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="countries" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Страны-партнёры</h2>
            <p className="text-xl text-muted-foreground">Прямые поставки из крупнейших автохабов мира</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className={`text-6xl mb-4 bg-gradient-to-r ${country.gradient} bg-clip-text text-transparent`}>
                    {country.flag}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{country.brands}</p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">Популярно:</p>
                    <p className="text-sm font-medium">{country.popular}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Надёжность, прозрачность и выгода</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={benefit.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Актуальные предложения</h2>
            <p className="text-xl text-muted-foreground">Свежие поступления со всего мира</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Card key={car.id} className="group overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {car.year}
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {car.country}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{car.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{car.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Показать все авто
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой и прозрачный процесс импорта</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={20} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Гарантии и безопасность</h2>
            <p className="text-xl text-muted-foreground">Ваша защита на каждом этапе</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="legal">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="FileCheck" size={24} className="text-primary" />
                      Юридическая чистота
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Полная проверка истории автомобиля через международные базы данных. Проверяем участие в ДТП, наличие залогов, скрученный пробег. Предоставляем официальный отчёт о проверке.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="technical">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Wrench" size={24} className="text-primary" />
                      Техническая проверка
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Диагностика в официальных сервисных центрах перед отправкой. Проверяем двигатель, трансмиссию, подвеску, электронику. Фото и видео отчёты для вас.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="contract">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="FileText" size={24} className="text-primary" />
                      Официальный договор
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Заключаем договор с прописанными сроками, стоимостью и условиями. Вы защищены юридически на всех этапах сделки. Полный пакет документов для регистрации в ГИБДД.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="insurance">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" size={24} className="text-primary" />
                      Страхование доставки
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Полное страхование автомобиля на период доставки от повреждений и утери. Работаем только с проверенными логистическими компаниями.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и рассчитаем стоимость</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (900) 000-00-00"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Какой автомобиль интересует?</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Например: Mercedes GLE из Германии"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground mb-1">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">info@autoimport.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Мессенджеры</h3>
                    <p className="text-muted-foreground mb-2">WhatsApp, Telegram</p>
                    <Button size="sm" variant="outline">
                      Написать в WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Car" size={20} className="text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">AutoImport</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Официальный импорт автомобилей из Кореи, Германии, США и Китая с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Страны</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">🇰🇷 Корея</a></li>
                <li><a href="#" className="hover:text-primary">🇩🇪 Германия</a></li>
                <li><a href="#" className="hover:text-primary">🇺🇸 США</a></li>
                <li><a href="#" className="hover:text-primary">🇨🇳 Китай</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Как работаем</a></li>
                <li><a href="#" className="hover:text-primary">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@autoimport.ru</li>
                <li>Москва, ул. Примерная 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 AutoImport. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
