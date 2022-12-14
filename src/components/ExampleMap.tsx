import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type Leaflet from 'leaflet'

const center: [number, number] = [51.505, -0.09]
const zoom = 13


interface PositionProps {
  map: Leaflet.Map,
  render: RenderMapInfo,
}

const DisplayPosition: FC<PositionProps> = ({ map, render }) => {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return render({
    latitude: position.lat,
    longitude: position.lng,
    reCenter: onClick,
  })
}

type RenderMapInfo = (props: {
  latitude: number,
  longitude: number,
  reCenter: () => void,
}) => JSX.Element
interface MapProps {
  renderMapInfo: RenderMapInfo,
}

const Map: FC<MapProps> = ({ renderMapInfo }) => {
  const [map, setMap] = useState<Leaflet.Map | null>(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={setMap}
        style={{ height: 400, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [],
  )

  return (
    <div>
      {map && <DisplayPosition map={map} render={renderMapInfo} />}
      {displayMap}
    </div>
  )
}

export default Map
