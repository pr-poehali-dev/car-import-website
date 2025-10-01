import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', car: '' });

  const countries = [
    {
      flag: '🇰🇷',
      name: 'Южная Корея',
      brands: ['Hyundai', 'Kia', 'Genesis'],
      popular: 'Genesis GV80, Kia Carnival',
      delivery: '25-30 дней',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      flag: '🇩🇪',
      name: 'Германия',
      brands: ['Mercedes', 'BMW', 'Audi', 'Porsche'],
      popular: 'Mercedes S-Class, BMW X5',
      delivery: '40-45 дней',
      color: 'from-gray-700 to-gray-500'
    },
    {
      flag: '🇺🇸',
      name: 'США',
      brands: ['Tesla', 'Ford', 'Chevrolet', 'Jeep'],
      popular: 'Tesla Model Y, Ford F-150',
      delivery: '45-60 дней',
      color: 'from-red-600 to-blue-600'
    },
    {
      flag: '🇨🇳',
      name: 'Китай',
      brands: ['BYD', 'Li Auto', 'Zeekr', 'NIO'],
      popular: 'BYD Tang, Li Auto L9',
      delivery: '20-25 дней',
      color: 'from-red-500 to-yellow-500'
    }
  ];

  const advantages = [
    {
      icon: 'Percent',
      title: 'Экономия до 35%',
      description: 'Покупка напрямую с аукционов без наценки дилеров'
    },
    {
      icon: 'ShieldCheck',
      title: 'Полная проверка',
      description: 'История, техсостояние, отсутствие залогов'
    },
    {
      icon: 'FileText',
      title: 'Все документы',
      description: 'Таможня, сертификация, постановка на учёт'
    },
    {
      icon: 'Truck',
      title: 'Доставка под ключ',
      description: 'От аукциона до вашего города за 25-60 дней'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Консультируем на каждом этапе покупки'
    },
    {
      icon: 'Award',
      title: '9 лет опыта',
      description: 'Привезли 800+ автомобилей по всей России'
    }
  ];

  const steps = [
    { number: '1', title: 'Заявка', text: 'Заполняете форму с пожеланиями', icon: 'MessageSquare' },
    { number: '2', title: 'Подбор', text: 'Находим лучшие варианты на аукционах', icon: 'Search' },
    { number: '3', title: 'Покупка', text: 'Выкупаем авто и проводим диагностику', icon: 'ShoppingCart' },
    { number: '4', title: 'Логистика', text: 'Доставляем морем и оформляем таможню', icon: 'Ship' },
    { number: '5', title: 'Передача', text: 'Получаете готовый автомобиль с документами', icon: 'Key' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в течение 15 минут.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                <Icon name="Car" size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">GlobalAuto</div>
                <div className="text-xs text-muted-foreground">Импорт авто под ключ</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#countries" className="hover:text-primary transition">Страны</a>
              <a href="#how" className="hover:text-primary transition">Как работаем</a>
              <a href="#advantages" className="hover:text-primary transition">Преимущества</a>
              <a href="#contact" className="hover:text-primary transition">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 999 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
              <Icon name="Globe" size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Официальный импорт</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Привезём автомобиль из <span className="text-blue-600">любой точки мира</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Корея • Германия • США • Китай<br/>
              Экономия до 35% • Срок 25-60 дней • Полное сопровождение
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-blue-600">800+</div>
                <div className="text-sm text-muted-foreground mt-1">Авто привезено</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">35%</div>
                <div className="text-sm text-muted-foreground mt-1">Экономия</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">9 лет</div>
                <div className="text-sm text-muted-foreground mt-1">На рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="countries" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Откуда привозим автомобили</h2>
            <p className="text-xl text-muted-foreground">Работаем напрямую с крупнейшими аукционами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-blue-500">
                <CardContent className="p-6">
                  <div className={`text-6xl mb-4 bg-gradient-to-r ${country.color} bg-clip-text`}>
                    {country.flag}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{country.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {country.brands.map((brand, i) => (
                        <span key={i} className="bg-secondary px-2 py-1 rounded text-xs">{brand}</span>
                      ))}
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-muted-foreground text-xs mb-1">Популярные модели:</p>
                      <p className="font-medium text-sm">{country.popular}</p>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 pt-2">
                      <Icon name="Clock" size={14} />
                      <span className="text-xs font-medium">{country.delivery}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Честно, прозрачно, выгодно</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">5 простых шагов до вашего авто</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                      <Icon name={step.icon} size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                    <Icon name="ArrowRight" size={20} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Гарантии и безопасность</h2>
            <p className="text-xl text-muted-foreground">Защищаем ваши интересы на каждом этапе</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileCheck" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Юридическая чистота</h3>
                  <p className="text-sm text-muted-foreground">Проверяем историю, отсутствие залогов и ограничений через международные базы</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="Wrench" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Техническая проверка</h3>
                  <p className="text-sm text-muted-foreground">Диагностика в сертифицированных центрах с фото и видео отчётами</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Страхование</h3>
                  <p className="text-sm text-muted-foreground">Полное страхование автомобиля на весь период доставки</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Договор</h3>
                  <p className="text-sm text-muted-foreground">Официальный договор с прописанными сроками и условиями</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и рассчитаем стоимость за 15 минут</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Петров"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Какой автомобиль интересует?</label>
                    <Textarea
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                      placeholder="Например: BMW X5 из Германии или Tesla Model Y из США"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-1">+7 999 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp / Telegram</h3>
                    <p className="text-muted-foreground mb-3">Мгновенные ответы в мессенджерах</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">WhatsApp</Button>
                      <Button size="sm" variant="outline" className="flex-1">Telegram</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-blue-600 font-medium mb-1">info@globalauto.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <Icon name="Car" size={20} className="text-white" />
                </div>
                <span className="font-bold">GlobalAuto</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Официальный импорт автомобилей из Кореи, Германии, США и Китая
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Страны</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🇰🇷 Южная Корея</li>
                <li>🇩🇪 Германия</li>
                <li>🇺🇸 США</li>
                <li>🇨🇳 Китай</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Как работаем</a></li>
                <li><a href="#" className="hover:text-primary">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 999 123-45-67</li>
                <li>info@globalauto.ru</li>
                <li>Москва, Ленинградский пр-т, 39</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 GlobalAuto. Все права защищены. ИНН 7707123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
