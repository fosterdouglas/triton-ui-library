<docs>

<h3>Search Box</h3>
<p>A highlighted text field specifically designed for search functionality. Supports a clear icon upon typing, and is often paired with a group Filtering options.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col>
       <b-input-group class="prependIcon">
          <template v-slot:prepend>
            <b-input-group-text >
              <i class="iconSearch far text-dark"></i>
            </b-input-group-text>
          </template>
          <b-form-input type="search" name="focus" required class="searchBox form-control" placeholder="Search for Users, Clients, or Agents . . .">
          </b-form-input>
        </b-input-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>

</template>
<script>
export default {

}
</script>
```

</docs>
