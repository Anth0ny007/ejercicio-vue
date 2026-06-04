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
        <h1 class="titlePage">Experiencia Personal</h1>

        <div class="cont-video">
          <iframe src="https://www.youtube.com/embed/7ujVWezbPmQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="texto">
          <p>Esta fue mi experiencia utilizando Ionic por primera vez</p>
        </div>
        
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

#container a {
  text-decoration: none;
}

.titlePage{
  margin-bottom: 40px;
  font-size: 40px;
}

.texto{
  margin: 30px;
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
}
</style>
