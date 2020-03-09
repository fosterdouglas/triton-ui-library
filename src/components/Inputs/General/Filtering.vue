<docs>

<h3>Filtering</h3>
<p>Typically attached to a Search Box, this group of buttons is used to filter a specific data set. Uses Toggles and Support Text, and may support a <span class="text-info">~clear filters button~</span> in the future.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Clients</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Agents</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Users</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
}
</script>
```

</docs>
