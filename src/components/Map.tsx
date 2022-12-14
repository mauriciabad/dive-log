import dynamic from "next/dynamic"
import type { FC } from "react";
import React from "react"
import type { MapContainer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'

const DynamicMapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer, { ssr: false })


const Map: FC<Parameters<typeof MapContainer>[0]> = (props) => {
  return <DynamicMapContainer {...props} />
}

export default Map