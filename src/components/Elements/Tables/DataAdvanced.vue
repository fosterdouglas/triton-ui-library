<docs>

<h3>Data (Advanced)</h3>
<p>An advanced, non-interactive, variable-width column table, used to display large amounts of data. Supports horizontal scrolling for larger data sets, and a stick header and sticky left column.</p>

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
        fields: [ { key: 'row', stickyColumn: true, isRowHeader: true }, 'first_name', 'middle_name', 'last_name', 'age', 'sex', 'location', 'occupation', 'marital status', 'experience', 'qualifications'],
        items: [
          { age: 40, row: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, row: 2, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, row: 3, first_name: 'Geneva', last_name: 'Wilson' }
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
