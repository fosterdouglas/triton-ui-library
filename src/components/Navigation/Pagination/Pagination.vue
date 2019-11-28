<docs>

<h3>Same Page</h3>
<p>Note: if using a system feature that calls more than a few "pages" worth of data, it's highly recommended to pair
it with filtering functionality.</p>

```js
<template>
  <div class="overflow-auto">
    <b-pagination
    v-model="currentPage"
    :hide-goto-end-buttons="true"
    :limit="5"
    :total-rows="rows"
    :per-page="perPage"
    align="right"
    onclick="this.blur();"
    >
      <template v-slot:prev-text><i class="iconChevron iconHover fa-rotate-180"></i></template>
      <template v-slot:next-text><i class="iconChevron iconHover"></i></template>
    </b-pagination>

    <div class="col-12 border border-medium p-7 mb-4"></div>

    <b-pagination
    v-model="currentPage"
    :hide-goto-end-buttons="true"
    :limit="5"
    :total-rows="rows"
    :per-page="perPage"
    align="right"
    onclick="this.blur();"
    >
      <template v-slot:prev-text><i class="iconChevron iconHover fa-rotate-180"></i></template>
      <template v-slot:next-text><i class="iconChevron iconHover"></i></template>
    </b-pagination>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 25,
        currentPage: 1
      }
    }
  }
</script>
```

</docs>
