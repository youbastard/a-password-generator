<template>
  <section class="fatNumber">
    <div class="fatNumber__label">{{ val }}</div>
    <div class="fatNumber__text">{{ text }}</div>
    <div class="fatNumber__toggle">
      <button class="fatToggle__button" @click="onDec">-</button>
      <button class="fatToggle__button" @click="onInc">+</button>
    </div>
  </section>
</template>

<script src="./FatNumber.js" />
<style src="./FatNumber.scss" lang="scss" />
