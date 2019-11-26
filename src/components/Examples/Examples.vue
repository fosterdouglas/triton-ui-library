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
      </ul>
  </b-alert>

</div>
```

<h3>Default Page Layout</h3>
<p>...</p>

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
        <b-nav-item active href="#">Clients / Users</b-nav-item>
        <b-nav-item href="#">Reports</b-nav-item>
        <b-nav-item-dropdown class="dropdownCustomToggle" text="Tools">
          <b-dropdown-item href="#">Log Comment</b-dropdown-item>
          <b-dropdown-item href="#">Create Request</b-dropdown-item>
          <b-dropdown-item href="#">New Form</b-dropdown-item>
          <b-dropdown-item href="#">File Upload</b-dropdown-item>
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



  <div>

    <b-card class="sideNav" no-body>

      <b-breadcrumb style="position: absolute; left:275px;" :items="items"></b-breadcrumb>

      <b-tabs pills card vertical>

        <b-tab disabled>
          <template v-slot:title><span>General Settings</span></template>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Client Details</span></template>
          <b-card-text>Client Details</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>General Settings</span></template>
          <b-card-text>General Settings</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Reports & Invoicing</span></template>
          <b-card-text>Reports & Invoicing</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Transactions</span></template>
          <b-card-text>Transactions</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Packages</span></template>
          <b-card-text>Packages</b-card-text>
        </b-tab>

        <b-tab disabled>
          <template v-slot:title><span>Override Groups</span></template>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Services</span></template>
          <b-card-text>Services</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Content</span></template>
          <b-card-text>Content</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Email</span></template>
          <b-card-text>Email</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Other</span></template>
          <b-card-text>Other</b-card-text>
        </b-tab>

      </b-tabs>
    </b-card>

  </div>

  <footer class="row">
    <b-col class="text-left py-1">© Triton 2019, All Rights Reserved</b-col>
    <b-col class="text-right">
      <b-button
        :pressed="false"
        variant="outline-light"
        size="sm"
        class="btnThin"
        onclick="this.blur();"
        >
        <i></i>
        <div class="btnText">CONTACT</div>
        <i></i>
      </b-button>
    </b-col>
  </footer>

</div>

</template>
<script>
export default {
      data() {
        return {
          items: [
            {
              text: 'Bell Canada',
              href: '#'
            },
            {
              text: 'Success Factors',
              href: '#'
            },
            {
              text: 'Bell Canada - Ontario Sector',
              active: true
            }
          ]
        }
      }
}
</script>
```


</docs>
