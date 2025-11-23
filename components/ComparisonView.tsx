import React from 'react';
import { Phone } from '../types';

interface ComparisonViewProps {
  phones: Phone[];
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ phones }) => {
  if (phones.length === 0) return null;

  const specsKeys: (keyof Phone['specs'])[] = ['processor', 'ram', 'storage', 'display', 'camera', 'battery', 'os'];

  return (
    <div className="overflow-x-auto w-full pb-2">
        <div className="min-w-max bg-white border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="p-3 border-b border-r border-slate-100 bg-slate-50 w-24 sticky left-0 z-10">Spec</th>
                        {phones.map(phone => (
                            <th key={phone.id} className="p-3 border-b border-slate-100 min-w-[180px]">
                                <div className="flex flex-col items-center text-center">
                                    <img src={phone.imageUrl} className="w-16 h-16 object-contain mb-2 rounded-md" alt={phone.name}/>
                                    <span className="font-bold text-slate-800 text-sm">{phone.name}</span>
                                    <span className="text-indigo-600 text-xs font-semibold">₹{phone.price.toLocaleString('en-IN')}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-sm text-slate-700">
                    {specsKeys.map(key => (
                        <tr key={key} className="hover:bg-slate-50/50">
                            <td className="p-3 border-b border-r border-slate-100 font-semibold text-slate-500 capitalize bg-slate-50 sticky left-0 z-10">
                                {key}
                            </td>
                            {phones.map(phone => (
                                <td key={`${phone.id}-${key}`} className="p-3 border-b border-slate-100 text-center">
                                    {phone.specs[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className="p-3 border-r border-slate-100 font-semibold text-slate-500 bg-slate-50 sticky left-0 z-10">Features</td>
                        {phones.map(phone => (
                            <td key={`${phone.id}-features`} className="p-3 text-center align-top">
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {phone.features.slice(0, 3).map(f => (
                                        <span key={f} className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};
