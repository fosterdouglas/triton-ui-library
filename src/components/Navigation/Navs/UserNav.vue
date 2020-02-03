<docs>

<h3>User Nav</h3>
<p>...</p>

```js
<template>
<div>
  <b-navbar class="supportNav" type="dark" variant="dark" sticky="true">
    <b-row class="w-100" align-h="between">
      <b-col sm="auto">
        <b-navbar-nav>
          <b-nav-item-dropdown class="">
            <template v-slot:button-content>
              <i class="iconUser text-white"></i>
              <em class="text-white">Eunice Hooper</em>
            </template>
            <b-dropdown-item href="#">Edit Profile</b-dropdown-item>
            <b-dropdown-item href="#">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-col>
      <b-col sm="auto">
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <i class="iconCrown text-white fas" style="visibility: hidden;"></i>
              <em class="text-white" id="securityType">USER</em>
            </template>
            <b-dropdown-item @click="superadmin">SUPER ADMIN</b-dropdown-item>
            <b-dropdown-item @click="tritonadmin">TRITON ADMIN</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T3</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T2</b-dropdown-item>
            <b-dropdown-item @click="support">TRITON SUPPORT T1</b-dropdown-item>
            <b-dropdown-item @click="user">USER [SHADOW]</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-col>
    </b-row>
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
