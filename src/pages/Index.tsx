import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [carYear, setCarYear] = useState("");
  const [carValue, setCarValue] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!carYear || !carValue || !driverAge || !insuranceType) return;

    const basePrice = insuranceType === "osago" ? 8000 : 45000;
    const ageMultiplier = parseInt(driverAge) < 25 ? 1.5 : 1;
    const yearMultiplier =
      new Date().getFullYear() - parseInt(carYear) > 10 ? 0.8 : 1;
    const valueMultiplier = parseInt(carValue) > 2000000 ? 1.3 : 1;

    const price = basePrice * ageMultiplier * yearMultiplier * valueMultiplier;
    setCalculatedPrice(Math.round(price));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-orange-600" size={32} />
              <h1 className="text-2xl font-bold text-blue-900">АвтоЩит</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#calculator"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Калькулятор
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Страхование автомобилей
              <span className="block text-orange-300">онлайн за 5 минут</span>
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Оформляйте полисы ОСАГО и КАСКО не выходя из дома. Быстро,
              надежно, выгодно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Оформить полис
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Shield" className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-blue-900">ОСАГО</CardTitle>
                <CardDescription>
                  Обязательное страхование автогражданской ответственности
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-orange-600 mb-4">
                  от 8 000 ₽
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Оформить ОСАГО
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Car" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-blue-900">КАСКО</CardTitle>
                <CardDescription>
                  Добровольное страхование автомобиля от угона и ущерба
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  от 45 000 ₽
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Оформить КАСКО
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon
                    name="Headphones"
                    className="text-green-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-blue-900">Поддержка 24/7</CardTitle>
                <CardDescription>
                  Круглосуточная помощь при ДТП и консультации
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-4">
                  Бесплатно
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Калькулятор стоимости
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-blue-600 text-white">
                <CardTitle className="text-2xl text-center">
                  Рассчитайте стоимость полиса
                </CardTitle>
                <CardDescription className="text-center text-gray-100">
                  Введите данные для получения предварительного расчета
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="car-year">Год выпуска</Label>
                    <Input
                      id="car-year"
                      type="number"
                      placeholder="2020"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="car-value">Стоимость авто (₽)</Label>
                    <Input
                      id="car-value"
                      type="number"
                      placeholder="1500000"
                      value={carValue}
                      onChange={(e) => setCarValue(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="driver-age">Возраст водителя</Label>
                    <Input
                      id="driver-age"
                      type="number"
                      placeholder="30"
                      value={driverAge}
                      onChange={(e) => setDriverAge(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance-type">Тип страховки</Label>
                    <Select
                      value={insuranceType}
                      onValueChange={setInsuranceType}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="osago">ОСАГО</SelectItem>
                        <SelectItem value="kasko">КАСКО</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button
                  onClick={calculatePrice}
                  className="w-full mt-6 bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700"
                  size="lg"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border border-orange-200">
                    <div className="text-center">
                      <p className="text-lg text-gray-600 mb-2">
                        Предварительная стоимость:
                      </p>
                      <p className="text-3xl font-bold text-orange-600 mb-4">
                        {calculatedPrice.toLocaleString()} ₽
                      </p>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Оформить полис
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Phone" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
              <p className="text-gray-300">+7 (800) 555-35-35</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Mail" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@avtoshit.ru</p>
              <p className="text-gray-300">support@avtoshit.ru</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Москва, ул. Страховая, д. 15</p>
              <p className="text-gray-300">Офис 301</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" className="text-orange-600" size={24} />
              <h3 className="text-xl font-bold">АвтоЩит</h3>
            </div>
            <p className="text-gray-400">
              © 2024 АвтоЩит. Все права защищены. Лицензия ЦБ РФ №3456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
