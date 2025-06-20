import AuthPanelImg from "@/assets/images/auth_panel.jpg"

const AuthInfoPanel = () => {
  return (
    <div className="relative w-full h-screen after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary/60">
      <img
        src={AuthPanelImg}
        alt="Auth Info Panel"
        className="h-full w-full object-cover"
      />
      <div className="text-muted-foreground absolute bottom-3/12 left-0 right-0 z-50 p-8 pr-40">
        <span className="text-4xl font-bold text-white">
          Manage all <span className="text-[#FFC20E]">HR Operations</span> from
          the comfort of your home.
        </span>
      </div>
    </div>
  )
}

export default AuthInfoPanel
