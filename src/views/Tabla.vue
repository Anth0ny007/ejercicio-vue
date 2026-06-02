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
        <h1 class="title">Tabla de Multiplicar</h1>
        
        <div class="cont-mult">
          <input type="number" v-model.number="num" placeholder="Ingrese un numero">
            
          <div class="btn-cont">
            <ion-buttons @click="calc" class="btn-calc">Ver tabla</ion-buttons>
          </div>
        </div>

        <div v-for="resultado in resultados" :key="resultado" >
          {{ resultado }}
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';

const num = ref<number | null >(null);
const resultados = ref<string[]>([]);

const calc = () => {

  if(num.value === null){
    resultados.value = ['Digite un número'];
    return;
  }

  resultados.value = [];

  for(let i = 0; i <= 13; i++){

    resultados.value.push(
      `${num.value} x ${i} = ${num.value * i}`
    );
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
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

#container a {
  text-decoration: none;
}

.cont-mult input{
  padding: 5px;
  margin: 0 10px;
  text-align: center;
}

.btn-cont{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.btn-cont .btn-calc{
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 5px;
  background: #447ce0;
}
</style>
