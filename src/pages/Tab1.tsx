import React, { useState } from "react";
import { IonButton, IonInput, IonLabel, IonItem, IonContent, IonPage } from "@ionic/react"; // Importar componentes de Ionic
import fetchPrediction from "./api"; // Importamos la función de api.js
import './Tab1.css'; // Importa el archivo CSS

// Define the type for the form data
interface FormData {
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

const PredictionComponent: React.FC = () => {
  // Use the FormData type for the state
  const [formData, setFormData] = useState<FormData>({
    n_samples: 10,
    luces_on: 1,
    televisor_on: 1,
    refrigerador_on: 1,
    computadora_on: 1,
    modem_on: 1,
    telefono_on: 1,
    microondas_on: 1,
    aire_acondicionado_on: 1,
    lavadora_on: 1,
    ventilador_on: 1,
  });

  const [prediction, setPrediction] = useState<any>(null);

  // Cambiar el tipo del evento al tipo adecuado de Ionic
  const handleChange = (e: CustomEvent) => {
    const { name, value } = e.detail; // Accedemos a 'name' y 'value' desde 'e.detail'
    setFormData((prevData) => ({
      ...prevData,
      [name]: Number(value), // Convertimos el valor a número
    }));
  };

  const handleSubmit = async () => {
    const updatedFormData = { ...formData }; // No sobrescribas n_samples
    const result = await fetchPrediction(updatedFormData);
    const flatResult = result.map((item: number[]) => item[0]);
    setPrediction(flatResult);
  };

  return (
    <IonPage>
      <IonContent className="page-container">
        <h2>Predecir Consumo Eléctrico</h2>

        {/* Inputs para los datos del formulario */}
        <IonItem>
          <IonLabel>Número de muestras:</IonLabel>
          <IonInput
            type="number"
            id="n_samples"
            name="n_samples"
            value={formData.n_samples}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Luces:</IonLabel>
          <IonInput
            type="number"
            id="luces_on"
            name="luces_on"
            value={formData.luces_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Televisor:</IonLabel>
          <IonInput
            type="number"
            id="televisor_on"
            name="televisor_on"
            value={formData.televisor_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Refrigerador:</IonLabel>
          <IonInput
            type="number"
            id="refrigerador_on"
            name="refrigerador_on"
            value={formData.refrigerador_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Computadora:</IonLabel>
          <IonInput
            type="number"
            id="computadora_on"
            name="computadora_on"
            value={formData.computadora_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Modem:</IonLabel>
          <IonInput
            type="number"
            id="modem_on"
            name="modem_on"
            value={formData.modem_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Teléfono:</IonLabel>
          <IonInput
            type="number"
            id="telefono_on"
            name="telefono_on"
            value={formData.telefono_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Microondas:</IonLabel>
          <IonInput
            type="number"
            id="microondas_on"
            name="microondas_on"
            value={formData.microondas_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Aire Acondicionado:</IonLabel>
          <IonInput
            type="number"
            id="aire_acondicionado_on"
            name="aire_acondicionado_on"
            value={formData.aire_acondicionado_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Lavadora:</IonLabel>
          <IonInput
            type="number"
            id="lavadora_on"
            name="lavadora_on"
            value={formData.lavadora_on}
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Ventilador:</IonLabel>
          <IonInput
            type="number"
            id="ventilador_on"
            name="ventilador_on"
            value={formData.ventilador_on}
            onIonChange={handleChange}
          />
        </IonItem>

        {/* Botón para enviar los datos */}
        <IonButton expand="full" onClick={handleSubmit}>
          Obtener Predicción
        </IonButton>

        {prediction && (
          <div className="result-container">
            <h3>Predicción de Consumo Eléctrico:</h3>
            <ul>
              {prediction.map((value: number, index: number) => (
                <li key={index}>Muestra {index + 1}: {value.toFixed(4)}</li>
              ))}
            </ul>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PredictionComponent;
