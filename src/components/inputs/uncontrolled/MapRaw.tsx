import { MapContainer, Rectangle, TileLayer, useMap, useMapEvent, Marker, Popup } from 'react-leaflet'
import type { FC } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type Leaflet from 'leaflet'
import classNames from 'classnames';
import { TbCurrentLocation } from 'react-icons/tb';
import type { LeafletMouseEventHandlerFn } from 'leaflet';
import { Icon } from 'leaflet';
import { useEventHandlers } from '@react-leaflet/core'
import IconMapPin from "../../../assets/icon-map-pin.svg"

import 'leaflet/dist/leaflet.css'

export type Location = {
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
  markers?: {
    location: Location
    text?: string
  }[]
  className?: string
  showCenterMarker?: boolean
}

function toLatLang(location: Location): Leaflet.LatLngLiteral
function toLatLang(location: Location | undefined): Leaflet.LatLngLiteral | undefined
function toLatLang(location: Location | undefined): Leaflet.LatLngLiteral | undefined {
  if (!location) return undefined
  return { lat: location.latitude, lng: location.longitude }
}

const Map: FC<MapProps> = ({ render, value, className, onChange, showCenterMarker, markers }) => {
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
      map.setView(toLatLang(initialPosition), 13)
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

  useEffect(() => {
    if (!map) return
    map.on('click', (e) => {
      map.setView(e.latlng, map.getZoom())
    })
  })

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={toLatLang(initialPosition) ?? [0, 0]}
        zoom={initialPosition ? 13 : 1}
        ref={setMap}
        className={classNames(className, "h-[67vh] w-full z-0")}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MinimapControl />

        {markers?.map(({ text, location: { latitude, longitude } }) => (
          <Marker
            key={`${latitude}-${longitude}`}
            position={{
              lat: latitude,
              lng: longitude,
            }}
            icon={new Icon({ iconUrl: IconMapPin.src, iconAnchor: [94 * 0.4 * 0.5, 128 * 0.4 * 1], iconSize: [94 * 0.4, 128 * 0.4] })}
          >
            {text && <Popup>{text}</Popup>}
          </Marker>
        ))}
      </MapContainer>
    ),
    [className, initialPosition, markers],
  )

  return (
    <div className='relative'>
      {displayMap}
      {showCenterMarker && <div className='absolute inset-0 pointer-events-none flex items-center justify-center z-10'>
        <TbCurrentLocation className='h-12 w-12 absolute text-black opacity-20 stroke-[4px] -z-1' />
        <TbCurrentLocation className='h-12 w-12 absolute text-white stroke-[1.5px]' />
      </div>}
      {render && render({ location, reCenter })}
    </div>
  )
}


// ---------------- Minimap


const MinimapBounds: FC<{ parentMap: Leaflet.Map }> = ({ parentMap }) => {
  const minimap = useMap()

  const onClick: LeafletMouseEventHandlerFn = useCallback(
    (e) => { parentMap.flyTo(e.latlng, parentMap.getZoom()) },
    [parentMap],
  )
  useMapEvent('click', onClick)

  const [bounds, setBounds] = useState(parentMap.getBounds())
  const onMove = useCallback(() => {
    setBounds(parentMap.getBounds())
    minimap.setView(parentMap.getCenter(), 0)
  }, [minimap, parentMap])

  const handlers = useMemo(() => ({ move: onMove, zoom: onMove }), [onMove])
  // The types of useEventHandlers are wrong, they have to fix this bug https://github.com/PaulLeCam/react-leaflet/issues/953
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEventHandlers({ instance: parentMap, context: undefined as any }, handlers)

  return <Rectangle bounds={bounds} pathOptions={{ weight: 1, lineJoin: 'round' }} />
}

const MinimapControl: FC = () => {
  const parentMap = useMap()

  // Memoize the minimap so it's not affected by position changes
  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={0}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} />
      </MapContainer>
    ),
    [parentMap],
  )

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  )
}

export default Map
