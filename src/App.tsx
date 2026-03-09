/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Truck, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Phone, 
  Globe,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: 'Дар роҳ' | 'Расид' | 'Дар анбор' | 'Интизорӣ';
  date: string;
  weight: string;
}

const MOCK_SHIPMENTS: Shipment[] = [
  { id: 'MC-78234', origin: 'Гуанчжоу, Чин', destination: 'Душанбе, Тоҷикистон', status: 'Дар роҳ', date: '2024-03-08', weight: '45кг' },
  { id: 'MC-78235', origin: 'Иу, Чин', destination: 'Хуҷанд, Тоҷикистон', status: 'Расид', date: '2024-03-05', weight: '12кг' },
  { id: 'MC-78236', origin: 'Пекин, Чин', destination: 'Душанбе, Тоҷикистон', status: 'Дар анбор', date: '2024-03-09', weight: '8.5кг' },
];

export default function App() {
  const [trackingId, setTrackingId] = useState('');
  const [searchResult, setSearchResult] = useState<Shipment | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const found = MOCK_SHIPMENTS.find(s => s.id.toLowerCase() === trackingId.toLowerCase());
      setSearchResult(found || null);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Truck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              MUHAMMAD<span className="text-blue-600">CARGO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Асосӣ</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Хизматрасониҳо</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Нархнома</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Тамос</a>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">
            Кабинети шахсӣ
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6 text-slate-900">
              Интиқоли боэътимоди борҳо танҳо аз <span className="text-blue-600 italic">Хитой</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              MUHAMMADCARGO - шарики боэътимоди шумо дар соҳаи логистика. Мо борҳои шуморо танҳо аз Хитой ба Тоҷикистон бо кафолат мерасонем.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-md">
              <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-100">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-slate-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Рақами пайгирӣ (масалан: MC-78234)" 
                    className="w-full outline-none text-slate-700 font-medium"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSearching}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                >
                  {isSearching ? 'Ҷустуҷӯ...' : 'Пайгирӣ'}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium uppercase tracking-wider">100% Кафолат</span>
                </div>
                <p className="text-lg font-semibold">Интиқоли бехатар ва сареъ</p>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">15к+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Борҳои расонидашуда</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search Results Area */}
        <AnimatePresence>
          {searchResult && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16 bg-white rounded-3xl p-8 shadow-xl border border-blue-100"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Натиҷаи пайгирӣ: {searchResult.id}</h2>
                  <p className="text-slate-500">Маълумоти охирин дар таърихи {searchResult.date}</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${
                  searchResult.status === 'Расид' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {searchResult.status}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Аз куҷо</p>
                    <p className="font-semibold text-slate-800">{searchResult.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <ChevronRight className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Ба куҷо</p>
                    <p className="font-semibold text-slate-800">{searchResult.destination}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Package className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Вазн</p>
                    <p className="font-semibold text-slate-800">{searchResult.weight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Хизматрасониҳои мо</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Интиқоли байналмилалӣ', desc: 'Аз тамоми гӯшаву канори ҷаҳон борҳои шуморо меорем.' },
              { icon: Clock, title: 'Суръати тез', desc: 'Мӯҳлати интиқол аз 5 то 12 рӯз вобаста ба кишвар.' },
              { icon: ShieldCheck, title: 'Бехатарӣ', desc: 'Ҳамаи борҳо суғурта карда мешаванд ва бехатар мерасанд.' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Shipments Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Борҳои охирин</h2>
            <button className="text-blue-600 text-sm font-semibold hover:underline">Ҳамааш</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-widest font-bold">
                  <th className="px-8 py-4">ID-и Бор</th>
                  <th className="px-8 py-4">Самт</th>
                  <th className="px-8 py-4">Ҳолат</th>
                  <th className="px-8 py-4">Таърих</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_SHIPMENTS.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-8 py-5 font-mono text-sm font-medium text-blue-600">{shipment.id}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {shipment.origin.split(',')[0]} <ChevronRight className="w-3 h-3 text-slate-300" /> {shipment.destination.split(',')[0]}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${
                        shipment.status === 'Расид' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-500">{shipment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="text-blue-500 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">MUHAMMADCARGO</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Мо хизматрасонии баландсифати логистикиро пешниҳод мекунем. Борҳои шумо дар дасти боэътимод ҳастанд.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Самтҳо</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer">Гуанчжоу, Хитой</li>
              <li className="hover:text-white cursor-pointer">Иу, Хитой</li>
              <li className="hover:text-white cursor-pointer">Пекин, Хитой</li>
              <li className="hover:text-white cursor-pointer">Урумчи, Хитой</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Тамос</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" /> 204188787
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" /> Тоҷикистон, Душанбе
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-500" /> 08:00 - 20:00 (Ҳар рӯз)
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2024 MUHAMMADCARGO. Ҳамаи ҳуқуқҳо маҳфузанд.
        </div>
      </footer>
    </div>
  );
}
