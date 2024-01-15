// Dada la siguiente geocerca, escriba un algoritmo que pida al usuario un
// valor lat y lng representando la ubicación de una unidad, y devuleva si
// dicha unidad está dentro o fuera de la geocerca radial.

const { read, readNumber, print } = require('../helpers')

class RadialGeofence {
  constructor(latCenter, lngCenter, radius) {
    this.latCenter = latCenter
    this.lngCenter = lngCenter
    this.radius = radius
  }

  calculateDistance = (lat1, lng1, lat2, lng2) => {
    const radiusEarth = 6371.0

    const lat1Rad = this.degreesToRadians(lat1)
    const lng1Rad = this.degreesToRadians(lng1)
    const lat2Rad = this.degreesToRadians(lat2)
    const lng2Rad = this.degreesToRadians(lng2)

    const dlat = lat2Rad - lat1Rad
    const dlng = lng2Rad - lng1Rad

    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlng / 2) ** 2

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = radiusEarth * c

    return distance
  }

  degreesToRadians = (degrees) => (degrees * Math.PI) / 180

  verifyLocation = (latUnit, lngUnit) => {
    const distance = this.calculateDistance(
      latUnit,
      lngUnit,
      this.latCenter,
      this.lngCenter
    )

    return distance <= this.radius
  }
}

const geofences = [
  new RadialGeofence(40.7128, -74.0060, 10),
  new RadialGeofence(34.0522, -118.2437, 15),
  new RadialGeofence(900, 492, 120),
]

const main = async () => {

  const latCenter = await readNumber('Ingrese la latitud del centro: ')
  const lngCenter = await readNumber('Ingrese la longitud del centro: ')
  const radius = await readNumber('Ingrese el radio: ')

  const isItInAnyGeofence = geofences.some((geofence) =>
    geofence.verifyLocation(latCenter, lngCenter)
  )

  const resultElement = isItInAnyGeofence
    ? 'La unidad está dentro de la geocerca radial.'
    : 'La unidad está fuera de la geocerca radial.'

  print(resultElement)
}

module.exports = main
