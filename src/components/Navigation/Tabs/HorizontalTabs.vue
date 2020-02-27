<docs>

<h3>Horizontal</h3>
<p>This tabbed system is for helping reduce clutter and for additional organization. It should only be used if the amount of tabs is an unchanging number, and they fit on a single line.</p>

```js
<template>
  <div>
    <b-card class="tabsNav" no-body>
      <b-tabs card>
        <b-tab title="Option 1" active>
          <b-card-text class="p-3"><p>Tab contents 1</p></b-card-text>
        </b-tab>
        <b-tab title="Option 2">
          <b-card-text class="p-3"><p>Tab contents 2</p></b-card-text>
        </b-tab>
        <b-tab title="Option 3">
          <b-card-text class="p-3"><p>Tab contents 3</p></b-card-text>
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
