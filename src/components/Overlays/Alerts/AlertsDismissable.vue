<docs>

<h3>Dismissable</h3>
<p>These will typically appear at the top or bottom of a page after it's been submitted, either successfully or when returned with errors. It can also be used before a group of row elements to help give context or warn a user about something important to note.</p>

```js
<template>

  <div>

    <b-alert fade show dismissible variant="confirm" class="customAlert alertConfirm">
      <h4>{{ AlertConfirmTitle }}</h4>
      <hr/>
      <p class="mb-0">This alert will show up at the top of a successfully loaded page following a form.</p>
    </b-alert>

    <b-alert fade show dismissible variant="warning" class="customAlert alertWarning">
      <h4>{{ AlertWarningTitle }}</h4>
      <hr/>
      <p class="mb-0">This alert will show up beneath the form submit button in the case that an error with a text field has occured. It may contain details of the error:</p>
          <ul>
            <li class="alertListItem">Something went wrong.</li>
            <li class="alertListItem">Also, another thing went wrong.</li>
            <li class="alertListItem">Oops this one, too.</li>
          </ul>
    </b-alert>

    <b-alert fade show dismissible variant="mediumdark" class="customAlert alertMediumDark">
      <h4>{{ AlertInfoTitle }}</h4>
      <hr/>
      <p class="mb-0">This alert will show up at the top that needs an informational alert.</p>
    </b-alert>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        AlertConfirmTitle: 'Success!',
        AlertWarningTitle: 'Warning',
        AlertInfoTitle: 'Information'
      }
    }
  }
</script>
```

</docs>
