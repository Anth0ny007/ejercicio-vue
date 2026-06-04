<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="titlePage">Traductor de número a letras</h1>
        
        <div class="content">
          <input type="number" v-model.number="digito" placeholder="Introduzca un número">

          <div class="cont-btn">
            <ion-buttons @click="convertir" class="btn">Convertir</ion-buttons>
          </div>

          <div class="result-trad">
            <p>{{ result }}</p>
          </div>          
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {ref} from 'vue';

const digito = ref<number | null>(null);
const result = ref();

const convertir = () => {
  if(digito.value === null || digito.value < 1 || digito.value > 1000){
    result.value = 'Ingrese un numero de 1 al 1000';
    return;
  }

  result.value = convNumero(digito.value);
};

function convNumero(num: number): string{
  
  const unidades = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'
  ];

  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve'];

  if(num === 1000) return 'mil';
  if(num === 100) return 'cien';

  let texto = '';

  const centena = Math.floor(num / 100);
  const resto = num % 100;

  if(centena > 0){
    texto += centenas[centena] + " ";
  }

  if (resto < 10) {
    texto += unidades[resto];
  }
  
  else if (resto < 20) {
    texto += especiales[resto - 10];
  }

  else if (resto < 30) {
    if (resto === 20) {
      texto += "veinte";
    } else {
      texto += "veinti" + unidades[resto - 20];
    }
  }

  else {
    const dec = Math.floor(resto / 10);
    const uni = resto % 10;

    texto += decenas[dec];

    if (uni > 0) {
      texto += " y " + unidades[uni];
    }
  }

  return texto.trim();
}

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

.titlePage{
  margin-bottom: 40px;
  font-size: 40px;
}

.content input{
  padding: 5px;
  text-align: center;
}

.cont-btn {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.cont-btn .btn{
  background: #447ce0;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.result-trad{
  margin-top: 20px;
}

.result-trad p::first-letter{
  text-transform: uppercase;
}
</style>
