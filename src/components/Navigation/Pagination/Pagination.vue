<docs>

<h3>Single View</h3>
<p>Pagination is used to browse a large set of data without leaving the current page. When data requires more than a few pages to display, it's highly recommended to pair it with filtering functionality found in <a href="../../#Overlays/Popovers">General</a> Inputs.</p>

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
      <template v-slot:prev-text><i class="iconCollapseExpand iconHover fa-rotate-180"></i></template>
      <template v-slot:next-text><i class="iconCollapseExpand iconHover"></i></template>
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
      <template v-slot:prev-text><i class="iconCollapseExpand iconHover fa-rotate-180"></i></template>
      <template v-slot:next-text><i class="iconCollapseExpand iconHover"></i></template>
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
