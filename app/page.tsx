import './globals.css';
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircleIcon, LightBulbIcon, DocumentTextIcon, ChartBarIcon, CurrencyEuroIcon, ServerStackIcon, RocketLaunchIcon, CalendarDaysIcon, CalculatorIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Interfaces voor typeveiligheid
interface Contract {
  id: string;
  adres: string;
  huurder: string;
  huidigeHuur: number;
  laatsteIndexatie: string; // YYYY-MM-DD
  status: 'Actief' | 'Inactief' | 'Verlopen';
}

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mb-4">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Mock data voor de demo
const mockContracts: Contract[] = [
  { id: 'C001', adres: 'Kerkstraat 12, Amsterdam', huurder: 'Jansen B.V.', huidigeHuur: 1500, laatsteIndexatie: '2023-01-01', status: 'Actief' },
  { id: 'C002', adres: 'Nieuwmarkt 34, Utrecht', huurder: 'De Vries VOF', huidigeHuur: 950, laatsteIndexatie: '2023-03-15', status: 'Actief' },
  { id: 'C003', adres: 'Stationsplein 1, Rotterdam', huurder: 'Pietersen Holding', huidigeHuur: 2100, laatsteIndexatie: '2022-11-01', status: 'Actief' },
  { id: 'C004', adres: 'Damrak 1, Amsterdam', huurder: 'Bakker & Zoon', huidigeHuur: 1200, laatsteIndexatie: '2023-07-01', status: 'Actief' },
  { id: 'C005', adres: 'Oudegracht 50, Utrecht', huurder: 'Smit Vastgoed', huidigeHuur: 800, laatsteIndexatie: '2022-09-01', status: 'Verlopen' },
];

// Dashboard Demo Component
const DashboardDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'indexatie' | 'contracten' | 'overzicht'>('indexatie');

  // Huurindexatie State
  const [huidigeHuur, setHuidigeHuur] = useState<number>(1200);
  const [indexatiePercentage, setIndexatiePercentage] = useState<number>(5.5);
  const [laatsteIndexatieDatum, setLaatsteIndexatieDatum] = useState<string>('2023-01-01');
  const [nieuweHuur, setNieuweHuur] = useState<number | null>(null);

  const berekenNieuweHuur = () => {
    const percentage = indexatiePercentage / 100;
    const berekendeHuur = huidigeHuur * (1 + percentage);
    setNieuweHuur(parseFloat(berekendeHuur.toFixed(2)));
  };

  // Contracten State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredContracts = useMemo(() => {
    return mockContracts.filter(contract =>
      contract.adres.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.huurder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Overzicht Statistieken
  const totaalActieveContracten = useMemo(() => mockContracts.filter(c => c.status === 'Actief').length, []);
  const gemiddeldeHuurprijs = useMemo(() => {
    const actieveContracten = mockContracts.filter(c => c.status === 'Actief');
    if (actieveContracten.length === 0) return 0;
    const somHuur = actieveContracten.reduce((sum, c) => sum + c.huidigeHuur, 0);
    return parseFloat((somHuur / actieveContracten.length).toFixed(2));
  }, []);
  const contractenBinnen3MaandenIndexatie = useMemo(() => {
    const today = new Date();
    return mockContracts.filter(c => {
      const lastIndexation = new Date(c.laatsteIndexatie);
      const nextIndexation = new Date(lastIndexation.getFullYear() + 1, lastIndexation.getMonth(), lastIndexation.getDate());
      const diffTime = nextIndexation.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 && diffDays <= 90; // Binnen 90 dagen (3 maanden)
    }).length;
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Interactieve Dashboard Demo</h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Ervaar de kracht van PropLease AI met een blik op ons intuïtieve dashboard. Pas parameters aan en zie direct de impact.
      </p>

      <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12 border border-gray-200">
        {/* Tab Navigatie */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('indexatie')}
            className={`py-3 px-6 text-lg font-medium ${activeTab === 'indexatie' ? 'border-b-4 border-indigo-600 text-indigo-700' : 'text-gray-600 hover:text-indigo-700'}`}
          >
            Huurindexatie
          </button>
          <button
            onClick={() => setActiveTab('contracten')}
            className={`py-3 px-6 text-lg font-medium ${activeTab === 'contracten' ? 'border-b-4 border-indigo-600 text-indigo-700' : 'text-gray-600 hover:text-indigo-700'}`}
          >
            Contracten Overzicht
          </button>
          <button
            onClick={() => setActiveTab('overzicht')}
            className={`py-3 px-6 text-lg font-medium ${activeTab === 'overzicht' ? 'border-b-4 border-indigo-600 text-indigo-700' : 'text-gray-600 hover:text-indigo-700'}`}
          >
            Statistieken
          </button>
        </div>

        {/* Tab Inhoud */}
        <div>
          {activeTab === 'indexatie' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Bereken uw nieuwe huurprijs</h3>
                <p className="text-gray-600">Voer de huidige huur, het indexatiepercentage en de laatste indexatiedatum in om direct de nieuwe huurprijs te berekenen.</p>

                <div>
                  <label htmlFor="huidigeHuur" className="block text-sm font-medium text-gray-700 mb-1">Huidige Huurprijs (€)</label>
                  <input
                    type="number"
                    id="huidigeHuur"
                    value={huidigeHuur}
                    onChange={(e) => setHuidigeHuur(parseFloat(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg p-3"
                    placeholder="1200"
                  />
                </div>
                <div>
                  <label htmlFor="indexatiePercentage" className="block text-sm font-medium text-gray-700 mb-1">Indexatie Percentage (%)</label>
                  <input
                    type="number"
                    id="indexatiePercentage"
                    value={indexatiePercentage}
                    onChange={(e) => setIndexatiePercentage(parseFloat(e.target.value))}
                    className="mt-1 block