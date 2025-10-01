import HeaderActionUser from './header-action-user'

export default function HeaderActions() {
  return (
    <div className="ml-auto hidden md:flex md:flex-1 md:items-center md:gap-3">
      <div className="ml-auto flex items-center gap-1">
        <HeaderActionUser />
      </div>
    </div>
  )
}
