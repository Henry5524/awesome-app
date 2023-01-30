<script>
  let progress = 0;

  const interval = setInterval(() => {
    progress = Math.min(progress + 100 / 60, 100);
    if (progress === 100) clearInterval(interval);
  }, 100);
</script>

<div>
  <div class="progress-bar">
    <div class="progress" style={`width: ${progress}%`} />
  </div>
  <p>{Math.floor(progress)}%</p>
</div>

<style>
  .progress-bar {
    height: 20px;
    width: 100%;
    background-color: lightgray;
    border-radius: 5px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: rgb(1, 155, 37);
    transition: width 0.1s;
  }

  p {
    text-align: center;
  }
</style>
