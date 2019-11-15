<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>Initiate</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Fix click / WCAG styling and hover styles</li>
      </ul>
  </b-alert>

</div>
```

<h3>Standard (Same Page)
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>Note: if using a system feature calls more than a few "pages" worth of data, it's highly recommended to pair
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
    >
      <template v-slot:prev-text><span class="text-danger"><i class="iconChevron iconHover text-dark fa-rotate-180"></i></span></template>
      <template v-slot:next-text><span class="text-warning"><i class="iconChevron iconHover text-dark"></i></span></template>
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
