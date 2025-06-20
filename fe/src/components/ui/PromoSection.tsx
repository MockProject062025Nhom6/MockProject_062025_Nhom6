import { Card, CardContent } from "@/components/ui/card"
import bgImage from "@/assets/background-login.jpg" // alias @ tùy cấu hình Vite/Webpack

const PromoSection = () => {
  return (
    <div
      className="flex-1 relative overflow-hidden bg-[length:1600px_1200px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-12 text-center">
        {/* Document/Card visual element */}
        <div className="mb-12 relative">
          <Card className="w-80 h-56 bg-white/20 backdrop-blur-sm border-white/30 border shadow-2xl rotate-3 text-left">
            <CardContent className="p-8">
              <div className="text-white/60 text-sm font-medium mb-4">EMPLOYMENT AGREEMENT</div>
              <div className="space-y-3">
                <div className="h-3 bg-white/30 rounded w-3/4"></div>
                <div className="h-3 bg-white/30 rounded w-full"></div>
                <div className="h-3 bg-white/30 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -bottom-4 -right-4 w-80 h-56 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 transform -rotate-2"></div>
        </div>

        {/* Main Text */}
        <div className="text-white mb-8">
          <div className="p-6 rounded-lg mb-4 inline-block">
            <h2 className="text-4xl font-bold leading-tight">
              Manage all <span className="text-yellow-400">HR Operations</span>{" "}
              from
            </h2>
          </div>
          <h2 className="text-4xl font-bold">the comfort of your home.</h2>
        </div>

        {/* Pagination dots */}
        <div className="flex space-x-3">
          <div className="w-8 h-2 bg-yellow-400 rounded-full" />
          <div className="w-8 h-2 bg-white/40 rounded-full" />
          <div className="w-8 h-2 bg-white/40 rounded-full" />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-20">
        <svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          className="text-white"
        >
          <path
            d="M50 100 Q60 90 70 95 Q80 100 90 95 Q100 90 110 95 Q120 100 130 95 Q140 90 150 100"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  )
}

export default PromoSection
