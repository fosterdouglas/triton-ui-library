<docs>

<h3>Vertical (Sub Nav)</h3>
<p>Not to be confused with the "Side Nav" group, this is exclusively used as a right-side sub nav menu. It provides the ability to have a large number of additional pages beneath the standard ```Nav > Side Menu``` structure.</p>

```js
<template>
  <div>
    <b-card class="tabsNav border border-medium" style="height: 190px;" no-body>
      <b-tabs class="p-3" pills card vertical end>
        <b-tab title="Option 1" active>
          <b-card-text><p>Tab contents 1</p></b-card-text>
        </b-tab>
        <b-tab title="Option 2">
          <b-card-text><p>Tab contents 2</p></b-card-text>
        </b-tab>
        <b-tab title="Option 3">
          <b-card-text><p>Tab contents 3</p></b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
```

</docs>
