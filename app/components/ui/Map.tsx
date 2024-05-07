import { useEffect, useRef, useState } from 'react'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import type { ClusterFeature, PointFeature } from 'supercluster';
import Supercluster from 'supercluster'
import { getDistanceBetween2LatLongPointsInKm } from '~/utils/getDistanceBetween2LatLongPointsInKm'

interface IProps {
  apiKey: string
  markersCoordinates: { lat: number; lng: number; onClick?: () => void }[]
  onClick?: (event: google.maps.MapMouseEvent) => void
  stopMovingMap?: boolean
  doCluster?: boolean
  recenterMapOnMarkerChange?: boolean
}

interface IPropsMap {
  markersCoordinates: { lat: number; lng: number; onClick?: () => void }[]
  onClick?: (event: google.maps.MapMouseEvent) => void
  stopMovingMap?: boolean
  doCluster?: boolean
  recenterMapOnMarkerChange?: boolean
}

type MapType = google.maps.Map & { zoom: number }

const superCluster = new Supercluster({
  radius: 40,
  maxZoom: 20,
})

const formatDataToGeoJsonPoints = (
  markers: { lng: number; lat: number }[],
): GeoJSON.Feature<GeoJSON.Point>[] => {
  return markers.map((marker) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [marker.lng, marker.lat],
    },
    properties: { cluster: false, ...marker, points: [] },
  }))
}

const getLabel = (pointCount: number): google.maps.MarkerLabel => {
  return { text: pointCount.toString(), color: '#353535', fontWeight: 'bold' }
}

const MapComponent = ({
  apiKey,
  markersCoordinates,
  onClick,
  stopMovingMap,
  doCluster,
  recenterMapOnMarkerChange,
}: IProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <Map
      recenterMapOnMarkerChange={recenterMapOnMarkerChange}
      doCluster={doCluster}
      stopMovingMap={stopMovingMap}
      markersCoordinates={markersCoordinates}
      onClick={onClick}
    />
  )
}

const Map = ({
  markersCoordinates,
  onClick,
  stopMovingMap,
  doCluster,
  recenterMapOnMarkerChange,
}: IPropsMap) => {
  const [centerLocation, setCenterLocation] = useState({
    lat: 51.5072,
    lng: 0.1276,
  })
  const [initialZoom, setInitialZoom] = useState(14)
  const [zoom, setZoom] = useState<number>(14)
  const [bounds, setBounds] = useState<GeoJSON.BBox>([0, 0, 0, 0])
  const [clusters, setClusters] = useState<ClusterFeature<any>[]>()
  const [firstLoad, setFirstLoad] = useState(true)
  const mapRef = useRef<MapType>()
  const [mapClick, setMapClick] = useState(true)

  const recenterMap = () => {
    const defaultPosition = { lat: 51.5072, lng: 0.1276 }
    if (markersCoordinates.length === 0 && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setCenterLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
      )
    } else if (markersCoordinates.length === 0) {
      setCenterLocation(defaultPosition)
    } else if (markersCoordinates.length === 1) {
      setCenterLocation({
        lat: markersCoordinates[0].lat,
        lng: markersCoordinates[0].lng,
      })
    } else {
      const allLongitudes = markersCoordinates.map((marker) => marker.lng)
      const maxLongitude = Math.max(...allLongitudes)
      const minLongitude = Math.min(...allLongitudes)
      const averageLongitude =
        allLongitudes.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0,
        ) / allLongitudes.length

      const allLatitudes = markersCoordinates.map((marker) => marker.lat)
      const maxLatitude = Math.max(...allLatitudes)
      const minLatitude = Math.min(...allLatitudes)
      const averageLatitudes =
        allLatitudes.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0,
        ) / allLatitudes.length

      const distanceBetweenToPoints = getDistanceBetween2LatLongPointsInKm(
        maxLatitude,
        maxLongitude,
        minLatitude,
        minLongitude,
      )
      if (markersCoordinates.length !== 1) {
        const zoom = Math.log2(40000 / (distanceBetweenToPoints / 2)) - 3
        setInitialZoom(zoom)
      }
      setCenterLocation({ lat: averageLatitudes, lng: averageLongitude })
    }
  }

  useEffect(() => {
    if (doCluster && markersCoordinates?.length && mapRef.current) {
      superCluster.load(
        formatDataToGeoJsonPoints(markersCoordinates) as PointFeature<
          GeoJSON.Feature<GeoJSON.Point>
        >[],
      )
      setClusters(superCluster.getClusters(bounds, zoom))
    }
  }, [markersCoordinates, bounds, zoom])

  useEffect(() => {
    if (recenterMapOnMarkerChange && !mapClick) {
      recenterMap()
    }
  }, [markersCoordinates])

  const handleClusterClick = ({
    id,
    lat,
    lng,
  }: {
    id: number
    lat: number
    lng: number
  }) => {
    const expansionZoom = Math.min(superCluster.getClusterExpansionZoom(id), 20)
    mapRef.current?.setZoom(expansionZoom)
    mapRef.current?.panTo({ lat, lng })
  }

  const handleBoundsChanged = () => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds()?.toJSON()
      setBounds([
        bounds?.west || 0,
        bounds?.south || 0,
        bounds?.east || 0,
        bounds?.north || 0,
      ])
    }
  }

  const handleZoomChanged = () => {
    if (mapRef.current) {
      setZoom(mapRef.current?.zoom)
    }
  }

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map as MapType
  }

  useEffect(() => {
    if (firstLoad) {
      recenterMap()
      setFirstLoad(false)
    }
  }, [setFirstLoad, firstLoad, markersCoordinates])

  return (
    <GoogleMap
      onLoad={handleMapLoad}
      onBoundsChanged={handleBoundsChanged}
      onZoomChanged={handleZoomChanged}
      zoom={initialZoom}
      center={centerLocation}
      mapContainerStyle={{ height: '100%', width: '100%' }}
      onClick={async (props) => {
        await setMapClick(true)
        if (onClick) {
          await onClick(props)
        }
        setMapClick(false)
      }}
      options={{
        streetViewControl: false,
        gestureHandling: stopMovingMap ? 'none' : 'cooperative',
      }}
    >
      {doCluster
        ? clusters?.map(({ id, geometry, properties }) => {
            const [lng, lat] = geometry.coordinates
            const { cluster, point_count, onClick } = properties
            return cluster ? (
              <MarkerF
                key={`cluster-${id}`}
                onClick={() =>
                  handleClusterClick({ id: id as number, lat, lng })
                }
                position={{ lat, lng }}
                label={getLabel(point_count)}
              />
            ) : (
              <MarkerF
                key={`location-${id}`}
                position={{ lat, lng }}
                onClick={onClick}
              />
            )
          })
        : markersCoordinates.map((markerCoordinates, index) => {
            return (
              <MarkerF
                key={'mapMarker' + index}
                position={markerCoordinates}
                onClick={markerCoordinates.onClick}
              />
            )
          })}
    </GoogleMap>
  )
}

export { MapComponent as Map }
