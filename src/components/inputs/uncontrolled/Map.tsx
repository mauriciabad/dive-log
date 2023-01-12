import dynamic from 'next/dynamic'
import { TbLoader } from 'react-icons/tb'

const Map = dynamic(() => import('./MapRaw'), {
  loading: () => (
    <div className="flex h-[67vh] w-full items-center justify-center bg-[#f2efe9]">
      <TbLoader className="h-4 w-4 animate-spin" />
      <span className="animate-pulse">Loading map...</span>
    </div>
  ),
  ssr: false,
})

export default Map
