import React from "react";
import Image from "next/image";

function GalleryStucwerk() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container max-w-7xl px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              JRM Afbouw | Stucwerk | Fotogalerij
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Als stukadoor in Tilburg en omgeving zorgen we ervoor dat ieder
              project met succes wordt afgerond. Door middel van puur
              vakmanschap, enthousiasme en veel toewijding voor ons beroep
              krijgen we dat voor elkaar. Daarnaast gebruiken we altijd de
              modernste technieken en materialen.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="transition duration-500 ease-in-out bg-red-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...  w-full object-cover h-full object-center block rounded-lg"
                  src="/JRM 12.jpg"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="w-full object-cover h-full object-center block rounded-lg"
                  src="/JRM 2.jpg"
                  width={501}
                  height={301}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="w-full h-full object-cover object-center block rounded-lg"
                  src="/JRM 20.jpg"
                  width={600}
                  height={360}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="w-full h-full object-cover object-center block rounded-lg"
                  src="/JRM 23.jpg"
                  width={601}
                  height={361}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="w-full object-cover h-full object-center block rounded-lg"
                  src="/JRM 12.jpg"
                  width={502}
                  height={302}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="JRM Afbouw | Stucwerk | Fotogalerij"
                  className="w-full object-cover h-full object-center block rounded-lg"
                  src="/JRM 12.jpg"
                  width={503}
                  height={303}
                />
              </div>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="transition duration-500 ease-in-out bg-red-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...  w-full object-cover h-full object-center block rounded-lg"
                    src="/JRM 2.jpg"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="w-full object-cover h-full object-center block rounded-lg"
                    src="/JRM 23.jpg"
                    width={501}
                    height={301}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="w-full h-full object-cover object-center block rounded-lg"
                    src="/JRM 20.jpg"
                    width={600}
                    height={360}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="w-full h-full object-cover object-center block rounded-lg"
                    src="/JRM 13.jpg"
                    width={601}
                    height={361}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="w-full object-cover h-full object-center block rounded-lg"
                    src="/JRM 4.jpg"
                    width={502}
                    height={302}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="JRM Afbouw | Stucwerk | Fotogalerij"
                    className="w-full object-cover h-full object-center block rounded-lg"
                    src="/JRM 2.jpg"
                    width={503}
                    height={303}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryStucwerk;
