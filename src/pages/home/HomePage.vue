<template>
  <main>
    <h1 v-text="$ml.get('title')"/>
  </main>
</template>

<script>
import './route'

export default {
  name: 'HomePage',
  uri: 'home'
}
</script>
