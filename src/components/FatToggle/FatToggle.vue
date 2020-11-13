<template>
  <section class="fatToggle" :data-enabled="val">
    <div class="fatToggle__label">{{ label }}</div>
    <div class="fatToggle__text">{{ text }}</div>
    <div class="fatToggle__toggle">
      <button class="fatToggle__button" @click="onClick">{{ toggleState }}</button>
    </div>
  </section>
</template>

<script src="./FatToggle.js" />
<style src="./FatToggle.scss" lang="scss" />
