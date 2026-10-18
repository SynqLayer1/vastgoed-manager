import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PropLease AI | AI-gestuurde Contract- & Huurindexering voor Vastgoed',
  description: 'Optimaliseer uw vastgoedbeheer met PropLease AI: de intelligente oplossing voor automatische contractanalyse en nauwkeurige huurindexering voor vastgoedbeheerders.',
  keywords: ['PropLease AI', 'vastgoedbeheer', 'AI', 'contractanalyse', 'huurindexering', 'vastgoed', 'automatisering', 'onroerend goed'],
  openGraph: {
    title: 'PropLease AI | AI-gestuurde Contract- & Huurindexering voor Vastgoed',
    description: 'Optimaliseer uw vastgoedbeheer met PropLease AI: de intelligente oplossing voor automatische contractanalyse en nauwkeurige huurindexering voor vastgoedbeheerders.',
    url: 'https://www.propleaseai.com', // Vervang met de daadwerkelijke URL
    siteName: 'PropLease AI',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Sectie */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            PropLease AI
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8">
            Uw AI-partner voor intelligente contract- en huurindexering in vastgoed.
          </p>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Stroomlijn uw vastgoedbeheer, elimineer fouten en maximaliseer uw rendement met onze geavanceerde AI-oplossing.
          </p>
          <Link href="#contact" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Vraag een Demo Aan
          </Link>
        </div>
      </section>

      {/* Introductie Sectie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            De Uitdaging van Vastgoedbeheer
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Vastgoedbeheerders staan voor complexe taken: het handmatig analyseren van talloze contracten, het nauwkeurig indexeren van huren volgens diverse clausules, en het waarborgen van compliance. Dit is tijdrovend, foutgevoelig en kan leiden tot aanzienlijke inkomstenderving.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            PropLease AI is ontwikkeld om deze uitdagingen aan te gaan en uw operationele efficiëntie drastisch te verbeteren.
          </p>
        </div>
      </section>

      {/* Hoe PropLease AI Helpt Sectie */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Hoe PropLease AI Uw Werk Vereenvoudigt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Automatische Contractanalyse
              </h3>
              <p className="text-gray-700">
                Onze AI leest en interpreteert uw huurcontracten met ongekende snelheid en nauwkeurigheid. Identificeer direct belangrijke clausules, data en voorwaarden, zonder handmatige doorzoeking.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Nauwkeurige Huurindexering
              </h3>
              <p className="text-gray-700">
                Genereer automatisch correcte huurindexaties op basis van de specifieke indexeringsclausules in elk contract en actuele CBS-cijfers. Nooit meer handmatige berekeningen of gemiste kansen.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Compliance & Risicobeheer
              </h3>
              <p className="text-gray-700">
                Zorg ervoor dat u altijd voldoet aan de wettelijke eisen en contractuele afspraken. PropLease AI signaleert potentiële risico's en helpt u proactief te handelen.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Tijdsbesparing & Efficiëntie
              </h3>
              <p className="text-gray-700">
                Bespaar honderden uren per jaar die u anders zou besteden aan repetitieve administratieve taken. Focus op strategische beslissingen en groei.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Inzichtelijke Rapporten
              </h3>
              <p className="text-gray-700">
                Krijg direct toegang tot overzichtelijke dashboards en gedetailleerde rapporten over uw contractportfolio, indexatiestatus en financiële prognoses.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Schaalbaar & Betrouwbaar
              </h3>
              <p className="text-gray-700">
                Of u nu tientallen of duizenden vastgoedobjecten beheert, PropLease AI schaalt mee met uw behoeften en biedt een robuuste, betrouwbare oplossing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sectie */}
      <section id="contact" className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar om uw Vastgoedbeheer te Transformeren?
          </h2>
          <p className="text-xl mb-8">
            Ontdek hoe PropLease AI u kan helpen om efficiënter te werken, fouten te minimaliseren en uw rendement te maximaliseren.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Neem Contact Op
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <p>&copy; {new Date().getFullYear()} PropLease AI. Alle rechten voorbehouden.</p>
          <div className="mt-4 text-sm">
            <Link href="/privacybeleid" className="hover:text-white mx-2">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white mx-2">
              Algemene Voorwaarden