import React from 'react'
import Layout from '../../src/components/layout'

export default function Events() {
  return (
    <Layout>
      <section className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat">
        <div className="container px-4 mx-auto">
          <img
            className="mx-auto sm:max-w-sm mb-10"
            src="/metis-assets/illustrations/hardworking-man.png"
            alt=""
            data-config-id="01_image"
          />
          <form className="flex justify-center max-w-3xl mx-auto mb-16">
            <input
              className="w-2/3 p-4 text-xs placeholder-blueGray-800 font-bold font-heading bg-white focus:border-gray-500 focus:outline-none rounded-l"
              placeholder="Search, find any question you want to ask..."
            />
            <button className="pr-4 rounded-r bg-white text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
          <div className="flex flex-wrap justify-between -mx-3 mb-12">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div className="p-6 bg-white rounded shadow">
                <h4 className="mb-3 font-bold font-heading" data-config-id="01_category">
                  Category 1
                </h4>
                <ul className="list-disc list-inside text-xs text-blueGray-400">
                  <li className="mb-2" data-config-id="01_topic1">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-2" data-config-id="01_topic2">
                    Maecenas efficitur pharetra urna, eget ullamcorper neque gravida quis
                  </li>
                  <li className="mb-2" data-config-id="01_topic3">
                    Sed lorem ante
                  </li>
                  <li data-config-id="01_topic4">Ullamcorper neque gravida quis</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div className="p-6 bg-white rounded shadow">
                <h4 className="mb-3 font-bold font-heading" data-config-id="02_category">
                  Category 2
                </h4>
                <ul className="list-disc list-inside text-xs text-blueGray-400">
                  <li className="mb-2" data-config-id="02_topic1">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-2" data-config-id="02_topic2">
                    Maecenas efficitur pharetra urna, eget ullamcorper neque gravida quis
                  </li>
                  <li className="mb-2" data-config-id="02_topic3">
                    Sed lorem ante
                  </li>
                  <li data-config-id="02_topic4">Ullamcorper neque gravida quis</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div className="p-6 bg-white rounded shadow">
                <h4 className="mb-3 font-bold font-heading" data-config-id="03_category">
                  Category 3
                </h4>
                <ul className="list-disc list-inside text-xs text-blueGray-400">
                  <li className="mb-2" data-config-id="03_topic1">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-2" data-config-id="03_topic2">
                    Maecenas efficitur pharetra urna, eget ullamcorper neque gravida quis
                  </li>
                  <li className="mb-2" data-config-id="03_topic3">
                    Sed lorem ante
                  </li>
                  <li data-config-id="03_topic4">Ullamcorper neque gravida quis</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div className="p-6 bg-white rounded shadow">
                <h4 className="mb-3 font-bold font-heading" data-config-id="04_category">
                  Category 4
                </h4>
                <ul className="list-disc list-inside text-xs text-blueGray-400">
                  <li className="mb-2" data-config-id="04_topic1">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-2" data-config-id="04_topic2">
                    Maecenas efficitur pharetra urna, eget ullamcorper neque gravida quis
                  </li>
                  <li className="mb-2" data-config-id="04_topic3">
                    Sed lorem ante
                  </li>
                  <li data-config-id="04_topic4">Ullamcorper neque gravida quis</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-8">
              <li>
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
                  <span data-config-id="question1">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
                  <svg
                    className="w-4 h-4 ml-2 text-blueGray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="hidden mt-2 text-blueGray-400 font-normal leading-loose" data-config-id="answer1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec
                  hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                  porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque
                  rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus.
                  Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse
                  tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li>
                <button className="w-full flex justify-between items-center text-left font-bold font-heading text-blue-600 hover:text-blue-700">
                  <span data-config-id="question2">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
                  <svg
                    className="w-4 h-4 ml-2 text-blueGray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <p className="mt-2 text-blueGray-400 font-normal leading-loose" data-config-id="answer2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec
                  hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                  porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque
                  rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus.
                  Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse
                  tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li>
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
                  <span data-config-id="question3">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
                  <svg
                    className="w-4 h-4 ml-2 text-blueGray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="hidden mt-2 text-blueGray-400 font-normal leading-loose" data-config-id="answer3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec
                  hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                  porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque
                  rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus.
                  Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse
                  tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li>
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
                  <span data-config-id="question4">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
                  <svg
                    className="w-4 h-4 ml-2 text-blueGray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="hidden mt-2 text-blueGray-400 font-normal leading-loose" data-config-id="answer4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec
                  hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                  porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque
                  rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus.
                  Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse
                  tempus erat non dui volutpat eleifend.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
