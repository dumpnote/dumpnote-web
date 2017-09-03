<template>
  <div id="app">
    <header>
      <div id="logo">
        <router-link to="/">
          <img src="./assets/logo.png" />
        </router-link>
      </div>
      <nav>
        <router-link to="/">
          <p>Home</p>
        </router-link>
        <router-link to="/dashboard">
          <p>Dashboard</p>
        </router-link>
        <img id="navbar-profile" v-if="authed" v-bind:src="avatar" />
        <router-link v-if="authed" to="/logout">
          <p>Log Out</p>
        </router-link>
        <router-link v-else to="/login">
          <p>Log In</p>
        </router-link>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <div id="copyright">
        &copy; 2017, Evan Geng
      </div>
      <div id="github">
        <a target="_blank" rel="noopener" href="https://github.com/dumpnote/dumpnote-web">
          <i id="github-icon" class="mdi mdi-github-circle"></i>
          <span id="github-link">View on GitHub</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  
  export default {
    name: 'app',
    computed: {
      ...mapState({
        avatar: s => s.auth.avatar,
      }),
      ...mapGetters([
        'authed',
      ]),
    },
  };
</script>

<style>
  * {
    margin: 0; padding: 0;
    box-sizing: border-box;
  }
  
  a {
    color: rgba(0, 0, 0, 0.44);
    text-decoration: none;
    transition: color 0.25s;
  }
  
  a:hover {
    color: rgba(0, 18, 36, 0.87);
  }
  
  #app {
    min-height: 100vh;
    position: relative;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: #2c3e50;
  }
  
  header {
    height: 128px;
    padding: 36px 64px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  
  #logo {
    flex: 1;
  }
  
  #logo img {
    max-height: 100%;
  }
  
  nav {
    text-align: right;
  }
  
  nav > a {
    height: 100%;
    margin: 0 24px;
    display: inline-flex;
    align-items: center;
    vertical-align: top;
    font-size: 12pt;
    white-space: nowrap;
  }
  
  #navbar-profile {
    height: 36px;
    margin: 10px 12px; margin-right: -16px;
    display: inline-block;
    border-radius: 50%;
  }
  
  footer {
    width: 100%;
    padding: 16px 76px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(50, 50, 50, 0.3), transparent 48%);
    color: #697a8c;
    font-size: 10pt;
  }
  
  #copyright, #github {
    display: inline-block;
    flex: none;
  }
  
  #github-link, #github-icon  {
    display: inline-block;
    vertical-align: middle;
  }
  
  #github-icon {
    margin-right: 3px;
    font-size: 12pt;
  }
</style>
