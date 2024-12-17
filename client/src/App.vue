<script setup>

import { ref, onMounted } from 'vue'

import wyrService from "./services/wyrService.js";

import WouldYouRather from './components/WouldYouRather.vue'
// importing child components from WouldYouRather.vue and wyrService

// data for the question, and two answers
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// Will store the user's selection, either 'triangle house' or 'circle house'
const userSelection = ref('')

onMounted( () => {
  // this function returns a promise
  wyrService.getRandomWYR().then( (wyrData) => {
    // expect data to be something like this:
    // {"question":"Play any musical instrument or speak any language?",
    // "answer1":"Play any musical instrument",
    // "answer2":"Speak any language"}
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

// a function with userChoice as our parameter
// this function will serve to print a message for our user...
// telling user which checkbox they chose.
function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}!`
}

</script>

<template>

  <div id="app-component">

  <h1>Would You Rather...</h1>

    <!-- imported WouldYouRather component -->
    <!-- binding question prop to wyrQuestion-->
    <!-- answer-selected is an event -->
  <WouldYouRather
    v-bind:question = "wyrQuestion"
    v-bind:answer1 = "wyrAnswer1"
    v-bind:answer2 = "wyrAnswer2"
    v-on:answer-selected="updateUserSelection">
    </WouldYouRather>

  <!-- TODO show user's choice from the would-you-rather question -->
    <!-- if user makes a selection, this paragraph will appear-->
    <p v-if="userSelection">{{ userSelection }}</p>

  </div>

</template>

<style scoped>

#app-component {
  /* font-size: 3em */
  background-color: aqua;
  padding: 40px;
}

</style>
