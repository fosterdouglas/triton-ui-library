<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">Tables are an efficient way to organize a large amount of read-only data. They are best paired with a <a href="../../#Navigation/Pagination">Pagination</a> component if the table has more than 10 rows. <b>Important:</b> Table data is non-interactive and these are best used only for displaying data.</p>
<br/>
</div>
```

<h3>Data</h3>
<p>A non-interactive and fixed table, used to a small amount of data, or for a large set of data with limited columns required.</p>

```js
<template>
  <div>
    <b-table
      :outlined="true"
      :striped="false"
      :fixed="false"
      :no-border-collapse="true"
      :no-select-on-click="false"
      :items="items"
      :fields="fields"
      :sticky-header="true"
      responsive
    >
      <template v-slot:head()="scope">
        <div class="text-nowrap">
          {{ scope.label }}
        </div>
      </template>
  </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['first_name', 'middle_name', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false
      }
    }
  }
</script>
```

</docs>
