<docs>

<h3>Top Nav</h3>
<p>The Top Nav is used explicitly to organize and display links with dedicated URL pages. It includes functions for grouped dropdown menus and badges to indicate notifications or numbers. Links can be left or right aligned.</p>

```js
<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      <img src="https://e-bydesign.ca/assets/triton-logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item href="#">Users</b-nav-item>
        <b-nav-item active href="#">Reports</b-nav-item>
        <b-nav-item-dropdown class="dropdownCustomToggle" text="Tools">
          <b-dropdown-item href="#">Log Comment</b-dropdown-item>
          <b-dropdown-item href="#">Create Request</b-dropdown-item>
          <b-dropdown-item href="#">New Form</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Queue <b-badge variant="light">4</b-badge></b-nav-item>
        <b-nav-item href="#">Admin</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown class="dropdownCustomToggle" text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- FOR STYLEGUIDE ONLY -->
  <div class="col-12 border border-medium p-7 mt-4"></div>
  <!-- FOR STYLEGUIDE ONLY -->

</div>

</template>
<script>
export default {
}
</script>
```


</docs>
