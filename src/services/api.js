export async function fetchVehicleData() {
  const response = await fetch('/api/vehicle-data');
  return response.json();
}

