<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bienvenido</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="titlePage">A sumar!</h1>
        
        <div class="panelCalc">
          <div class="n1">
            <input type="number" v-model.number="num1" placeholder="Ingrese un número">
          </div>

          <div class="n2">
            <input type="number" v-model.number="num2" placeholder="Ingrese un número">
          </div>

          <div class="cont-btnSum">
            <ion-buttons @click="sumar" class="btnSum">Sumar</ion-buttons>
          </div>
        </div>

        <div id="resultado">
          <span class="texto-result">El resultado es: </span> <span class="result">{{ resultado }}</span>
          
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import{ref} from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

// const num1 = ref();
// const num2 = ref();
const num1 = ref<number | null>(null);
const num2 = ref<number | null>(null);
const resultado = ref();

const sumar = () => {
  if(num1.value === null && num2.value === null){
    resultado.value = 'Ingrese los valores';
  }

  else if(num1.value! || num2.value!){
    resultado.value = num1.value! + num2.value!;
  }

  else{
    resultado.value = 'Ingrese los valores';
  }
};

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

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

.titlePage{
  font-size: 40px;
  margin-bottom: 40px;
}

.n1, .n2{
  margin-bottom: 20px;
}

.n1 input, .n2 input{
  padding: 5px;
  text-align: center;
}

.cont-btnSum{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.cont-btnSum .btnSum{
  padding: 5px 20px;
  background: #447ce0;
  border-radius: 5px;
  cursor: pointer;
}

#resultado .result{
  font-size: 18px;
}
</style>
