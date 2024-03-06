import { useEffect, useState } from "react";
import "./App.css";

const links = [
  { name: "My values", href: "#" },
  { name: "My Projects", href: "#" },
  { name: "My skills", href: "#" },
  { name: "My GitHub", href: "#" },
  { name: "Connect with me", href: "#" },
];

function App() {
  const WORK_HOURS_PER_DAY = 11;

  const [totalHours, setTotalHours] = useState(() => {
    const savedHours = localStorage.getItem("totalHours");
    return savedHours ? parseInt(savedHours, 10) : 5665;
  });

  useEffect(() => {
    const today = new Date().toDateString();

    const lastUpdate = localStorage.getItem("lastUpdate");

    if (lastUpdate !== today) {
      const newTotalHours = totalHours + WORK_HOURS_PER_DAY;
      setTotalHours(newTotalHours);

      localStorage.setItem("totalHours", newTotalHours.toString());
      localStorage.setItem("lastUpdate", today);
    }
  }, [totalHours]);

  const stats = [
    { name: "Programming languages", value: "12" },
    { name: "Hours worked", value: totalHours.toString() },
    { name: "Projects", value: "8" },
    { name: "Happy clients", value: "5" },
  ];

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Most of us have far more greatness than we ever dreamed we
              possessed
            </h2>
            <p className="mt-6 text-lg max-w-2xl leading-8 text-gray-300">
              Join me on a journey where each line of code tells a story of
              resilience, from the first 'Hello, World!' to launching a
              platforms that change people's lives.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Programming tools you can find most often in my code
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src="/images/react.jpg"
              alt="React"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="images/tailwindcss.webp"
              alt="Tailwind CSS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/nodejs.png"
              alt="Node JS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/bootstrap.png"
              alt="Bootstrap"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/mongodb.webp"
              alt="MongoDB"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
