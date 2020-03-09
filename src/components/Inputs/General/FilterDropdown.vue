<docs>


<h3>Filter Dropdown
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>This dropdown is typically used to filter search results, but could also be used to filter a set of row items, data set, or other grouping. It can also be shown without a button, as seen below. <span class="text-info">~Feature in progress, visibility icons will be clickable/toggleable~</span></p>

```js
<template>
  <div>
    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
      </template>
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
    </b-dropdown>

    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
        <b-badge variant="dark">+3</b-badge>
      </template>
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

    </b-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        // Close the menu and (by passing true) return focus to the toggle button
        this.$refs.dropdown.hide(true)
      }
    }
  }
</script>
```

</docs>
