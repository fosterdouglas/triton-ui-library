<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Distribute components into separate files</li>
        <li class="alertListItem">- WCAG adjustments</li>
        <li class="alertListItem">- add underline for current selection?</li>
        <li class="alertListItem">- <del>Initiate</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>

</div>
```

<h3>Standard
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p></p>

```js
<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      <img src="https://e-bydesign.ca/assets/triton-logo.svg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Users</b-nav-item>
        <b-nav-item active href="#">Reports</b-nav-item>
        <b-nav-item-dropdown text="Tools">
          <b-dropdown-item href="#">Log Comment</b-dropdown-item>
          <b-dropdown-item href="#">Create Request</b-dropdown-item>
          <b-dropdown-item href="#">New Form</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Queue</b-nav-item>
        <b-nav-item href="#">Admin</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="col-12 border border-medium p-7 mt-4"></div>
</div>

</template>
<script>
export default {
}
</script>
```


</docs>
