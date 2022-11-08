<template>
  <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>A Vue-js demo to save your contacts.</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row" style="width:100%">
  <div class="column">
    <div class="card">
      <img :src="img1" alt="Jane" style="height:400px">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button disabled class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img :src="img2" alt="Mike" style="height:400px">
      <div class="container">
        <h2>Rose Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Rose@example.com</p>
        <p><button disabled class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img :src="img3" alt="John" style="height:400px">
      <div class="container">
        <h2>Christina Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Christina@example.com</p>
        <p><button disabled class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import img1 from '../images/avatar1.jpg'
import img2 from '../images/avatar2.jpg'
import img3 from '../images/avatar3.jpg'

export default {
  name:'About',
  data:()=>({
    img1,img2,img3
})
}
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>