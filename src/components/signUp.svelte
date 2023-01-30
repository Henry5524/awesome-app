<script>
  import ResultV1 from "./ResultV1.svelte";
  import ResultV2 from "./ResultV2.svelte";

  let form1 = {
    carBrand: "",
    zipCode: "",
  };

  let form2 = {
    firstName: "",
    lastName: "",
    carModel: "",
    firstRegistration: "",
  };

  let currentStep = 1;
  let errorMessage = "";
  let random = Math.floor(Math.random() * 2);

  function validateForm() {
    if (currentStep === 1) {
      if (!form1.carBrand || !form1.zipCode) {
        errorMessage = "Please fill out all fields in form 1.";
        return false;
      }
      if (!["Audi", "BMW", "Nissan"].includes(form1.carBrand)) {
        errorMessage =
          "Unfortunately, we do not service the selected car brand.";
        return false;
      }
      if (![65000, 66000, 67000, 68000].toString().includes(form1.zipCode)) {
        errorMessage =
          "Unfortunately, we do not service the selected zip code.";
        return false;
      }
    } else if (currentStep === 2) {
      if (
        !form2.firstName ||
        !form2.lastName ||
        !form2.carModel ||
        !form2.firstRegistration
      ) {
        errorMessage = "Please fill out all fields in form 2.";
        return false;
      }
    }
    return true;
  }

  function handleNext() {
    if (validateForm()) {
      currentStep++;
    } else {
      showErrorMessage();
    }
  }

  function handleBack() {
    currentStep--;
  }

  function showErrorMessage() {
    alert(errorMessage);
  }
</script>

<div>
  {#if currentStep === 1}
    <h1>Sign Up</h1>
    <form on:submit|preventDefault={handleNext}>
      <label for="carBrand">Car Brand:</label>
      <select id="car-brand" bind:value={form1.carBrand}>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Nissan">Nissan</option>
      </select>

      <label for="zipCode">Zip Code:</label>
      <input
        type="text"
        id="zipCode"
        bind:value={form1.zipCode}
        class:red={form1.zipCode.length < 5}
        class:green={form1.zipCode.length >= 5}
        placeholder="65000 - 68000"
      />

      <button type="submit">Next</button>
    </form>
  {:else if currentStep === 2}
    <h1>Sign Up</h1>
    <form on:submit|preventDefault={handleNext}>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" bind:value={form2.firstName} />

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" bind:value={form2.lastName} />

      <label for="carModel">Car Model:</label>
      <input type="text" id="carModel" bind:value={form2.carModel} />

      <label for="firstRegistration">First Registration:</label>
      <input
        type="text"
        id="firstRegistration"
        bind:value={form2.firstRegistration}
      />

      <div class="button__div">
        <button type="submit">Next</button>
        <button type="button" on:click={handleBack}>Back</button>
      </div>
    </form>
  {:else if random === 0}
    <ResultV1>
      <div>
        <p>First Name: {form2.firstName}</p>
        <p>Last Name: {form2.lastName}</p>
        <p>Car Brand: {form1.carBrand}</p>
        <p>Zip Code: {form1.zipCode}</p>
        <p>Car Model: {form2.carModel}</p>
        <p>First Registration: {form2.firstRegistration}</p>
      </div>
    </ResultV1>
  {:else if random === 1}
    <ResultV2>
      <div>
        <h1>Fullname: {form2.firstName} {form2.lastName}</h1>
        <h1>Car: {form1.carBrand} {form2.carModel}</h1>
        <p>Zip Code: {form1.zipCode}</p>
        <p>First Registration: {form2.firstRegistration}</p>
      </div>
    </ResultV2>
  {/if}
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 200px;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  form > label {
    font-size: 20px;
    font-weight: 500;
    margin: 7px 0;
  }

  form > select {
    padding: 5px 10px;
  }

  form > input {
    padding: 5px 10px;
    margin-bottom: 7px;
    outline: none;
  }

  p{
    text-align: center;
  }

  .button__div {
    display: flex;
    justify-content: space-evenly;
  }

  .button__div > button {
    padding: 5px 15px;
  }

  .red {
    outline: none;
    border-color: red;
  }

  .green {
    border-color: green;
  }
</style>
