<script setup>
import { ref } from 'vue'

// import watch to react to reactive data in our program

// props defined for our program. this will replace our usual
// return statements.

defineProps({
  question: String,
  answer1: String,
  answer2: String
})

// we are using emit to communicate child to parent components...
// such as changes in the child components state
const emit = defineEmits(['answer-selected'])

// empty reactive reference
const choice = ref(null)

function choiceMade() {
  // emit event to tell parent that user has made choice.
  emit('answer-selected', choice.value)
}

// the watch function will detect changes in "choice"...
// and change answer-selected to the changed choice value
// watch(choice, () => {
//   emit('answer-selected', choice.value)
// })

</script>

<template>

  <div id="wyr">
    <h2>Make your choice!</h2>

    <!-- displaying question prop -->
    <div id="question">
    <h3>{{ question }}</h3>
    </div>


    <div id="answers">
      <!-- must v-model to the choice variable -->
      <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1" v-on:change="choiceMade">
      <label for="answer-1"> {{ answer1 }}</label>

      <!-- the value attribute is the HTML value -->
      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2" v-on:change="choiceMade">
      <label for="answer-2"> {{ answer2 }}</label>
    </div>
  </div>

</template>

<style scoped>

/* background for wyr div */
#wyr {
  background-color: hotpink;
  padding: 20px;
}

#answers {
  padding: 10px;
}

</style>
