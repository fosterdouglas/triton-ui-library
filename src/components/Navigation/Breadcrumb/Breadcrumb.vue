<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Add additional variations</b-li>
        <b-li class="alertListItem">- Distribute components into separate files and rename</b-li>
        <b-li class="alertListItem">- <del>Style properly</del> <i class="fas fa-check"></i</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Primary</h3>
<p></p>

```js
<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Sample Agency',
            href: '#'
          },
          {
            text: 'Sample Client',
            href: '#'
          },
          {
            text: 'Current Client or User',
            active: true
          }
        ]
      }
    }
  }
</script>
```

</docs>
