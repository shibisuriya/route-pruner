<template>
  <div class="dashboard">
    <main class="main">
      <div class="grid">
        <div class="card card-1">
          <h2 class="card-title">Card 1</h2>
          <p class="card-text">This is the first card</p>
        </div>

        <div class="card card-2">
          <h2 class="card-title">Card 2</h2>
          <p class="card-text">This is the second card</p>
        </div>

        <div class="card card-3">
          <h2 class="card-title">Card 3</h2>
          <p class="card-text">This is the third card</p>
        </div>

        <div class="card card-4">
          <h2 class="card-title">Card 4</h2>
          <p class="card-text">This is the fourth card</p>
        </div>
      </div>
      <div class="grid">
        <div class="card card-1">
          <h2 class="card-title">Card 1</h2>
          <p class="card-text">This is the first card</p>
        </div>

        <div class="card card-2">
          <h2 class="card-title">Card 2</h2>
          <p class="card-text">This is the second card</p>
        </div>

        <div class="card card-3">
          <h2 class="card-title">Card 3</h2>
          <p class="card-text">This is the third card</p>
        </div>

        <div class="card card-4">
          <h2 class="card-title">Card 4</h2>
          <p class="card-text">This is the fourth card</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DashboardComponent",
};
</script>

<style>
.dashboard {
  display: grid;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.card-title {
  margin: 0 0 1rem;
}

.card-text {
  margin: 0;
}

.card-1 {
  background-color: #f8d7da;
}

.card-2 {
  background-color: #d4edda;
}

.card-3 {
  background-color: #cce5ff;
}

.card-4 {
  background-color: #fff3cd;
}
</style>
