<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Hola, como estas?</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="titlePresentacion"> Presentación</h1>

        <hr>

        <div class="imgPerfil">
          <img src="/public/foto.jpg" alt="Foto perfil">
        </div>
                
        <hr>

        <p>Anthony Urbaez - 2023-1394</p>
        
        <hr>

        <p>20231394@itla.edu.do</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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

#container a {
  text-decoration: none;
}

.titlePresentacion{
  font-size: 40px;
  margin-bottom: 20px;
}

.imgPerfil img{
  width: 200px;
}
</style>
