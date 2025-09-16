import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import HeaderActionUser from './header-action-user';

export default function HeaderActionsMobile() {
  return (
    <div className="ml-auto md:hidden flex items-center gap-1">
      <HeaderActionUser />
    </div>
  );
}
