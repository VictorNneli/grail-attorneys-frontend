import type { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  className?: string;
}

const PracticeAreaVisual = ({ icon: Icon, className = '' }: Props) => (
  <div className={`bg-maroon/10 flex items-center justify-center ${className}`}>
    <Icon className="text-maroon" size={48} strokeWidth={1.5} />
  </div>
);

export default PracticeAreaVisual;