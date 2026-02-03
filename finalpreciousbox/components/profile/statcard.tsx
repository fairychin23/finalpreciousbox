// components/profile/StatCard.tsx
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
}

export default function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur p-6 shadow-lg">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-3 text-3xl font-bold text-white">{value}</div>
    </div>
  );
}
