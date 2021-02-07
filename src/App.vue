<template>
  <div id="app">
    <Header/>
    <Home/>
    <div id="content" class="content">
     
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
#app {
  
}
</style>
