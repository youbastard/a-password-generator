<template>
  <main class="pass-gen">

    <form class="pass-gen__form" v-on:submit.prevent>

      <fieldset class="pass-gen__fieldset">
        <div class="pass-gen__optionlist">
          <div class="pass-gen__item" v-for="o in opts" :key="o.k">
            <div :is="o.type" v-bind="o" @[o.eventname]="handleEvent" />
          </div>
        </div>

        <div class="pass-gen__entropy">
          <span>bits of entropy: ~{{ entropy }}</span>
        </div>

        <div class="pass-gen__generate">
          <button class="pass-gen__button" @click="generate">Generate</button>
        </div>

      </fieldset>

    </form>

    <transition name="fade">
      <div class="pass-gen__output" v-if="pw" @click="copyPassword">
        <input :value="pw" />
        <SvgClipboard />
      </div>
    </transition>

    <TheToast>Password Copied to Clipboard</TheToast>

  </main>
</template>

<script src="./PassGenerator.js" />
<style src="./PassGenerator.scss" lang="scss" />
