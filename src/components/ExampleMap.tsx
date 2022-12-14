import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type Leaflet from 'leaflet'
import classNames from 'classnames';

const center: [number, number] = [51.505, -0.09]
const zoom = 13

type Location = {
  latitude: number;
  longitude: number;
};

interface MapProps {
  render?: (props: {
    location: Location | undefined,
    reCenter: () => void,
  }) => JSX.Element,
  onChange?: (location: Location | undefined) => void,
  value?: Location
  className?: string
}

function toLatLang(location: Location): Leaflet.LatLngLiteral
function toLatLang(location: Location | undefined): Leaflet.LatLngLiteral | undefined
function toLatLang(location: Location | undefined): Leaflet.LatLngLiteral | undefined {
  if (!location) return undefined
  return { lat: location.latitude, lng: location.longitude }
}

const Map: FC<MapProps> = ({ render, value, className, onChange }) => {
  const initialPosition: Location | undefined = useMemo(() => value ? { ...value } : undefined, [value])
  const [map, setMap] = useState<Leaflet.Map | null>(null)

  const [location, setLocation] = useState<Location | undefined>(value)

  const setLocationToMapCenter = useCallback(() => {
    if (map) {
      const mapCenter = map.getCenter()
      setLocation({
        latitude: mapCenter.lat,
        longitude: mapCenter.lng
      })
    } else {
      setLocation(undefined)
    }
  }, [map])

  const reCenter = useCallback(() => {
    if (map && initialPosition) {
      map.setView(toLatLang(initialPosition), zoom)
    }
  }, [initialPosition, map])

  useEffect(() => {
    if (!map) return

    map.on('move', setLocationToMapCenter)
    return () => {
      map.off('move', setLocationToMapCenter)
    }
  }, [map, setLocationToMapCenter])

  useEffect(() => {
    onChange?.(location)
  }, [location, onChange])


  const displayMap = useMemo(
    () => (
      <MapContainer
        center={toLatLang(initialPosition) ?? center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={setMap}
        className={classNames(className, "h-[67vh] w-full")}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [className, initialPosition],
  )

  return (
    <div>
      {displayMap}
      {render && render({ location, reCenter })}
    </div>
  )
}

export default Map
