<docs>

<h3>User Nav</h3>
<p>This is a potential future function, for more easily managing a user's account, and for those with access, switching between various security roles available.</p>

```js
<template>
<div>
  <b-navbar class="userNav" type="dark" variant="dark">
    <b-row class="w-100" align-h="between">
      <b-col sm="auto">
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <span>
                <i class="iconAccount text-white"></i>
                <em class="text-white">Eunice Hooper</em>
              </span>
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
              <span>
                <i class="iconZ text-white"></i>
                <em class="text-white" id="securityType">USER</em>
              </span>
            </template>
            <b-dropdown-item>SUPER ADMIN</b-dropdown-item>
            <b-dropdown-item>TRITON ADMIN</b-dropdown-item>
            <b-dropdown-item>TRITON SUPPORT T3</b-dropdown-item>
            <b-dropdown-item>TRITON SUPPORT T2</b-dropdown-item>
            <b-dropdown-item>TRITON SUPPORT T1</b-dropdown-item>
            <b-dropdown-item>USER [SHADOW]</b-dropdown-item>
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
