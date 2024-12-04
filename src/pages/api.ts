import axios from "axios";

// Define el tipo para el parámetro de entrada
interface DeviceInput {
  n_samples: number;
  luces_on: number;
  televisor_on: number;
  refrigerador_on: number;
  computadora_on: number;
  modem_on: number;
  telefono_on: number;
  microondas_on: number;
  aire_acondicionado_on: number;
  lavadora_on: number;
  ventilador_on: number;
}

const fetchPrediction = async (data: DeviceInput) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/predict/", data);

    // Verifica que la respuesta tenga la estructura esperada
    console.log(response.data); // Verifica la respuesta completa en la consola

    if (response.data && response.data.prediction) {
      return response.data.prediction; // Devuelve la predicción de la API
    } else {
      console.error("La respuesta no contiene 'prediction'.");
      return null;
    }
  } catch (error) {
    // Maneja los errores y muestra información más detallada
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.message);
    } else {
      console.error("Error desconocido:", error);
    }
    return null; // Si ocurre un error, devuelve null
  }
};

export default fetchPrediction;
