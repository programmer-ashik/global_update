
import Image from "next/image"

const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]
const values = [
  {
    name: 'Be world-class',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Share everything you know',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Always learning',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Be supportive',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Take responsibility',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Enjoy downtime',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]
const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]
export default function About() {

  return (
    <div className=" bg-[url('/wavey-fingerprint.svg')] text-hero">

      <main className="isolate py-12">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-hero sm:text-6xl">
                    {`We’re changing the way people connect.`}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-hero_p sm:max-w-md lg:max-w-none">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
                    labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
                    mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat
                    aliqua.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative h-[300px] w-[200px]">
                      <Image
                        fill
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative h-[300px] w-[200px]">
                      <Image
                        fill
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative h-[300px] w-[200px]">
                      <Image
                        fill
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative h-[300px] w-[200px]">
                      <Image
                        fill
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative h-[300px] w-[200px]">
                      <Image
                        fill
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-hero sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-hero_p">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                  eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                  Eleifend egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-hero_p">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
                    amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius
                    sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-10">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                    ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-hero_p">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-hero">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 relative h-full sm:h-[500px] sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            fill
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-hero sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-hero_p">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-hero">{value.name}</dt>
                <dd className="mt-1 text-hero_p">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[40rem] w-[80rem] flex-none text-btn" aria-hidden="true">
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-hero">
              {`Trusted by the world’s most innovative teams`}
            </h2>
            <div className=" mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                height={100}
                width={158}
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="https://cdn.worldvectorlogo.com/logos/huawei.svg"
                alt="Transistor"


              />
              <Image
                width={158}
                height={100}
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="https://logovectorseek.com/wp-content/uploads/2021/05/rosenberger-group-logo-vector.png"
                alt="Reform"


              />
              <Image width={158} height={100}
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJhvsub_gaskGPgA3Vtha9yhLR95BF7826g&s"
                alt="Tuple"


              />
              <Image
                className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://seeklogo.com/images/B/Bose-logo-D73460CBB7-seeklogo.com.png"
                alt="SavvyCal"
                width={158} height={100}

              />
              <Image width={100} height={100}
                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="data:image/png;base64,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"
                alt="Statamic"
              />
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-hero sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-hero_p">
              Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere
              repellendus ut eos dolores similique.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image width={100} height={100} className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-hero">{person.name}</h3>
                <p className="text-sm leading-6 text-hero_p">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
