const categories = [
  {
    title: "Напитки",
    items: ["Чай", "Кофе", "Сахар", "Вода"],
  },
  {
    title: "Бытовая химия",
    items: ["Моющие средства", "Салфетки", "Мыло", "Уборочный инвентарь"],
  },
  {
    title: "Офисные товары",
    items: ["Бумага", "Ручки", "Папки", "Канцтовары"],
  },
  {
    title: "Хозтовары",
    items: ["Мусорные пакеты", "Диспенсеры", "Расходники"],
  },
];

const trustSegments = [
  "Офисы",
  "Бизнес-центры",
  "Магазины",
  "Корпоративные клиенты",
];

const advantages = [
  "Комплексное снабжение",
  "Корпоративные цены",
  "Быстрая доставка",
  "Постоянное наличие товаров",
  "Индивидуальный подход",
  "Работа с бизнесом и офисами",
];

const processSteps = [
  "Клиент отправляет заявку",
  "Мы подготавливаем предложение",
  "Согласовываем заказ",
  "Доставляем товары",
];

export default function Home() {
  return (
    <main className="text-[#1f2937]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1225] via-[#172a46] to-[#0d152a] text-white">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#16a34a]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#38bdf8]/20 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl px-6 pt-6 md:px-10 md:pt-8">
          <header className="sticky top-4 z-20 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl md:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="#" className="text-lg font-semibold tracking-tight">
                MyLineGroup
              </a>
              <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
                <a href="#about" className="transition hover:text-white">
                  О компании
                </a>
                <a href="#categories" className="transition hover:text-white">
                  Категории
                </a>
                <a href="#advantages" className="transition hover:text-white">
                  Преимущества
                </a>
                <a href="#contacts" className="transition hover:text-white">
                  Контакты
                </a>
              </nav>
              <a
                href="https://wa.me/79990000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-200"
              >
                WhatsApp
              </a>
            </div>
          </header>

          <div className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#86efac]/30 bg-[#86efac]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#86efac]">
                Комплексное снабжение офисов
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Комплексное снабжение офисов и бизнеса
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                Чай, кофе, бытовая химия, канцтовары и все необходимое для
                вашего офиса - в одном месте. Быстро, регулярно и по
                корпоративным условиям.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contacts"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#16a34a] px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#15803d]"
                >
                  Связаться
                </a>
                <a
                  href="mailto:info@mylinegroup.ru?subject=Запрос%20прайса"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Получить прайс
                </a>
                <a
                  href="#request-form"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Оставить заявку
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-7">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-300">
                Почему это удобно
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">1 поставщик</p>
                  <p className="mt-1 text-sm text-slate-300">
                    для чая, кофе, химии и канцелярии
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">24-48 часов</p>
                  <p className="mt-1 text-sm text-slate-300">
                    средний срок доставки по заявке
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">B2B сервис</p>
                  <p className="mt-1 text-sm text-slate-300">
                    персональное сопровождение и цены
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="pb-10 md:pb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">
              Работаем с
            </p>
            <div className="flex flex-wrap gap-2">
              {trustSegments.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              О компании
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f172a] md:text-4xl">
              Надежный поставщик для ежедневных задач офиса
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Наша компания занимается поставкой товаров для офисов и
              корпоративных клиентов. Мы помогаем бизнесу экономить время и
              получать все необходимое у одного надежного поставщика.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Работаем оперативно, предлагаем стабильные поставки, широкий
              ассортимент и удобное обслуживание.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#eff6ff] to-[#f8fafc] p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Подход
            </p>
            <ul className="mt-5 space-y-4 text-slate-800">
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Закрываем потребности офиса комплексно
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Планируем регулярные поставки без сбоев
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Формируем заказ под ваш бюджет и процессы
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-slate-200/80 bg-white/80 py-20 backdrop-blur md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold text-[#0f172a] md:text-4xl">
            Категории товаров
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Все ключевые группы товаров для бесперебойной работы офиса - в одном
            каталоге.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.5)]"
              >
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16a34a] transition group-hover:scale-125" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="advantages"
        className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24"
      >
        <h2 className="text-3xl font-semibold text-[#0f172a] md:text-4xl">
          Почему выбирают нас
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#16a34a]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-medium text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-[#0f172a] py-20 text-white md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Как мы работаем</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-sm uppercase tracking-wider text-[#86efac]">
                  Шаг {index + 1}
                </p>
                <p className="mt-2 text-lg text-slate-100">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contacts" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <h2 className="text-3xl font-semibold text-[#0f172a] md:text-4xl">Контакты</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]">
            <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
              Для связи
            </p>
            <div className="mt-4 space-y-3 text-slate-800">
              <p>
                Телефон: <a className="font-semibold" href="tel:+79990000000">+7 (999) 000-00-00</a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  className="font-semibold text-[#15803d]"
                  href="https://wa.me/79990000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Написать в WhatsApp
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="font-semibold" href="mailto:info@mylinegroup.ru">
                  info@mylinegroup.ru
                </a>
              </p>
              <p>Адрес: Москва, БЦ "Деловой квартал", ул. Примерная, д. 10</p>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">
              Место для карты: подключите iframe Яндекс.Карт или Google Maps.
            </div>
          </div>

          <form
            id="request-form"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
          >
            <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
              Оставить заявку
            </p>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm text-slate-700">Имя</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition placeholder:text-slate-400 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/15"
                  type="text"
                  placeholder="Ваше имя"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-slate-700">Телефон или Email</span>
                <input
                  required
                  name="contact"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition placeholder:text-slate-400 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/15"
                  type="text"
                  placeholder="+7 (...) или email@company.ru"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-slate-700">Комментарий</span>
                <textarea
                  name="comment"
                  rows={4}
                  className="w-full resize-y rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition placeholder:text-slate-400 focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/15"
                  placeholder="Что нужно поставить и в каком объеме"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0f172a] px-5 font-semibold text-white transition hover:bg-[#1e293b]"
              >
                Написать нам
              </button>
              <p className="text-xs text-slate-500">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-500">
        MyLineGroup - все для офиса и бизнеса в одном месте.
      </footer>
    </main>
  );
}
