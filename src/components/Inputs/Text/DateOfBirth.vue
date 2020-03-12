<docs>

<h3>Date of Birth</h3>
<p>The DOB input is used to make filling out this type of data simpler and clearer. There is also a version of this specific to <a href="../../#Inputs/Forms">Forms</a>.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col cols="auto">
        <b-input-group prepend="Date of Birth">
           <b-input type="search" placeholder=" " v-mask="'##/##/####'"></b-input>
         </b-input-group>
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
